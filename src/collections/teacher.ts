import { z } from "zod";

export const TeacherLogin = z.object({
  id: z.string(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

export type TTeacherLogin = z.infer<typeof TeacherLogin>;

export const TeacherRegistrationRegister = z.object({
  fullname: z.string().min(2, {
    message: "Name must be at least 2 characters long.",
  }),
  phone: z.string().min(2, {
    message: "Name must be at least 2 characters long.",
  }),
  address: z.string(),
  gender: z.enum(["Male", "Female"] as const).default("Male"),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
  confirmPassword: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

export type TTeacherRegistrationRegister = z.infer<
  typeof TeacherRegistrationRegister
>;
