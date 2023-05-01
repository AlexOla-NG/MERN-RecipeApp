import { z } from "zod";

const schema = z
	.object({
		defaultFormData: z.object({
			email: z.string().email().optional(),
			password: z.string().optional(),
		}),
		toggleView: z.function(),
	})
	.partial();

export type IAuth = z.infer<typeof schema>;

const formData = z.object({
	email: z.string().email().optional(),
	password: z.string().optional(),
});
// const formData = schema.pick({ defaultFormData: true }).partial();

export type IFormData = z.infer<typeof formData>;
