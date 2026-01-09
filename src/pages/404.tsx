import {
  GetFooterMenuQuery,
  GetHeaderMenuQuery,
  GetSiteDataQuery,
} from "@/__generated__/graphql";
import { Footer, Header } from "@/components/layout";
import { Button, Loader } from "@/components/ui";
import { FOOTER_MENU_QUERY } from "@/queries/menu-queries/footer-menu";
import { HEADER_MENU_QUERY } from "@/queries/menu-queries/header-menu";
import { SITE_DATA_QUERY } from "@/queries/site-settings-query";
import { useQuery } from "@apollo/client";
import Head from "next/head";

export default function NotFoundPage() {
  const { data: siteDataQuery, loading: siteLoading } =
    useQuery<GetSiteDataQuery>(SITE_DATA_QUERY);
  const { data: headerMenuQuery, loading: headerLoading } =
    useQuery<GetHeaderMenuQuery>(HEADER_MENU_QUERY);
  const { data: footerMenuQuery, loading: footerLoading } =
    useQuery<GetFooterMenuQuery>(FOOTER_MENU_QUERY);

  if (siteLoading || headerLoading || footerLoading) {
    return <Loader />;
  }

  const siteData = siteDataQuery?.generalSettings ?? {
    title: "",
    description: "",
  };
  const headerMenuItems = headerMenuQuery?.primaryMenuItems?.nodes ?? [];
  const footerMenuItems = footerMenuQuery?.footerMenuItems?.nodes ?? [];
  const footerSocialMenu = footerMenuQuery?.footerSocialMenu?.nodes ?? [];
  const footerLegalMenu = footerMenuQuery?.footerLegalMenu?.nodes ?? [];

  const BUTTONS = [
    { url: "/", label: "Home Page" },
    { url: "/south-carolina", label: "South Carolina Events" },
    { url: "/california", label: "California Events" },
    { url: "/bmw-dream-drive", label: "BMW Dream Drive Events" },
  ];

  return (
    <>
      <Head>
        <title>404 - Page Not Found | {siteData.title}</title>
      </Head>

      <Header siteTitle={siteData.title} menuItems={headerMenuItems} />

      <main className="container-main flex flex-col items-center justify-center px-3 pb-[170px] text-center">
        <div className="mb-7 h-[400px] w-full overflow-hidden">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: "url(/img/error-404.jpg)",
            }}
          ></div>
        </div>
        <h1 className="mb-3">ERROR 404 - PAGE NOT FOUND</h1>
        <p className="mx-auto mb-8 max-w-[487px] text-sm">
          Looks like you’ve been brought in for an early pit stop. Don’t worry,
          just click on a link below to get back on the road.
        </p>
        <div className="w-full max-w-[228px] space-y-3">
          {BUTTONS.map((button, i) => (
            <Button
              key={i}
              url={button.url}
              label={button.label}
              variant="primary"
              className="w-full"
            />
          ))}
        </div>
      </main>

      <Footer
        siteTitle={siteData.title}
        menuItems={footerMenuItems}
        socialMenu={footerSocialMenu}
        legalMenu={footerLegalMenu}
      />
    </>
  );
}
