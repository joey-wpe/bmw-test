"use client";
import { FormFieldValuesInput } from "@/__generated__/graphql";
import { Skeleton } from "@/components/ui";
import { GET_GF_FORM, SUBMIT_GF_FORM } from "@/queries/form-queries/form";
import { FormFieldIntersection, FormLayoutEnum } from "@/types";
import { useMutation, useQuery } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import {
  CheckboxField,
  HtmlField,
  PhoneField,
  RadioField,
  SelectField,
  SubmitButton,
  TextField,
  TextareaField,
} from "./fields";
import { evaluateConditionalLogic } from "./utils";
import { createFormSchema } from "./validation/form-schema";

interface FormProps {
  formId: string;
  layout?: FormLayoutEnum;
  loaderWidth?: number;
  loaderHeight?: number;
}

export function Form({
  formId,
  layout = "default",
  loaderHeight = 250,
}: FormProps) {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const { data, loading, error } = useQuery(GET_GF_FORM, {
    variables: { id: formId },
  });
  const [formSchema, setFormSchema] = useState<z.ZodObject<any>>(z.object({}));

  const [submitForm, { loading: submitting }] = useMutation(SUBMIT_GF_FORM);

  const {
    register,
    unregister,
    handleSubmit,
    control,
    formState,
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {},
    mode: "onTouched",
    reValidateMode: "onBlur",
  });

  const formValues = useWatch({ control });

  useEffect(() => {
    const fields = data?.gfForm?.formFields.nodes;
    if (!fields) return;

    const visibleFields = fields.filter((field: FormFieldIntersection) =>
      evaluateConditionalLogic(field.conditionalLogic, formValues)
    );

    const newSchema = createFormSchema(visibleFields);
    setFormSchema(newSchema);
  }, [formValues, data]);

  const { errors } = formState;

  useEffect(() => {
    if (data?.gfForm?.formFields?.nodes) {
      const defaults: Record<string, any> = {};

      data.gfForm.formFields.nodes.forEach((field) => {
        const id = String(field.databaseId);

        switch (field.type) {
          case "CHECKBOX":
            defaults[id] = [];
            break;
          case "RADIO":
            defaults[id] = "";
            break;
          default:
            defaults[id] = "";
            break;
        }
      });

      reset(defaults);
    }
  }, [data, reset]);

  if (loading) {
    return <Skeleton height={loaderHeight} />;
  }
  if (error) {
    return <p>Error loading form.</p>;
  }

  const form = data?.gfForm;
  if (!form) return <p>Form not found.</p>;

  const onSubmit = async (values: Record<string, any>) => {
    const fieldValues: FormFieldValuesInput[] = Object.entries(values)
      .map(([fieldId, value]) => {
        const field = form.formFields?.nodes.find(
          (f: any) => String(f.databaseId) === fieldId
        );

        if (!field) return null;

        switch (field.type) {
          case "EMAIL":
            return {
              id: Number(fieldId),
              emailValues: { value },
            };

          case "CHECKBOX":
            return {
              id: Number(fieldId),
              checkboxValues: value
                .map((val: boolean | string, i: number) =>
                  val
                    ? {
                        value: val,
                        inputId: Number(fieldId) + (i + 1) / 10,
                      }
                    : null
                )
                .filter(Boolean),
            };

          default:
            return {
              id: Number(fieldId),
              value,
            };
        }
      })
      .filter(Boolean) as FormFieldValuesInput[];

    const { data } = await submitForm({
      variables: {
        input: {
          id: formId,
          fieldValues,
        },
      },
    });

    if (data?.submitGfForm?.errors?.length) {
      console.error(data?.submitGfForm);
      setSubmitError(
        "There was an error submitting this form. Please try again later."
      );
    } else {
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx([
        "max-w-lg",
        layout === "default" && "grid grid-cols-12 gap-3",
        layout === "inline" && "relative flex flex-wrap gap-1",
      ])}
    >
      {form.formFields.nodes.map((field: FormFieldIntersection) => {
        if (field.visibility === "HIDDEN") {
          return null;
        }

        const isVisible = evaluateConditionalLogic(
          field.conditionalLogic,
          formValues
        );

        const inputProps = {
          ...{
            register,
            unregister,
            errors,
            submitting,
            field,
            isVisible,
          },
        };

        switch (field.type) {
          case "CHECKBOX":
            return <CheckboxField key={field.id} {...inputProps} />;
          case "HTML":
            return <HtmlField key={field.id} {...{ field }} />;

          case "PHONE":
            return (
              <PhoneField
                key={field.id}
                {...inputProps}
                {...{
                  setValue,
                  watch,
                  layout,
                }}
              />
            );

          case "RADIO":
            return <RadioField key={field.id} {...inputProps} />;

          case "DATE":
          case "EMAIL":
          case "NUMBER":
          case "TEXT":
          case "WEBSITE":
            return <TextField key={field.id} {...inputProps} {...{ layout }} />;

          case "TEXTAREA":
            return <TextareaField key={field.id} {...inputProps} />;

          case "SELECT":
            return <SelectField key={field.id} {...inputProps} />;

          default:
            return null;
        }
      })}
      <SubmitButton {...{ layout, submitting, submitSuccess, submitError }} />
    </form>
  );
}
