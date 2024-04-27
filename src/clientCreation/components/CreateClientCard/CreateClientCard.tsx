import { Button, FormControl, Input, Select, Textarea, FormLabel } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Month } from "../../types";
import './CreateClientCard.css'

type FormFields = {
    month: Month;
    name: string;
    description: string;
}

export const CreateClientCard = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting }
    } = useForm<FormFields>({
        defaultValues: {
            description: "Default description"
        },
    })

    const onSubmit: SubmitHandler<FormFields> = async (values: FormFields): Promise<void> => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500))
            //throw new Error();
            console.log('Values:', JSON.stringify(values, null, 4))
        } catch (err) {
            // eg. Backend reponse error
            setError("root", {
                message: "Something went wrong"
            })
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
                minWidth: '780px',
                margin: '50px'
            }}
        >
            <FormControl isInvalid={!!errors.root}>
                <h4>Create Client</h4>

                <FormLabel htmlFor="month">Month</FormLabel>
                <Select {...register("month")} id='month'/>

                <FormLabel htmlFor="name">Name</FormLabel>
                <Input {...register("name", { required: "Name is required" })} id='name'/>
                {errors.name && <div style={{color: 'red'}}>{errors.name.message}</div>}
                
                <FormLabel htmlFor="description">Description</FormLabel>
                <Textarea {...register("description", {
                    maxLength: {
                        value: 120,
                        message: "Description must not be longer than 120 characters"
                    },
                })} id='description'/>
                {errors.description && <div style={{color: 'red'}}>{errors.description.message}</div>}
            </FormControl>
            {/*cancel button if preview*/}
            <Button variant='outline'>Cancel</Button>
            <Button
                variant='solid'
                disabled={isSubmitting}
                isLoading={isSubmitting}
                type='submit'
            >
                Submit
            </Button>
            {errors.root && <div style={{color: 'red'}}>{errors.root.message}</div>}
        </form>
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