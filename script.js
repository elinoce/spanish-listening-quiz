// script.js
// DELE A1-style Listening Test - 50 passages x 5 multiple-choice questions
// Ready to paste into your project (replaces previous script.js)

// ---------- Configuration ----------
const CONFIG = {
  passageLanguage: 'es-ES', // preferred voice language
  autoPlayOnRender: false,  // if true, each passage will auto-play when rendered
  speakRate: 0.95,          // speechSynthesis rate (0.8-1.2 typical)
  speakPitch: 1.0,
  allowTranscriptBeforeAnswer: false // if true, users can view transcript before answering
};

// ---------- Data: 50 A1-level listening passages, each with 5 questions ----------
// Each passage: { id, text, questions: [{q, choices:[a,b,c], answer: index}] }
const passages = [
  { id: 1, text: "Hola. Me llamo Ana. ¿Cómo estás?", questions: [
      { q: "¿Cómo se llama la persona?", choices: ["Ana","Luis","María"], answer: 0 },
      { q: "¿Qué pregunta hace Ana?", choices: ["¿Cómo estás?","¿Dónde vives?","¿Qué hora es?"], answer: 0 },
      { q: "¿Ana habla en español?", choices: ["Sí","No","No se sabe"], answer: 0 },
      { q: "¿Ana dice su nombre?", choices: ["Sí","No","Ella dice su edad"], answer: 0 },
      { q: "¿El nombre Ana es masculino o femenino?", choices: ["Femenino","Masculino","No aplica"], answer: 0 }
    ]
  },
  { id: 2, text: "Buenos días. Quisiera un café con leche, por favor.", questions: [
      { q: "¿Qué quiere la persona?", choices: ["Un café con leche","Un agua","Un té"], answer: 0 },
      { q: "¿Cómo saluda la persona?", choices: ["Buenos días","Buenas noches","Adiós"], answer: 0 },
      { q: "¿La persona dice 'por favor'?", choices: ["Sí","No","Dice 'gracias'"], answer: 0 },
      { q: "¿Es una petición educada?", choices: ["Sí","No","Es una queja"], answer: 0 },
      { q: "¿Qué bebida NO pidió?", choices: ["Té","Café con leche","Nada"], answer: 0 }
    ]
  },
  { id: 3, text: "Perdón, ¿dónde está la estación de tren?", questions: [
      { q: "¿Qué pregunta hace la persona?", choices: ["Dónde está la estación de tren","Cómo llegar al banco","Qué hora es"], answer: 0 },
      { q: "¿La persona pide disculpas al preguntar?", choices: ["Sí","No","Se enoja"], answer: 0 },
      { q: "¿Busca un lugar?", choices: ["Sí","No","Está en casa"], answer: 0 },
      { q: "¿Qué tipo de lugar busca?", choices: ["Estación de tren","Restaurante","Escuela"], answer: 0 },
      { q: "¿La pregunta es formal o informal?", choices: ["Formal (usa 'perdón')","Informal","No se puede saber"], answer: 0 }
    ]
  },
  { id: 4, text: "Hola. ¿Tienes tiempo mañana? Podemos ir al cine.", questions: [
      { q: "¿Qué propone la persona?", choices: ["Ir al cine","Ir al supermercado","Estudiar"], answer: 0 },
      { q: "¿Cuándo propone ir?", choices: ["Mañana","Hoy","Pasado mañana"], answer: 0 },
      { q: "¿La conversación es sobre trabajo?", choices: ["No","Sí","Tal vez"], answer: 0 },
      { q: "¿La persona pregunta si hay tiempo?", choices: ["Sí","No","Dice 'tengo tiempo'"], answer: 0 },
      { q: "¿Es una propuesta amistosa?", choices: ["Sí","No","Es una orden"], answer: 0 }
    ]
  },
  { id: 5, text: "Mi número de teléfono es seis, dos, cero, cuatro, cinco, nueve.", questions: [
      { q: "¿Qué está diciendo la persona?", choices: ["Un número de teléfono","Una dirección","Una hora"], answer: 0 },
      { q: "¿Empieza con el número seis?", choices: ["Sí","No","Empieza con nueve"], answer: 0 },
      { q: "¿Es texto o números?", choices: ["Números","Texto","Una pregunta"], answer: 0 },
      { q: "¿Dijo varios dígitos?", choices: ["Sí","No","Solo uno"], answer: 0 },
      { q: "¿Podrías llamar a ese número desde la información proporcionada?", choices: ["No (falta formato)","Sí, completamente","Es una dirección"], answer: 0 }
    ]
  },
  { id: 6, text: "Ayer fui al mercado y compré manzanas y pan.", questions: [
      { q: "¿Adónde fue la persona?", choices: ["Al mercado","A la playa","A la oficina"], answer: 0 },
      { q: "¿Qué compró?", choices: ["Manzanas y pan","Zapatos","Un libro"], answer: 0 },
      { q: "¿Cuándo fue al mercado?", choices: ["Ayer","Hoy","Mañana"], answer: 0 },
      { q: "¿Compró carne?", choices: ["No","Sí","No se dice"], answer: 0 },
      { q: "¿Es una acción pasada?", choices: ["Sí (fue, compré)","No","Es futuro"], answer: 0 }
    ]
  },
  { id: 7, text: "¿Cuánto cuesta esta camisa? - Veinte euros.", questions: [
      { q: "¿Qué pregunta se hace?", choices: ["¿Cuánto cuesta?","¿Dónde está?","¿Quién es?"], answer: 0 },
      { q: "¿Cuál es el precio?", choices: ["Veinte euros","Diez euros","Cincuenta euros"], answer: 0 },
      { q: "¿La pregunta es sobre precio?", choices: ["Sí","No","Sobre dirección"], answer: 0 },
      { q: "¿La respuesta es un número?", choices: ["Sí","No","Es una frase"], answer: 0 },
      { q: "¿Es una conversación en una tienda?", choices: ["Probablemente sí","No","En el cine"], answer: 0 }
    ]
  },
  { id: 8, text: "Hola, ¿tienes hermanos? - Sí, tengo dos hermanos mayores.", questions: [
      { q: "¿La persona tiene hermanos?", choices: ["Sí","No","No lo sabe"], answer: 0 },
      { q: "¿Cuántos hermanos tiene?", choices: ["Dos","Uno","Tres"], answer: 0 },
      { q: "¿Son menores o mayores?", choices: ["Mayores","Menores","Iguales"], answer: 0 },
      { q: "¿La palabra 'hermanos' incluye hermanas?", choices: ["Sí","No","No se dice"], answer: 0 },
      { q: "¿El número de hermanos es exacto?", choices: ["Sí, dos","No","Tal vez"], answer: 0 }
    ]
  },
  { id: 9, text: "¿A qué hora empieza la clase? - A las nueve y media.", questions: [
      { q: "¿Qué quiere saber la persona?", choices: ["La hora de la clase","El lugar de la clase","El nombre del profesor"], answer: 0 },
      { q: "¿A qué hora empieza la clase?", choices: ["A las nueve y media","A las ocho","A las diez"], answer: 0 },
      { q: "¿Se indica 'y media' en el tiempo?", choices: ["Sí","No","Dice 'y cuarto'"], answer: 0 },
      { q: "¿La respuesta es un tiempo del día?", choices: ["Sí","No","Es un número de persona"], answer: 0 },
      { q: "¿La clase comienza por la mañana o por la noche según el tiempo dado?", choices: ["Por la mañana","Por la noche","No se sabe"], answer: 0 }
    ]
  },
  { id: 10, text: "¿Quieres té o café? - Té, por favor.", questions: [
      { q: "¿Qué ofrece la persona?", choices: ["Té o café","Agua o jugo","Pan o mantequilla"], answer: 0 },
      { q: "¿Qué elige la otra persona?", choices: ["Té","Café","Agua"], answer: 0 },
      { q: "¿La respuesta es educada?", choices: ["Sí (por favor)","No","Enfadada"], answer: 0 },
      { q: "¿Ofrecen comida o bebida?", choices: ["Bebida","Comida","Transporte"], answer: 0 },
      { q: "¿La elección es 'café'?", choices: ["No","Sí","A veces"], answer: 0 }
    ]
  },
  { id: 11, text: "Hoy hace sol y hace calor.", questions: [
      { q: "¿Qué tiempo hace?", choices: ["Hace sol y calor","Llueve y hace frío","Nieva"], answer: 0 },
      { q: "¿Es un clima agradable para la playa?", choices: ["Sí","No","No se dice"], answer: 0 },
      { q: "¿La frase habla del pasado, presente o futuro?", choices: ["Presente","Pasado","Futuro"], answer: 0 },
      { q: "¿Hace frío según la persona?", choices: ["No","Sí","Tal vez"], answer: 0 },
      { q: "¿La persona describe el clima?", choices: ["Sí","No","Describe un objeto"], answer: 0 }
    ]
  },
  { id: 12, text: "Voy en bicicleta al trabajo todos los días.", questions: [
      { q: "¿Cómo va la persona al trabajo?", choices: ["En bicicleta","En coche","A pie"], answer: 0 },
      { q: "¿Cada cuánto va en bicicleta?", choices: ["Todos los días","Una vez a la semana","Nunca"], answer: 0 },
      { q: "¿Es una actividad habitual?", choices: ["Sí","No","Es puntual"], answer: 0 },
      { q: "¿La persona dice 'voy en bici'?", choices: ["Sí (voy en bicicleta)","No","Dice 'corro'"], answer: 0 },
      { q: "¿La persona trabaja desde casa según la frase?", choices: ["No","Sí","No se dice"], answer: 0 }
    ]
  },
  { id: 13, text: "¿Dónde está el baño? - Está a la derecha.", questions: [
      { q: "¿Qué pregunta hacen?", choices: ["Dónde está el baño","Cuál es el precio","Quién es el dueño"], answer: 0 },
      { q: "¿Dónde está el baño?", choices: ["A la derecha","A la izquierda","En frente"], answer: 0 },
      { q: "¿La dirección es clara?", choices: ["Sí","No","No lo sabe"], answer: 0 },
      { q: "¿Es una pregunta en un edificio?", choices: ["Probablemente sí","No","En la calle"], answer: 0 },
      { q: "¿Se usa la palabra 'baño' para qué?", choices: ["Para el servicio sanitario","Para cocinar","Para dormir"], answer: 0 }
    ]
  },
  { id: 14, text: "Mi color favorito es el azul.", questions: [
      { q: "¿Cuál es su color favorito?", choices: ["Azul","Rojo","Verde"], answer: 0 },
      { q: "¿La frase habla de comida?", choices: ["No","Sí","Tal vez"], answer: 0 },
      { q: "¿Es una preferencia personal?", choices: ["Sí","No","Es una descripción del clima"], answer: 0 },
      { q: "¿El color 'azul' es mencionado?", choices: ["Sí","No","Menciona 'negro'"], answer: 0 },
      { q: "¿Esto es una opinión?", choices: ["Sí","No","Es un hecho científico"], answer: 0 }
    ]
  },
  { id: 15, text: "Tengo una cita con el doctor a las tres.", questions: [
      { q: "¿Por qué tiene la persona una cita?", choices: ["Con el doctor","Con un amigo","En el cine"], answer: 0 },
      { q: "¿A qué hora es la cita?", choices: ["A las tres","A las nueve","A la una"], answer: 0 },
      { q: "¿Es una cita médica?", choices: ["Sí","No","Es una entrevista de trabajo"], answer: 0 },
      { q: "¿La persona habla en futuro o presente?", choices: ["Presente (tengo)","Pasado","Futuro"], answer: 0 },
      { q: "¿La cita es por la tarde probablemente?", choices: ["Sí","No","No se puede decir"], answer: 0 }
    ]
  },
  { id: 16, text: "¿Puedes ayudarme? No encuentro mis llaves.", questions: [
      { q: "¿Qué problema tiene la persona?", choices: ["No encuentra sus llaves","Está enfermo","No tiene dinero"], answer: 0 },
      { q: "¿Pide ayuda la persona?", choices: ["Sí","No","Ofrece ayuda"], answer: 0 },
      { q: "¿Qué palabra indica petición de ayuda?", choices: ["¿Puedes ayudarme?","Gracias","Hola"], answer: 0 },
      { q: "¿Es una situación de pérdida de objeto?", choices: ["Sí","No","Es una compra"], answer: 0 },
      { q: "¿Qué busca la persona?", choices: ["Llaves","Bolso","Teléfono"], answer: 0 }
    ]
  },
  { id: 17, text: "¿Dónde compras el pan? - En la panadería de la esquina.", questions: [
      { q: "¿Qué pregunta hacen?", choices: ["Dónde compras el pan","Cuánto cuesta el pan","Qué hora es"], answer: 0 },
      { q: "¿Dónde compra el pan la persona?", choices: ["En la panadería de la esquina","En el supermercado lejos","En casa"], answer: 0 },
      { q: "¿Es un lugar comercial?", choices: ["Sí","No","Es una oficina"], answer: 0 },
      { q: "¿La palabra 'panadería' es un lugar para...?", choices: ["Comprar pan","Dormir","Cocinar"], answer: 0 },
      { q: "¿La panadería está cerca según la frase?", choices: ["Sí (de la esquina)","No (lejos)","No se dice"], answer: 0 }
    ]
  },
  { id: 18, text: "Hace mucho viento hoy, cierra la ventana.", questions: [
      { q: "¿Qué tiempo hace?", choices: ["Hace viento","Hace sol","Está nevando"], answer: 0 },
      { q: "¿Qué recomienda hacer la persona?", choices: ["Cerrar la ventana","Abrir la puerta","Salir a correr"], answer: 0 },
      { q: "¿La frase es una sugerencia u orden?", choices: ["Sugerencia/orden leve","Una pregunta","Una noticia"], answer: 0 },
      { q: "¿Se habla del clima?", choices: ["Sí","No","Se habla de comida"], answer: 0 },
      { q: "¿Es peligroso el clima según la frase?", choices: ["No se dice","Sí","Muy peligroso"], answer: 0 }
    ]
  },
  { id: 19, text: "Voy al supermercado para comprar leche y huevos.", questions: [
      { q: "¿Adónde va la persona?", choices: ["Al supermercado","Al colegio","A la playa"], answer: 0 },
      { q: "¿Qué va a comprar?", choices: ["Leche y huevos","Ropa y zapatos","Un libro"], answer: 0 },
      { q: "¿Es una acción inmediata o habitual según la frase?", choices: ["Inmediata (voy)","Habitual","No se sabe"], answer: 0 },
      { q: "¿Compra fruta según la frase?", choices: ["No","Sí","Tal vez"], answer: 0 },
      { q: "¿La persona compra comida?", choices: ["Sí","No","Compra tecnología"], answer: 0 }
    ]
  },
  { id: 20, text: "Perdón, ¿cuánto cuesta el billete para Madrid? - Quince euros.", questions: [
      { q: "¿Qué pregunta hacen?", choices: ["Cuánto cuesta el billete para Madrid","Dónde está Madrid","Quién es el conductor"], answer: 0 },
      { q: "¿Cuál es el precio?", choices: ["Quince euros","Cinco euros","Cincuenta euros"], answer: 0 },
      { q: "¿Es una conversación sobre transporte?", choices: ["Sí","No","Sobre comida"], answer: 0 },
      { q: "¿La persona pide información?", choices: ["Sí","No","Hace una afirmación"], answer: 0 },
      { q: "¿El billete es caro según la frase?", choices: ["No se dice","Sí","Es muy caro"], answer: 0 }
    ]
  },
  { id: 21, text: "Hola, soy nuevo en la ciudad. ¿Me recomiendas un buen restaurante?", questions: [
      { q: "¿La persona es nueva en la ciudad?", choices: ["Sí","No","Es turista"], answer: 0 },
      { q: "¿Qué pide la persona?", choices: ["Una recomendación de restaurante","Una dirección al parque","Un número de teléfono"], answer: 0 },
      { q: "¿La pregunta es educada?", choices: ["Sí","No","Enojada"], answer: 0 },
      { q: "¿La persona ya conoce un restaurante bueno?", choices: ["No (pregunta)","Sí (dice cuál)","No se sabe"], answer: 0 },
      { q: "¿Es una petición local?", choices: ["Sí","No","Es internacional"], answer: 0 }
    ]
  },
  { id: 22, text: "Tengo hambre. ¿Comemos algo rápido?", questions: [
      { q: "¿Qué siente la persona?", choices: ["Hambre","Sueño","Frío"], answer: 0 },
      { q: "¿Qué propone la persona?", choices: ["Comer algo rápido","Correr","Dormir"], answer: 0 },
      { q: "¿Es una pregunta o una afirmación?", choices: ["Pregunta","Afirmación","Orden"], answer: 0 },
      { q: "¿La persona sugiere una acción inmediata?", choices: ["Sí","No","Tal vez mañana"], answer: 0 },
      { q: "¿Es una expresión de necesidad física?", choices: ["Sí","No","Emocional"], answer: 0 }
    ]
  },
  { id: 23, text: "¿Cuál es tu correo electrónico? - esjuan@gmail.com", questions: [
      { q: "¿Qué pregunta hacen?", choices: ["Cuál es tu correo electrónico","Cuál es tu edad","Cuál es tu dirección"], answer: 0 },
      { q: "¿Qué responde la persona?", choices: ["esjuan@gmail.com","555-1234","No responde"], answer: 0 },
      { q: "¿La respuesta es un email?", choices: ["Sí","No","Es un teléfono"], answer: 0 },
      { q: "¿La pregunta es personal o profesional?", choices: ["Puede ser personal o profesional","Solo profesional","No se usa en trabajo"], answer: 0 },
      { q: "¿La respuesta contiene un símbolo '@'?", choices: ["Sí","No","No se sabe"], answer: 0 }
    ]
  },
  { id: 24, text: "Mi cumpleaños es el veintidós de junio.", questions: [
      { q: "¿Qué fecha menciona la persona?", choices: ["Veintidós de junio","Primero de enero","Diez de octubre"], answer: 0 },
      { q: "¿La frase habla de un cumpleaños?", choices: ["Sí","No","Es una fiesta"], answer: 0 },
      { q: "¿El mes mencionado es junio?", choices: ["Sí","No","Diciembre"], answer: 0 },
      { q: "¿Es una fecha exacta?", choices: ["Sí","No","Es aproximada"], answer: 0 },
      { q: "¿La persona dice 'mi cumpleaños'?", choices: ["Sí","No","Dice 'tu cumpleaños'"], answer: 0 }
    ]
  },
  { id: 25, text: "¿Quieres venir a mi casa esta tarde? - Lo siento, no puedo.", questions: [
      { q: "¿Qué propone la primera persona?", choices: ["Venir a su casa esta tarde","Ir al cine mañana","Estudiar juntos"], answer: 0 },
      { q: "¿Acepta la invitación la otra persona?", choices: ["No (lo siento, no puedo)","Sí","Tal vez"], answer: 0 },
      { q: "¿La respuesta es negativa de forma educada?", choices: ["Sí","No","Molesta"], answer: 0 },
      { q: "¿La invitación es para la tarde?", choices: ["Sí","No","Para la mañana"], answer: 0 },
      { q: "¿La persona ofrece otra alternativa?", choices: ["No","Sí","Propone otro día"], answer: 0 }
    ]
  },
  { id: 26, text: "Por favor, una botella de agua y una tapa de jamón.", questions: [
      { q: "¿Qué pide la persona?", choices: ["Una botella de agua y una tapa de jamón","Un coche","Un libro"], answer: 0 },
      { q: "¿Es una orden en un restaurante o bar?", choices: ["Sí","No","Es en casa"], answer: 0 },
      { q: "¿Pide comida o bebida?", choices: ["Ambas","Solo bebida","Solo comida"], answer: 0 },
      { q: "¿La frase contiene 'por favor'?", choices: ["Sí","No","Dice 'gracias'"], answer: 0 },
      { q: "¿La persona quiere una bebida fría?", choices: ["Probablemente sí","No","No se dice"], answer: 0 }
    ]
  },
  { id: 27, text: "¿Tienes una mesa para dos a las ocho? - Sí, es posible.", questions: [
      { q: "¿Qué pregunta hacen?", choices: ["Si hay una mesa para dos a las ocho","Si venden pan","Si hay trabajo"], answer: 0 },
      { q: "¿Para cuántas personas quieren la mesa?", choices: ["Dos","Tres","Uno"], answer: 0 },
      { q: "¿A qué hora es la reserva?", choices: ["A las ocho","A las diez","A las seis"], answer: 0 },
      { q: "¿La respuesta es afirmativa?", choices: ["Sí","No","Tal vez"], answer: 0 },
      { q: "¿Esto ocurre en un restaurante?", choices: ["Sí probablemente","No","En una tienda"], answer: 0 }
    ]
  },
  { id: 28, text: "Voy a estudiar español por la tarde, a las cinco.", questions: [
      { q: "¿Qué va a hacer la persona?", choices: ["Estudiar español","Ir a trabajar","Cocinar"], answer: 0 },
      { q: "¿A qué hora estudia?", choices: ["A las cinco","A las ocho","A las dos"], answer: 0 },
      { q: "¿Es una actividad de aprendizaje?", choices: ["Sí","No","Es de deporte"], answer: 0 },
      { q: "¿La acción es en la mañana?", choices: ["No (por la tarde)","Sí","No se sabe"], answer: 0 },
      { q: "¿La persona habla en futuro cercano?", choices: ["Sí (voy a estudiar)","No (pasado)","Es un hábito"] , answer: 0 }
    ]
  },
  { id: 29, text: "¿Dónde naciste? - Nací en Sevilla.", questions: [
      { q: "¿Qué pregunta hacen?", choices: ["Dónde naciste","Qué estudiaste","Cuál es tu número"], answer: 0 },
      { q: "¿Dónde nació la persona?", choices: ["En Sevilla","En Madrid","En Barcelona"], answer: 0 },
      { q: "¿La frase usa pasado?", choices: ["Sí (nací)","No","Futuro"], answer: 0 },
      { q: "¿Es una pregunta personal?", choices: ["Sí","No","Es sobre trabajo"], answer: 0 },
      { q: "¿Se menciona una ciudad española?", choices: ["Sí","No","Se menciona un país"], answer: 0 }
    ]
  },
  { id: 30, text: "¿Quieres un postre? - No, gracias. Estoy lleno.", questions: [
      { q: "¿Qué ofrecen?", choices: ["Un postre","Una bebida","Un caramelo"], answer: 0 },
      { q: "¿Acepta la oferta la persona?", choices: ["No (gracias)","Sí","No se decide"], answer: 0 },
      { q: "¿Cómo se siente la persona tras comer?", choices: ["Lleno","Hambriento","Cansado"], answer: 0 },
      { q: "¿La respuesta es educada?", choices: ["Sí (gracias)","No","Enojada"], answer: 0 },
      { q: "¿Rechaza por cortesía?", choices: ["Sí","No","No se sabe"], answer: 0 }
    ]
  },
  { id: 31, text: "El autobús llega a las siete en punto.", questions: [
      { q: "¿A qué hora llega el autobús?", choices: ["A las siete en punto","A las seis y cuarto","A las ocho"], answer: 0 },
      { q: "¿Es información de transporte?", choices: ["Sí","No","Es un evento"], answer: 0 },
      { q: "¿La frase usa 'llega' en presente?", choices: ["Sí","No","Es pasado"], answer: 0 },
      { q: "¿La hora incluye minutos?", choices: ["No (en punto)","Sí (y media)","Sí (y cuarto)"], answer: 0 },
      { q: "¿Es un horario fijo?", choices: ["Probablemente sí","No","Es un recuerdo"], answer: 0 }
    ]
  },
  { id: 32, text: "Mi padre trabaja en un banco y mi madre es profesora.", questions: [
      { q: "¿Dónde trabaja el padre?", choices: ["En un banco","En una escuela","En una tienda"], answer: 0 },
      { q: "¿Cuál es la profesión de la madre?", choices: ["Profesora","Médico","Abogada"], answer: 0 },
      { q: "¿Ambos trabajan?", choices: ["Sí","No","Solo uno"], answer: 0 },
      { q: "¿Se mencionan profesiones?", choices: ["Sí","No","Solo lugares"], answer: 0 },
      { q: "¿La frase habla de la familia?", choices: ["Sí","No","Es sobre vacaciones"], answer: 0 }
    ]
  },
  { id: 33, text: "Tengo que comprar un regalo para el cumpleaños de Ana.", questions: [
      { q: "¿Por qué tiene que comprar un regalo?", choices: ["Para el cumpleaños de Ana","Para Navidad","Para venderlo"], answer: 0 },
      { q: "¿Para quién es el regalo?", choices: ["Ana","Luis","El profesor"], answer: 0 },
      { q: "¿La persona tiene una obligación?", choices: ["Sí (tengo que)","No","Es una sugerencia"], answer: 0 },
      { q: "¿Es una ocasión especial?", choices: ["Sí (cumpleaños)","No","Una reunión"], answer: 0 },
      { q: "¿Quiere comprar el regalo ahora o más tarde según la frase?", choices: ["No se especifica","Ahora","Mañana"], answer: 0 }
    ]
  },
  { id: 34, text: "¿Dónde trabajas? - Trabajo en una oficina cerca del centro.", questions: [
      { q: "¿Qué pregunta?", choices: ["Dónde trabajas","Qué estudias","Dónde vives"], answer: 0 },
      { q: "¿Dónde trabaja la persona?", choices: ["En una oficina cerca del centro","En una tienda","En casa"], answer: 0 },
      { q: "¿Es un trabajo de oficina?", choices: ["Sí","No","Se desconoce"], answer: 0 },
      { q: "¿La persona trabaja lejos del centro?", choices: ["No (cerca)","Sí (lejos)","No se dice"], answer: 0 },
      { q: "¿La respuesta es una ubicación?", choices: ["Sí","No","Es un nombre"], answer: 0 }
    ]
  },
  { id: 35, text: "¿Te gusta la música española? - Sí, me gusta mucho.", questions: [
      { q: "¿La persona pregunta por la música española?", choices: ["Sí","No","Por la comida"], answer: 0 },
      { q: "¿La otra persona responde positivamente?", choices: ["Sí (me gusta mucho)","No","No responde"], answer: 0 },
      { q: "¿Es una opinión personal?", choices: ["Sí","No","Es una pregunta"], answer: 0 },
      { q: "¿La respuesta incluye 'mucho'?", choices: ["Sí","No","Incluye 'poco'"], answer: 0 },
      { q: "¿Hablan de gustos?", choices: ["Sí","No","De trabajo"], answer: 0 }
    ]
  },
  { id: 36, text: "¿Dónde vives? - Vivo en un piso pequeño en la ciudad.", questions: [
      { q: "¿Qué pregunta hacen?", choices: ["Dónde vives","Qué comes","A qué hora trabajas"], answer: 0 },
      { q: "¿Dónde vive la persona?", choices: ["En un piso pequeño en la ciudad","En una casa grande en el campo","En una tienda"], answer: 0 },
      { q: "¿Vive en el campo?", choices: ["No","Sí","Tal vez"], answer: 0 },
      { q: "¿La vivienda es grande?", choices: ["No (pequeño)","Sí (grande)","No se dice"], answer: 0 },
      { q: "¿La persona usa 'vivo' para indicar residencia?", choices: ["Sí","No","Es trabajo"], answer: 0 }
    ]
  },
  { id: 37, text: "Hoy es martes y mañana es miércoles.", questions: [
      { q: "¿Qué día es hoy?", choices: ["Martes","Lunes","Jueves"], answer: 0 },
      { q: "¿Qué día es mañana?", choices: ["Miércoles","Martes","Domingo"], answer: 0 },
      { q: "¿La frase habla de días de la semana?", choices: ["Sí","No","Habla de meses"], answer: 0 },
      { q: "¿Hoy y mañana son días consecutivos?", choices: ["Sí","No","No se sabe"], answer: 0 },
      { q: "¿Es un diálogo sobre calendario?", choices: ["Sí","No","Sobre comida"], answer: 0 }
    ]
  },
  { id: 38, text: "Lo siento, no entiendo. ¿Puedes repetir, por favor?", questions: [
      { q: "¿Qué dice la persona?", choices: ["No entiendo","Entiendo perfectamente","Está de acuerdo"], answer: 0 },
      { q: "¿Qué pide la persona?", choices: ["Que repitan","Que se callen","Que salgan"], answer: 0 },
      { q: "¿Es una solicitud educada?", choices: ["Sí (por favor)","No","Ruda"], answer: 0 },
      { q: "¿La persona comprende el mensaje?", choices: ["No","Sí","Parcialmente"], answer: 0 },
      { q: "¿El contexto es comunicación?", choices: ["Sí","No","Sobre deportes"], answer: 0 }
    ]
  },
  { id: 39, text: "Tengo tres hijos: dos niñas y un niño.", questions: [
      { q: "¿Cuántos hijos tiene la persona?", choices: ["Tres","Dos","Cuatro"], answer: 0 },
      { q: "¿Cuántas niñas?", choices: ["Dos","Una","Tres"], answer: 0 },
      { q: "¿Cuántos niños varones?", choices: ["Uno","Dos","Ninguno"], answer: 0 },
      { q: "¿Es una familia grande?", choices: ["Relativamente sí","No","Muy grande"], answer: 0 },
      { q: "¿La persona enumera miembros de la familia?", choices: ["Sí","No","Habla de trabajo"], answer: 0 }
    ]
  },
  { id: 40, text: "¿A qué piso vas? - Al segundo piso.", questions: [
      { q: "¿Qué pregunta hacen?", choices: ["A qué piso vas","Qué te gusta","Dónde trabajas"], answer: 0 },
      { q: "¿A qué piso va la persona?", choices: ["Al segundo piso","Al primer piso","Al tercer piso"], answer: 0 },
      { q: "¿Es un edificio de varios pisos?", choices: ["Sí","No","No se sabe"], answer: 0 },
      { q: "¿La respuesta indica un número ordinal?", choices: ["Sí (segundo)","No","Dice 'primero'"], answer: 0 },
      { q: "¿La persona sube o baja?, según la frase no se dice", choices: ["No se dice","Sube","Baja"], answer: 0 }
    ]
  },
  { id: 41, text: "¿Puedo pagar con tarjeta? - Sí, aceptamos tarjetas.", questions: [
      { q: "¿Qué pregunta hacen?", choices: ["Si pueden pagar con tarjeta","Si hay descuento","Si hay wifi"], answer: 0 },
      { q: "¿Aceptan tarjeta?", choices: ["Sí","No","Solo efectivo"], answer: 0 },
      { q: "¿Es una transacción?", choices: ["Sí","No","Es personal"], answer: 0 },
      { q: "¿La respuesta es afirmativa?", choices: ["Sí","No","Tal vez"], answer: 0 },
      { q: "¿La frase ocurre en un comercio?", choices: ["Sí","No","En un parque"], answer: 0 }
    ]
  },
  { id: 42, text: "Quiero reservar una habitación para dos noches.", questions: [
      { q: "¿Qué quiere la persona?", choices: ["Reservar una habitación","Comprar un ticket","Alquilar un coche"], answer: 0 },
      { q: "¿Para cuántas noches?", choices: ["Dos noches","Una noche","Cinco noches"], answer: 0 },
      { q: "¿Es una petición formal?", choices: ["Sí","No","Es un comentario"], answer: 0 },
      { q: "¿La persona habla de alojamiento?", choices: ["Sí","No","De comida"], answer: 0 },
      { q: "¿Es una llamada o consulta en persona?", choices: ["No se sabe","Es llamada","En persona"], answer: 0 }
    ]
  },
  { id: 43, text: "Tengo que estudiar para el examen mañana.", questions: [
      { q: "¿Qué tiene que hacer la persona?", choices: ["Estudiar para el examen","Ir de vacaciones","Ir al gimnasio"], answer: 0 },
      { q: "¿Cuándo es el examen?", choices: ["Mañana","Hoy","Pasado mañana"], answer: 0 },
      { q: "¿La persona está preocupada?", choices: ["No se dice","Sí","No"], answer: 0 },
      { q: "¿La frase habla de preparación?", choices: ["Sí","No","Habla de compra"], answer: 0 },
      { q: "¿Estudiar es una obligación?", choices: ["Sí (tengo que)","No","Es opcional"], answer: 0 }
    ]
  },
  { id: 44, text: "El tren sale a las once y llega a la una.", questions: [
      { q: "¿A qué hora sale el tren?", choices: ["A las once","A las nueve","A las diez"], answer: 0 },
      { q: "¿A qué hora llega el tren?", choices: ["A la una","A las dos","A las doce"], answer: 0 },
      { q: "¿Es un trayecto de cuántas horas aproximadamente?", choices: ["Dos horas","Una hora","Tres horas"], answer: 0 },
      { q: "¿La frase tiene información de horario?", choices: ["Sí","No","Solo dias"], answer: 0 },
      { q: "¿El tren llega después de la salida?", choices: ["Sí","No","Simultáneamente"], answer: 0 }
    ]
  },
  { id: 45, text: "Tengo que ir al banco para sacar dinero.", questions: [
      { q: "¿Adónde tiene que ir la persona?", choices: ["Al banco","Al hospital","A la escuela"], answer: 0 },
      { q: "¿Para qué va al banco?", choices: ["Para sacar dinero","Para ver una película","Para comprar pan"], answer: 0 },
      { q: "¿Es una tarea financiera?", choices: ["Sí","No","Es social"], answer: 0 },
      { q: "¿La frase usa el verbo 'sacar' con dinero?", choices: ["Sí","No","No se dice"], answer: 0 },
      { q: "¿La persona va sola o con alguien? (no especificado)", choices: ["No se especifica","Va con alguien","Va acompañado"], answer: 0 }
    ]
  },
  { id: 46, text: "Me gusta leer libros por la noche.", questions: [
      { q: "¿Qué le gusta a la persona?", choices: ["Leer libros","Bailar","Cantar"], answer: 0 },
      { q: "¿Cuándo lee la persona?", choices: ["Por la noche","Por la mañana","Por la tarde"], answer: 0 },
      { q: "¿Es un hábito?", choices: ["Sí","No","Solo un día"], answer: 0 },
      { q: "¿La persona disfruta la actividad?", choices: ["Sí","No","No se sabe"], answer: 0 },
      { q: "¿Es una actividad tranquila?", choices: ["Sí","No","Ruidosa"], answer: 0 }
    ]
  },
  { id: 47, text: "¿A qué te dedicas? - Soy estudiante.", questions: [
      { q: "¿Qué pregunta hacen?", choices: ["A qué te dedicas","Cómo te llamas","Dónde vives"], answer: 0 },
      { q: "¿Cuál es la respuesta?", choices: ["Soy estudiante","Soy doctor","Soy conductor"], answer: 0 },
      { q: "¿La respuesta es una profesión o rol?", choices: ["Sí (estudiante)","No","Es una edad"], answer: 0 },
      { q: "¿La persona trabaja?", choices: ["No (es estudiante)","Sí","Tal vez"], answer: 0 },
      { q: "¿Es una presentación personal?", choices: ["Sí","No","Es una pregunta sobre clima"], answer: 0 }
    ]
  },
  { id: 48, text: "El supermercado abre a las ocho y cierra a las veinte.", questions: [
      { q: "¿A qué hora abre el supermercado?", choices: ["A las ocho","A las nueve","A las siete"], answer: 0 },
      { q: "¿A qué hora cierra?", choices: ["A las veinte","A las diez","A las dieciocho"], answer: 0 },
      { q: "¿Está abierto todo el día?", choices: ["No (abre y cierra)","Sí 24 horas","No se sabe"], answer: 0 },
      { q: "¿La frase da horario comercial?", choices: ["Sí","No","Da dirección"], answer: 0 },
      { q: "¿La tienda cierra por la noche?", choices: ["Sí","No","Nunca"], answer: 0 }
    ]
  },
  { id: 49, text: "Hoy vamos a cocinar paella con verduras.", questions: [
      { q: "¿Qué van a cocinar?", choices: ["Paella con verduras","Pizza","Sopa"], answer: 0 },
      { q: "¿Es una actividad de cocina grupal ('vamos')?", choices: ["Sí","No","Es individual"], answer: 0 },
      { q: "¿La comida es típica española?", choices: ["Sí (paella)","No","No se dice"], answer: 0 },
      { q: "¿La receta incluye verduras?", choices: ["Sí","No","Solo pescado"], answer: 0 },
      { q: "¿Es un plan para hoy?", choices: ["Sí (hoy)","No","Mañana"], answer: 0 }
    ]
  },
  { id: 50, text: "¿Quieres ir al parque? - Sí, quiero pasear con el perro.", questions: [
      { q: "¿Qué propone la primera persona?", choices: ["Ir al parque","Ir al cine","Ir de compras"], answer: 0 },
      { q: "¿Qué quiere hacer la otra persona?", choices: ["Pasear con el perro","Dormir","Leer"], answer: 0 },
      { q: "¿La respuesta es afirmativa?", choices: ["Sí","No","Tal vez"], answer: 0 },
      { q: "¿La actividad incluye un animal?", choices: ["Sí (perro)","No","Incluye una bicicleta"], answer: 0 },
      { q: "¿Es una actividad al aire libre?", choices: ["Sí (parque)","No","Interior"], answer: 0 }
    ]
  }
];

// ---------- State ----------
let currentPassageIndex = 0; // 0-based index for passages array
let answersForCurrent = [];  // store selected indices for the 5 questions of current passage
let totalCorrect = 0;
let totalAttempted = 0;

// ---------- DOM helpers ----------
function $(id) { return document.getElementById(id); }

// Ensure required DOM elements exist, create if not
function ensureDom() {
  if(!$('play')) {
    const controls = document.createElement('div');
    controls.id = 'controls';
    controls.innerHTML = `
      <button id="play">🔊 Play passage</button>
      <button id="repeat">🔁 Repeat</button>
      <button id="showTranscript">📝 Show transcript</button>
      <button id="next" disabled>Next passage</button>
      <div id="score">Score: 0 / 0</div>
    `;
    document.getElementById('app')?.prepend(controls);
  }

  if(!$('prompt')) {
    const p = document.createElement('p');
    p.id = 'prompt';
    p.textContent = 'Listen to the passage and answer the five questions.';
    document.getElementById('app')?.prepend(p);
  }

  if(!$('choices')) {
    const c = document.createElement('div');
    c.id = 'choices';
    c.className = 'choices';
    document.getElementById('app')?.appendChild(c);
  }

  if(!$('transcript')) {
    const t = document.createElement('div');
    t.id = 'transcript';
    t.style = "margin-top:12px;padding:10px;border-radius:8px;background:#fafafa;display:none;";
    document.getElementById('app')?.appendChild(t);
  }
}

// ---------- Speech (Text-to-Speech) ----------
let chosenVoice = null;

function pickVoice() {
  const voices = window.speechSynthesis.getVoices();
  if(!voices || voices.length === 0) return null;
  // prefer exact es-ES, otherwise any es-*
  chosenVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith(CONFIG.passageLanguage.toLowerCase()))
              || voices.find(v => v.lang && v.lang.toLowerCase().startsWith('es'))
              || voices[0];
  return chosenVoice;
}

function speak(text) {
  if(!('speechSynthesis' in window)) {
    alert('Speech Synthesis not supported in this browser.');
    return;
  }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = CONFIG.speakRate;
  utter.pitch = CONFIG.speakPitch;
  if(!chosenVoice) pickVoice();
  if(chosenVoice) utter.voice = chosenVoice;
  utter.lang = CONFIG.passageLanguage;
  window.speechSynthesis.speak(utter);
}

// ---------- Rendering ----------
function renderPassage() {
  ensureDom();
  const passage = passages[currentPassageIndex];
  answersForCurrent = new Array(passage.questions.length).fill(null);

  // update prompt and controls
  $('prompt').textContent = `Passage ${currentPassageIndex + 1} of ${passages.length}. Listen and answer 5 questions (A/B/C).`;
  $('score').textContent = `Score: ${totalCorrect} / ${totalAttempted}`;

  // enable/disable controls
  $('play').disabled = false;
  $('repeat').disabled = false;
  $('next').disabled = true;

  // render questions
  const container = $('choices');
  container.innerHTML = ''; // clear previous

  passage.questions.forEach((qq, qi) => {
    const qWrap = document.createElement('div');
    qWrap.className = 'question-block';
    qWrap.style = 'margin-bottom:12px;padding:10px;border-radius:8px;background:#fff3;';

    const qTitle = document.createElement('div');
    qTitle.className = 'q-text';
    qTitle.textContent = `${qi+1}. ${qq.q}`;
    qTitle.style = 'font-weight:600;margin-bottom:6px;';
    qWrap.appendChild(qTitle);

    const opts = document.createElement('div');
    opts.className = 'options';
    opts.style = 'display:flex;flex-direction:column;gap:6px;';

    qq.choices.forEach((choiceText, ci) => {
      const btn = document.createElement('button');
      btn.className = 'choice';
      btn.type = 'button';
      btn.textContent = `${String.fromCharCode(65 + ci)}. ${choiceText}`;
      btn.dataset.q = qi;
      btn.dataset.c = ci;
      btn.style = 'text-align:left;padding:10px;border-radius:8px;border:1px solid #ddd;background:#eef6ff;cursor:pointer;';
      btn.addEventListener('click', onChoiceClick);
      opts.appendChild(btn);
    });

    qWrap.appendChild(opts);
    container.appendChild(qWrap);
  });

  // hide transcript initially
  const transcriptDiv = $('transcript');
  transcriptDiv.style.display = 'none';
  transcriptDiv.innerText = passage.text;

  // wire up transcript button
  const showBtn = $('showTranscript');
  showBtn.disabled = CONFIG.allowTranscriptBeforeAnswer ? false : true;
  showBtn.onclick = () => {
    if(showBtn.dataset.shown === '1') {
      transcriptDiv.style.display = 'none';
      showBtn.dataset.shown = '0';
      showBtn.textContent = '📝 Show transcript';
    } else {
      transcriptDiv.style.display = 'block';
      showBtn.dataset.shown = '1';
      showBtn.textContent = '📝 Hide transcript';
    }
  };

  // play passage optionally
  if(CONFIG.autoPlayOnRender) {
    speak(passage.text);
  }
}

// ---------- Event handlers ----------
function onChoiceClick(e) {
  const btn = e.currentTarget;
  const qIndex = Number(btn.dataset.q);
  const cIndex = Number(btn.dataset.c);

  // if already answered, ignore
  if(answersForCurrent[qIndex] !== null) return;

  // mark selection locally
  answersForCurrent[qIndex] = cIndex;

  // find all buttons for this question and disable them, show feedback
  const container = $('choices');
  const qBlock = container.querySelectorAll('.question-block')[qIndex];
  const buttons = qBlock.querySelectorAll('button.choice');

  buttons.forEach(b => b.disabled = true);

  const passage = passages[currentPassageIndex];
  const correctIndex = passage.questions[qIndex].answer;

  // style selected and correct
  if(cIndex === correctIndex) {
    buttons[cIndex].style.background = '#d1fae5'; // greenish
    buttons[cIndex].style.color = '#034d40';
  } else {
    buttons[cIndex].style.background = '#fee2e2'; // reddish
    buttons[cIndex].style.color = '#7b1d1d';
    // show correct
    buttons[correctIndex].style.background = '#d1fae5';
    buttons[correctIndex].style.color = '#034d40';
  }

  // check if all answered
  const allAnswered = answersForCurrent.every(v => v !== null);
  if(allAnswered) {
    // compute score for this passage
    const passage = passages[currentPassageIndex];
    let correctCount = 0;
    passage.questions.forEach((q, i) => {
      if(answersForCurrent[i] === q.answer) correctCount++;
    });
    totalCorrect += correctCount;
    totalAttempted += passage.questions.length;

    // update score display
    $('score').textContent = `Score: ${totalCorrect} / ${totalAttempted}`;

    // allow transcript now
    $('showTranscript').disabled = false;

    // enable Next button
    $('next').disabled = false;

    // optionally show a short summary
    const prompt = $('prompt');
    prompt.textContent = `You answered ${correctCount} / ${passages[currentPassageIndex].questions.length} correct for this passage. Click Next passage to continue.`;
  }
}

function onPlay() {
  // play the current passage
  const passage = passages[currentPassageIndex];
  if(!passage) return;
  speak(passage.text);
}

function onRepeat() {
  onPlay();
}

function onNext() {
  // advance to next passage, cycle if at end
  currentPassageIndex++;
  if(currentPassageIndex >= passages.length) {
    // finished all passages
    showFinalResults();
    return;
  }
  renderPassage();
  // reset showTranscript button state
  const showBtn = $('showTranscript');
  showBtn.dataset.shown = '0';
  showBtn.textContent = '📝 Show transcript';
  showBtn.disabled = CONFIG.allowTranscriptBeforeAnswer ? false : true;
  // autoplay if desired
  if(CONFIG.autoPlayOnRender) speak(passages[currentPassageIndex].text);
}

function showFinalResults() {
  // Display final score and option to restart
  const app = document.getElementById('app');
  app.innerHTML = `
    <h2>Test complete</h2>
    <p>Your total score: ${totalCorrect} / ${totalAttempted}.</p>
    <p>Passed passages: ${passages.length}. You completed all ${passages.length} listening passages.</p>
    <button id="restart">Restart test</button>
  `;
  document.getElementById('restart').addEventListener('click', () => {
    // reset state
    currentPassageIndex = 0;
    answersForCurrent = [];
    totalCorrect = 0;
    totalAttempted = 0;
    // restore original UI by reloading page (simple) or re-rendering
    location.reload();
  });
}

// ---------- Init ----------
function init() {
  ensureDom();

  // bind control buttons
  $('play').addEventListener('click', onPlay);
  $('repeat').addEventListener('click', onRepeat);
  $('next').addEventListener('click', onNext);

  // prepare voices
  if (typeof speechSynthesis !== 'undefined') {
    // voices may not be ready immediately, so ensure pick after load
    speechSynthesis.onvoiceschanged = () => {
      pickVoice();
    };
    // attempt to pick now if available
    pickVoice();
  }

  // initial render
  renderPassage();
}

// Run init when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// === Connect buttons to functions ===

function playAudioForCurrentPassage() {
  const utterance = new SpeechSynthesisUtterance(currentPassage.text);
  utterance.lang = 'es-ES'; // European Spanish
  speechSynthesis.speak(utterance);

  // show the quiz after playing starts
  document.getElementById('quiz-section').classList.remove('hidden');
}

function showNextQuestion() {
  // your quiz question logic goes here
}

function loadNextPassage() {
  // logic for cycling through passages
  currentIndex++;
  if (currentIndex >= passages.length) currentIndex = 0;
  currentPassage = passages[currentIndex];
  document.getElementById('transcript-section').classList.add('hidden');
  document.getElementById('result-section').classList.add('hidden');
  document.getElementById('quiz-section').classList.add('hidden');
}

// Play Audio
document.getElementById('playAudio').addEventListener('click', () => {
  playAudioForCurrentPassage();
});

// Next Question
document.getElementById('nextQuestion').addEventListener('click', () => {
  showNextQuestion();
});

// Show Transcript
document.getElementById('showTranscript').addEventListener('click', () => {
  document.getElementById('transcript-section').classList.remove('hidden');
  document.getElementById('transcriptText').textContent = currentPassage.transcript;
});

// Next Passage
document.getElementById('nextPassage').addEventListener('click', () => {
  loadNextPassage();
});


