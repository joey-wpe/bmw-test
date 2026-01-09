import type { AcfCoursesTable } from "@/__generated__/graphql";
import { Button } from "@/components/ui";
import Link from "next/link";
import blockConfig from "./config";

export function AcfCoursesTable(props: AcfCoursesTable) {
  const { blockCoursesTable } = props;

  if (!blockCoursesTable) {
    return null;
  }

  const { heading, sub, tableHeader, courses, ctaLink } = blockCoursesTable;

  return (
    <div className="mx-auto w-full bg-black sm:px-6 lg:px-8">
      <div className="text-center">
        {heading && (
          <h1 className="text-start font-light text-white">{heading}</h1>
        )}
        {sub && <h3 className="text-start font-light text-white">{sub}</h3>}
      </div>

      <div className="mx-auto mt-6 max-w-7xl">
        {tableHeader && (
          <div className="bg-stone-900 p-4">
            <h5 className="font-bold uppercase text-white">{tableHeader}</h5>
          </div>
        )}

        <div className="divide-y divide-neutral-800">
          {courses?.map((course, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 pr-0"
            >
              <h5 className="font-light text-white">{course?.coursesName}</h5>
              <div className="flex flex-row items-end gap-2 sm:flex-row sm:items-center">
                {course?.courseLink?.map((link, linkIndex) => (
                  <div key={linkIndex} className={"block"}>
                    <Button
                      url={link?.link?.url || "#"}
                      target={link?.link?.target || "_self"}
                      label={link?.link?.title || "Book Now"}
                      variant="primary"
                      size="md"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {ctaLink && (
          <div className="p-4 text-start md:pr-0 md:text-end">
            <Link href={ctaLink.url} target={ctaLink.target || "_self"}>
              {ctaLink.title}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

// Add display name and fragments to the component
AcfCoursesTable.displayName = blockConfig.displayName;
AcfCoursesTable.fragments = blockConfig.fragment;
