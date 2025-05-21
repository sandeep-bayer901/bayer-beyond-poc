import {
  ComponentParams, 
  ComponentRendering,
  Field,
  ImageField,
  LinkField,
  FileField,
  NextImage,
  TextField,
} from '@sitecore-content-sdk/nextjs';
import { IconArrowRight } from "@catalyst/foundation-icons";
import { Button } from "@catalyst/foundation-global";
import React from 'react';

interface ComponentProps {
    rendering: ComponentRendering & { params: ComponentParams };
    params: ComponentParams;
  }

export type HeroBannerProps = ComponentProps & {
  fields: {
    Title?: TextField;
    Subtitle?: TextField;
    Button?: LinkField;
    Image?: ImageField;
    Video?: FileField;
  };
};

export const HeroBanner = ({ fields }: HeroBannerProps): JSX.Element => {
  let background;

  if (fields.Video?.value) {
    background = (
      <video
        playsInline
        autoPlay
        loop
        muted
        poster={fields.Image?.value?.src}
      >
        <source src="/windex_light-is-life.mp4" type="video/mp4" />
      </video>
    );
  } else {
    background = (
      <NextImage field={fields.Image} layout="responsive" />
    );
  }

  return (
    <section className={`hero-banner `}>
      <p>Hero Banner</p>
      <div className="hero-banner--background">{background}</div>
      <div className="hero-banner--content">
        <div className="hero-banner--container">
          <h1 className="hero-banner--title">{fields.Title?.value}</h1>
          <p className="hero-banner--subtitle">{fields.Subtitle?.value}</p>
          {fields.Button && (
            <Button
              key={`hero-banner-button--${fields.Button.value?.text}`}
              url={fields.Button.value?.href}
              querystring={fields.Button.value?.querystring}
              variant="primary"
              size="md"
              className="hero-banner--button"
              target={fields.Button.value?.target}
            >
              {fields.Button.value?.text || fields.Button.value?.href}
              <IconArrowRight />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};