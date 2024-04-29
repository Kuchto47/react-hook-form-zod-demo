import { FormLabel, Select } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import {CommonFormProps} from "../types.ts";

type Props<TFormValues> = {
    options: [string, string][];
} & CommonFormProps<TFormValues>;

export const FormSelect = <TFormValues extends Record<string, unknown>>(props: Props<TFormValues>) => {
    const { register} = useFormContext<TFormValues>();

    return (
        <>
            <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
            <Select {...register(props.fieldName)} id={props.id}>
                {props.options.map((month, index) => (
                    <option key={index} value={month[0]}>
                        {month[1]}
                    </option>
                ))}
            </Select>
            {props.errorMessage && <div style={{color: 'red'}}>{props.errorMessage}</div>}
        </>
    );
}