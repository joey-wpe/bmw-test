import type { AcfFourColImages } from "@/__generated__/graphql";
import { clsx } from "clsx";
import Link from "next/link";
import blockConfig from "./config";

export function AcfFourColImages(props: AcfFourColImages) {
  const {
    blockFourColImages: { columns },
  } = props;

  const totalColumns = columns?.length ?? 0;

  return (
    <div
      className={clsx([
        "grid gap-2 md:gap-4",
        totalColumns <= 2 && "grid-cols-2",
        totalColumns === 3 && "grid-cols-2 md:grid-cols-3",
        totalColumns >= 4 && "grid-cols-4",
      ])}
    >
      {columns &&
        columns.map(
          ({ image, link, banner, bannerText }, id) =>
            image &&
            link && (
              <Link
                key={id}
                className={clsx([
                  "relative col-span-2 flex flex-col justify-end md:col-span-1",
                  totalColumns <= 2 && "aspect-[690/450]",
                  totalColumns === 3 && "aspect-[690/450] md:aspect-[453/450]",
                  totalColumns >= 4 && "aspect-[335/350]",
                ])}
                href={link.url}
                target={link.target}
              >
                <div
                  className="before:from-22% bottom-0 h-full w-full bg-cover bg-center bg-no-repeat before:absolute before:bottom-[0] before:h-full before:max-h-[416px] before:w-full before:bg-gradient-to-t before:from-black/75 before:to-transparent before:content-[''] md:absolute"
                  style={{ backgroundImage: `url(${image.node?.sourceUrl})` }}
                ></div>
                <div className="absolute bottom-0 z-0 p-3 md:px-6 md:py-4">
                  <h3 className="uppercase">{link.title}</h3>
                </div>
                {banner && (
                  <div className="absolute left-0 top-0 z-10 w-full bg-red-500 px-1 py-2 text-center font-medium md:px-2 md:py-4 md:text-md">
                    {bannerText}
                  </div>
                )}
              </Link>
            )
        )}
    </div>
  );
}

AcfFourColImages.displayName = blockConfig.displayName;
AcfFourColImages.fragments = blockConfig.fragment;
