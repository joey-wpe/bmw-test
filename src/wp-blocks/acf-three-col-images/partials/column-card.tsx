import { BlockThreeColumnImagesColumns } from "@/__generated__/graphql";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ColumnCardProps {
  column: BlockThreeColumnImagesColumns;
  textBackground?: boolean | null;
}

export function ColumnCard({ column, textBackground }: ColumnCardProps) {
  const { image, heading, subtext, cta } = column;

  return (
    <div
      className={`flex h-full flex-col overflow-hidden ${
        textBackground ? "bg-stone-900" : "bg-transparent"
      }`}
    >
      {/* Image */}
      {image?.node?.sourceUrl && (
        <div className="relative h-[200px] w-full sm:h-[220px] md:h-[252px]">
          <Image
            src={image.node.sourceUrl}
            alt={image.node.altText || heading || "Image"}
            fill
            className="object-cover object-center"
          />
        </div>
      )}

      {/* Content Below Image */}
      {(heading || subtext || cta) && (
        <div className="px-4 pb-5 pt-3">
          {heading &&
            (textBackground ? (
              <h6 className="mb-1 font-semibold uppercase">{heading}</h6>
            ) : (
              <h3 className="mb-1 uppercase">{heading}</h3>
            ))}
          {subtext && <p className="mb-4 font-light">{subtext}</p>}
          {cta?.url && cta?.title && (
            <div className="mt-auto">
              <Button
                url={cta.url}
                label={cta.title}
                variant="primary"
                size="md"
                target={cta.target || ""}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
