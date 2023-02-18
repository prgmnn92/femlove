import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2023-02-17",
  userCdn: false,
};

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// export const useCurrentUser = createCurrentUserHook(config);
