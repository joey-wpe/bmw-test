import { FormFieldIntersection } from "@/types";
import { clsx } from "clsx";
import { columnClasses } from "../utils";

interface HtmlFieldProps {
  field: FormFieldIntersection;
}

export function HtmlField({ field }: HtmlFieldProps) {
  return (
    <div
      className={clsx(
        ["w-full font-light"],
        columnClasses(field.layoutGridColumnSpan)
      )}
      dangerouslySetInnerHTML={{ __html: field.content }}
    ></div>
  );
}
