import {Path} from "react-hook-form";

export type CommonFormProps<TFormValues> = {
    fieldName: Path<TFormValues>;
    label: Capitalize<string>;
    id: string
    errorMessage: string | undefined;
}