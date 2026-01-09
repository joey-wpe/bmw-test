import type { AcfImageWithLowerText } from "@/__generated__/graphql";
import Image from "next/image";
import Link from "next/link";
import blockConfig from "./config";

export function AcfImageWithLowerText(props: AcfImageWithLowerText) {
  const { blockImageWithLowerText } = props;

  if (!blockImageWithLowerText) {
    return null;
  }

  const { image, heading, subtext, cta } = blockImageWithLowerText;
  const imageUrl = image?.node?.sourceUrl || "";
  const altText = image?.node?.altText || "";

  return (
    <section className="flex w-full flex-col bg-black">
      {/* Image Section */}
      {imageUrl && (
        <div className="relative h-[220px] w-full md:h-[400px]">
          <Image
            src={imageUrl}
            alt={altText}
            className="object-cover object-center"
            fill
          />
        </div>
      )}

      {/* Content Section */}
      <div className="w-full flex-1 justify-between bg-stone-900 px-6 pb-9 pt-4 md:px-6">
        {/* Heading */}
        {heading && (
          <h4 className="mb-2 font-bold uppercase text-white">{heading}</h4>
        )}

        {/* Subtext */}
        {subtext && <p className="font-light text-white/90">{subtext}</p>}

        {/* CTA Link */}
        {cta?.url && cta?.title && (
          <Link
            href={cta.url}
            className="mt-2 block"
            target={cta.target || "_self"}
          >
            {cta.title}
          </Link>
        )}
      </div>
    </section>
  );
}

AcfImageWithLowerText.displayName = blockConfig.displayName;
AcfImageWithLowerText.fragments = blockConfig.fragment;
