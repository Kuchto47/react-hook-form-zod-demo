import { FormLabel, Select } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import {CommonFormProps} from "../types.ts";

type Props<TFormValues> = {
    options: [string, string][];
} & CommonFormProps<TFormValues>;

export const MyFormSelect = <TFormValues extends Record<string, unknown>>(props: Props<TFormValues>) => {
    const { register, formState: { errors }} = useFormContext<TFormValues>();

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
            {errors[props.fieldName] && <div style={{color: 'red'}}>{`${errors[props.fieldName]!.message}`}</div>}
        </>
    );
}