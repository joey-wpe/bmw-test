interface ColumnTabProps {
  tabHeader: string;
}

export function ColumnTab({ tabHeader }: ColumnTabProps) {
  return (
    <div className="relative mb-1 h-[37px] w-full lg:w-1/2">
      <h4 className="relative bg-stone-900 py-2 pl-3 pr-2 font-bold uppercase text-white sm:pl-4 sm:pr-0">
        {tabHeader}
      </h4>
    </div>
  );
}
