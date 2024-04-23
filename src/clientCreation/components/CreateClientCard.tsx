import {Button, FormControl, Input, Select, Textarea} from "@chakra-ui/react";
import {useForm} from "react-hook-form";

export const CreateClientCard = () => {
    const {
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm()

    const onSubmit = async (values: unknown): Promise<void> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Values:', JSON.stringify(values, null, 4))
                resolve()
            }, 1500)
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.root}>
                <h4>Create Client</h4>
                <Select id='month'/>
                <Select id='segment'/>
                <Select id='T2'/>
                <Select id='placement'/>
                <Select id='entity'/>
                <Select id='currency'/>
                <Input id='gwp'/>
                <Input id='signedShare'/>
                <Input id='writtenShare'/>
                <Input id='limit'/>
                <Input id='att'/>
                <Input id='grarc'/>
                <Input id='acqCost'/>
                <Input id='gglr'/>
                <Input id='prob'/>
                <Input id='name'/>
                <Textarea id='description'/>
                {/*cancel button if preview*/}
                <Button variant='outline'/>
                <Button variant='solid' isLoading={isSubmitting} type='submit'/>
            </FormControl>
        </form>
    )
}