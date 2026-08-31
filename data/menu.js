'use strict';

window.menuItems = [
  { name: 'Tinga tu madre', description: 'Pollo desmenuzado en chipotle, con su buena dosis de sabor y drama. Rematado con pico de gallo.', price: 3.50, category: 'tacos', spicyLevel: 2, vegetarian: false, featured: true },
  { name: 'Carnitas bien puestas', description: 'Cerdo confitado en su propia grasita, coronado con cebolla y cilantro.', price: 3.50, category: 'tacos', spicyLevel: 0, vegetarian: false, featured: false },
  { name: 'Cochinita rebelde', description: 'Cochinita pibil cocinada con achiote y mucho amor, vestida con cebolla morada.', price: 3.50, category: 'tacos', spicyLevel: 1, vegetarian: false, featured: true },
  { name: 'Al pastor sin confesión', description: 'Cerdo adobado al estilo tradicional, con piñita asada, cebolla y cilantro.', price: 3.50, category: 'tacos', spicyLevel: 0, vegetarian: false, featured: false },
  { name: 'Asada bien parada', description: 'Carne de res marinada, sin rodeos. Lleva cebolla y cilantro como debe ser.', price: 3.50, category: 'tacos', spicyLevel: 0, vegetarian: false, featured: false },
  { name: 'Birria del barrio', description: 'Guisado de Jalisco de ternera con sabor de domingo, cebolla, cilantro y ganas de mojarlo todo.', price: 3.50, category: 'tacos', spicyLevel: 0, vegetarian: false, featured: true },
  { name: 'Pecado de pescado', description: 'Capeado, crujiente y listo para hacer travesuras. Col rallada y chipotle mayo.', price: 3.50, category: 'tacos', spicyLevel: 1, vegetarian: false, featured: false },
  { name: "Camarón, pa' no meter la gamba", description: 'Capeado y sabrosón, con col rallada y chipotle mayo con toda la actitud.', price: 3.50, category: 'tacos', spicyLevel: 2, vegetarian: false, featured: true },
  { name: 'Frijolito consentido', description: 'Frijoles refritos coronados con queso y jalapeños. Simple y feliz.', price: 3.50, category: 'tacos', spicyLevel: 1, vegetarian: true, featured: false },
  { name: 'Cubeta mexicana', description: 'Cinco cervezas mexicanas a elegir, bien frías y servidas en hielo.', price: 17.50, category: 'drinks', spicyLevel: 0, vegetarian: true, featured: true },
  { name: 'Cubeta de Alhambra', description: 'Cinco cervezas Alhambra Especial heladas, presentadas en cubeta con hielo.', price: 13.50, category: 'drinks', spicyLevel: 0, vegetarian: true, featured: false },
  { name: 'Refrescos', description: 'Coca-Cola, Fanta, Nestea o Aquarius.', price: 2.75, category: 'drinks', spicyLevel: 0, vegetarian: true, featured: false },
  { name: 'Jarritos mexicanos', description: 'Piña, guayaba, mango, mandarina o pomelo.', price: 4.50, category: 'drinks', spicyLevel: 0, vegetarian: true, featured: false },
  { name: 'Aguas frescas mexicanas', description: 'Bebidas tradicionales con fruta natural. Pregunta por las disponibles del día.', price: 3.00, category: 'drinks', spicyLevel: 0, vegetarian: true, featured: false },
  { name: 'Chelada', description: 'Cerveza con lima, sal y nuestro toque especial de salsas mexicanas.', price: 5.50, category: 'drinks', spicyLevel: 0, vegetarian: true, featured: false },
  { name: 'Michelada', description: 'Cerveza con salsas Maggi, inglesa y Valentina, lima, sal y Clamato.', price: 6.50, category: 'drinks', spicyLevel: 1, vegetarian: true, featured: true },
  { name: 'Frozen margarita', description: 'Tequila, triple sec y zumo de lima bien congelado.', price: 7.50, category: 'drinks', spicyLevel: 0, vegetarian: true, featured: true },
  { name: 'Bulldog', description: 'Frozen margarita coronada con una cerveza invertida que se mezcla poco a poco.', price: 7.50, category: 'drinks', spicyLevel: 0, vegetarian: true, featured: false },
  { name: 'Coulant con cajeta', description: 'Bizcochito caliente con corazón de chocolate y dulce de leche mexicano.', price: 5.50, category: 'desserts', spicyLevel: 0, vegetarian: true, featured: false },
  { name: 'Tarta de queso con cajeta', description: 'Tarta de queso firme, con toque casero y coronada con cajeta mexicana.', price: 5.50, category: 'desserts', spicyLevel: 0, vegetarian: true, featured: true }
];

window.combos = [
  { name: 'Menú Compas', description: '4 tacos —tinga, cochinita, carnitas y birria— más totopos con guacamole.', price: 17.50, label: 'Para uno que viene con hambre' },
  { name: 'Menú para 2', description: 'Nachos light, 6 tacos y 2 quesabirrosas de birria.', price: 39.50, label: 'Compartir es de compas' },
  { name: 'Plato para compartir', description: '16 tacos para probarlo todo: tinga, cochinita, carnitas y birria.', price: 52.50, label: 'La mesa completa' }
];

window.sauces = [
  { name: 'Tomatillo', description: 'Verde, fresca y sabrosa. No pica nada.', spicyLevel: 0 },
  { name: 'Aguacate y jalapeño', description: 'Cremosa y con picor amable.', spicyLevel: 1 },
  { name: 'Chipotle', description: 'Ahumadita, dulcecita y con carácter.', spicyLevel: 2 },
  { name: 'Salsa de árbol', description: 'Roja, intensa y directa al corazón.', spicyLevel: 3 }
];
