import type { AcfContactForm } from "@/__generated__/graphql";
import { Form } from "@/components/ui";
import Image from "next/image";
import blockConfig from "./config";

export function AcfContactForm(props: AcfContactForm) {
  const { blockContactForm } = props;

  if (!blockContactForm) {
    return null;
  }

  const { formId, locations } = blockContactForm;

  return (
    <div className="w-full bg-black px-4 lg:px-18">
      <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
        {/* Left Column - Form (order-2 on mobile, order-1 on desktop) */}
        <div className="order-2 flex justify-center border-t border-gray-700 pt-4 md:order-1 md:border-t-0 md:pt-0">
          {formId && (
            <div className="w-[350px]">
              <Form formId={formId} loaderHeight={400} />
            </div>
          )}
        </div>

        {/* Right Column - Locations (order-1 on mobile, order-2 on desktop) */}
        <div className="order-1 flex flex-col gap-6 sm:gap-8 md:order-2 md:items-center md:gap-10 md:pb-0">
          {locations &&
            locations.length > 0 &&
            locations.map((location, index) => {
              const imageUrl = location?.image?.node?.sourceUrl || "";
              const altText = location?.image?.node?.altText || "";
              const details = location?.details || "";

              return (
                <div key={index} className="flex flex-col gap-3 sm:gap-4">
                  {imageUrl && (
                    <div className="relative h-[180px] w-full sm:h-[200px] md:h-[233px] md:w-[350px]">
                      <Image
                        src={imageUrl}
                        alt={altText}
                        className="h-full w-full object-cover"
                        fill
                      />
                    </div>
                  )}
                  {details && (
                    <div
                      className="prose prose-invert max-w-none text-white"
                      dangerouslySetInnerHTML={{ __html: details }}
                    />
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

AcfContactForm.displayName = blockConfig.displayName;
AcfContactForm.fragments = blockConfig.fragment;
