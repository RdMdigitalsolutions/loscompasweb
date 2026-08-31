export type Category = 'tacos' | 'drinks' | 'desserts';

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: Category;
  spicyLevel?: 0 | 1 | 2 | 3;
  vegetarian?: boolean;
  featured?: boolean;
}

export const tacos: MenuItem[] = [
  { name: 'Tinga tu madre', description: 'Pollo desmenuzado en chipotle, con su buena dosis de sabor y drama. Rematado con pico de gallo.', price: '3,50 €', category: 'tacos', spicyLevel: 2, featured: true },
  { name: 'Carnitas bien puestas', description: 'Cerdo confitado en su propia grasita, como debe ser. Coronado con cebolla y cilantro.', price: '3,50 €', category: 'tacos' },
  { name: 'Cochinita rebelde', description: 'Cochinita pibil cocinada con achiote y mucho amor. Vestida con cebolla morada.', price: '3,50 €', category: 'tacos', spicyLevel: 1, featured: true },
  { name: 'Al pastor sin confesión', description: 'Cerdo adobado al estilo tradicional, con piñita asada. Cerrado con cebolla y cilantro.', price: '3,50 €', category: 'tacos' },
  { name: 'Asada bien parada', description: 'Carne de res marinada. Con cebolla y cilantro.', price: '3,50 €', category: 'tacos' },
  { name: 'Birria del barrio', description: 'Guisado de Jalisco de ternera con sabor de domingo. Con cebolla y cilantro.', price: '3,50 €', category: 'tacos', featured: true },
  { name: 'Pecado de pescado', description: 'Capeado, crujiente y listo para hacer travesuras. Con col rallada y chipotle mayo.', price: '3,50 €', category: 'tacos', spicyLevel: 1 },
  { name: "Camarón, pa' no meter la gamba", description: 'Capeado y sabrosón. Con col rallada y chipotle mayo.', price: '3,50 €', category: 'tacos', spicyLevel: 1, featured: true },
  { name: 'Frijolito consentido', description: 'Frijoles refritos coronados con queso y jalapeños. Simple y feliz.', price: '3,50 €', category: 'tacos', spicyLevel: 1, vegetarian: true },
];

export const drinks: MenuItem[] = [
  { name: 'Chelada', description: 'Cerveza con lima, sal y salsas mexicanas.', price: '5,50 €', category: 'drinks' },
  { name: 'Michelada', description: 'Cerveza con salsas, lima, sal y Clamato.', price: '6,50 €', category: 'drinks', spicyLevel: 1 },
  { name: 'Frozen margarita', description: 'Tequila, triple sec y zumo de lima bien congelado.', price: '7,50 €', category: 'drinks' },
  { name: 'Bulldog', description: 'Frozen margarita coronada con una cerveza invertida.', price: '7,50 €', category: 'drinks' },
  { name: 'Cubeta mexicana', description: 'Cinco cervezas mexicanas a elegir, bien frías y servidas en hielo.', price: '17,50 €', category: 'drinks', featured: true },
];

export const desserts: MenuItem[] = [
  { name: 'Coulant con cajeta', description: 'Bizcochito caliente con corazón de chocolate y cubierto de dulce de leche mexicano.', price: '5,50 €', category: 'desserts', vegetarian: true },
  { name: 'Tarta de queso con cajeta', description: 'Tarta de queso firme, al estilo tradicional, coronada con cajeta mexicana.', price: '5,50 €', category: 'desserts', vegetarian: true },
];

export const allMenuItems = [...tacos, ...drinks, ...desserts];
