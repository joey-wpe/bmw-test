import { GfFieldChoice } from "@/__generated__/graphql";
import { InputProps } from "@/types";
import { clsx } from "clsx";
import { useEffect } from "react";
import { columnClasses, FieldWrapper } from "../utils";

export function CheckboxField({
  register,
  unregister,
  errors,
  submitting,
  field,
  isVisible,
}: InputProps) {
  const id = String(field.databaseId);

  useEffect(() => {
    if (!isVisible) unregister(id);
  }, [unregister, isVisible]);

  if (!isVisible) return null;

  const label = field.label;
  const labelPlacement = field.labelPlacement;
  const colSpan = field.layoutGridColumnSpan;
  const customColumnClass = field.cssClass || "";

  const choicesLayouts = ["choices-horizontal", "choices-vertical"];
  const getChoicesLayout = choicesLayouts.find((layout) =>
    customColumnClass.includes(layout)
  );

  return (
    <FieldWrapper
      {...{ customColumnClass }}
      className={clsx([columnClasses(colSpan)])}
    >
      {labelPlacement !== "HIDDEN" && (
        <label className="mb-2 block font-light">{label}</label>
      )}
      {field.choices && field.choices.length > 0 && (
        <div
          className={clsx([
            "mt-1 gap-3",
            getChoicesLayout === "choices-horizontal"
              ? "flex flex-wrap justify-between"
              : "grid",
          ])}
        >
          {field.choices?.map((choice: GfFieldChoice, i) => (
            <label
              key={choice.value}
              className="flex items-center gap-3 font-light"
            >
              <input
                className="size-3"
                type="checkbox"
                value={choice.value}
                disabled={submitting}
                {...register(id + "." + i)}
              />
              {choice.text}
            </label>
          ))}
        </div>
      )}
      {errors[id] && (
        <span className="text-xs text-red-400">
          {errors[id].message || errors[id].root.message}
        </span>
      )}
    </FieldWrapper>
  );
}
