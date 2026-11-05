import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    brand: z.string(),
    type: z.enum(['Luft/luft', 'Luft/vatten']),
    price: z.number(),
    campaignPrice: z.number().optional(),
    image: z.string().default('/images/placeholder-heatpump.svg'),
    excerpt: z.string(),
    energyClass: z.string().optional(),
    scop: z.number().optional(),
    heatingCapacity: z.string().optional(),
    suitableFor: z.string().optional(),
    minOutdoorTemp: z.number().optional(),
    noiseLevel: z.number().optional(),
    features: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    inStock: z.boolean().default(true),
    order: z.number().default(100),
  }),
});

export const collections = { products };
