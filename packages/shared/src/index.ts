import * as z from 'zod';

const passwordSchema = z
  .string()
  .min(8)
  .refine((value) => new TextEncoder().encode(value).length <= 72, {
    error: 'A senha deve ter no máximo 72 bytes em UTF-8',
  });

const emailSchema = z.string().trim().toLowerCase().pipe(z.email());

const registerSchema = z.object({
  name: z.string().trim().min(1).max(50),
  email: emailSchema,
  password: passwordSchema,
});

const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

export { registerSchema, loginSchema };
