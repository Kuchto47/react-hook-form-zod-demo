import './CreateClientCard.css'
import { FormFields, CreateClientSchema } from "../../schemas/createClientSchema";
import { months } from "../../constants";
import { MyFormSelect, MyFormInput, MyFormTextArea, MyFormDollarFormattedNumberInput } from "../../../form/components";
import { useMyForm } from "../../../form/hooks/useMyForm.ts";
import { MyForm } from "../../../form/components/MyForm.tsx";

export const CreateClientCard = () => {
    const form = useMyForm<FormFields>({
        defaultValues: {
            description: "Default description, lets say DB-stored value",
            month: '1'
        },
        schema: CreateClientSchema
    });

    const onSubmit = async (values: FormFields): Promise<void> => {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        //throw new Error(); // simulate error response from BE
        console.log('Values:', {...values, gwp: Number(values.gwp)})
    }

    return (
        <MyForm<FormFields>
            form={form}
            onSubmit={onSubmit}
            submitText='Submit'
            cancelText='Reset'
        >
            <h1>Create Client</h1>
            <MyFormSelect<FormFields> fieldName='month' label='Month' options={months} id='month' />
            <MyFormDollarFormattedNumberInput<FormFields> fieldName='gwp' label='GWP' id='gwp' />
            <MyFormInput<FormFields> fieldName='name' id='name' label='Name'/>
            <MyFormTextArea<FormFields> fieldName='description' label='Description' id='description' />
        </MyForm>
    )
}

/*
segment: unknown;
t2: unknown;
placement: unknown;
entity: unknown;
currency: unknown;
gwp: unknown;
signedShare: unknown;
writtenShare: unknown;
limit: unknown;
att: unknown;
grarc: unknown;
acqCost: unknown;
gglr: unknown;
prob: unknown;
*/

/*
<Select {...register("segment")} id='segment'/>
<Select {...register("t2")} id='T2'/>
<Select {...register("placement")} id='placement'/>
<Select {...register("entity")} id='entity'/>
<Select {...register("currency")} id='currency'/>
<Input id='gwp'/>
<Input id='signedShare'/>
<Input id='writtenShare'/>
<Input id='limit'/>
<Input id='att'/>
<Input id='grarc'/>
<Input id='acqCost'/>
<Input id='gglr'/>
<Input id='prob'/>
*/