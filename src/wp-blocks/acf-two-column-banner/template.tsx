import type { AcfTwoColumnBanner } from "@/__generated__/graphql";
import { Button } from "@/components/ui";
import Image from "next/image";
import blockConfig from "./config";

export function AcfTwoColumnBanner(props: AcfTwoColumnBanner) {
  const { blockTwoColumnBanner } = props;

  if (!blockTwoColumnBanner) {
    return null;
  }

  const { image, content } = blockTwoColumnBanner;
  const imageUrl = image?.node?.sourceUrl || "";
  const altText = image?.node?.altText || "";

  if (!content || content.length === 0) {
    return null;
  }

  return (
    <section className="bg-stone-900 md:p-4">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-4">
        {/* Image Column */}
        {imageUrl && (
          <div className="h-[202px] overflow-hidden p-0 md:h-full lg:h-full">
            <div className="relative h-full w-full">
              <Image
                fill
                src={imageUrl}
                alt={altText}
                className="object-cover object-center"
              />
            </div>
          </div>
        )}

        {/* Content Column */}
        <div className="m-4 flex flex-col justify-center bg-stone-850 p-4 md:m-0 md:px-6 md:py-4">
          {content.map((item, index) => {
            const heading = item?.heading || "";
            const subtext = item?.subtext || "";
            const cta = item?.cta;
            const isLast = index === content.length - 1;

            return (
              <div key={index}>
                <div className="space-y-4">
                  {heading && (
                    <h3 className="font-light uppercase text-white">
                      {heading}
                    </h3>
                  )}

                  {subtext && (
                    <div dangerouslySetInnerHTML={{ __html: subtext }} />
                  )}

                  {cta?.url && cta?.title && (
                    <div className="">
                      <Button
                        url={cta.url}
                        label={cta.title}
                        target={cta.target || "_self"}
                        variant="primary"
                        size="md"
                      />
                    </div>
                  )}
                </div>

                {/* Divider - not shown after the last item */}
                {!isLast && <hr className="my-4 border border-white" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

AcfTwoColumnBanner.displayName = blockConfig.displayName;
AcfTwoColumnBanner.fragments = blockConfig.fragment;
