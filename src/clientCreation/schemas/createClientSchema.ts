import { z } from 'zod';

export const CreateClientSchema = z.object({
    month: z.string().refine((val) => /^1|2|3|4|5|6|7|8|9|10|11|12$/.test(val)),
    gwp: z.string()
        .refine(value => /^\d*$/.test(value) && parseInt(value) >= 1 && parseInt(value) <= 2000000000, {
            message: 'GWP must be a whole number between 1 and 2 billion'
        }),
    name: z.string().min(1, 'Name is required'),
    description: z.string().max(120, 'Description must not be longer than 120 characters')
});

export type FormFields = z.infer<typeof CreateClientSchema>;