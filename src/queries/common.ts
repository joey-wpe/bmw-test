import { gql } from "@/__generated__";

export const ImageFragment = gql(`
  fragment Image on MediaItem {
    sourceUrl
    srcSet
    sizes
    altText
  }
`);

export const LinkFragment = gql(`
  fragment Link on AcfLink {
    target
    title
    url
  }
`);
