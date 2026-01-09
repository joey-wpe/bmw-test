import type { AcfEventCard } from "@/__generated__/graphql";
import { Button, Form } from "@root/src/components/ui";
import Image from "next/image";
import Link from "next/link";
import blockConfig from "./config";
import { ColumnTab } from "./partials/column-tab";

export function AcfEventCard(props: AcfEventCard) {
  const { blockEventCard } = props;

  if (!blockEventCard) {
    return null;
  }

  const { tabHeader, image, heading, subtext, ctaType, link, formId } =
    blockEventCard;
  const imageUrl = image?.node?.sourceUrl || "";
  const altText = image?.node?.altText || "";

  const renderCTA = () => {
    switch (ctaType) {
      case "link":
        if (!link?.url || !link?.title) return null;
        return (
          <Link href={link.url} target={link.target || "_self"}>
            {link.title}
          </Link>
        );
      case "form":
        if (!formId) return null;
        return (
          <div className="w-full max-w-[305px]">
            <Form formId={formId} layout="inline" loaderHeight={61} />
          </div>
        );

      default:
        if (!link?.url || !link?.title) return null;
        return (
          <Button
            url={link.url}
            target={link.target || "_self"}
            label={link.title || "Register Now"}
            variant="primary"
            size="md"
          />
        );
    }
  };

  return (
    <div className="relative mx-auto flex w-full flex-col">
      {/* Tab Header */}
      <div className={`${!tabHeader ? "pt-8" : ""}`}>
        {tabHeader && <ColumnTab tabHeader={tabHeader} />}
      </div>
      {/* Image Section */}
      <div className="relative">
        {imageUrl && (
          <div className="relative h-[300px] w-full sm:h-[400px] md:h-[500px]">
            <Image
              src={imageUrl}
              className="object-cover object-center"
              alt={altText}
              fill
            />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="mx-auto grid h-auto max-w-7xl flex-1 grid-rows-[auto_1fr_auto] gap-4 bg-stone-900 px-6 pb-9 pt-4">
        {/* Heading */}
        <div>
          {heading && (
            <h4 className="font-bold uppercase text-white">{heading}</h4>
          )}
        </div>

        {/* Description */}
        <div>
          {subtext && (
            <div
              className="prose prose-lg prose-invert w-full max-w-none sm:max-w-3xl"
              dangerouslySetInnerHTML={{ __html: subtext }}
            />
          )}
        </div>

        {/* CTA */}
        <div>{renderCTA()}</div>
      </div>
    </div>
  );
}

AcfEventCard.displayName = blockConfig.displayName;
AcfEventCard.fragments = blockConfig.fragment;
