import type { AcfFourColImagesCta } from "@/__generated__/graphql";
import { Button } from "@/components/ui";
import Image from "next/image";
import blockConfig from "./config";

export function AcfFourColImagesCta(props: AcfFourColImagesCta) {
  const {
    blockFourColumnImageWithCta: { heading, subHeading, columns },
  } = props;

  return (
    <div className="flex flex-col">
      {/* Heading */}
      <h2 className="mb-2 text-center font-light uppercase">{heading}</h2>

      {/* Subheading */}
      <div className="mx-auto w-full max-w-[466px]">
        {subHeading && (
          <p className="mb-6 text-center text-white/80">{subHeading}</p>
        )}
      </div>

      {/* Grid */}
      <div className="grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {columns?.map((column, id) =>
          column?.image ? (
            <div key={id} className="flex h-full flex-col">
              {/* Image */}
              <div className="relative aspect-[340/192] w-full">
                <Image
                  src={column.image.node?.sourceUrl || ""}
                  alt={column.image.node?.altText || ""}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Content Box with Grid */}
              <div className="grid min-h-[139px] flex-1 grid-rows-[auto_1fr_auto] bg-stone-900 p-3">
                {/* Row 1: Text */}
                <div>
                  {column.banner && (
                    <p className="mb-1 font-bold uppercase text-white">
                      {column.banner}
                    </p>
                  )}

                  {column.subtext && (
                    <p className="text-sm text-white/90">{column.subtext}</p>
                  )}
                </div>

                {/* Row 2: Spacer - takes remaining space */}
                <div></div>

                {/* Row 3: Button */}
                <div className="mt-2">
                  {column.link && (
                    <Button
                      url={column.link.url || "#"}
                      label={column.link.title || "Book this hotel"}
                      variant="primary"
                      size="md"
                      target={column.link.target || "_self"}
                      className="w-[130px]"
                    />
                  )}
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

AcfFourColImagesCta.displayName = blockConfig.displayName;
AcfFourColImagesCta.fragments = blockConfig.fragment;
