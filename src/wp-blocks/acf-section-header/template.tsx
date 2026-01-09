import type { AcfSectionHeader } from "@/__generated__/graphql";
import blockConfig from "./config";

export function AcfSectionHeader(props: AcfSectionHeader) {
  const { blockSectionHeader } = props;

  if (!blockSectionHeader) {
    return null;
  }
  const { heading, subtext } = blockSectionHeader;

  return (
    <div className="max-w-7xl py-8 text-center">
      {/* Heading */}
      {heading && <h2 className="font-light text-white">{heading}</h2>}

      {/* Subtext */}
      {subtext && (
        <p className="mx-auto mt-[30px] max-w-[466px] text-left text-white">
          {subtext}
        </p>
      )}
    </div>
  );
}

AcfSectionHeader.displayName = blockConfig.displayName;
AcfSectionHeader.fragments = blockConfig.fragment;
