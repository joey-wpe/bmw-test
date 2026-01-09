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

export function TextareaField({
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
      <div className="relative">
        <textarea
          {...register(id, { required: field.isRequired })}
          placeholder={field.placeholder || ""}
          disabled={submitting}
          className={clsx([
            "h-[115px]",
            inputLayoutClasses("default"),
            submitting ? inputSubmittingClasses : inputClasses,
          ])}
        />
        {errors[id] && (
          <span className="absolute bottom-1 left-2 text-xs text-red-400">
            {errors[id].message}
          </span>
        )}
      </div>
    </FieldWrapper>
  );
}
