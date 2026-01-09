import {
  CheckboxField,
  EmailField,
  FormField,
  HtmlField,
} from "@/__generated__/graphql";
import { WordPressTemplate } from "@faustwp/core";
import {
  FieldErrors,
  UseFormRegister,
  UseFormUnregister,
} from "react-hook-form";

export type WordPressTemplateProps = Parameters<typeof WordPressTemplate>[0];

export type FormFieldIntersection = FormField &
  EmailField &
  CheckboxField &
  HtmlField;

export type FormLayoutEnum = "default" | "inline";

export interface InputProps {
  register: UseFormRegister<Record<string, unknown>>;
  unregister: UseFormUnregister<Record<string, unknown>>;
  errors: FieldErrors<Record<string, unknown>>;
  submitting: boolean;
  field: FormFieldIntersection;
  isVisible: boolean;
}
