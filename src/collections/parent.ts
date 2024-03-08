import { z } from "zod";
export const ParentLogin = z.object({
  phone: z.string(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

export type TParentLogin = z.infer<typeof ParentLogin>;

export const ParentRegistrationRegister = z.object({
  fullname: z.string().min(2, {
    message: "Name must be at least 2 characters long.",
  }),
  phone: z.string().min(2, {
    message: "Name must be at least 2 characters long.",
  }),
  email: z.string().email(),
  address: z.string(),
  gender: z.enum(["Male", "Female"] as const).default("Male"),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
  confirmPassword: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

export type TParentRegistrationRegister = z.infer<
  typeof ParentRegistrationRegister
>;
