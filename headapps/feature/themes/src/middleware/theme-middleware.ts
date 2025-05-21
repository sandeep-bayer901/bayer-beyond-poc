import { NextRequest, NextResponse } from 'next/server';
import { MiddlewareBase, MiddlewareBaseConfig } from '@sitecore-content-sdk/nextjs/middleware';
import { SITE_KEY } from '@sitecore-content-sdk/core/site';
import { PREVIEW_KEY } from '@sitecore-content-sdk/core/editing';
import { SitecoreConfig } from '@sitecore-content-sdk/core/config';
import { debug } from '@sitecore-content-sdk/core';

export const THEME_KEY = 'catalyst_theme';

export type CookieAttributes = {
    /**
     * the Secure attribute of the site cookie
     */
    secure: boolean;
    /**
     * the HttpOnly attribute of the site cookie
     */
    httpOnly: boolean;
    /**
     * the SameSite attribute of the site cookie
     */
    sameSite?: true | false | 'lax' | 'strict' | 'none' | undefined;
  };

export type ThemeMiddlewareConfig = MiddlewareBaseConfig & SitecoreConfig['multisite'] & {
    themes: { name: string; theme: string }[];
  };

export class ThemeMiddleware extends MiddlewareBase {
  constructor(protected config: ThemeMiddlewareConfig) {
    super(config);
  }

  handle = async (req: NextRequest, res: NextResponse): Promise<NextResponse> => {
    if (!this.config.enabled) {
      debug.common('skipped (themes middleware is disabled globally)');
      return res;
    }

    try {
      debug.common('Entering Themes Middleware');
      debug.common('Middleware: Site KEY', SITE_KEY);

      let siteName: string;
      const hostname = this.getHostHeader(req) || this.defaultHostname;
      const isSitecorePreview = req.cookies.get(PREVIEW_KEY)?.value;

        if (isSitecorePreview) {
          // This cookie is required to be set in the Sitecore Preview mode
          siteName = req.cookies.get(SITE_KEY)?.value!;
        } else {
          // Site name can be forced by query string parameter or cookie
          siteName =
            req.nextUrl.searchParams.get(SITE_KEY) ||
            (this.config.useCookieResolution &&
              this.config.useCookieResolution(req) &&
              req.cookies.get(SITE_KEY)?.value) ||
            this.siteResolver.getByHost(hostname).name;
        }

      debug.common('Middleware: Site Name', siteName);

      if (!siteName) {
        return res;
      }

      const theme = this.config.themes.find((t) => t.name === siteName)?.theme || 'base';
      debug.common('Middleware: theme', theme);

      if (!theme) {
          console.warn(`ThemeMiddleware: No theme found for site '${siteName}'.`);
          return res;
        }

      // default site cookie attributes
      const defaultCookieAttributes = {
          secure: false, //secure: process.env.NODE_ENV === "production", // Only use secure in production
          httpOnly: false,
          sameSite: 'lax',
          path: "/", // Ensure cookie is available on all paths
          maxAge: 60 * 60 * 24 * 30, // 30 days
        } as CookieAttributes;

      // Add theme to a cookie
      res.cookies.set(THEME_KEY, theme, defaultCookieAttributes);

      // Log for debugging
      debug.common("Middleware: Set theme cookie", theme, defaultCookieAttributes)
      return res;
    } catch (error) {
      console.log('Theme middleware failed:');
      console.log(error);
      return res;
    }
  };

  protected disabled(req: NextRequest, res: NextResponse): boolean | undefined {
    // ignore files
    return req.nextUrl.pathname.includes('.') || super.disabled(req, res);
  }
}