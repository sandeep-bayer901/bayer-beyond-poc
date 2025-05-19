import React, { useState } from "react";
import {
  Link,
  Field,
  NextImage,
  ImageField,
  LinkField,
  ComponentRendering,
  ComponentParams,
  TextField
} from '@sitecore-content-sdk/nextjs';
import { IconAdd, IconSubtract } from "@catalyst/foundation-icons/";

export type LinkListData = {
  fields: {
    Title: Field<string>;
    LinkList: Array<LinkListItem>;
  };
};

export type LinkListItem = {
  id?: string;
  value?: any;
  fields: {
    Link: LinkField;
  };
};

interface ComponentProps {
    rendering: ComponentRendering & { params: ComponentParams };
    params: ComponentParams;
  }

export type LinkListProps = ComponentProps & {
  fields: {
    DarkMode?: boolean;
    Reverse?: boolean;
    Title?: TextField;
    Image?: ImageField;
    LinkList?: Array<LinkListData>;
  };
};

export const LinkList = ({ fields }: LinkListProps): JSX.Element => {
  const [indexOpen, setIndexOpen] = useState(0);

  const toggleLinkList = (
    index: React.SetStateAction<number>,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    if (index === indexOpen) {
      setIndexOpen(-1);
      return;
    }
    setIndexOpen(index);
  };

  return (
    <section className={`link-list ${fields.DarkMode ? "-darkMode" : ""}`}>
      {fields.Title && (
        <h3 className="link-list--title">{fields.Title.value}</h3>
      )}
      
      <div className="link-list--row">
        <div
          className={`link-list--col -image ${
            fields.Reverse ? "-reverse" : ""
          }`}
        >
          <NextImage
            field={fields.Image}
            className="link-list--image"
            layout="responsive"
          />
        </div>
        {fields.LinkList &&
          fields.LinkList?.map((list, idx) => (
            <div
              className="link-list--col"
              data-open={idx === indexOpen}
              key={list.fields.Title?.value}
            >
              <button
                className="link-list--sectionTitle"
                onClick={(event) => toggleLinkList(idx, event)}
              >
                <span>{list.fields.Title?.value}</span>
                <span className="link-list--icon">
                  {idx === indexOpen ? <IconSubtract /> : <IconAdd />}
                </span>
              </button>
              <div className="link-list--list">
                <div>
                  {list &&
                    list.fields.LinkList &&
                    list.fields.LinkList?.map((link) => (
                      <Link
                        field={link.fields?.Link}
                        className="link-list--link"
                        key={`link-list-link-${link.fields?.Link?.value?.text}`}
                      />
                    ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
