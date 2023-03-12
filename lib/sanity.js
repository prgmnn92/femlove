import {
  PortableText as PortableTextComponent,
  toPlainText,
} from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import createImageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { createClient } from "next-sanity";
import { definePreview } from "next-sanity/preview";
import slugify from "slugify";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2023-02-17",
  userCdn: true,
};

export const usePreview = definePreview(config); //TODO: implement definePreview -> https://github.com/sanity-io/next-sanity#createpreviewsubscriptionhook-is-replaced-with-definepreview

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Barebones lazy-loaded image component
const ImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <Image
      src={urlFor()
        .image(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      loading="lazy"
      width={width}
      height={height}
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

const LinkableHeader = ({ children, value }) => {
  // `value` is the single Portable Text block of this header
  const slug = slugify(toPlainText(value));
  return (
    <h2 style={{ scrollMarginTop: "7rem" }} id={slug}>
      {children}
    </h2>
  );
};

const components = {
  block: {
    normal: (props) => <p style={{ paddingBottom: "8px" }}>{props.children}</p>,
    h2: LinkableHeader,
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <li
        style={{
          listStyleType: "disc",
          marginLeft: "1.25rem",
          paddingBottom: ".25rem",
        }}
      >
        {children}
      </li>
    ),

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
  types: {
    image: ImageComponent,
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    internalLink: (props) => {
      return (
        <p>
          <a
            // href={"#" + props.value.id}
            onClick={() =>
              document
                .getElementById(props.value.id)
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            {props.value.value}
          </a>
        </p>
      );
    },
  },
  marks: {
    center: (props) => <div className="text-center">{props.children}</div>,
    highlight: (props) => (
      <span className="font-bold text-brand-primary">{props.children}</span>
    ),
    link: (props) => (
      <a
        href={props?.value?.href}
        className="text-blue-400"
        target="_blank"
        rel="noreferrer"
      >
        {props.children}
      </a>
    ),
  },
};
// Set up Portable Text serialization
export const PortableText = (props) => {
  return <PortableTextComponent components={components} {...props} />;
};

// export const useCurrentUser = createCurrentUserHook(config);

export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
