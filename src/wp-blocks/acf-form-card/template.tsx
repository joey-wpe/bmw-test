import type { AcfFormCard } from "@/__generated__/graphql";
import { Form } from "@/components/ui";
import blockConfig from "./config";

export function AcfFormCard(props: AcfFormCard) {
  const { blockFormCard } = props;

  if (!blockFormCard) {
    return null;
  }

  const { heading, subHeading, additionalInfo, formId, formLoaderHeight } =
    blockFormCard;

  return (
    <div className="flex flex-col bg-stone-900 p-4">
      <div className="text-center">
        {heading && <h3 className="uppercase">{heading}</h3>}
        {subHeading && <h3 className="font-bold">{subHeading}</h3>}
      </div>
      <div className="mt-3 flex flex-1 flex-col items-start gap-3 bg-stone-850 p-4">
        {additionalInfo && (
          <div
            className="border-b pb-3"
            dangerouslySetInnerHTML={{ __html: additionalInfo }}
          ></div>
        )}
        <Form formId={formId} loaderHeight={formLoaderHeight || 500} />
      </div>
    </div>
  );
}

AcfFormCard.displayName = blockConfig.displayName;
AcfFormCard.fragments = blockConfig.fragment;
