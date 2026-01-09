import { GfFieldChoice } from "@/__generated__/graphql";
import { InputProps } from "@/types";
import { clsx } from "clsx";
import { useEffect } from "react";
import { columnClasses, FieldWrapper } from "../utils";

export function RadioField({
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
  const customColumnClass = field.cssClass;

  return (
    <FieldWrapper
      {...{ customColumnClass }}
      className={clsx([columnClasses(colSpan)])}
    >
      {labelPlacement !== "HIDDEN" && (
        <label className="mb-2 block font-light">{label}</label>
      )}

      {field.choices && field.choices.length > 0 && (
        <div className="mt-1 grid gap-3">
          {field.choices.map((choice: GfFieldChoice) => (
            <label
              key={choice.value}
              className="flex w-fit items-center gap-3 font-light"
            >
              <input
                className="size-3"
                type="radio"
                value={choice.value}
                disabled={submitting}
                {...register(id)}
              />
              {choice.text}
            </label>
          ))}
        </div>
      )}

      {errors[id] && (
        <span className="text-xs text-red-400">
          {errors[id]?.message || errors[id]?.root?.message}
        </span>
      )}
    </FieldWrapper>
  );
}
