import StylizedTab from "@root/public/img/stylized_tab.svg";

interface ColumnTabProps {
  tabHeader: string;
  isStyled: boolean;
}

export function ColumnTab({ tabHeader, isStyled }: ColumnTabProps) {
  if (!isStyled) {
    return (
      <div className="relative w-full md:max-w-[244px]">
        <h4 className="relative h-[37px] bg-stone-900 py-2 pl-3 pr-2 font-bold uppercase text-white md:pl-0 md:text-center">
          {tabHeader}
        </h4>
      </div>
    );
  }

  return (
    <div className="relative h-[37px] w-full md:max-w-[274px]">
      <div className="absolute left-0 top-0 z-20 h-full">
        <StylizedTab className="h-full w-auto" />
      </div>

      {/* Tab Label with angled background */}
      <div className="absolute bottom-0 left-0 right-0 h-full">
        <h4 className="relative z-10 h-full py-2 pl-18 font-bold uppercase text-white md:pl-0 md:text-center">
          {tabHeader}
        </h4>
        <div
          className="absolute inset-0 bg-stone-900"
          style={{
            clipPath:
              "polygon(20px 0, calc(100% - 0px) 0, calc(100% - 20px) 100%, 0% 100%)",
            width: "100%",
          }}
        ></div>
      </div>
    </div>
  );
}
