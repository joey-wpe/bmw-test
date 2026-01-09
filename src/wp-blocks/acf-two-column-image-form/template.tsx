import type { AcfTwoColumnImageForm } from "@/__generated__/graphql";
import { Form } from "@/components/ui";
import Image from "next/image";
import blockConfig from "./config";

export function AcfTwoColumnImageForm(props: AcfTwoColumnImageForm) {
  const { blockTwoColumnImageForm } = props;

  if (!blockTwoColumnImageForm) {
    return null;
  }

  const { image, heading, subtext, formId } = blockTwoColumnImageForm;
  const imageUrl = image?.node?.sourceUrl || "";
  const altText = image?.node?.altText || "";

  return (
    <div className="w-full bg-stone-900 p-3 text-white md:p-4">
      <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        {/* Left Column - Image */}
        <div className="h-[202px] overflow-hidden md:h-full lg:h-full">
          {imageUrl && (
            <div className="relative h-full">
              <Image
                src={imageUrl}
                alt={altText}
                className="object-cover object-center"
                fill
              />
            </div>
          )}
        </div>

        {/* Right Column - Form */}
        <div className="flex flex-col justify-center bg-stone-850 p-4">
          {heading && (
            <h3 className="mb-4 font-light uppercase text-white">{heading}</h3>
          )}

          {subtext && <p className="mb-4 text-white">{subtext}</p>}

          {/* Gravity Forms Integration */}
          {formId && (
            <div className="w-full max-w-[350px]">
              <Form formId={formId} loaderHeight={388} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

AcfTwoColumnImageForm.displayName = blockConfig.displayName;
AcfTwoColumnImageForm.fragments = blockConfig.fragment;
