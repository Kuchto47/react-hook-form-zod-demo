import './CreateClientCard.css'
import { FormFields, CreateClientSchema } from "../../schemas/createClientSchema";
import { months } from "../../constants";
import { FormSelect, FormInput, FormTextArea, FormDollarFormattedNumberInput } from "../../../form/components";
import { Form } from "../../../form/components/Form.tsx";

export const CreateClientCard = () => {
    const onSubmit = async (values: FormFields): Promise<void> => {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        //throw new Error();
        console.log('Values:', {...values, gwp: Number(values.gwp)})
    }

    return (
        <Form
            zodSchema={CreateClientSchema}
            onSubmit={onSubmit}
            defaultValues={{
                description: "Default description, lets say DB-stored value",
                month: '1'
            }}
            submitText='Submit'
            cancelText='Reset'
        >
            <h1>Create Client</h1>
            <FormSelect<FormFields> fieldName='month' label='Month' options={months} id='month' />
            <FormDollarFormattedNumberInput<FormFields> fieldName='gwp' label='GWP' id='gwp' placeholder='0' />
            <FormInput<FormFields> fieldName='name' id='name' label='Name'/>
            <FormTextArea<FormFields> fieldName='description' label='Description' id='description' />
        </Form>
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