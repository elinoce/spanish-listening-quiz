const passages = [
  {
    text: "Hola, me llamo Ana. Trabajo en una cafetería en el centro. Todos los días preparo café y bocadillos para los clientes.",
    transcript: "Hola, me llamo Ana. Trabajo en una cafetería en el centro. Todos los días preparo café y bocadillos para los clientes.",
    questions: [
      { q: "¿Dónde trabaja Ana?", options: ["En una oficina", "En una cafetería", "En una tienda"], answer: 1 },
      { q: "¿Qué prepara Ana?", options: ["Té y pasteles", "Café y bocadillos", "Agua y zumos"], answer: 1 },
      { q: "¿Trabaja cerca de casa?", options: ["Sí", "No", "No sabemos"], answer: 2 },
      { q: "¿Le gusta su trabajo?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Cómo se llama?", options: ["Ana", "María", "Lucía"], answer: 0 }
    ]
  },
  {
    text: "Pedro vive en un pequeño pueblo cerca del mar. Cada mañana sale a correr y desayuna pan con aceite.",
    transcript: "Pedro vive en un pequeño pueblo cerca del mar. Cada mañana sale a correr y desayuna pan con aceite.",
    questions: [
      { q: "¿Dónde vive Pedro?", options: ["En un pueblo", "En la ciudad", "En la montaña"], answer: 0 },
      { q: "¿Qué hace por la mañana?", options: ["Nada", "Sale a correr", "Trabaja"], answer: 1 },
      { q: "¿Qué desayuna?", options: ["Pan con aceite", "Cereales", "Fruta"], answer: 0 },
      { q: "¿Cerca de qué vive?", options: ["El mar", "La montaña", "La ciudad"], answer: 0 },
      { q: "¿Hace ejercicio?", options: ["Sí", "No", "No dice"], answer: 0 }
    ]
  },
  {
    text: "Laura estudia medicina en la universidad. Por la tarde trabaja en una librería y en su tiempo libre le gusta pasear con amigos.",
    transcript: "Laura estudia medicina en la universidad. Por la tarde trabaja en una librería y en su tiempo libre le gusta pasear con amigos.",
    questions: [
      { q: "¿Qué estudia Laura?", options: ["Derecho", "Medicina", "Historia"], answer: 1 },
      { q: "¿Dónde trabaja por la tarde?", options: ["Librería", "Hospital", "Cafetería"], answer: 0 },
      { q: "¿Qué hace en su tiempo libre?", options: ["Pasear", "Estudiar", "Dormir"], answer: 0 },
      { q: "¿Con quién pasea?", options: ["Con amigos", "Con familia", "Sola"], answer: 0 },
      { q: "¿Tiene clases?", options: ["Sí", "No", "No dice"], answer: 0 }
    ]
  },
  {
    text: "Juan va al supermercado todos los sábados. Compra frutas, verduras y pan para toda la semana.",
    transcript: "Juan va al supermercado todos los sábados. Compra frutas, verduras y pan para toda la semana.",
    questions: [
      { q: "¿Cuándo va al supermercado?", options: ["Lunes", "Sábados", "Domingos"], answer: 1 },
      { q: "¿Qué compra?", options: ["Carne y pescado", "Frutas y verduras", "Ropa"], answer: 1 },
      { q: "¿Para cuánto tiempo compra?", options: ["Un día", "Toda la semana", "Un mes"], answer: 1 },
      { q: "¿Va solo?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Le gusta ir al supermercado?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },
  {
    text: "Marta tiene un gato que se llama Pelusa. Le gusta jugar con él y darle de comer cada mañana.",
    transcript: "Marta tiene un gato que se llama Pelusa. Le gusta jugar con él y darle de comer cada mañana.",
    questions: [
      { q: "¿Qué mascota tiene Marta?", options: ["Perro", "Gato", "Pájaro"], answer: 1 },
      { q: "¿Cómo se llama el gato?", options: ["Pelusa", "Luna", "Sol"], answer: 0 },
      { q: "¿Cuándo le da de comer?", options: ["Cada noche", "Cada mañana", "Cada tarde"], answer: 1 },
      { q: "¿Juega con su mascota?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Tiene otro gato?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },
  {
    text: "Carlos y Elena van al cine los viernes por la noche. Les gusta ver películas de acción y comedias.",
    transcript: "Carlos y Elena van al cine los viernes por la noche. Les gusta ver películas de acción y comedias.",
    questions: [
      { q: "¿Cuándo van al cine?", options: ["Viernes por la noche", "Sábado por la tarde", "Domingo por la mañana"], answer: 0 },
      { q: "¿Qué tipo de películas les gusta?", options: ["Terror", "Acción y comedia", "Románticas"], answer: 1 },
      { q: "¿Van solos?", options: ["Sí", "No", "No dice"], answer: 2 },
      { q: "¿Qué hacen en el cine?", options: ["Comen", "Ven películas", "Juegan"], answer: 1 },
      { q: "¿Cada semana?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },
  {
    text: "La señora Ruiz limpia su casa todos los días. Lava la ropa, barre el suelo y cocina la cena para su familia.",
    transcript: "La señora Ruiz limpia su casa todos los días. Lava la ropa, barre el suelo y cocina la cena para su familia.",
    questions: [
      { q: "¿Qué hace la señora Ruiz todos los días?", options: ["Trabaja en la oficina", "Limpia la casa", "Va al mercado"], answer: 1 },
      { q: "¿Lava la ropa?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Barre el suelo?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Cocina para quién?", options: ["Para ella", "Para su familia", "Para amigos"], answer: 1 },
      { q: "¿Hace deporte?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },
  {
    text: "Miguel estudia inglés y francés. Todos los días hace ejercicios y practica con sus amigos para mejorar su pronunciación.",
    transcript: "Miguel estudia inglés y francés. Todos los días hace ejercicios y practica con sus amigos para mejorar su pronunciación.",
    questions: [
      { q: "¿Qué idiomas estudia Miguel?", options: ["Español y francés", "Inglés y francés", "Inglés y español"], answer: 1 },
      { q: "¿Hace ejercicios todos los días?", options: ["Sí", "No", "No dice"], answer: 0 },
      { q: "¿Con quién practica?", options: ["Solo", "Con amigos", "Con familia"], answer: 1 },
      { q: "¿Por qué practica?", options: ["Para viajar", "Para mejorar pronunciación", "Para trabajar"], answer: 1 },
      { q: "¿Estudia otro idioma?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },
  {
    text: "Sofía va al parque con su perro cada tarde. Le gusta jugar con él y conocer a otros dueños de mascotas.",
    transcript: "Sofía va al parque con su perro cada tarde. Le gusta jugar con él y conocer a otros dueños de mascotas.",
    questions: [
      { q: "¿Con quién va al parque?", options: ["Sola", "Con su perro", "Con amigos"], answer: 1 },
      { q: "¿Cuándo va?", options: ["Cada tarde", "Cada mañana", "Cada noche"], answer: 0 },
      { q: "¿Qué hace en el parque?", options: ["Jugar con su perro", "Leer", "Correr sola"], answer: 0 },
      { q: "¿Conoce a otros?", options: ["Sí, dueños de mascotas", "Sí, vecinos", "No"], answer: 0 },
      { q: "¿Va al parque los fines de semana?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  },
  {
    text: "Elena y Pablo preparan una fiesta de cumpleaños. Compran globos, pastel y decoraciones para la sala.",
    transcript: "Elena y Pablo preparan una fiesta de cumpleaños. Compran globos, pastel y decoraciones para la sala.",
    questions: [
      { q: "¿Qué preparan?", options: ["Cena", "Fiesta de cumpleaños", "Excursión"], answer: 1 },
      { q: "¿Qué compran?", options: ["Ropa", "Globos y pastel", "Libros"], answer: 1 },
      { q: "¿Para quién es la fiesta?", options: ["Para un amigo", "Para un familiar", "No dice"], answer: 2 },
      { q: "¿Dónde decoran?", options: ["En la cocina", "En la sala", "En el jardín"], answer: 1 },
      { q: "¿Les gusta preparar fiestas?", options: ["Sí", "No", "No dice"], answer: 2 }
    ]
  }
];

// The rest of the code (rotation, repeat, questions, transcript, next) remains exactly the same as your previous script.
