import type { AcfInstructors } from "@/__generated__/graphql";
import Image from "next/image";
import blockConfig from "./config";

export function AcfInstructors(props: AcfInstructors) {
  const { blockInstructors } = props;

  if (!blockInstructors) {
    return null;
  }

  const { sectionHeading, instructorBios } = blockInstructors;

  if (!instructorBios || instructorBios.length === 0) {
    return null;
  }

  return (
    <div className="flex w-full flex-col">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        {sectionHeading && (
          <h2 className="mb-8 text-center font-light uppercase text-white">
            {sectionHeading}
          </h2>
        )}

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {instructorBios.map((instructor, index) => {
            const imageUrl = instructor?.image?.node?.sourceUrl || "";
            const altText =
              instructor?.image?.node?.altText || instructor?.name || "";
            const name = instructor?.name || "";
            const title = instructor?.title || "";
            const bio = instructor?.bio || "";

            return (
              <div
                key={index}
                className="flex flex-col justify-center gap-2 overflow-hidden md:flex-col xl:flex-row"
              >
                {/* Instructor Image */}
                {imageUrl && (
                  <div className="relative aspect-square w-full xl:w-[340px]">
                    <Image
                      src={imageUrl}
                      alt={altText}
                      className="object-cover object-center"
                      fill
                    />
                  </div>
                )}

                {/* Instructor Info */}
                <div className="flex-1 xl:w-[340px]">
                  <div className="flex h-full flex-col justify-start bg-stone-900 px-4 py-4 xl:overflow-hidden">
                    {/* Name */}
                    {name && <h4 className="font-bold text-white">{name}</h4>}

                    {/* Title */}
                    {title && <p className="font-bold text-white">{title}</p>}

                    {/* Bio */}
                    {bio && <p className="mt-4 text-white">{bio}</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

AcfInstructors.displayName = blockConfig.displayName;
AcfInstructors.fragments = blockConfig.fragment;
