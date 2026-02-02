/**
 * Service domain model used across public booking & admin.
 */

export type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
  durationMin?: number;
};

export type ServiceCategory = {
  id: string;
  title: string;
  description?: string;
  services: Service[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'hair',
    title: 'Hair Styling',
    description: 'Cuts, coloring, and styling for every look.',
    services: [
      {
        id: 'haircut-women',
        name: 'Women’s Haircut',
        description: 'Personalized haircut and styling session.',
        price: 40,
        durationMin: 45,
      },
      {
        id: 'hair-coloring',
        name: 'Hair Coloring',
        description: 'Professional coloring with premium products.',
        price: 80,
        durationMin: 90,
      },
      {
        id: 'special-occasion',
        name: 'Special Occasion Styling',
        description: 'Elegant styles for events and celebrations.',
        price: 65,
      },
    ],
  },
  {
    id: 'skincare',
    title: 'Skincare',
    description: 'Treatments designed for healthy, radiant skin.',
    services: [
      {
        id: 'signature-facial',
        name: 'Signature Facial',
        description: 'Deep cleansing and rejuvenation treatment.',
        price: 60,
      },
      {
        id: 'anti-aging-facial',
        name: 'Anti-Aging Facial',
        description: 'Advanced treatment targeting fine lines.',
        price: 90,
      },
    ],
  },
  {
    id: 'nails',
    title: 'Nail Services',
    services: [
      {
        id: 'manicure',
        name: 'Manicure',
        description: 'Classic and modern manicure options.',
        price: 25,
      },
      {
        id: 'pedicure',
        name: 'Pedicure',
        description: 'Relaxing pedicure with premium care.',
        price: 35,
      },
    ],
  },
];
