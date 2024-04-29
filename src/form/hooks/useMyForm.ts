import {DefaultValues, FieldValues, useForm, UseFormReturn} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ZodSchema} from "zod";

type FormOptions<TFormValues extends FieldValues> = {
    defaultValues: DefaultValues<TFormValues>
    schema: ZodSchema<TFormValues>
}

export const useMyForm = <TFormValues extends FieldValues>(options: FormOptions<TFormValues>): UseFormReturn<TFormValues> => {
    const { defaultValues, schema } = options;

    return useForm<TFormValues>({
        defaultValues: {...defaultValues},
        resolver: zodResolver(schema)
    });
}