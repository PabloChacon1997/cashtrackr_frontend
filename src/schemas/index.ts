import { z } from 'zod'


export const RegisterSchema = z.object({
  email: z.string().min(1,{ message: 'El email es obligatorio' }).email({message: 'Email es invalido'}),
  name: z.string().min(1,{ message: 'El nombre es obligatorio' }),
  password:  z.string().min(8,{ message: 'El password es muy corto, minimo 8 caracteres' }),
  password_confirmation: z.string(),
}).refine((data) => data.password === data.password_confirmation, {
  message: 'Los passwords no son iguales',
  path: ['password_confirmation']
})

export const SuccessSchema = z.string().min(1,{ message: 'El nombre es obligatorio' });
export const ErrorResponseSchema = z.object({
  error: z.string()
})