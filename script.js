let passages = [
  // 1
  { text: "Ignacio va a la estación de tren para viajar a Madrid. Compra el billete y espera su tren en el andén.",
    transcript: "Ignacio va a la estación de tren para viajar a Madrid. Compra el billete y espera su tren en el andén.",
    questions: [
      { q: "¿A dónde viaja Ignacio?", options: ["Barcelona", "Madrid", "Sevilla"], answer: 1 },
      { q: "¿Dónde compra el billete?", options: ["En la estación", "Online", "En la tienda"], answer: 0 },
      { q: "¿Dónde espera?", options: ["En casa", "En el andén", "En la calle"], answer: 1 },
      { q: "¿Viaja solo?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Es un viaje largo?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },
  // 2
  { text: "Ana prepara un pastel para la fiesta de su amiga. Mezcla harina, huevos y azúcar en la cocina.",
    transcript: "Ana prepara un pastel para la fiesta de su amiga. Mezcla harina, huevos y azúcar en la cocina.",
    questions: [
      { q: "¿Qué prepara Ana?", options: ["Cena", "Pastel", "Sopa"], answer: 1 },
      { q: "¿Para quién?", options: ["Su amiga", "Su familia", "Ella"], answer: 0 },
      { q: "¿Dónde mezcla los ingredientes?", options: ["Cocina", "Salón", "Jardín"], answer: 0 },
      { q: "¿Qué mezcla?", options: ["Harina, huevos y azúcar", "Fruta", "Verduras"], answer: 0 },
      { q: "¿Le gusta cocinar?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },
  // 3
  { text: "Raúl va al mercado para comprar verduras frescas. Pregunta los precios y elige los mejores productos.",
    transcript: "Raúl va al mercado para comprar verduras frescas. Pregunta los precios y elige los mejores productos.",
    questions: [
      { q: "¿Qué compra Raúl?", options: ["Verduras frescas", "Fruta", "Pan"], answer: 0 },
      { q: "¿Dónde compra?", options: ["Supermercado", "Mercado", "Tienda de ropa"], answer: 1 },
      { q: "¿Qué hace antes de comprar?", options: ["Pregunta precios", "Lee libros", "Llama a amigos"], answer: 0 },
      { q: "¿Elige productos malos?", options: ["Sí", "No", "No dice"], answer: 1 },
      { q: "¿Compra carne?", options: ["Sí", "No", "No dice"], answer: 1 }
    ]
  },
  // 4
  { text: "Sofía y Javier van a la playa. Nadan y juegan al voleibol durante toda la tarde.",
    transcript: "Sofía y Javier van a la playa. Nadan y juegan al voleibol durante toda la tarde.",
    questions: [
      { q: "¿Dónde van?", options: ["Montaña", "Parque", "Playa"], answer: 2 },
      { q: "¿Qué hacen?", options: ["Juegan al fútbol", "Nadan y juegan al voleibol", "Estudian"], answer: 1 },
      { q: "¿Cuánto tiempo permanecen?", options: ["Toda la mañana", "Toda la tarde", "Todo el día"], answer: 1 },
      { q: "¿Van solos?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Les gusta el deporte?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },
  // 5
  { text: "Claudio toma café en la cafetería mientras lee el periódico y escucha música con sus auriculares.",
    transcript: "Claudio toma café en la cafetería mientras lee el periódico y escucha música con sus auriculares.",
    questions: [
      { q: "¿Qué hace Claudio?", options: ["Toma café y lee", "Trabaja", "Corre"], answer: 0 },
      { q: "¿Dónde está?", options: ["Casa", "Cafetería", "Oficina"], answer: 1 },
      { q: "¿Escucha música?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Lee el periódico?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Está solo?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },
  // 6
  { text: "Luciano y Marta visitan un museo. Observan pinturas y esculturas durante la mañana.",
    transcript: "Luciano y Marta visitan un museo. Observan pinturas y esculturas durante la mañana.",
    questions: [
      { q: "¿Dónde van?", options: ["Museo", "Parque", "Biblioteca"], answer: 0 },
      { q: "¿Qué ven?", options: ["Películas", "Pinturas y esculturas", "Libros"], answer: 1 },
      { q: "¿Cuánto tiempo permanecen?", options: ["Toda la tarde", "Toda la mañana", "Todo el día"], answer: 1 },
      { q: "¿Van solos?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Les gusta la cultura?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },
  // 7
  { text: "Verónica corre en el parque cada mañana y luego desayuna tostadas con mermelada.",
    transcript: "Verónica corre en el parque cada mañana y luego desayuna tostadas con mermelada.",
    questions: [
      { q: "¿Qué hace Verónica?", options: ["Corre", "Nada", "Estudia"], answer: 0 },
      { q: "¿Dónde corre?", options: ["Parque", "Calle", "Casa"], answer: 0 },
      { q: "¿Cuándo corre?", options: ["Cada tarde", "Cada mañana", "Cada noche"], answer: 1 },
      { q: "¿Qué desayuna?", options: ["Cereal", "Tostadas con mermelada", "Fruta"], answer: 1 },
      { q: "¿Hace deporte?", options: ["Sí", "No", "No dice"], answer: 0 }
    ]
  },
  // 8
  { text: "Daniel y su familia celebran el cumpleaños de su hermana con globos, pastel y regalos.",
    transcript: "Daniel y su familia celebran el cumpleaños de su hermana con globos, pastel y regalos.",
    questions: [
      { q: "¿Qué celebran?", options: ["Navidad", "Cumpleaños", "Fiesta de verano"], answer: 1 },
      { q: "¿De quién es el cumpleaños?", options: ["Hermana", "Amigo", "Padre"], answer: 0 },
      { q: "¿Qué llevan?", options: ["Globos y pastel", "Ropa", "Flores"], answer: 0 },
      { q: "¿Regalos?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Está toda la familia?", options: ["Sí", "No", "No dice"], answer: 0 }
    ]
  },
  // 9
  { text: "Patricia toma clases de pintura. Aprende a mezclar colores y dibujar paisajes.",
    transcript: "Patricia toma clases de pintura. Aprende a mezclar colores y dibujar paisajes.",
    questions: [
      { q: "¿Qué hace Patricia?", options: ["Toma clases de danza", "Toma clases de pintura", "Toma clases de música"], answer: 1 },
      { q: "¿Qué aprende?", options: ["Cocinar", "Mezclar colores y dibujar", "Leer"], answer: 1 },
      { q: "¿Dibuja paisajes?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Con quién toma clases?", options: ["Sola", "Con amigos", "No dice"], answer: 2 },
      { q: "¿Le gusta pintar?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },
  // 10
  { text: "Hugo visita a su amigo Pablo en su casa. Juegan a las cartas y charlan sobre fútbol.",
    transcript: "Hugo visita a su amigo Pablo en su casa. Juegan a las cartas y charlan sobre fútbol.",
    questions: [
      { q: "¿A quién visita Hugo?", options: ["Pablo", "Carlos", "Ana"], answer: 0 },
      { q: "¿Qué hacen?", options: ["Juegan a las cartas", "Ven películas", "Cocinan"], answer: 0 },
      { q: "¿De qué hablan?", options: ["Fútbol", "Viajes", "Música"], answer: 0 },
      { q: "¿Dónde están?", options: ["Casa de Hugo", "Casa de Pablo", "Parque"], answer: 1 },
      { q: "¿Se divierten?", options: ["Sí", "No", "No dice"], answer: 0 }
    ]
  },
  // 11
  { text: "Mario compra frutas en la frutería. Elige manzanas, naranjas y plátanos.",
    transcript: "Mario compra frutas en la frutería. Elige manzanas, naranjas y plátanos.",
    questions: [
      { q: "¿Qué compra Mario?", options: ["Verduras", "Frutas", "Carne"], answer: 1 },
      { q: "¿Dónde compra?", options: ["Supermercado", "Frutería", "Panadería"], answer: 1 },
      { q: "¿Elige peras?", options: ["Sí", "No", "No dice"], answer: 1 },
      { q: "¿Compra plátanos?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Compra manzanas?", options: ["Sí", "No", "No dice"], answer: 0 }
    ]
  },
  // 12
  { text: "Laura estudia en la biblioteca. Lee libros y hace apuntes para su examen de español.",
    transcript: "Laura estudia en la biblioteca. Lee libros y hace apuntes para su examen de español.",
    questions: [
      { q: "¿Dónde estudia Laura?", options: ["Casa", "Biblioteca", "Parque"], answer: 1 },
      { q: "¿Qué hace?", options: ["Lee y hace apuntes", "Juega", "Cocina"], answer: 0 },
      { q: "¿Es para un examen?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Estudia francés?", options: ["Sí", "No", "No dice"], answer: 1 },
      { q: "¿Le gusta estudiar?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },
  // 13
  { text: "Pedro y sus amigos van al cine. Compran palomitas y refrescos antes de la película.",
    transcript: "Pedro y sus amigos van al cine. Compran palomitas y refrescos antes de la película.",
    questions: [
      { q: "¿Dónde van?", options: ["Teatro", "Cine", "Parque"], answer: 1 },
      { q: "¿Qué compran?", options: ["Palomitas y refrescos", "Dulces", "Entradas de tren"], answer: 0 },
      { q: "¿Van solos?", options: ["Sí", "No", "No dice"], answer: 1 },
      { q: "¿Qué van a ver?", options: ["Película", "Obra de teatro", "Concierto"], answer: 0 },
      { q: "¿Les gusta la película?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },
  // 14
  { text: "Sofía compra ropa en la tienda. Prueba vestidos y camisas antes de pagar.",
    transcript: "Sofía compra ropa en la tienda. Prueba vestidos y camisas antes de pagar.",
    questions: [
      { q: "¿Qué compra Sofía?", options: ["Zapatos", "Ropa", "Comida"], answer: 1 },
      { q: "¿Prueba la ropa?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Qué prueba?", options: ["Vestidos y camisas", "Pantalones y zapatos", "Sombreros"], answer: 0 },
      { q: "¿Paga después de probar?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Compra sola?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },
  // 15
  { text: "Andrés va al parque con su perro. Juegan a la pelota y pasean durante una hora.",
    transcript: "Andrés va al parque con su perro. Juegan a la pelota y pasean durante una hora.",
    questions: [
      { q: "¿Con quién va Andrés?", options: ["Su amigo", "Su perro", "Su hermano"], answer: 1 },
      { q: "¿Qué hacen?", options: ["Juegan a la pelota", "Corren solo", "Hacen picnic"], answer: 0 },
      { q: "¿Dónde están?", options: ["Parque", "Casa", "Calle"], answer: 0 },
      { q: "¿Cuánto tiempo permanecen?", options: ["30 minutos", "1 hora", "2 horas"], answer: 1 },
      { q: "¿Lleva comida?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },
  // 16
  { text: "Clara prepara la cena. Cocina pasta con salsa de tomate y una ensalada.",
    transcript: "Clara prepara la cena. Cocina pasta con salsa de tomate y una ensalada.",
    questions: [
      { q: "¿Qué prepara Clara?", options: ["Desayuno", "Cena", "Almuerzo"], answer: 1 },
      { q: "¿Qué cocina?", options: ["Pasta con salsa", "Pizza", "Sopa"], answer: 0 },
      { q: "¿Hace ensalada?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Cocina sola?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Para quién cocina?", options: ["Para ella", "Para familia", "No dice"], answer: 2 }
    ]
  },
  // 17
  { text: "Luis va a la biblioteca a devolver un libro y sacar otro para leer en casa.",
    transcript: "Luis va a la biblioteca a devolver un libro y sacar otro para leer en casa.",
    questions: [
      { q: "¿Dónde va Luis?", options: ["Librería", "Biblioteca", "Escuela"], answer: 1 },
      { q: "¿Qué hace?", options: ["Devuelve y saca libros", "Estudia", "Juega"], answer: 0 },
      { q: "¿Lee en casa?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Saca más de un libro?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Devuelve libros?", options: ["Sí", "No", "No dice"], answer: 0 }
    ]
  },
  // 18
  { text: "Marina toma un taxi para ir al aeropuerto. Llega con tiempo para su vuelo.",
    transcript: "Marina toma un taxi para ir al aeropuerto. Llega con tiempo para su vuelo.",
    questions: [
      { q: "¿Cómo va al aeropuerto?", options: ["Bus", "Taxi", "Coche propio"], answer: 1 },
      { q: "¿Llega tarde?", options: ["Sí", "No", "No dice"], answer: 1 },
      { q: "¿Para qué viaje?", options: ["Vacaciones", "Vuelo", "No dice"], answer: 1 },
      { q: "¿Va sola?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Lleva maletas?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },
  // 19
  { text: "Tomás va al supermercado. Compra pan, leche y huevos para el desayuno de mañana.",
    transcript: "Tomás va al supermercado. Compra pan, leche y huevos para el desayuno de mañana.",
    questions: [
      { q: "¿Dónde va Tomás?", options: ["Panadería", "Supermercado", "Mercado"], answer: 1 },
      { q: "¿Qué compra?", options: ["Pan, leche y huevos", "Fruta", "Verdura"], answer: 0 },
      { q: "¿Es para la cena?", options: ["Sí", "No", "No dice"], answer: 1 },
      { q: "¿Compra carne?", options: ["Sí", "No", "No dice"], answer: 1 },
      { q: "¿Va solo?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },
  // 20
  { text: "Carla y sus amigos juegan al fútbol en el parque. Después toman refrescos en la cafetería.",
    transcript: "Carla y sus amigos juegan al fútbol en el parque. Después toman refrescos en la cafetería.",
    questions: [
      { q: "¿Qué hacen en el parque?", options: ["Vuelan cometas", "Juegan al fútbol", "Corren"], answer: 1 },
      { q: "¿Con quién está Carla?", options: ["Familia", "Amigos", "Sola"], answer: 1 },
      { q: "¿Qué hacen después?", options: ["Comen", "Toman refrescos", "Van a casa"], answer: 1 },
      { q: "¿En qué lugar?", options: ["Cafetería", "Parque", "Biblioteca"], answer: 0 },
      { q: "¿Les gusta el deporte?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },
  // 21
  { text: "Miguel va al médico porque tiene dolor de cabeza y fiebre.",
    transcript: "Miguel va al médico porque tiene dolor de cabeza y fiebre.",
    questions: [
      { q: "¿Por qué va Miguel al médico?", options: ["Consulta rutinaria", "Dolor de cabeza y fiebre", "Vacuna"], answer: 1 },
      { q: "¿Está enfermo?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Va solo?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Tiene tos?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Qué tipo de cita es?", options: ["Emergencia", "Rutinaria", "No dice"], answer: 2 }
    ]
  },

  // 22
  { text: "Claudia compra flores en la floristería para decorar su casa.",
    transcript: "Claudia compra flores en la floristería para decorar su casa.",
    questions: [
      { q: "¿Qué compra Claudia?", options: ["Flores", "Frutas", "Ropa"], answer: 0 },
      { q: "¿Dónde compra?", options: ["Floristería", "Supermercado", "Panadería"], answer: 0 },
      { q: "¿Para qué?", options: ["Regalar", "Decorar su casa", "Vender"], answer: 1 },
      { q: "¿Compra sola?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Compra comida?", options: ["Sí", "No", "No dice"], answer: 1 }
    ]
  },

  // 23
  { text: "Sergio y Ana van al cine y compran palomitas y refrescos.",
    transcript: "Sergio y Ana van al cine y compran palomitas y refrescos.",
    questions: [
      { q: "¿Qué hacen Sergio y Ana?", options: ["Van al cine", "Estudian", "Juegan"], answer: 0 },
      { q: "¿Qué compran?", options: ["Palomitas y refrescos", "Entradas", "Ropa"], answer: 0 },
      { q: "¿Van solos?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Qué van a ver?", options: ["Película", "Obra de teatro", "Concierto"], answer: 0 },
      { q: "¿Se divierten?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 24
  { text: "Lucía va al supermercado a comprar leche, pan y huevos para la cena.",
    transcript: "Lucía va al supermercado a comprar leche, pan y huevos para la cena.",
    questions: [
      { q: "¿Dónde va Lucía?", options: ["Supermercado", "Panadería", "Mercado"], answer: 0 },
      { q: "¿Qué compra?", options: ["Leche, pan y huevos", "Frutas", "Verduras"], answer: 0 },
      { q: "¿Es para desayuno?", options: ["Sí", "No", "No dice"], answer: 1 },
      { q: "¿Compra carne?", options: ["Sí", "No", "No dice"], answer: 1 },
      { q: "¿Va sola?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 25
  { text: "Pedro visita a su abuela y le ayuda a regar las plantas del jardín.",
    transcript: "Pedro visita a su abuela y le ayuda a regar las plantas del jardín.",
    questions: [
      { q: "¿A quién visita Pedro?", options: ["Madre", "Abuela", "Amiga"], answer: 1 },
      { q: "¿Qué hace?", options: ["Riega las plantas", "Limpia la casa", "Cocina"], answer: 0 },
      { q: "¿Dónde están?", options: ["Casa de Pedro", "Casa de la abuela", "Parque"], answer: 1 },
      { q: "¿Va solo?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Se divierte?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 26
  { text: "Carolina toma clases de piano y practica todos los días por la tarde.",
    transcript: "Carolina toma clases de piano y practica todos los días por la tarde.",
    questions: [
      { q: "¿Qué hace Carolina?", options: ["Clases de piano", "Clases de danza", "Clases de inglés"], answer: 0 },
      { q: "¿Cuándo practica?", options: ["Por la mañana", "Por la tarde", "Por la noche"], answer: 1 },
      { q: "¿Todos los días?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Va a conciertos?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Practica sola?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 27
  { text: "Iván y Laura van a la playa a nadar y tomar el sol durante la mañana.",
    transcript: "Iván y Laura van a la playa a nadar y tomar el sol durante la mañana.",
    questions: [
      { q: "¿Dónde van?", options: ["Montaña", "Playa", "Piscina"], answer: 1 },
      { q: "¿Qué hacen?", options: ["Nadan y toman el sol", "Juegan al fútbol", "Estudian"], answer: 0 },
      { q: "¿Cuánto tiempo permanecen?", options: ["Mañana", "Tarde", "Todo el día"], answer: 0 },
      { q: "¿Van solos?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Les gusta la playa?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 28
  { text: "Sofía compra entradas para un concierto y espera con sus amigas en la fila.",
    transcript: "Sofía compra entradas para un concierto y espera con sus amigas en la fila.",
    questions: [
      { q: "¿Qué compra Sofía?", options: ["Entradas para cine", "Entradas para concierto", "Entradas de tren"], answer: 1 },
      { q: "¿Con quién espera?", options: ["Sola", "Amigas", "Familia"], answer: 1 },
      { q: "¿Dónde espera?", options: ["Fila", "Casa", "Parque"], answer: 0 },
      { q: "¿Es un concierto de música?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Va a disfrutar?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 29
  { text: "Tomás y sus amigos juegan a las cartas en casa de su vecino después de cenar.",
    transcript: "Tomás y sus amigos juegan a las cartas en casa de su vecino después de cenar.",
    questions: [
      { q: "¿Qué hacen?", options: ["Juegan a las cartas", "Ven película", "Cocinan"], answer: 0 },
      { q: "¿Dónde están?", options: ["Casa de Tomás", "Casa del vecino", "Cafetería"], answer: 1 },
      { q: "¿Cuándo juegan?", options: ["Después de cenar", "Por la mañana", "Por la tarde"], answer: 0 },
      { q: "¿Van solos?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Se divierten?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 30
  { text: "Ana hace la compra en el supermercado. Compra arroz, pasta y verduras.",
    transcript: "Ana hace la compra en el supermercado. Compra arroz, pasta y verduras.",
    questions: [
      { q: "¿Dónde compra Ana?", options: ["Supermercado", "Mercado", "Tienda"], answer: 0 },
      { q: "¿Qué compra?", options: ["Arroz, pasta y verduras", "Carne y pescado", "Ropa"], answer: 0 },
      { q: "¿Compra frutas?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Va sola?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Es para cena?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 31
  { text: "David va a la estación de tren para viajar a otra ciudad.",
    transcript: "David va a la estación de tren para viajar a otra ciudad.",
    questions: [
      { q: "¿Dónde va David?", options: ["Aeropuerto", "Estación de tren", "Puerto"], answer: 1 },
      { q: "¿Por qué va?", options: ["Visita", "Viajar", "Estudiar"], answer: 1 },
      { q: "¿Va solo?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Cuándo viaja?", options: ["Mañana", "Hoy", "No dice"], answer: 2 },
      { q: "¿Qué medio de transporte usa?", options: ["Tren", "Autobús", "Avión"], answer: 0 }
    ]
  },

  // 32
  { text: "Laura compra pan y bollos en la panadería para el desayuno.",
    transcript: "Laura compra pan y bollos en la panadería para el desayuno.",
    questions: [
      { q: "¿Qué compra Laura?", options: ["Pan y bollos", "Frutas", "Leche"], answer: 0 },
      { q: "¿Dónde compra?", options: ["Supermercado", "Panadería", "Mercado"], answer: 1 },
      { q: "¿Es para el almuerzo?", options: ["Sí", "No", "No dice"], answer: 1 },
      { q: "¿Compra sola?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Compra bebida?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 33
  { text: "Javier y Marta van al parque a correr y hacer ejercicio.",
    transcript: "Javier y Marta van al parque a correr y hacer ejercicio.",
    questions: [
      { q: "¿Dónde van Javier y Marta?", options: ["Parque", "Gimnasio", "Playa"], answer: 0 },
      { q: "¿Qué hacen?", options: ["Correr y hacer ejercicio", "Leer", "Jugar"], answer: 0 },
      { q: "¿Van solos?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Es por la tarde?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Se divierten?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 34
  { text: "Clara prepara un pastel para el cumpleaños de su hermano.",
    transcript: "Clara prepara un pastel para el cumpleaños de su hermano.",
    questions: [
      { q: "¿Qué hace Clara?", options: ["Prepara un pastel", "Compra un regalo", "Decora la casa"], answer: 0 },
      { q: "¿Para quién es?", options: ["Su hermana", "Su hermano", "Amigo"], answer: 1 },
      { q: "¿Es cumpleaños?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Cocina sola?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Usa chocolate?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 35
  { text: "Andrés va a la biblioteca y lee un libro sobre historia de España.",
    transcript: "Andrés va a la biblioteca y lee un libro sobre historia de España.",
    questions: [
      { q: "¿Dónde está Andrés?", options: ["Casa", "Biblioteca", "Parque"], answer: 1 },
      { q: "¿Qué hace?", options: ["Lee un libro", "Escribe un ensayo", "Juega"], answer: 0 },
      { q: "¿De qué trata el libro?", options: ["Historia de España", "Ciencia", "Viajes"], answer: 0 },
      { q: "¿Va solo?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Le gusta leer?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 36
  { text: "Paula visita un museo de arte y observa pinturas y esculturas.",
    transcript: "Paula visita un museo de arte y observa pinturas y esculturas.",
    questions: [
      { q: "¿Dónde está Paula?", options: ["Museo de arte", "Galería de fotos", "Teatro"], answer: 0 },
      { q: "¿Qué observa?", options: ["Pinturas y esculturas", "Películas", "Libros"], answer: 0 },
      { q: "¿Va sola?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Le gusta el arte?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Compra algo?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 37
  { text: "Mario va al supermercado y compra carne, pescado y verduras para la cena.",
    transcript: "Mario va al supermercado y compra carne, pescado y verduras para la cena.",
    questions: [
      { q: "¿Dónde compra Mario?", options: ["Supermercado", "Carnicería", "Mercado"], answer: 0 },
      { q: "¿Qué compra?", options: ["Carne, pescado y verduras", "Fruta", "Pan"], answer: 0 },
      { q: "¿Es para desayuno?", options: ["Sí", "No", "No dice"], answer: 1 },
      { q: "¿Compra solo?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Usa carrito?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 38
  { text: "Laura va al gimnasio y hace ejercicio en la cinta y levanta pesas.",
    transcript: "Laura va al gimnasio y hace ejercicio en la cinta y levanta pesas.",
    questions: [
      { q: "¿Dónde está Laura?", options: ["Parque", "Gimnasio", "Casa"], answer: 1 },
      { q: "¿Qué hace?", options: ["Ejercicio en la cinta y levanta pesas", "Corre al aire libre", "Nada"], answer: 0 },
      { q: "¿Va sola?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Por cuánto tiempo?", options: ["30 min", "1 hora", "No dice"], answer: 2 },
      { q: "¿Le gusta hacer ejercicio?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 39
  { text: "Jorge y Ana van a un restaurante y piden pizza y ensalada.",
    transcript: "Jorge y Ana van a un restaurante y piden pizza y ensalada.",
    questions: [
      { q: "¿Dónde están?", options: ["Casa", "Restaurante", "Cafetería"], answer: 1 },
      { q: "¿Qué piden?", options: ["Pizza y ensalada", "Sopa y pan", "Hamburguesa"], answer: 0 },
      { q: "¿Van solos?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Comen postre?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Les gusta la comida?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 40
  { text: "Carla hace la compra y compra leche, queso y pan en la tienda.",
    transcript: "Carla hace la compra y compra leche, queso y pan en la tienda.",
    questions: [
      { q: "¿Qué compra Carla?", options: ["Leche, queso y pan", "Fruta y verdura", "Carne"], answer: 0 },
      { q: "¿Dónde compra?", options: ["Supermercado", "Tienda", "Mercado"], answer: 1 },
      { q: "¿Es para desayuno?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Compra sola?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Usa carro?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 41
  { text: "Luis va a la farmacia porque necesita comprar medicinas para su resfriado.",
    transcript: "Luis va a la farmacia porque necesita comprar medicinas para su resfriado.",
    questions: [
      { q: "¿Dónde va Luis?", options: ["Hospital", "Farmacia", "Supermercado"], answer: 1 },
      { q: "¿Por qué?", options: ["Resfriado", "Dolor de cabeza", "Lesión"], answer: 0 },
      { q: "¿Compra comida?", options: ["Sí", "No", "No dice"], answer: 1 },
      { q: "¿Va solo?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Consulta con el médico?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 42
  { text: "Sofía va al mercado y compra frutas y verduras frescas.",
    transcript: "Sofía va al mercado y compra frutas y verduras frescas.",
    questions: [
      { q: "¿Qué compra Sofía?", options: ["Frutas y verduras", "Carne y pescado", "Pan y pasteles"], answer: 0 },
      { q: "¿Dónde compra?", options: ["Mercado", "Supermercado", "Panadería"], answer: 0 },
      { q: "¿Compra sola?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Es para hoy?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Compra bebida?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 43
  { text: "Tomás va al cine con su hermana y compra palomitas y refrescos.",
    transcript: "Tomás va al cine con su hermana y compra palomitas y refrescos.",
    questions: [
      { q: "¿Dónde van Tomás y su hermana?", options: ["Parque", "Cine", "Teatro"], answer: 1 },
      { q: "¿Qué compran?", options: ["Palomitas y refrescos", "Pizza", "Helado"], answer: 0 },
      { q: "¿Van solos?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Qué van a ver?", options: ["Película", "Obra", "Concierto"], answer: 0 },
      { q: "¿Les gusta la película?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 44
  { text: "Ana va a la biblioteca y estudia para su examen de español.",
    transcript: "Ana va a la biblioteca y estudia para su examen de español.",
    questions: [
      { q: "¿Dónde está Ana?", options: ["Casa", "Biblioteca", "Café"], answer: 1 },
      { q: "¿Qué hace?", options: ["Estudia para examen", "Lee novela", "Juega"], answer: 0 },
      { q: "¿Es para español?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Va sola?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Le gusta estudiar?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 45
  { text: "Carlos hace la compra y compra leche, pan y huevos en el supermercado.",
    transcript: "Carlos hace la compra y compra leche, pan y huevos en el supermercado.",
    questions: [
      { q: "¿Qué compra Carlos?", options: ["Leche, pan y huevos", "Fruta y verdura", "Carne"], answer: 0 },
      { q: "¿Dónde compra?", options: ["Supermercado", "Mercado", "Panadería"], answer: 0 },
      { q: "¿Es para desayuno?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Va solo?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Usa carro?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 46
  { text: "Lucía y Marta van al parque a correr y hacer ejercicio.",
    transcript: "Lucía y Marta van al parque a correr y hacer ejercicio.",
    questions: [
      { q: "¿Dónde están?", options: ["Parque", "Gimnasio", "Casa"], answer: 0 },
      { q: "¿Qué hacen?", options: ["Correr y hacer ejercicio", "Leer", "Jugar"], answer: 0 },
      { q: "¿Van juntas?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Por cuánto tiempo?", options: ["30 min", "1 hora", "No dice"], answer: 2 },
      { q: "¿Les gusta el deporte?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 47
  { text: "Sergio compra ropa en la tienda y prueba una camiseta y unos pantalones.",
    transcript: "Sergio compra ropa en la tienda y prueba una camiseta y unos pantalones.",
    questions: [
      { q: "¿Qué compra Sergio?", options: ["Ropa", "Zapatos", "Comida"], answer: 0 },
      { q: "¿Prueba la ropa?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Qué prueba?", options: ["Camiseta y pantalones", "Zapatos y calcetines", "Sombrero y bufanda"], answer: 0 },
      { q: "¿Paga después?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Va solo?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 48
  { text: "Andrés va al mercado y compra frutas y verduras frescas para la semana.",
    transcript: "Andrés va al mercado y compra frutas y verduras frescas para la semana.",
    questions: [
      { q: "¿Qué compra Andrés?", options: ["Frutas y verduras", "Carne y pescado", "Pan"], answer: 0 },
      { q: "¿Dónde compra?", options: ["Mercado", "Supermercado", "Tienda"], answer: 0 },
      { q: "¿Es para hoy?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Compra solo?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Usa bolsa?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 49
  { text: "Marta va al cine y compra entradas y palomitas para ver la película.",
    transcript: "Marta va al cine y compra entradas y palomitas para ver la película.",
    questions: [
      { q: "¿Dónde va Marta?", options: ["Cine", "Teatro", "Parque"], answer: 0 },
      { q: "¿Qué compra?", options: ["Entradas y palomitas", "Refrescos", "Ropa"], answer: 0 },
      { q: "¿Va sola?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Qué va a ver?", options: ["Película", "Concierto", "Obra"], answer: 0 },
      { q: "¿Le gusta la película?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },

  // 50
  { text: "Luis y Ana van a la playa, nadan y toman el sol durante la mañana.",
    transcript: "Luis y Ana van a la playa, nadan y toman el sol durante la mañana.",
    questions: [
      { q: "¿Dónde van?", options: ["Playa", "Parque", "Piscina"], answer: 0 },
      { q: "¿Qué hacen?", options: ["Nadan y toman el sol", "Corren", "Juegan al fútbol"], answer: 0 },
      { q: "¿Van solos?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Cuánto tiempo permanecen?", options: ["Mañana", "Tarde", "No dice"], answer: 0 },
      { q: "¿Les gusta la playa?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  }

]); // <-- End of passages array
