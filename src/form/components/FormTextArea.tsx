import {FormLabel, Textarea} from "@chakra-ui/react";
import {CommonFormProps} from "../types.ts";
import {useFormContext} from "react-hook-form";

type Props<TFormValues> = CommonFormProps<TFormValues>;

export const FormTextArea = <TFormValues extends Record<string, unknown>>(props: Props<TFormValues>) => {
    const { register } = useFormContext<TFormValues>();
    return (
        <>
            <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
            <Textarea {...register(props.fieldName)} id={props.id}/>
            {props.errorMessage && <div style={{color: 'red'}}>{props.errorMessage}</div>}
        </>
    );
}