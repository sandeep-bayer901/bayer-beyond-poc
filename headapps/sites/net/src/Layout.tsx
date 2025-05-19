/**
 * This Layout is needed for Starter Kit.
 */
'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  Placeholder,
  LayoutServiceData,
  Field,
  DesignLibrary,
  RenderingType,
} from '@sitecore-content-sdk/nextjs';
import Scripts from 'src/Scripts';
import SitecoreStyles from 'src/components/SitecoreStyles';

// Catalyst
import { ThemeProvider, THEME_KEY } from '@catalyst/feature-themes';

interface LayoutProps {
  layoutData: LayoutServiceData;
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
}

const Layout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const fields = route?.fields as RouteFields;
  const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';
  // Catalyst
  const [theme, setTheme] = useState('base');

  useEffect(() => {
    const themeCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith(THEME_KEY + '='))
      ?.split('=')[1];

    setTheme(themeCookie || 'base');
  }, []);

  console.log('This site is using the following theme: ' + theme);

  return (
    <>
      <Scripts />
      <SitecoreStyles layoutData={layoutData} />
      <Head>
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Set the Theme based on the tokens */}
      <ThemeProvider site={theme} />

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing}>
        {layoutData.sitecore.context.renderingType === RenderingType.Component ? (
          <DesignLibrary {...layoutData} />
        ) : (
          <>
            <header>
              <div id="header">
                {route && <Placeholder name="headless-header" rendering={route} />}
              </div>
            </header>
            <main>
              <div id="content">
                {route && <Placeholder name="headless-main" rendering={route} />}
              </div>
            </main>
            <footer>
              <div id="footer">
                {route && <Placeholder name="headless-footer" rendering={route} />}
              </div>
            </footer>
          </>
        )}
      </div>
    </>
  );
};

export default Layout;
