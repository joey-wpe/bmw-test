import {
  ConditionalLogic,
  ConditionalLogicRule,
} from "@/__generated__/graphql";
import { FormLayoutEnum } from "@/types";
import { clsx } from "clsx";
import { ReactNode } from "react";

export const columnClasses = (colSpan: number) => {
  return `col-span-12 md:col-span-12 sm:col-span-${colSpan ? colSpan : "12"} lg:col-span-${colSpan ? colSpan : "12"}`;
};

export const inputLayoutClasses = (layout: FormLayoutEnum) =>
  clsx([
    "w-full placeholder:font-light",
    layout === "inline" && "p-2",
    layout === "default" && "px-2 py-3",
  ]);
export const inputClasses = "text-black bg-white";
export const inputSubmittingClasses = "text-black/40 bg-white/70";

interface FieldWrapperProps {
  className?: string;
  customColumnClass: string;
  children: ReactNode;
}
export const FieldWrapper = ({
  className,
  customColumnClass,
  children,
}: FieldWrapperProps) => {
  return (
    <div
      className={clsx([
        "relative",
        className,
        customColumnClass && "grid grid-cols-12 gap-3",
      ])}
    >
      {customColumnClass ? (
        <div className={clsx(["relative col-span-12", customColumnClass])}>
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export const evaluateConditionalLogic = (
  logic: ConditionalLogic,
  allValues: Record<string, any>
): boolean => {
  if (!logic) return true; // no logic = always show

  const { actionType, logicType, rules } = logic;
  if (!rules?.length) return true;

  const results = rules.map((rule: ConditionalLogicRule) => {
    const fieldValue = allValues?.[String(rule.fieldId)];
    const compareVal = rule.value;

    switch (rule.operator) {
      case "IS":
        return fieldValue === compareVal;
      case "IS_NOT":
        return fieldValue !== compareVal;
      case "CONTAINS":
        return (
          typeof fieldValue === "string" && fieldValue.includes(compareVal)
        );
      default:
        return false;
    }
  });

  const passed =
    logicType === "ALL" ? results.every(Boolean) : results.some(Boolean);

  // Gravity Forms supports "show" or "hide" action types
  return actionType === "SHOW" ? passed : !passed;
};
