import type { AcfSpecialOffers } from "@/__generated__/graphql";
import { Button } from "@/components/ui";
import Image from "next/image";
import blockConfig from "./config";

export function AcfSpecialOffers(props: AcfSpecialOffers) {
  const { blockSpecialOffers } = props;

  if (!blockSpecialOffers) {
    return null;
  }

  const { heading, title, description, image, ctas } = blockSpecialOffers;
  const limitedCtas = ctas ? ctas.slice(0, 3) : [];
  return (
    <>
      {heading && <h2 className="text-center uppercase">{heading}</h2>}

      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row md:gap-4">
          {/* Text column (40%) on desktop */}
          <div className="order-2 flex h-full flex-col justify-between bg-stone-900 p-4 pb-5 md:order-1 md:flex-1 md:p-6 md:pb-7">
            <div className="h-full w-full">
              {title && (
                <h3 className="mb-4 text-left uppercase text-white">{title}</h3>
              )}
              {description && (
                <div
                  className="wysiwyg space-y-4 text-left text-white/90"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
            </div>

            {limitedCtas.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {limitedCtas.map(
                  (cta, index) =>
                    cta?.link && (
                      <Button
                        key={index}
                        url={cta.link.url || "#"}
                        label={cta.link.title || ""}
                        variant="primary"
                        size="md"
                        target={cta.link.target || "_self"}
                      />
                    )
                )}
              </div>
            )}
          </div>

          {/* Image column (60%) on desktop */}
          <div className="order-1 md:order-2 md:w-1/2 xl:w-[790px]">
            {image?.node && (
              <div className="relative mx-auto aspect-[429/136] h-full w-full md:aspect-auto">
                <Image
                  src={image.node.sourceUrl || ""}
                  alt={image.node.altText || ""}
                  fill
                  className="object-cover object-center"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

AcfSpecialOffers.displayName = blockConfig.displayName;
AcfSpecialOffers.fragments = blockConfig.fragment;
