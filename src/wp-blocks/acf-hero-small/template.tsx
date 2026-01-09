import type { AcfHeroSmall } from "@/__generated__/graphql";
import { clsx } from "clsx";
import blockConfig from "./config";

export function AcfHeroSmall(props: AcfHeroSmall) {
  const { blockHeroSmall, parentClientId } = props;

  if (!blockHeroSmall) return null;

  const { heading, image } = blockHeroSmall;
  const imageUrl = image?.node?.sourceUrl || "";

  return (
    <div
      className={clsx([
        "relative flex flex-col md:w-full",
        !parentClientId && "-mx-4 md:mx-0",
      ])}
    >
      {/* Background Image */}
      {imageUrl && (
        <div className="relative h-[123px] w-full overflow-hidden md:h-[400px]">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>

          {/* Desktop Overlay */}
          {heading && (
            <div className="absolute bottom-0 left-0 z-10 hidden min-h-[73px] min-w-[692px] items-center px-4 py-2 md:flex">
              {/* Semi-transparent background */}
              <div className="absolute inset-0 bg-black/80"></div>

              {/* Opaque text */}
              <h1 className="relative z-20 w-full text-center uppercase text-white">
                {heading}
              </h1>
            </div>
          )}
        </div>
      )}

      {/* Mobile Text Below */}
      {heading && (
        <div className="mt-4 px-4 text-center md:hidden">
          <h1 className="mb-2 uppercase text-white">{heading}</h1>
        </div>
      )}
    </div>
  );
}

AcfHeroSmall.displayName = blockConfig.displayName;
AcfHeroSmall.fragments = blockConfig.fragment;
