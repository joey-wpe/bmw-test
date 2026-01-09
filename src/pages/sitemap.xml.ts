import { getSitemapProps } from "@faustwp/core";
import type { GetServerSidePropsContext } from "next";

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Sitemap() {}

export function getServerSideProps(ctx: GetServerSidePropsContext) {
  return getSitemapProps(ctx, {
    sitemapIndexPath: "sitemap_index.xml",
    frontendUrl: process.env.NEXT_PUBLIC_SITE_URL,
  });
}
