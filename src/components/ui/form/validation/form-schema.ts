import { z } from "zod";

const VALIDATION_MESSAGES = {
  date: "Invalid date",
  email: "Invalid email address",
  phone: "Invalid phone number",
  required: "This field is required",
  requiredCheckboxes: "At least one selection is required",
  website: "Invalid URL - https://example.com",
};

const PHONE_FORMAT = /^\(\d{3}\)\s\d{3}-\d{4}$/;

export function createFormSchema(formFields: any[]): z.ZodObject<any> {
  const schema: Record<string, z.ZodType<any>> = {};

  formFields.forEach((field) => {
    const id = String(field.databaseId);

    switch (field.type) {
      case "CHECKBOX":
        if (field.isRequired) {
          schema[id] = z
            .array(z.union([z.string(), z.boolean()]))
            .refine((arr) => arr.some((val) => typeof val === "string"), {
              message: VALIDATION_MESSAGES.requiredCheckboxes,
            });
        } else {
          schema[id] = z
            .array(z.union([z.string(), z.boolean()]))
            .optional()
            .transform((val) => val ?? []);
        }
        break;
      case "DATE":
        if (field.isRequired) {
          schema[id] = z
            .string()
            .check(
              z.minLength(1, VALIDATION_MESSAGES.required),
              z.iso.date(VALIDATION_MESSAGES.date)
            );
        } else {
          schema[id] = z
            .string()
            .check(z.iso.date(VALIDATION_MESSAGES.date))
            .or(z.literal(""));
        }
        break;
      case "EMAIL":
        if (field.isRequired) {
          schema[id] = z
            .string()
            .trim()
            .check(
              z.minLength(1, VALIDATION_MESSAGES.required),
              z.email(VALIDATION_MESSAGES.email)
            );
        } else {
          schema[id] = z
            .string()
            .trim()
            .check(z.email(VALIDATION_MESSAGES.email))
            .or(z.literal(""));
        }
        break;
      case "PHONE":
        if (field.isRequired) {
          schema[id] = z
            .string()
            .min(1, VALIDATION_MESSAGES.required)
            .regex(PHONE_FORMAT, VALIDATION_MESSAGES.phone);
        } else {
          schema[id] = z
            .string()
            .regex(PHONE_FORMAT, VALIDATION_MESSAGES.phone)
            .or(z.literal(""));
        }
        break;
      case "NUMBER":
      case "RADIO":
      case "SELECT":
      case "TEXT":
      case "TEXTAREA":
        if (field.isRequired) {
          schema[id] = z.string().min(1, VALIDATION_MESSAGES.required);
        } else {
          schema[id] = z
            .string()
            .optional()
            .transform((val) => val ?? "");
        }
        break;
      case "WEBSITE":
        if (field.isRequired) {
          schema[id] = z
            .string()
            .min(1, VALIDATION_MESSAGES.required)
            .pipe(z.url(VALIDATION_MESSAGES.website));
        } else {
          schema[id] = z.url(VALIDATION_MESSAGES.website).or(z.literal(""));
        }
        break;
      default:
        schema[id] = z.any();
        break;
    }
  });

  return z.object(schema);
}
