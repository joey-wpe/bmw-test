import {
  GeneralSettings,
  TopLevelMenuItemFragment,
} from "@/__generated__/graphql";
import { Button } from "@/components/ui";
import HeaderLogoMobile from "@root/public/img/bmwpds-logo-mobile.svg";
import HeaderLogo from "@root/public/img/bmwpds-logo.svg";
import CloseIcon from "@root/public/img/close-icon.svg";
import MenuIcon from "@root/public/img/menu-icon.svg";
import Link from "next/link";
import { useState } from "react";
import { MobileMenu } from "./mobile-menu";
import { TopLevelMenuItem } from "./top-level-menu-item";

interface HeaderProps {
  siteTitle: GeneralSettings["title"];
  menuItems: TopLevelMenuItemFragment[];
}

export function Header({ siteTitle, menuItems }: HeaderProps) {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="sticky top-0 z-20 h-[51px] border-b border-neutral-800 bg-black lg:h-[76px]">
      <div className="relative h-full">
        <div className="lg:hidden">
          <div className="container relative z-20 flex h-full items-center justify-between bg-black pl-4 md:pr-4">
            <Link href="/">
              <HeaderLogoMobile />
            </Link>
            <button
              className="flex h-[50px] w-[60px] items-center justify-center bg-stone-900 px-3 lg:hidden"
              onClick={handleMenuToggle}
            >
              {menuActive ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
          <MobileMenu {...{ menuActive, menuItems }} />
        </div>
        <div className="container hidden h-full items-center justify-between px-4 lg:flex">
          <Link href="/">
            <HeaderLogo />
          </Link>

          <nav className="flex h-full items-center lg:gap-5 xl:gap-7">
            <ul className="relative flex h-full">
              {(Array.isArray(menuItems) ? menuItems : []).map((item) => (
                <TopLevelMenuItem {...{ item }} key={item.id} />
              ))}
            </ul>
            <Button url={`/`} variant="primary" label="Book Now" size="lg" />
          </nav>
        </div>
      </div>
    </header>
  );
}
