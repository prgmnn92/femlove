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
import { sourceSerif } from "@/fonts";
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
  const { setOpenModal } = useContext(ModalContext);
  return (
    <Button
      className={"bg-f-main text-white"}
      onClick={() => setOpenModal(true)}
    >
      {value.ButtonText}
    </Button>
  );
};

// Barebones lazy-loaded image component
const ImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  const { maxWidth } = value;
  return (
    <div
      className={`max-w-[${
        maxWidth ? maxWidth + "px" : "100%"
      }] overflow-hidden rounded-[14px]`}
      style={{
        marginBottom: "16px",
        marginTop: "16px",
      }}
    >
      <Image
        src={urlFor()
          .image(value)
          .width(isInline ? 100 : 800)
          // .fit("max")
          .auto("format")
          .url()}
        alt={value.alt || " "}
        loading="lazy"
        width={width}
        height={height}
        className="max-w-[350px] md:max-w-[450px] rounded-[14px] mx-auto max-h-[450px] h-[450px]"
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? "inline-block" : "block",
          maxHeight: "550px",
          maxWidth: "400px",
          objectFit: "cover",
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
      className="mt-10 mb-2 text-xl font-light lg:mb-4 lg:text-2xl"
      id={slug}
    >
      {children}
    </h2>
  );
};

const components = {
  block: {
    normal: (props) => (
      <p className="mb-4 text-sm leading-relaxed lg:text-base">
        {props.children}
      </p>
    ),
    h2: LinkableHeader,
    h3: ({ children }) => (
      <h3
        style={sourceSerif.style}
        className="mt-8 mb-2 text-lg font-light lg:mb-4"
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => <h4 style={sourceSerif.style}>{children}</h4>,
    h5: ({ children }) => <h5 style={sourceSerif.style}>{children}</h5>,
    blockquote: (props) => (
      <blockquote
        className="text-sm text-white lg:text-base bg-f-brown rounded-[14px] text-center leading-relaxed font-semibold italic"
        style={{ padding: "32px" }}
      >
        {props.children}
      </blockquote>
    ),
    p: (props) => (
      <p className="text-sm leading-relaxed lg:text-base">{props.children}</p>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <ul className="text-sm leading-relaxed mt-xl lg:text-base">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="text-sm leading-relaxed mt-lg lg:text-base">{children}</ol>
    ),

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <li
        className="text-sm leading-relaxed lg:text-base"
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
        <p className="text-sm leading-relaxed lg:text-base">
          <a
            // href={"#" + props.value.id}
            className="underline cursor-pointer"
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
        className="text-sm leading-relaxed text-blue-500 lg:text-base"
        target="_blank"
        rel="noreferrer"
        style={{ color: "rgb(59, 130, 246)" }}
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
