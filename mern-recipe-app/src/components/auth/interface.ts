import { z } from "zod";

const schema = z
	.object({
		defaultFormData: z.object({
			email: z.string().email().optional(),
			password: z.string().optional(),
		}),
	})
	.partial();

export type IAuth = z.infer<typeof schema>;
