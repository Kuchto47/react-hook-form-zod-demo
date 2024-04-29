import { PropsWithChildren } from "react";
import {FieldValues, FormProvider, SubmitHandler, UseFormReturn} from "react-hook-form";
import { Button, FormControl } from "@chakra-ui/react";

type FormButtons = {
    submitText?: string;
    cancelText?: string;
    onCancelClick?: () => void;
}

type FormProps<TFormValues extends FieldValues> = {
    form: UseFormReturn<TFormValues>
    onSubmit: (values: TFormValues) => Promise<void>
} & FormButtons

export const MyForm = <TFormValues extends FieldValues>(props: PropsWithChildren<FormProps<TFormValues>>) => {
    const {
        handleSubmit,
        reset,
        setError,
        formState: { errors , isSubmitting}
    } = props.form;

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
        <FormProvider {...props.form}>
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