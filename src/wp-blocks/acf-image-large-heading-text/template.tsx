import type { AcfImageLargeHeadingText } from "@/__generated__/graphql";
import { Button } from "@root/src/components/ui";
import Image from "next/image";
import blockConfig from "./config";

export function AcfImageLargeHeadingText(props: AcfImageLargeHeadingText) {
  const { blockImageLargeHeadingText } = props;

  if (!blockImageLargeHeadingText) {
    return null;
  }

  const { image, heading, sub, cta } = blockImageLargeHeadingText;
  const imageUrl = image?.node?.sourceUrl || "";
  const altText = image?.node?.altText || "";

  return (
    <div className="flex w-full flex-col">
      {/* Image Section */}
      {imageUrl && (
        <div className="relative h-[220px] w-full md:h-[350px]">
          <Image
            src={imageUrl}
            alt={altText}
            fill
            className="object-cover object-center"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="flex-1 bg-black px-4 py-4 md:px-11">
        {/* Large Heading */}
        {heading && (
          <h3 className="mb-6 font-light uppercase text-white">{heading}</h3>
        )}

        {/* Subtext */}
        {sub && <p className="mb-6 max-w-2xl">{sub}</p>}

        {/* CTA Button */}
        {cta?.url && cta?.title && (
          <Button
            url={cta.url}
            target={cta.target || "_self"}
            label={cta.title}
            variant="primary"
            size="md"
          />
        )}
      </div>
    </div>
  );
}

AcfImageLargeHeadingText.displayName = blockConfig.displayName;
AcfImageLargeHeadingText.fragments = blockConfig.fragment;
