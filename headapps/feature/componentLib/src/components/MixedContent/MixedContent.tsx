import React from "react";
import {
  Text,
  Field,
  ImageField,
  NextImage,
  ComponentParams, 
  ComponentRendering,
  LinkField
} from '@sitecore-content-sdk/nextjs';
import { Button } from '@catalyst/foundation-global';
import { IconArrowRight } from '@catalyst/foundation-icons';

interface ComponentProps {
    rendering: ComponentRendering & { params: ComponentParams };
    params: ComponentParams;
  }

export type LinkListItem = {
  id?: string;
  value?: any;
  fields: {
    Link: LinkField;
  };
};

export type MixedContentProps = ComponentProps & {
  params: { [key: string]: string };
  fields: {
    BackgroundColor?: string;
    Title: Field<string>;
    Subtitle: Field<string>;
    Image?: ImageField;
    Buttons?: Array<LinkListItem>;
  };
};

export const MixedContentDefaultComponent = (props: MixedContentProps): JSX.Element => (
  <section
    className={`mixed-content ${props.params.styles}`}
  >
    <div
      className="mixed-content--container">
        <div className="mixed-content--image-wrapper">
          <NextImage layout="intrinsic" />
        </div>
      <div className="mixed-content--content">
        <h2 className="mixed-content--title">{props.fields?.Title?.value}</h2>
        <p className="mixed-content--text">{props.fields?.Subtitle?.value}</p>
        <div className="mixed-content--buttons">
          <Button
                variant="primary"
                size="lg"
                className="mixed-content--button"
              >
            </Button>
        </div>
      </div>
    </div>
  </section>
);

export const DefaultVariant = (props: MixedContentProps): JSX.Element => {
  if (props.fields) {
    return (
      <section
        className={`mixed-content `}
      >
        <div
          className="mixed-content--container"
          style={{
            backgroundColor: props.fields.BackgroundColor || undefined,
          }}
        >
          {props.fields.Image && (
            <div className="mixed-content--image-wrapper">
              <NextImage
                field={props.fields.Image}
                className="mixed-content--image"
                layout="intrinsic"
              />
            </div>
          )}
          <div className="mixed-content--content">
            <h2 className="mixed-content--title">{props.fields.Title?.value}</h2>
            <p className="mixed-content--text">{props.fields.Subtitle?.value}</p>
            <div className="mixed-content--buttons">
              {props.fields.Buttons &&
                props.fields.Buttons.map((button) => (
                  <Button
                    key={`mixed-content-button--${button.fields.Link.value?.text}`}
                    url={button.fields.Link.value?.href}
                    querystring={button.fields.Link.value?.querystring}
                    variant="primary"
                    size="lg"
                    className="mixed-content--button"
                    target={button.fields.Link.value?.target}
                  >
                    {button.fields.Link.value?.text ||
                      button.fields.Link.value?.href}
                    <IconArrowRight />
                  </Button>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <MixedContentDefaultComponent {...props} />;
};

export const InvertedVariant = (props: MixedContentProps): JSX.Element => {
  if (props.fields) {
    return (
      <section
        className={`mixed-content -inverted`}
      >
        <div
          className="mixed-content--container"
          style={{
            backgroundColor: props.fields.BackgroundColor || undefined,
          }}
        >
          {props.fields.Image && (
            <div className="mixed-content--image-wrapper">
              <NextImage
                field={props.fields.Image}
                className="mixed-content--image"
                layout="intrinsic"

              />
            </div>
          )}
          <div className="mixed-content--content">
            <h2 className="mixed-content--title">{props.fields.Title?.value}</h2>
            <p className="mixed-content--text">{props.fields.Subtitle?.value}</p>
            <div className="mixed-content--buttons">
              {props.fields.Buttons &&
                props.fields.Buttons.map((button) => (
                  <Button
                    key={`mixed-content-button--${button.fields.Link.value?.text}`}
                    url={button.fields.Link.value?.href}
                    querystring={button.fields.Link.value?.querystring}
                    variant="primary"
                    size="lg"
                    className="mixed-content--button"
                    target={button.fields.Link.value?.target}
                  >
                    {button.fields.Link.value?.text ||
                      button.fields.Link.value?.href}
                    <IconArrowRight />
                  </Button>
                ))}
            </div>
          </div>
        </div>
      </section>
      );
  }

  return <MixedContentDefaultComponent {...props} />;
};
