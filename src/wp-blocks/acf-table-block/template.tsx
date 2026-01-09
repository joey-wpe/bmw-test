import type { AcfTableBlock } from "@/__generated__/graphql";
import GreenCheck from "@root/public/img/green_check.svg";
import RedCross from "@root/public/img/red_cross.svg";
import clsx from "clsx";
import blockConfig from "./config";

export function AcfTableBlock(props: AcfTableBlock) {
  const { blockTableBlock } = props;

  if (!blockTableBlock) {
    return null;
  }

  const { heading, subtext, tableHeader, rows } = blockTableBlock;

  if (!rows || rows.length === 0) {
    return null;
  }

  // ✅ Updated renderIcon to prevent truncation and handle responsive sizing
  const renderIcon = (value: boolean | null | undefined) => {
    if (value === null || value === undefined) return null;

    const Icon = value ? GreenCheck : RedCross;

    return (
      <span className="inline-flex items-center justify-center overflow-visible align-middle">
        <Icon
          style={{
            minWidth: "16px",
            minHeight: "16px",
            maxWidth: "28px",
            maxHeight: "28px",
            display: "inline-block",
          }}
        />
      </span>
    );
  };

  return (
    <div className="mx-auto w-full max-w-[689px] bg-stone-900 p-3 md:p-6">
      {/* Title Section */}
      <div className="mb-4 pr-2 md:mb-6 md:pr-10">
        {heading && <h3 className="mb-2 uppercase md:mb-4">{heading}</h3>}
        {subtext && <p>{subtext}</p>}
      </div>

      {/* Table - Scrollable on small screens */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[320px] table-fixed border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="h-10 bg-stone-850 md:h-[60px]">
              {tableHeader && tableHeader.length > 0 ? (
                tableHeader.map((header, index) => (
                  <th
                    key={index}
                    className={clsx(
                      "px-2 py-2 text-xs font-bold uppercase text-white md:px-4 md:py-4 md:text-base",
                      {
                        "w-[40%] text-left": index === 0,
                        "w-[30%] text-center": index !== 0,
                      }
                    )}
                  >
                    {header?.headerText || ""}
                  </th>
                ))
              ) : (
                <>
                  <th className="w-[40%] px-2 py-2 text-left text-xs font-bold uppercase text-white md:px-4 md:py-4 md:text-sm">
                    EVENT
                  </th>
                  <th className="w-[30%] px-2 py-2 text-center text-xs font-bold uppercase text-white md:px-4 md:py-4 md:text-sm">
                    HALF-DAY
                  </th>
                  <th className="w-[30%] px-2 py-2 text-center text-xs font-bold uppercase text-white md:px-4 md:py-4 md:text-sm">
                    FULL-DAY
                  </th>
                </>
              )}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0
                    ? "h-10 bg-stone-950 md:h-[60px]"
                    : "h-10 bg-stone-850 md:h-[60px]"
                }
              >
                {/* Event Name Column */}
                <td className="w-[40%] px-2 py-2 text-left text-xs font-light text-white md:px-4 md:py-4 md:text-base">
                  {row?.eventName || ""}
                </td>

                {/* Half-Day Column */}
                <td className="w-[30%] px-2 py-2 text-center align-middle md:px-4 md:py-4">
                  {renderIcon(row?.halfDay)}
                </td>

                {/* Full-Day Column */}
                <td className="w-[30%] px-2 py-2 text-center align-middle md:px-4 md:py-4">
                  {renderIcon(row?.fullDay)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

AcfTableBlock.displayName = blockConfig.displayName;
AcfTableBlock.fragments = blockConfig.fragment;
