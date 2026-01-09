import { GfFieldChoice } from "@/__generated__/graphql";
import { InputProps } from "@/types";
import { clsx } from "clsx";
import { useEffect } from "react";
import {
  columnClasses,
  FieldWrapper,
  inputClasses,
  inputLayoutClasses,
  inputSubmittingClasses,
} from "../utils";

export function SelectField({
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
        <label className="mb-1 block font-light">{label}</label>
      )}

      <select
        {...register(id, { required: field.isRequired })}
        disabled={submitting}
        className={clsx([
          inputLayoutClasses("default"),
          submitting ? inputSubmittingClasses : inputClasses,
        ])}
      >
        {field.choices &&
          field.choices.map((choice: GfFieldChoice) => (
            <option key={choice.value} value={choice.value} className="">
              {choice.text}
            </option>
          ))}
      </select>

      {errors[id] && (
        <span className="text-xs text-red-400">
          {errors[id]?.message || errors[id]?.root?.message}
        </span>
      )}
    </FieldWrapper>
  );
}
