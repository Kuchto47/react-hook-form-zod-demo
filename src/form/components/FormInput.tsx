import { FormLabel, Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import {CommonFormProps} from "../types.ts";

type Props<TFormValues> = CommonFormProps<TFormValues>

export const FormInput = <TFormValues extends Record<string, unknown>>(props: Props<TFormValues>) => {
    const { register } = useFormContext<TFormValues>();
    return (
        <>
            <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
            <Input {...register(props.fieldName)} id={props.id}/>
            {props.errorMessage && <div style={{color: 'red'}}>{props.errorMessage}</div>}
        </>
    );
};