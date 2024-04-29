import {FormLabel, Textarea} from "@chakra-ui/react";
import {CommonFormProps} from "../types.ts";
import {useFormContext} from "react-hook-form";

type Props<TFormValues> = CommonFormProps<TFormValues>;

export const MyFormTextArea = <TFormValues extends Record<string, unknown>>(props: Props<TFormValues>) => {
    const { register, formState: { errors} } = useFormContext<TFormValues>();
    return (
        <>
            <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
            <Textarea {...register(props.fieldName)} id={props.id}/>
            {errors[props.fieldName] && <div style={{color: 'red'}}>{`${errors[props.fieldName]!.message}`}</div>}
        </>
    );
}