import { useContext } from "react";

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

import Button from "@/components/Button";
import Video from "@/components/Video";
import { ModalContext } from "@/ModalContext";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2023-03-13",
  useCdn: true,
};

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

const BlockCTA = ({ value }) => {
  const openModal = useContext(ModalContext);
  return (
    <Button className={"bg-f-main text-white"} onClick={openModal}>
      {value.myField}
    </Button>
  );
};

// Barebones lazy-loaded image component
const ImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  const { maxWidth } = value;
  return (
    <div className={`max-w-[${maxWidth}px]`}>
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
        className="max-w-[350px] md:max-w-[450px] !w-[450px]"
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? "inline-block" : "block",

          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
    </div>
  );
};

const LinkableHeader = ({ children, value }) => {
  // `value` is the single Portable Text block of this header
  const slug = slugify(toPlainText(value));
  return (
    <h2
      style={{ scrollMarginTop: "7rem" }}
      className="pt-12 mb-6 text-xl font-bold lg:mb-12 lg:text-2xl"
      id={slug}
    >
      {children}
    </h2>
  );
};

const components = {
  block: {
    normal: (props) => <p className="mb-6 lg:mb-8">{props.children}</p>,
    h2: LinkableHeader,
    h3: ({ children }) => (
      <h3 className="mb-4 text-lg font-bold lg:mb-8">{children}</h3>
    ),
    h4: ({ children }) => <h4>{children}</h4>,
    h5: ({ children }) => <h5>{children}</h5>,
    p: (props) => <p>{props.children}</p>,
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
    blockCTA: BlockCTA,
    internalLink: (props) => {
      return (
        <p>
          <a
            // href={"#" + props.value.id}
            onClick={() =>
              document
                .getElementById(slugify(props.value.id))
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            {props.value.value}
          </a>
        </p>
      );
    },
    videoBlogPost: (props) => {
      return <Video {...props} />;
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

export const previewClient = createClient({
  ...config,
  useCdn: false,
});

export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`);
}

if (!projectId | !dataset) {
  throw new Error(
    `Missing projectId or dataset. Check your sanity.json or .env`
  );
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
