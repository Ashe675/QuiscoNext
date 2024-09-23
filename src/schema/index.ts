import { z } from 'zod';

export const OrderSchema = z.object({
    name: z.string()
        .min(1, 'Tu nombre es Obligatiorio'),
    total: z.number()
        .min(1, 'Hay errores en la orden'),
    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number(),
    }))
})

export const OrderIdSchema = z.object({
    orderId: z.string()
        .transform((value) => parseInt(value))
        .refine(value => value > 0, { message: 'Hay Errores' })
})

export const SearchSchema = z.object({
    search: z.string()
        .trim()
        .min(1, 'La búsqueda no puede ir vacía')
})

export const ProductSchema = z.object({
    name: z.string().trim().min(1, { message: 'El Nombre del Producto no puede ir vacio' }),
    price: z.string()
        .trim()
        .transform((value) => parseFloat(value))
        .refine((value) => value > 0, { message: 'El Precio debe ser mayor a 0' }),
    categoryId: z.string()
        .trim()
        .transform((value) => parseFloat(value))
        .refine((value) => value > 0, { message: 'La Categoría es Obligatoria' }),
    image: z.string().min(1, { message: 'La imagen es obligatoria' })
})