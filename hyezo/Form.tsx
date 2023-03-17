import { useZodForm } from "hyezo/hooks";
import { ComponentProps } from "react";
import { FormProvider, SubmitHandler, useFormContext } from "react-hook-form";
import { z } from "zod";

const InputSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, "More than 8 characters"),
    url: z.string().url("Starts with: https://www.").default("https://www."),
    textarea: z.string(),
    text: z.string(),
    select: z
      .union([z.string(), z.number()])
      .or(z.array(z.union([z.string(), z.number()])))
      .or(z.record(z.any())),
    combo: z.string(),
  })
  .partial();

export type InputProps = z.infer<typeof InputSchema>;

interface FormProps extends Omit<ComponentProps<"fieldset">, "onSubmit"> {
  onSubmit: SubmitHandler<InputProps>;
}

/**
 * The form component is used to render a `form`. Given a `children` like input, select, textarea, etc, it will render a `form` element.
 * And also it requires `onSubmit` event handler that will be called when the form is submitted.
 * Validating a form is done by using `zod` schema & custom hook `useZodForm`.
 */
export default function Form({ onSubmit, className, ...props }: FormProps) {
  const form = useZodForm({ schema: InputSchema });
  const { formState, handleSubmit } = form;

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset
          className={`flex flex-col gap-2 disabled:cursor-progress ${className}`}
          disabled={formState.isSubmitting}
          {...props}
        >
          {props.children}
        </fieldset>
      </form>
    </FormProvider>
  );
}

interface FieldErrorProps {
  name?: string;
}

export function FieldError({ name }: FieldErrorProps) {
  const {
    formState: { errors },
  } = useFormContext();

  if (!name) return null;

  const error = errors[name];

  if (!error) return null;

  return <span>{error.message as string}</span>;
}
