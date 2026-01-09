import type { AcfTestimonial } from "@/__generated__/graphql";
import Image from "next/image";
import blockConfig from "./config";

export function AcfTestimonial(props: AcfTestimonial) {
  const { blockTestimonial } = props;

  if (!blockTestimonial) {
    return null;
  }

  const { backgroundImage, topLine, middleLine, bottomLine, attribution } =
    blockTestimonial;

  const imageUrl = backgroundImage?.node?.sourceUrl || "";

  return (
    <div className="relative mx-auto h-full w-full md:h-full">
      {/* Background Image */}
      {imageUrl && (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-stone-900/90" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-10 text-center text-white md:px-12 md:py-6">
        <div className="space-y-1">
          {topLine && (
            <p className="justify-self-start text-[1rem] font-light md:text-[1.5rem]">
              {topLine}
            </p>
          )}

          {middleLine && (
            <p className="justify-self-end text-[1.5rem] font-light md:mr-20 md:text-[2.5rem]">
              {middleLine}
            </p>
          )}

          {bottomLine && (
            <p className="ml-7 text-left text-[1rem] font-light md:justify-self-end md:text-center md:text-[1.5rem]">
              {bottomLine}
            </p>
          )}

          {attribution && (
            <p className="mr-20 justify-self-end text-[1rem] font-light text-white md:text-[1.5rem]">
              {attribution}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

AcfTestimonial.displayName = blockConfig.displayName;
AcfTestimonial.fragments = blockConfig.fragment;
