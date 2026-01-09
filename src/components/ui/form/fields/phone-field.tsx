import { FormLayoutEnum, InputProps } from "@/types";
import { clsx } from "clsx";
import { useEffect } from "react";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import {
  columnClasses,
  FieldWrapper,
  inputClasses,
  inputLayoutClasses,
  inputSubmittingClasses,
} from "../utils";

interface PhoneFieldProps extends InputProps {
  setValue: UseFormSetValue<Record<string, unknown>>;
  watch: UseFormWatch<Record<string, unknown>>;
  layout: FormLayoutEnum;
}

export function PhoneField({
  register,
  unregister,
  setValue,
  watch,
  errors,
  submitting,
  field,
  layout,
  isVisible,
}: PhoneFieldProps) {
  const id = String(field.databaseId);

  useEffect(() => {
    if (!isVisible) unregister(id);
  }, [unregister, isVisible]);

  if (!isVisible) return null;

  const label = field.label;
  const labelPlacement = field.labelPlacement;
  const colSpan = field.layoutGridColumnSpan;
  const customColumnClass = field.cssClass;

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "");
    const len = digits.length;

    if (len < 4) return digits;
    if (len < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  };

  const phoneValue = (watch("phone") as string) || "";

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue("phone", formatted);
  };

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
          type="tel"
          placeholder={field.placeholder || ""}
          value={phoneValue}
          onChange={handlePhoneChange}
          disabled={submitting}
          className={clsx([
            inputLayoutClasses(layout),
            submitting ? inputSubmittingClasses : inputClasses,
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
