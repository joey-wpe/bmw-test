import {
  FooterMenuItemFragment,
  MenuItemFragment,
} from "@/__generated__/graphql";
import { Form } from "@/components/ui";
import FooterLogo from "@root/public/img/bmwpds-footer-logo.svg";
import FacebookIcon from "@root/public/img/facebook.svg";
import InstagramIcon from "@root/public/img/instagram.svg";
import TwitterIcon from "@root/public/img/twitter.svg";
import YoutubeIcon from "@root/public/img/youtube.svg";
import Link from "next/link";

interface FooterProps {
  siteTitle: string;
  menuItems: FooterMenuItemFragment[];
  socialMenu: MenuItemFragment[];
  legalMenu: MenuItemFragment[];
}

export function Footer({
  siteTitle,
  menuItems,
  socialMenu,
  legalMenu,
}: FooterProps) {
  const socialIcons = [
    { name: "instagram", icon: <InstagramIcon /> },
    { name: "facebook", icon: <FacebookIcon /> },
    { name: "twitter", icon: <TwitterIcon /> },
    { name: "youtube", icon: <YoutubeIcon /> },
  ];

  return (
    <footer>
      <div className="bg-stone-900">
        {menuItems.length > 0 && (
          <div className="container">
            <div className="grid items-start gap-4 px-5 py-3 md:grid-cols-2 md:py-9">
              <div className="flex flex-col gap-4 md:flex-row">
                {menuItems.map(
                  (group) =>
                    group.cssClasses.includes("menu-item-group") && (
                      <ul
                        className="border-b border-stone-750 pb-3 text-sm font-bold md:border-b-0 md:border-r md:pb-0 md:pr-4 md:last-of-type:border-r-0"
                        key={group.id}
                      >
                        {group.childItems.nodes.length > 0 &&
                          group.childItems.nodes.map((item) => (
                            <li key={item.id} className="py-2">
                              <Link href={item.uri} target={item.target}>
                                {item.label}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    )
                )}
              </div>
              <div className="md: flex flex-col flex-wrap justify-between gap-4 md:flex-row md:items-end">
                <div className="flex flex-1 flex-col gap-4 md:max-w-[326px]">
                  <p className="text-sm font-bold">
                    Tag us #BMWPerformanceDrivingSchool
                  </p>
                  {socialMenu.length > 0 && (
                    <ul className="flex gap-9">
                      {socialMenu.map((item) => {
                        const itemIcon = socialIcons.find(
                          (icon) => icon.name === item.label.toLowerCase()
                        );
                        if (itemIcon)
                          return (
                            <li key={item.id}>
                              <Link href={item.uri} target={item.target}>
                                {itemIcon.icon}
                              </Link>
                            </li>
                          );
                      })}
                    </ul>
                  )}
                  <div className="w-full bg-stone-750 p-2">
                    <Form formId="1" layout="inline" loaderHeight={61} />
                  </div>
                </div>
                <div className="flex shrink-0 justify-center pb-3 pt-2 md:pr-10">
                  <Link href="/">
                    <FooterLogo />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="container">
        <div className="px-5 pb-8 pt-6 text-xs font-light md:pb-10 md:pt-7">
          {legalMenu.length > 0 && (
            <ul className="flex flex-wrap gap-x-2 gap-y-3">
              {legalMenu.map((item) => (
                <li className="" key={item.id}>
                  <Link
                    href={item.uri}
                    target={item.target}
                    className="remove-underline text-nowrap"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <p className="mt-4">
            © 2025 BMW of North America, LLC. The BMW name, BMW logo, model
            names, and other trademarks are trademarks of BMW AG.
          </p>
        </div>
      </div>
    </footer>
  );
}
