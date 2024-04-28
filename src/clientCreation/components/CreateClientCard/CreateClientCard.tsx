import { Button, FormControl, Input, Textarea, FormLabel, Select } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import './CreateClientCard.css'
import { zodResolver } from "@hookform/resolvers/zod";
import { InputNumber } from "../../../common/components/InputNumber";
import { FormFields, CreateClientSchema } from "../../schemas/createClientSchema";
import { months } from "../../constants";

export const CreateClientCard = () => {
    const {
        control,
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<FormFields>({
        defaultValues: {
            description: "Default description, lets say DB-stored value",
            month: '1'
        },
        resolver: zodResolver(CreateClientSchema)
    });

    const onSubmit: SubmitHandler<FormFields> = async (values: FormFields): Promise<void> => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500))
            //throw new Error();
            console.log('Values:', values)
        } catch (err) {
            setError("root", {
                message: "Something went wrong eg. in the backend"
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
                <h1>Create Client</h1>

                <FormLabel htmlFor="month">Month</FormLabel>
                <Select {...register("month")} id='month'>
                    {months.map((month, index) => (
                        <option key={index} value={month[0]}>
                            {month[1]}
                        </option>
                    ))}
                </Select>

                <FormLabel htmlFor="gwp">GWP</FormLabel>
                <InputNumber
                    name="gwp"
                    placeholder="0"
                    control={control}
                />
                {errors.gwp && <div style={{color: 'red'}}>{errors.gwp.message}</div>}

                <FormLabel htmlFor="name">Name</FormLabel>
                <Input {...register("name")} id='name'/>
                {errors.name && <div style={{color: 'red'}}>{errors.name.message}</div>}

                <FormLabel htmlFor="description">Description</FormLabel>
                <Textarea {...register("description")} id='description'/>
                {errors.description && <div style={{color: 'red'}}>{errors.description.message}</div>}
            </FormControl>
            <Button variant='outline' onClick={() => reset()}>Reset</Button>
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