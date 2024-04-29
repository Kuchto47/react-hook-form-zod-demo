import { PropsWithChildren } from "react";
import { DefaultValues, FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Button, FormControl } from "@chakra-ui/react";
import { ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormButtons = {
    submitText?: string;
    cancelText?: string;
    onCancelClick?: () => void;
}

type FormProps<TFormValues extends Record<string, unknown>> = {
    onSubmit: (values: TFormValues) => Promise<void>
    defaultValues: DefaultValues<TFormValues>
    zodSchema: ZodSchema<TFormValues>
} & FormButtons

export const Form = <TFormValues extends FieldValues>(props: PropsWithChildren<FormProps<TFormValues>>) => {
    const form = useForm<TFormValues>({
        defaultValues: {...props.defaultValues},
        resolver: zodResolver(props.zodSchema)
    });
    const {
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting }
    } = form;
    const onSubmit: SubmitHandler<TFormValues> = async (values: TFormValues): Promise<void> => {
        try {
            await props.onSubmit(values)
        } catch (err) {
            setError("root", {
                message: "Something went wrong eg. in the backend"
            })
        }
    }

    return (
        <FormProvider {...form}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    minWidth: '780px',
                    margin: '50px'
                }}
            >
                <FormControl isInvalid={!!errors.root}>
                    {props.children}
                </FormControl>
                {props.cancelText &&
                    <Button variant='outline' onClick={props.onCancelClick ? props.onCancelClick : () => reset() }>
                        {props.cancelText}
                    </Button>
                }
                {props.submitText &&
                    <Button
                        variant='solid'
                        disabled={isSubmitting}
                        isLoading={isSubmitting}
                        type='submit'
                    >
                        Submit
                    </Button>
                }
                {errors.root && <div style={{color: 'red'}}>{errors.root.message}</div>}
            </form>
        </FormProvider>
);
}