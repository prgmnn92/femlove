import sanityClient from "@lib/sanity";
import { useNextSanityImage } from "next-sanity-image";

export default function GetImage(image, CustomImageBuilder = null) {
  const imageProps = useNextSanityImage(sanityClient, image, {
    imageBuilder: CustomImageBuilder,
  });
  if (!image || !image.asset) {
    return null;
  }
  return imageProps;
}
