import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { Control, Controller } from "react-hook-form";
import { FormFields } from "../../clientCreation/schemas/createClientSchema";
import { ChangeEvent } from "react";

interface Props {
    name: keyof FormFields;
    placeholder?: string;
    control: Control<FormFields>;
}

export const InputNumber = (props: Props) => {
    return (
        <Controller
            name={props.name}
            control={props.control}
            defaultValue=""
            render={({ field }) => (
                <InputGroup>
                    <InputLeftAddon
                        children="$"
                    />
                    <Input
                        {...field}
                        placeholder={props.placeholder}
                        id={props.name}
                        value={formatNumber(field.value)}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            const formattedValue = formatNumber(event.target.value);
                            field.onChange(formattedValue.replace(/,/g, ''));
                        }}
                    />
                </InputGroup>
            )}
        />
    )
}

const formatNumber = (value: string | number) => {
    if (typeof value === 'number') {
        value = `${value}`;
    }
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};