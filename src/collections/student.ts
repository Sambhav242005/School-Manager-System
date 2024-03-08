import { z } from "zod";

export const StudentLogin = z.object({
  rollno: z.string(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

export type TStudentLogin = z.infer<typeof StudentLogin>;

export const StudentRegistrationRegister = z.object({
  fullname: z.string().min(2, {
    message: "Name must be at least 2 characters long.",
  }),
  rollno: z.string().min(2, {
    message: "Name must be at least 2 characters long.",
  }),
  class: z.number(),
  section: z.string(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
  confirmPassword: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

export type TStudentRegistrationRegister = z.infer<
  typeof StudentRegistrationRegister
>;
