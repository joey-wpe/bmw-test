import { FormLayoutEnum, InputProps } from "@/types";
import { clsx } from "clsx";
import { useEffect } from "react";
import {
  columnClasses,
  FieldWrapper,
  inputClasses,
  inputLayoutClasses,
  inputSubmittingClasses,
} from "../utils";

interface TextFieldProps extends InputProps {
  layout: FormLayoutEnum;
}

export function TextField({
  register,
  unregister,
  errors,
  submitting,
  field,
  layout,
  isVisible,
}: TextFieldProps) {
  const id = String(field.databaseId);

  useEffect(() => {
    if (!isVisible) unregister(id);
  }, [unregister, isVisible]);

  if (!isVisible) return null;

  const label = field.label;
  const labelPlacement = field.labelPlacement;
  const colSpan = field.layoutGridColumnSpan;
  const customColumnClass = field.cssClass;

  const typeMap: Record<string, string> = {
    EMAIL: "email",
    NUMBER: "number",
    PASSWORD: "password",
    WEBSITE: "url",
    PHONE: "tel",
    DATE: "date",
  };

  const inputType = typeMap[field.type] || "text";

  return (
    <FieldWrapper
      {...{ customColumnClass }}
      className={clsx([
        columnClasses(colSpan),
        layout === "inline" && "flex-1",
      ])}
    >
      {labelPlacement !== "HIDDEN" && (
        <label className="mb-1 block font-light">{label}</label>
      )}
      <div className="relative">
        <input
          {...register(id, { required: field.isRequired })}
          type={inputType}
          placeholder={field.placeholder || ""}
          disabled={submitting}
          className={clsx([
            inputLayoutClasses(layout),
            submitting ? inputSubmittingClasses : inputClasses,
            inputType === "date" && "h-[48px]",
          ])}
        />
        {errors[id] && (
          <span className="absolute bottom-0 left-2 text-xs text-red-400">
            {errors[id].message}
          </span>
        )}
      </div>
    </FieldWrapper>
  );
}
