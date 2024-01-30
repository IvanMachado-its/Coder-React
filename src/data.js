// src/data.js
export const categories = [
    { id: 1, name: 'Calzado deportivo' },
    { id: 2, name: 'Ropa casual' },
    { id: 3, name: 'Accesorios' },
    { id: 4, name: 'Electrónica' },
    { id: 5, name: 'Ropa de abrigo' },
  ];
  
export const products = [
    { 
      id: 1, 
      name: 'Zapatillas Deportivas', 
      price: 99.99, 
      description: 'Zapatillas deportivas de alta calidad para cualquier actividad atlética.',
      category: 'Calzado deportivo',
      material: 'Fibra sintética',
      size: 'Disponible en tallas 7-12',
      color: 'Negro/Rojo',
      brand: 'Ejemplo Brand',
    },
    { 
      id: 2, 
      name: 'Camiseta de Algodón', 
      price: 29.99, 
      description: 'Camiseta cómoda y suave hecha de algodón puro.',
      category: 'Ropa casual',
      material: 'Algodón',
      size: 'Disponible en tallas S-XXL',
      color: 'Blanco',
      brand: 'Ejemplo Brand',
    },
    { 
      id: 3, 
      name: 'Vaqueros Slim Fit', 
      price: 59.99, 
      description: 'Vaqueros modernos y ajustados para un estilo elegante.',
      category: 'Ropa casual',
      material: 'Denim',
      size: 'Disponible en tallas 28-38',
      color: 'Azul oscuro',
      brand: 'Ejemplo Brand',
    },
    { 
      id: 4, 
      name: 'Reloj Analógico', 
      price: 79.99, 
      description: 'Reloj clásico con diseño analógico y correa de cuero.',
      category: 'Accesorios',
      material: 'Acero inoxidable y cuero',
      size: 'Diámetro de la esfera: 40 mm',
      color: 'Plateado/Negro',
      brand: 'Ejemplo Brand',
    },
    { 
      id: 5, 
      name: 'Bolso de Cuero', 
      price: 49.99, 
      description: 'Bolso de cuero elegante y espacioso para llevar tus pertenencias con estilo.',
      category: 'Accesorios',
      material: 'Cuero genuino',
      size: 'Dimensiones: 30 cm x 25 cm x 10 cm',
      color: 'Marrón',
      brand: 'Ejemplo Brand',
    },
    { 
      id: 6, 
      name: 'Gafas de Sol Aviador', 
      price: 39.99, 
      description: 'Gafas de sol con diseño clásico de aviador para un look atemporal.',
      category: 'Accesorios',
      material: 'Metal y vidrio',
      size: 'Ancho de la lente: 58 mm',
      color: 'Dorado',
      brand: 'Ejemplo Brand',
    },
    { 
      id: 7, 
      name: 'Auriculares Inalámbricos', 
      price: 89.99, 
      description: 'Auriculares inalámbricos de alta calidad para una experiencia auditiva superior.',
      category: 'Electrónica',
      material: 'Plástico y componentes electrónicos',
      size: 'Diseño plegable',
      color: 'Negro',
      brand: 'Ejemplo Brand',
    },
    { 
      id: 8, 
      name: 'Chaqueta de Invierno', 
      price: 129.99, 
      description: 'Chaqueta abrigada y elegante para mantenerte caliente durante el invierno.',
      category: 'Ropa de abrigo',
      material: 'Poliéster y plumón',
      size: 'Disponible en tallas XS-XXL',
      color: 'Gris',
      brand: 'Ejemplo Brand',
    },
    { 
      id: 9, 
      name: 'Mochila para Portátil', 
      price: 69.99, 
      description: 'Mochila resistente y funcional con compartimento para portátil.',
      category: 'Accesorios',
      material: 'Nailon',
      size: 'Capacidad: 15 litros',
      color: 'Negro',
      brand: 'Ejemplo Brand',
    },
    { 
      id: 10, 
      name: 'Teclado Mecánico para Gaming', 
      price: 109.99, 
      description: 'Teclado mecánico diseñado para gamers, con retroiluminación LED y respuesta táctil.',
      category: 'Electrónica',
      material: 'Plástico y metal',
      size: '104 teclas con retroiluminación LED',
      color: 'Negro',
      brand: 'Ejemplo Brand',
    },
    { 
        id: 11, 
        name: 'Bicicleta de Montaña', 
        price: 299.99, 
        description: 'Bicicleta robusta diseñada para terrenos de montaña con marco de aluminio y frenos de disco.',
        category: 'Deportes y aire libre',
        material: 'Aluminio',
        size: 'Tallas disponibles: M, L, XL',
        color: 'Verde/Negro',
        brand: 'Ejemplo Outdoors',
      },
      { 
        id: 12, 
        name: 'Smart TV 4K', 
        price: 499.99, 
        description: 'Televisor inteligente con resolución 4K, tecnología HDR y sistema operativo smart.',
        category: 'Electrónica',
        material: 'Plástico y metal',
        size: 'Tamaño de pantalla: 55 pulgadas',
        color: 'Negro',
        brand: 'Ejemplo Tech',
      },
      { 
        id: 13, 
        name: 'Silla de Oficina Ergonómica', 
        price: 149.99, 
        description: 'Silla de oficina ajustable con soporte lumbar y reposabrazos, ideal para largas jornadas de trabajo.',
        category: 'Muebles',
        material: 'Cuero sintético y metal',
        size: 'Dimensiones: 65 cm x 60 cm x 120 cm',
        color: 'Gris',
        brand: 'Ejemplo Home',
      },
      { 
        id: 14, 
        name: 'Cámara DSLR Profesional', 
        price: 799.99, 
        description: 'Cámara réflex digital con sensor de alta resolución y capacidad de grabación de video en 4K.',
        category: 'Fotografía',
        material: 'Aleación de magnesio',
        size: 'Sensor APS-C',
        color: 'Negro',
        brand: 'Ejemplo Photo',
      },
      { 
        id: 15, 
        name: 'Monitor Curvo para Gaming', 
        price: 349.99, 
        description: 'Monitor curvo de alta velocidad de actualización y resolución Full HD para una experiencia de juego inmersiva.',
        category: 'Electrónica',
        material: 'Plástico y metal',
        size: 'Tamaño de pantalla: 27 pulgadas',
        color: 'Negro/Rojo',
        brand: 'Ejemplo Gaming',
      },
    ];