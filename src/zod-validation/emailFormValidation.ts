import * as z from "zod";

export const Form = z.object({
	name: z.string().min(2).max(80),
	email: z.email().max(254),
	message: z.string().min(10).max(3000),
});
