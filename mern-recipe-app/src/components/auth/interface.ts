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
const formData = schema.pick({ defaultFormData: true });

export type IAuth = z.infer<typeof schema>;

export type IFormData = z.infer<typeof formData>;
