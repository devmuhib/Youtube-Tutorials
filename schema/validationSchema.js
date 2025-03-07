import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long").max(100),
  email: z.string().email("Invalid email address").max(50, "Email is too long"),
  password: z
    .string()
    .min(4, "Password must be at least 4 characters long")
    .max(50, "Password is too long"),
  //   .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  //   .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  //   .regex(/[0-9]/, "Password must contain at least one number")
  //   .regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character"),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string(),
});

// nodes schemas
export const sheetSchema = z.object({
  label: z.string().min(2).max(100),
  action: z.string().min(2).max(100),
  config: z.object({
    spreadsheet: z.string().min(1),
    worksheet: z.string().min(1),
  }),
});

export const discordSchema = z.object({
  label: z.string().min(2).max(100),
  config: z.object({
    message: z.string().min(1).max(1000),
  }),
});

export const sendEmailSchema = z.object({
  label: z
    .string()
    .min(2, "Label must be at least 2 characters")
    .max(100, "Label must be 100 characters or less"),
  config: z.object({
    fromEmail: z
      .string()
      .min(2, "From email must be at least 2 characters")
      .max(50)
      .email("Invalid email address"),
    fromName: z
      .string()
      .min(2, "From name must be at least 2 characters")
      .max(50),
    subject: z.string().min(2, "Subject must be at least 2 characters").max(50),
    message: z
      .string()
      .min(2, "Message must be at least 2 characters")
      .max(10000),
  }),
});

export const orderSchema = z.object({
  type: z.string().min(2).max(50),
  parameters: z.string().min(2).max(50),
  price: z.string().min(0),
  status: z.enum(["on-time", "delay", "delivered"]),
  deliveryDate: z.date(),

  sender: z.object({
    name: z.string().min(2).max(50),
    address: z.string().min(5).max(100),
    phone: z.string().min(11).max(15),
  }),
  receiver: z.object({
    name: z.string().min(2).max(50),
    address: z.string().min(5).max(100),
    phone: z.string().min(11).max(15),
  }),
});
