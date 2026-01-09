import type { AcfHeroLarge } from "@/__generated__/graphql";
import { clsx } from "clsx";
import Image from "next/image";
import blockConfig from "./config";

export function AcfHeroLarge(props: AcfHeroLarge) {
  const {
    blockHeroLarge: { heading, subHeading, backgroundType, image, videoUrl },
    parentClientId,
  } = props;

  return (
    <div
      className={clsx([
        "relative flex max-h-[832px] flex-col justify-end md:w-full",
        !parentClientId && "-mx-4 md:mx-0",
        backgroundType === "image" && "aspect-[1400/832] overflow-hidden",
        backgroundType === "video" && "aspect-video",
      ])}
    >
      {backgroundType === "image" && image && (
        <div className="hero-img-overlay bottom-0 h-full w-full">
          <Image
            src={image.node?.sourceUrl || ""}
            alt={image.node?.altText || ""}
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 435px) 435px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1400px"
            quality={80}
            fetchPriority="high"
            placeholder="empty"
            loading="eager"
            decoding="sync"
          />
        </div>
      )}
      {backgroundType === "video" && videoUrl && (
        <div className="hero-img-overlay h-full w-full overflow-hidden">
          <iframe
            className="absolute left-0 top-0 aspect-video w-full"
            id="vimeo-video"
            src={`${videoUrl}?background=1&autoplay=1&loop=1&muted=1&byline=0&portrait=0`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <div className="bottom-0 z-10 p-3 md:absolute md:p-7">
        {heading && <h1 className="mb-2 uppercase">{heading}</h1>}
        {subHeading && (
          <p className="max-w-[636px] text-xs md:text-base">{subHeading}</p>
        )}
      </div>
    </div>
  );
}

AcfHeroLarge.displayName = blockConfig.displayName;
AcfHeroLarge.fragments = blockConfig.fragment;
