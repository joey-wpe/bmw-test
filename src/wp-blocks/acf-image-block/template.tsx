import type { AcfImageBlock } from "@/__generated__/graphql";
import Image from "next/image";
import blockConfig from "./config";

export function AcfImageBlock(props: AcfImageBlock) {
  const { blockImageBlock } = props;

  if (!blockImageBlock) {
    return null;
  }

  const { image } = blockImageBlock;
  const imageUrl = image?.node?.sourceUrl || "";
  const altText = image?.node?.altText || "";

  if (!imageUrl) {
    return null;
  }

  return (
    <div className="relative aspect-[380/341] h-full md:aspect-auto">
      <Image
        src={imageUrl}
        alt={altText}
        className="object-cover object-center"
        fill
        loading="lazy"
        quality={85}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
}

AcfImageBlock.displayName = blockConfig.displayName;
AcfImageBlock.fragments = blockConfig.fragment;
