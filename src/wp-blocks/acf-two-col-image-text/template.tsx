import type { AcfTwoColImageText } from "@/__generated__/graphql";
import { Button } from "@/components/ui";
import { clsx } from "clsx";
import Image from "next/image";
import blockConfig from "./config";

export function AcfTwoColImageText(props: AcfTwoColImageText) {
  const {
    blockTwoColImageText: {
      alignment,
      heading,
      subHeading,
      bodyText,
      image,
      ctas,
    },
  } = props;

  return (
    <div
      className={clsx([
        "flex flex-col gap-3 md:gap-4",
        alignment === "left" ? "md:flex-row" : "md:flex-row-reverse",
      ])}
    >
      {image && (
        <div className="flex-1">
          <div className="relative h-[220px] md:h-[400px]">
            <Image
              fill
              src={image.node.sourceUrl}
              alt={image.node.altText}
              className="object-cover object-center"
            />
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col md:justify-center">
        {heading && <h4 className="font-bold uppercase">{heading}</h4>}
        {subHeading && <h4 className="font-bold">{subHeading}</h4>}
        {bodyText && <p className="mt-3">{bodyText}</p>}
        {ctas && (
          <div className="mt-3 flex flex-col items-start gap-3 md:mt-5 md:gap-4">
            {ctas.map(
              (cta, i) =>
                cta.link && (
                  <Button
                    key={i}
                    url={cta.link?.url}
                    label={cta.link?.title}
                    target={cta.link?.target}
                    className="min-w-[197px] md:min-w-[220px]"
                  />
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

AcfTwoColImageText.displayName = blockConfig.displayName;
AcfTwoColImageText.fragments = blockConfig.fragment;
