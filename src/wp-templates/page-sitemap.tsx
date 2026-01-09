import {
  GetFooterMenuQuery,
  GetHeaderMenuQuery,
  GetPageQuery,
  GetSiteDataQuery,
} from "@/__generated__/graphql";
import { Footer, Header } from "@/components/layout";
import { Sitemap } from "@/components/layout/sitemap";
import { Loader } from "@/components/ui";
import { FOOTER_MENU_QUERY } from "@/queries/menu-queries/footer-menu";
import { HEADER_MENU_QUERY } from "@/queries/menu-queries/header-menu";
import { PAGE_QUERY } from "@/queries/page-query";
import { SITE_DATA_QUERY } from "@/queries/site-settings-query";
import { useQuery } from "@apollo/client";
import { FaustTemplate } from "@faustwp/core";
import parse from "html-react-parser";
import Head from "next/head";

const PageSitemap: FaustTemplate<GetPageQuery> = (props) => {
  const databaseId = props.__SEED_NODE__.databaseId;

  const {
    data,
    loading = true,
    error,
  } = useQuery<GetPageQuery>(PAGE_QUERY, {
    variables: {
      databaseId: databaseId,
      asPreview: false,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });

  const siteDataQuery = useQuery<GetSiteDataQuery>(SITE_DATA_QUERY);
  const headerMenuDataQuery = useQuery<GetHeaderMenuQuery>(HEADER_MENU_QUERY);
  const footerMenuDataQuery = useQuery<GetFooterMenuQuery>(FOOTER_MENU_QUERY);

  if (loading && !data) {
    return <Loader />;
  }

  if (error) return <p>Error! {error.message}</p>;

  if (!data?.page) {
    return <p>No pages have been published</p>;
  }

  const defaultSiteData: GetSiteDataQuery["generalSettings"] = {
    title: "",
    description: "",
  };
  const defaultMenuItems: GetHeaderMenuQuery["primaryMenuItems"]["nodes"] = [];
  const defaultFooterMenuItems: GetFooterMenuQuery["footerMenuItems"]["nodes"] =
    [];
  const defaultFooterSocialMenu: GetFooterMenuQuery["footerSocialMenu"]["nodes"] =
    [];
  const defaultFooterLegalMenu: GetFooterMenuQuery["footerLegalMenu"]["nodes"] =
    [];

  const siteData = siteDataQuery?.data?.generalSettings || defaultSiteData;
  const menuItems =
    headerMenuDataQuery?.data?.primaryMenuItems?.nodes || defaultMenuItems;
  const footerMenuItems =
    footerMenuDataQuery?.data?.footerMenuItems?.nodes || defaultFooterMenuItems;
  const footerSocialMenu =
    footerMenuDataQuery?.data?.footerSocialMenu?.nodes ||
    defaultFooterSocialMenu;
  const footerLegalMenu =
    footerMenuDataQuery?.data?.footerLegalMenu?.nodes || defaultFooterLegalMenu;

  const { title: siteTitle } = siteData;
  const { seo } = data?.page || {};
  const seoFullHead = seo?.fullHead || "";
  const seoTitle = seo?.title || "";

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        {parse(seoFullHead)}
      </Head>

      <Header siteTitle={siteTitle} menuItems={menuItems} />

      <main className="container grid grid-cols-1 gap-4 px-4">
        <Sitemap menuItems={menuItems} />
      </main>

      <Footer
        siteTitle={siteTitle}
        menuItems={footerMenuItems}
        socialMenu={footerSocialMenu}
        legalMenu={footerLegalMenu}
      />
    </>
  );
};

PageSitemap.queries = [
  {
    query: PAGE_QUERY,
    variables: ({ databaseId }, ctx) => ({
      databaseId,
      asPreview: ctx?.asPreview,
    }),
  },
  {
    query: SITE_DATA_QUERY,
  },
  {
    query: HEADER_MENU_QUERY,
  },
  {
    query: FOOTER_MENU_QUERY,
  },
];

export default PageSitemap;
