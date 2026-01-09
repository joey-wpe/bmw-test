import type { AcfImageWithMultiRowText } from "@/__generated__/graphql";
import Image from "next/image";
import blockConfig from "./config";

export function AcfImageWithMultiRowText(props: AcfImageWithMultiRowText) {
  const { blockImageWithMultiRowText } = props;

  if (!blockImageWithMultiRowText) {
    return null;
  }
  const { image, textRows } = blockImageWithMultiRowText;
  const imageUrl = image?.node?.sourceUrl || "";
  const altText = image?.node?.altText || "";

  return (
    <div className="flex w-full flex-col bg-black">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        {imageUrl && (
          <div className="relative h-[200px] w-full md:h-[300px] lg:h-[400px]">
            <Image
              src={imageUrl}
              alt={altText}
              fill
              className="object-cover object-center"
            />
          </div>
        )}
      </div>

      {/* Text Rows Section */}
      <div className="mx-auto mt-4 w-full flex-1 bg-stone-900 p-4 md:p-6">
        {textRows?.map((row, index) => (
          <div
            key={index}
            className={` ${index !== textRows.length - 1 ? "pb-1" : ""}`}
          >
            {row?.heading && (
              <h4 className="mx-auto mb-4 font-bold uppercase text-white">
                {row.heading}
              </h4>
            )}
            <div className="max-w-[550px]">
              {row?.subtext && (
                <div
                  className="wysiwyg pr-4 font-light text-white/90"
                  dangerouslySetInnerHTML={{ __html: row.subtext }}
                />
              )}
              {index !== textRows.length - 1 && (
                <hr className="my-4 border border-white" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

AcfImageWithMultiRowText.displayName = blockConfig.displayName;
AcfImageWithMultiRowText.fragments = blockConfig.fragment;
