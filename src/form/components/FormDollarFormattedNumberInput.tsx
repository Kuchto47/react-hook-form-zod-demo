import { FormLabel, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";
import { ChangeEvent } from "react";
import { CommonFormProps } from "../types.ts";

type InputNumberProps<TFormValues extends Record<string, unknown>> = {
    placeholder?: string;
} & CommonFormProps<TFormValues>;

export const FormDollarFormattedNumberInput = <TFormValues extends Record<string, unknown>>(props: InputNumberProps<TFormValues>) => {
    const { control } = useFormContext<TFormValues>();
    return (
        <>
            <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
            <Controller
                name={props.fieldName}
                control={control}
                render={({ field }) => (
                    <InputGroup>
                        <InputLeftAddon
                            children="$"
                        />
                        <Input
                            {...field}
                            placeholder={props.placeholder}
                            id={props.id}
                            value={formatNumber(field.value as NumberToFormat)}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                const formattedValue = formatNumber(event.target.value);
                                field.onChange(formattedValue.replace(/,/g, ''));
                            }}
                        />
                    </InputGroup>
                )}
            />
            {props.errorMessage && <div style={{color: 'red'}}>{props.errorMessage}</div>}
        </>
    )
}

type NumberToFormat = string | number | undefined;

const formatNumber = (value: NumberToFormat) => {
    if (value === undefined) {
        return '';
    }
    if (typeof value === 'number') {
        value = `${value}`;
    }
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};