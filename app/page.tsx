"use client";

import { useEffect, useState } from "react";

type Meal = {
  slot: "Desayuno" | "Comida" | "Cena" | "Dulce / pausa";
  picks: string[];
};

type DayPlan = {
  id: string;
  date: string;
  shortDate: string;
  weekday: string;
  title: string;
  region: "Llegadas" | "Puglia" | "Basilicata" | "Campania" | "Vuelta";
  people: string;
  hotel: {
    label: string;
    city: string;
    url?: string;
  };
  stay?: string;
  drive: string;
  route: string[];
  summary: string;
  logistics: string[];
  story: string;
  curiosities: string[];
  bingo: string[];
  meals: Meal[];
  mustEat: string[];
  color: string;
};

const travelers = ["Mary", "Juan", "Palo", "Rober", "Eleni", "Dani"];

const hotelLinks = {
  bari: "https://www.booking.com/Share-3UnqQ7",
  ostuni: "https://www.booking.com/Share-YJhpij",
  matera: "https://www.booking.com/Share-eSaBbs",
  amalfi:
    "https://www.airbnb.ae/rooms/7409638?source_impression_id=p3_1781435448_P3ElFBIY1ACOIKkc",
  napoli: "https://www.booking.com/Share-Xk5ort",
};

const days: DayPlan[] = [
  {
    id: "aug22",
    date: "Sábado 22 de agosto",
    shortDate: "22 AGO",
    weekday: "SAB",
    title: "Mary y Juan aterrizan en Bari",
    region: "Llegadas",
    people: "Mary y Juan",
    hotel: {
      label: "Llegada a Bari",
      city: "Bari",
    },
    drive: "Sin ruta",
    route: ["Madrid", "Bari"],
    summary:
      "Día de llegada para Mary y Juan. Sin agenda oficial: aterrizar, llegar al hotel y dejar que Bari empiece suave.",
    logistics: [
      "Este día queda como colchón de viaje.",
      "La guía completa empieza el 23, cuando ya va llegando el resto del equipo.",
    ],
    story:
      "No hay deberes de historia hoy. Solo guardar energía para La Fragoneta y para el primer olor serio a focaccia barese.",
    curiosities: ["El viaje empieza antes para dos, pero la aventura común arranca el 23."],
    bingo: ["Llegar a Bari", "Escribir al grupo: base tomada", "Dormir bien"],
    meals: [],
    mustEat: [],
    color: "coral",
  },
  {
    id: "aug23",
    date: "Domingo 23 de agosto",
    shortDate: "23 AGO",
    weekday: "DOM",
    title: "Bari Vecchia, focaccia y reencuentro",
    region: "Puglia",
    people: "Mary, Juan, Palo, Rober, Eleni y Dani al final del día",
    hotel: {
      label: "Home Abate Gimma 170",
      city: "Bari",
      url: hotelLinks.bari,
    },
    stay: "Noche del 23 al 24",
    drive: "0 h de roadtrip",
    route: ["Bari aeropuerto", "Bari Vecchia", "Lungomare"],
    summary:
      "Primer día de viaje: Palo y Rober llegan por la mañana, Eleni y Dani por la noche. Bari es perfecto para arrancar sin coche: callejear por Bari Vecchia, probar focaccia y cenar algo muy pugliese.",
    logistics: [
      "Plan flexible por llegadas escalonadas.",
      "Haced Bari Vecchia a pie: calles estrechas, plazas y el paseo marítimo quedan cerca.",
      "Reservad cena si queréis mesa para seis; domingo y verano pueden jugar fuerte.",
    ],
    story:
      "Bari es una ciudad con dos ritmos: el puerto y la ciudad vieja. Durante siglos fue puerta de entrada al Adriático, con bizantinos, normandos y comerciantes cruzándose por sus calles. La Basilica di San Nicola no es solo una iglesia bonita: guarda reliquias veneradas tanto por católicos como por ortodoxos, así que Bari lleva mucho tiempo haciendo de puente entre Oriente y Occidente. En Bari Vecchia, la historia baja a la calle: señoras haciendo orecchiette en la puerta, motos que aparecen como si tuvieran guion propio y olor a horno a cualquier hora razonable.",
    curiosities: [
      "La Strada delle Orecchiette es casi teatro gastronómico: pasta hecha a mano en plena calle.",
      "La focaccia barese lleva tomate y aceitunas; es desayuno, snack y solución universal.",
      "El Castello Svevo recuerda que Federico II no venía precisamente de turismo tranquilo.",
    ],
    bingo: [
      "Basilica di San Nicola",
      "Strada delle Orecchiette",
      "Castello Svevo por fuera",
      "Piazza Mercantile",
      "Lungomare al atardecer",
      "Focaccia barese",
      "Primera foto de los seis",
    ],
    meals: [
      {
        slot: "Desayuno",
        picks: ["Panificio Fiore para focaccia", "Caffe Cognetti para cafe y dulce"],
      },
      {
        slot: "Comida",
        picks: ["Mastro Ciccio para panini potentes", "Casa.Ro si apetece burrata y quesos"],
      },
      {
        slot: "Cena",
        picks: ["La Uascezze para cocina barese", "PerBacco para una cena mas cuidada"],
      },
    ],
    mustEat: [
      "focaccia barese",
      "orecchiette alle cime di rapa",
      "panzerotti",
      "sgagliozze",
      "spaghetti all'assassina",
    ],
    color: "lemon",
  },
  {
    id: "aug24",
    date: "Lunes 24 de agosto",
    shortDate: "24 AGO",
    weekday: "LUN",
    title: "La Fragoneta: Bari - Polignano - Monopoli - Ostuni",
    region: "Puglia",
    people: "Los 6",
    hotel: {
      label: "Dimora Lavinia Casa vacanze Centro storico Ostuni",
      city: "Ostuni",
      url: hotelLinks.ostuni,
    },
    stay: "Noche del 24 al 25",
    drive: "1 h 30 - 1 h 45 de coche, sin contar paradas",
    route: ["Bari", "Polignano a Mare", "Monopoli", "Ostuni"],
    summary:
      "La Fragoneta entra en escena. Ruta costera con baño visual en Polignano, almuerzo marinero o de panino, paseo por Monopoli y llegada a Ostuni para ver la ciudad blanca cambiar de color al atardecer.",
    logistics: [
      "Bari - Polignano: unos 35 min.",
      "Polignano - Monopoli: unos 15 min.",
      "Monopoli - Ostuni: unos 40 min.",
      "En agosto, priorizad parking temprano y calzado comodo: el blanco de Ostuni deslumbra de verdad.",
    ],
    story:
      "Polignano parece construida para que el Adriatico se luzca: el casco antiguo se asoma a acantilados y calas, y la famosa Lama Monachile parece una postal con gente real dentro. Monopoli baja un punto el drama y sube el encanto marinero: puerto viejo, barcas azules y una catedral con leyenda de icono llegado por mar. Ostuni, la Citta Bianca, es otro lenguaje: cal, callejones, escaleras y esa sensacion de que todo refleja la luz para que el verano no tenga escapatoria.",
    curiosities: [
      "Polignano es la ciudad natal de Domenico Modugno, el de 'Volare'.",
      "La leyenda de Monopoli dice que una balsa con un icono de la Madonna trajo tambien las vigas para terminar la catedral.",
      "Ostuni se encalo durante siglos por luz, frescor y limpieza; el resultado es una ciudad que parece subida de contraste.",
    ],
    bingo: [
      "Mirador de Lama Monachile",
      "Estatua de Domenico Modugno",
      "Foto desde balcon al Adriatico",
      "Porto Vecchio de Monopoli",
      "Cala Porta Vecchia",
      "Catedral de Monopoli",
      "Catedral de Ostuni",
      "Puesta de sol desde las murallas",
    ],
    meals: [
      {
        slot: "Desayuno",
        picks: ["Panificio Fiore antes de salir", "Cafe rapido en Bari Vecchia"],
      },
      {
        slot: "Comida",
        picks: ["Pescaria en Polignano", "Osteria Perricci en Monopoli", "Mint Cucina Fresca si quereis algo ligero"],
      },
      {
        slot: "Cena",
        picks: ["Osteria del Tempo Perso en Ostuni", "Taverna della Gelosia", "Borgo Antico Bistrot para vistas"],
      },
    ],
    mustEat: ["crudo di mare", "panino de pescado", "bombette pugliesi", "burrata", "pasticciotto"],
    color: "turquoise",
  },
  {
    id: "aug25",
    date: "Martes 25 de agosto",
    shortDate: "25 AGO",
    weekday: "MAR",
    title: "Trulli, Locorotondo y noche de piedra en Matera",
    region: "Basilicata",
    people: "Los 6",
    hotel: {
      label: "Hydria Rooms",
      city: "Matera",
      url: hotelLinks.matera,
    },
    stay: "Noche del 25 al 26 · 3 habitaciones",
    drive: "2 h 20 - 2 h 40 de coche, sin contar paradas",
    route: ["Ostuni", "Alberobello", "Locorotondo", "Matera"],
    summary:
      "Dia de pueblos blancos y piedra antigua. Alberobello pone los trulli, Locorotondo pone el paseo circular sobre el Valle d'Itria y Matera pone una llegada de impacto: los Sassi al atardecer son de esas cosas que conviene mirar un rato sin hablar.",
    logistics: [
      "Ostuni - Alberobello: unos 45 min.",
      "Alberobello - Locorotondo: unos 15 min.",
      "Locorotondo - Matera: alrededor de 1 h 25.",
      "Matera tiene cuestas y escaleras: dejad maletas y salid ligeros.",
    ],
    story:
      "Alberobello parece un decorado, pero los trulli son arquitectura lista: piedra seca, techos conicos y una historia muy humana de ingenio fiscal. Locorotondo, como su nombre promete, se enrosca en una forma casi circular y mira al Valle d'Itria como quien sabe que vive en una postal. Matera juega en otra liga temporal: cuevas habitadas durante milenios, barrios excavados en la roca y una transformacion enorme, de simbolo de pobreza en los anos 50 a Patrimonio UNESCO y Capital Europea de la Cultura en 2019.",
    curiosities: [
      "Los trulli se construian sin mortero: asi podian desmontarse y esquivar ciertos impuestos historicos.",
      "Locorotondo significa algo asi como 'lugar redondo'. No se complicaron con el naming.",
      "En Matera, durante siglos una calle podia ser el tejado de la casa de abajo.",
    ],
    bingo: [
      "Rione Monti en Alberobello",
      "Aia Piccola sin prisas",
      "Trullo Sovrano",
      "Mirador de Santa Lucia",
      "Centro historico de Locorotondo",
      "Balcon del Valle d'Itria",
      "Primer mirador de los Sassi",
      "Matera de noche",
    ],
    meals: [
      {
        slot: "Desayuno",
        picks: ["Caffe Cavour en Ostuni", "Pasticciotto para llevar antes de carretera"],
      },
      {
        slot: "Comida",
        picks: ["La Cantina en Alberobello", "Terra Madre en Alberobello", "U Curdunn en Locorotondo"],
      },
      {
        slot: "Cena",
        picks: ["L'Abbondanza Lucana en Matera", "Osteria Pico", "Soul Kitchen", "Vitantonio Lombardo si apetece homenaje"],
      },
    ],
    mustEat: [
      "capocollo di Martina Franca",
      "bombette",
      "pane di Matera",
      "peperoni cruschi",
      "crapiata materana",
    ],
    color: "olive",
  },
  {
    id: "aug26",
    date: "Miércoles 26 de agosto",
    shortDate: "26 AGO",
    weekday: "MIE",
    title: "Matera - Gravina - Amalfi",
    region: "Campania",
    people: "Los 6",
    hotel: {
      label: "Apartamento de Amalfi",
      city: "Amalfi",
      url: hotelLinks.amalfi,
    },
    stay: "Noche del 26 al 27",
    drive: "4 h - 4 h 30 de coche, sin contar paradas",
    route: ["Matera", "Gravina in Puglia", "Salerno / Amalfi"],
    summary:
      "Dia largo y precioso: ultima mirada a Matera, parada en Gravina para puente y barranco, y salto de Puglia/Basilicata a Campania. La llegada a Amalfi conviene hacerla con mentalidad logistica: poco equipaje a mano y paciencia mediterranea.",
    logistics: [
      "Matera - Gravina: unos 35 min.",
      "Gravina - Amalfi: alrededor de 3 h 30 - 4 h segun trafico.",
      "Si quereis evitar el coche en Amalfi, dejad La Fragoneta en Salerno y entrad por ferry con equipaje ligero.",
      "Confirmad parking y ferry el dia anterior: finales de agosto no perdona improvisaciones.",
    ],
    story:
      "Gravina es una hermana menos famosa de Matera, pero tiene el mismo talento dramatico: barranco, cuevas, iglesias rupestres y un puente-acueducto que parece colocado para una pelicula. Luego el paisaje cambia: de la piedra seca interior al teatro vertical de la Costa Amalfitana. Amalfi fue una republica marinera poderosa, con comercio por el Mediterraneo cuando media Europa aun se estaba ordenando. Hoy parece pequena, pero su Duomo y su pasado naval recuerdan que aqui hubo ambicion de mundo.",
    curiosities: [
      "Gravina viene de una palabra ligada a roca, barranco y erosion: el nombre describe exactamente el sitio.",
      "El papel de Amalfi fue famoso durante siglos; su Museo della Carta cuenta esa parte menos playera.",
      "Los limones sfusato amalfitano son grandes, aromaticos y base emocional de media costa.",
    ],
    bingo: [
      "Amanecer o paseo corto en Matera",
      "Casa Grotta o mirador Sassi",
      "Puente-acueducto de Gravina",
      "Catedral de Gravina por fuera",
      "Primera vista del Tirreno",
      "Duomo de Amalfi",
      "Delizia al limone",
      "Foto oficial de La Fragoneta",
    ],
    meals: [
      {
        slot: "Desayuno",
        picks: ["Caffe Schiuma en Matera", "Cafe y cornetto cerca del Sasso Barisano"],
      },
      {
        slot: "Comida",
        picks: ["Osteria Radici en Gravina", "13 Volte en Gravina", "Picnic ligero si el dia va justo"],
      },
      {
        slot: "Cena",
        picks: ["Da Gemma en Amalfi", "Taverna Buonvicino", "Marina Grande si quereis mar y reserva"],
      },
    ],
    mustEat: [
      "pane di Matera",
      "caciocavallo",
      "scialatielli ai frutti di mare",
      "delizia al limone",
      "limoncello",
    ],
    color: "terracotta",
  },
  {
    id: "aug27",
    date: "Jueves 27 de agosto",
    shortDate: "27 AGO",
    weekday: "JUE",
    title: "Pompeya, ferry por la costa y llegada a Nápoles",
    region: "Campania",
    people: "Los 6 hasta la noche; Palo y Rober se quedan cerca del aeropuerto",
    hotel: {
      label: "Prestige Rooms Chiaia",
      city: "Nápoles",
      url: hotelLinks.napoli,
    },
    stay: "Noches del 27 al 30 · 2 habitaciones",
    drive: "1 h 30 - 2 h de coche + ferries, segun base de parking",
    route: ["Amalfi / Salerno", "Pompeya", "Costa Amalfitana en ferry", "Nápoles"],
    summary:
      "Madrugon con premio: Pompeya por la mañana, costa desde el agua por la tarde y cena antes de dejar a Palo y Rober cerca del aeropuerto para su vuelo temprano del 28. Dia de horarios: aqui manda la logistica.",
    logistics: [
      "Compra entradas de Pompeya con antelacion si quereis ir directos.",
      "Travelmar opera ferries por la Costa Amalfitana; mirad horarios reales el dia anterior.",
      "La idea buena: usar Salerno como nodo para ferry y coche, evitando meter La Fragoneta en Amalfi.",
      "Despues de cenar: dejar a Palo y Rober en hotel de aeropuerto y dormir en Napoles.",
    ],
    story:
      "Pompeya no es una ruina normal: es una ciudad interrumpida. En el ano 79, el Vesubio la cubrio de ceniza y piedra pomez, y ese desastre la dejo conservada como una foto brutal de la vida romana: tabernas, panaderias, grafitis, casas elegantes, calles con pasos elevados y anuncios politicos. Luego el dia cambia de escala: la Costa Amalfitana desde el ferry enseña por que conviene verla desde el mar. Desde abajo, los pueblos parecen colgados y el trafico de la carretera deja de ser vuestro problema durante un rato.",
    curiosities: [
      "En Pompeya se conservan grafitis cotidianos: politica, amor, quejas y humor de hace casi 2.000 anos.",
      "Las molduras de las victimas se hicieron rellenando huecos dejados en la ceniza por los cuerpos descompuestos.",
      "Ver Amalfi desde el ferry convierte el traslado en parte del plan, no solo en transporte.",
    ],
    bingo: [
      "Foro de Pompeya",
      "Anfiteatro",
      "Via dell'Abbondanza",
      "Casa del Fauno o una domus potente",
      "Moldes de Pompeya",
      "Foto con Vesubio",
      "Ferry desde Salerno",
      "Ultima cena de los seis",
    ],
    meals: [
      {
        slot: "Desayuno",
        picks: ["Pasticceria Pansa en Amalfi", "Cafe rapido antes del primer ferry"],
      },
      {
        slot: "Comida",
        picks: ["La Bettola del Gusto en Pompei", "Add'u Mimi en Pompei", "Panino ligero si quereis exprimir ruinas"],
      },
      {
        slot: "Cena",
        picks: ["Osteria Canali en Salerno", "La Botte Pazza en Salerno", "Pizzeria cerca de Napoles si el horario aprieta"],
      },
    ],
    mustEat: ["sfogliatella", "cuoppo fritto", "marisco", "delizia al limone", "pizza napolitana si ya toca"],
    color: "sea",
  },
  {
    id: "aug28",
    date: "Viernes 28 de agosto",
    shortDate: "28 AGO",
    weekday: "VIE",
    title: "Nápoles I: Spaccanapoli y centro histórico",
    region: "Campania",
    people: "Mary, Juan, Eleni y Dani",
    hotel: {
      label: "Prestige Rooms Chiaia",
      city: "Nápoles",
      url: hotelLinks.napoli,
    },
    stay: "Noches del 27 al 30 · 2 habitaciones",
    drive: "0 h de coche idealmente",
    route: ["Centro histórico", "Spaccanapoli", "San Gregorio Armeno", "Cappella Sansevero"],
    summary:
      "Palo y Rober vuelan temprano. Los cuatro que quedan se meten en Nápoles de frente: centro histórico, Spaccanapoli, iglesias, caos precioso y pizza como institución. Mejor hacerlo andando y con hambre.",
    logistics: [
      "Reservad Cappella Sansevero si quereis ver el Cristo Velato.",
      "Usad metro/taxi si el alojamiento queda lejos; el centro historico se disfruta a pie.",
      "En pizzerias famosas suele haber cola: elegid una principal y un plan B cercano.",
    ],
    story:
      "Nápoles empezo como Neapolis, ciudad nueva griega, y nunca ha dejado de acumular capas. Spaccanapoli sigue el trazado de un decumano antiguo: una linea que parece cortar el centro historico en dos. Cada calle mezcla alta cultura y vida diaria sin pedir permiso: capillas barrocas, talleres, altares callejeros, ropa tendida, motos y vendedores. La Cappella Sansevero es la parada de asombro: el Cristo Velato parece tela sobre piel, pero es marmol. Nápoles juega mucho a eso: hacer que lo imposible parezca cotidiano.",
    curiosities: [
      "Spaccanapoli significa literalmente que 'parte' Nápoles.",
      "La pizza napolitana tradicional vive en dos reinas: marinara y margherita.",
      "El arte del pizzaiuolo napolitano esta reconocido por UNESCO como patrimonio cultural inmaterial.",
    ],
    bingo: [
      "Spaccanapoli completa",
      "Piazza del Gesu Nuovo",
      "San Gregorio Armeno",
      "Duomo de Napoles",
      "Cappella Sansevero",
      "Primer espresso serio",
      "Pizza margherita",
      "Babà o sfogliatella",
    ],
    meals: [
      {
        slot: "Desayuno",
        picks: ["Gran Caffe Gambrinus", "Sfogliatella Mary", "Scaturchio"],
      },
      {
        slot: "Comida",
        picks: ["L'Antica Pizzeria da Michele", "Gino e Toto Sorbillo", "Di Matteo para pizza fritta"],
      },
      {
        slot: "Cena",
        picks: ["Tandem Ragu", "Trattoria da Nennella", "Januarius cerca del Duomo"],
      },
    ],
    mustEat: ["pizza margherita", "pizza marinara", "pizza fritta", "sfogliatella", "babà", "caffe napolitano"],
    color: "coral",
  },
  {
    id: "aug29",
    date: "Sábado 29 de agosto",
    shortDate: "29 AGO",
    weekday: "SAB",
    title: "Nápoles II: mar, Quartieri Spagnoli y vistas",
    region: "Campania",
    people: "Mary, Juan, Eleni y Dani",
    hotel: {
      label: "Prestige Rooms Chiaia",
      city: "Nápoles",
      url: hotelLinks.napoli,
    },
    stay: "Noches del 27 al 30 · 2 habitaciones",
    drive: "0 h de coche idealmente",
    route: ["Quartieri Spagnoli", "Via Toledo", "Castel dell'Ovo", "Vomero / San Martino"],
    summary:
      "Segundo día para ver la ciudad con más aire: Quartieri Spagnoli, estación Toledo, paseo junto al mar, Castel dell'Ovo y subida al Vomero para despedir Nápoles desde arriba. Noche final con mesa buena.",
    logistics: [
      "La estacion Toledo merece bajarse aunque no toque por ruta.",
      "Para vistas, subid en funicular a Vomero y caminad a San Martino.",
      "Cena final: reservad, porque sabado en agosto es deporte de contacto.",
    ],
    story:
      "Los Quartieri Spagnoli nacieron en el siglo XVI para alojar tropas españolas; hoy son un resumen intenso de Nápoles popular, con calles en cuadricula, altares, tiendas y vida en planta baja. Castel dell'Ovo tiene una leyenda deliciosa: Virgilio habria escondido un huevo magico en sus cimientos, y si el huevo se rompe, la ciudad sufre. Como despedida, el Vomero pone distancia y perspectiva: desde arriba se entiende el golfo, el Vesubio y esa mezcla napolitana de belleza, ruido e historia apilada.",
    curiosities: [
      "Castel dell'Ovo es el castillo mas antiguo de Nápoles.",
      "El nombre del castillo viene de una leyenda medieval sobre un huevo magico de Virgilio.",
      "La estacion Toledo del metro suele aparecer entre las mas bonitas de Europa por su diseño azul profundo.",
    ],
    bingo: [
      "Murales de Quartieri Spagnoli",
      "Estacion Toledo",
      "Pignasecca",
      "Castel dell'Ovo",
      "Paseo por Lungomare",
      "Funicular al Vomero",
      "Mirador de San Martino",
      "Cena final del viaje",
    ],
    meals: [
      {
        slot: "Desayuno",
        picks: ["Scaturchio", "Gran Caffe Gambrinus", "Bar Mexico para cafe sin ceremonia"],
      },
      {
        slot: "Comida",
        picks: ["La Masardona para pizza fritta", "Cibi Cotti Nonna Anna", "Antica Pizzeria Port'Alba"],
      },
      {
        slot: "Cena",
        picks: ["50 Kalo", "Mimi alla Ferrovia", "Osteria della Mattonella"],
      },
    ],
    mustEat: ["pizza fritta", "ragu napolitano", "genovese napolitana", "mozzarella di bufala", "limoncello"],
    color: "violet",
  },
  {
    id: "aug30",
    date: "Domingo 30 de agosto",
    shortDate: "30 AGO",
    weekday: "DOM",
    title: "Vuelta a Madrid",
    region: "Vuelta",
    people: "Mary, Juan, Eleni y Dani",
    hotel: {
      label: "Sin hotel: vuelta",
      city: "Nápoles / Madrid",
    },
    drive: "Traslado al aeropuerto",
    route: ["Nápoles", "Aeropuerto", "Madrid"],
    summary:
      "Cierre del viaje para los cuatro que quedan. Día de maletas, aeropuerto y promesa de no volver a mirar una báscula de equipaje con soberbia.",
    logistics: [
      "Devolved La Fragoneta con margen.",
      "Guardad recibos de parking, gasolina y peajes.",
      "Ultimo cafe napolitano antes de seguridad si los horarios lo permiten.",
    ],
    story:
      "La vuelta tambien cuenta: cuando un viaje pasa por Bari, Puglia, Matera, Amalfi, Pompeya y Napoles en ocho dias, el resumen no cabe en una sola foto. Queda la ruta, la comida, las canciones de coche y esa extraña certeza de que el sur de Italia siempre parece un poco excesivo, en el mejor sentido.",
    curiosities: [
      "Napoles - Madrid cierra una ruta que empezo con llegadas escalonadas y termina con cuatro viajeros.",
      "La Fragoneta pasa a leyenda familiar si sobrevive con dignidad al parking italiano.",
    ],
    bingo: ["Maletas cerradas", "Ultimo cafe", "Devolver coche", "Vuelo a Madrid", "Album compartido creado"],
    meals: [
      {
        slot: "Desayuno",
        picks: ["Cafe cerca del hotel", "Sfogliatella para despedir", "Opcion aeropuerto si toca madrugar"],
      },
    ],
    mustEat: ["sfogliatella final", "espresso final"],
    color: "lemon",
  },
];

const sourceLinks = [
  {
    label: "Travelmar - ferries Costa Amalfitana",
    url: "https://www.travelmar.it/en/index",
  },
  {
    label: "Pompeii Sites - parque arqueológico",
    url: "https://www.pompeiisites.org/en/",
  },
  {
    label: "UNESCO - Trulli de Alberobello",
    url: "https://whc.unesco.org/en/list/787/",
  },
  {
    label: "UNESCO - Sassi de Matera",
    url: "https://whc.unesco.org/en/list/670/",
  },
  {
    label: "Museo Cappella Sansevero",
    url: "https://www.museosansevero.it/en/",
  },
  {
    label: "Decanter - guía gastronómica de Bari",
    url: "https://www.decanter.com/wine-travel/bari-city-guide-for-wine-lovers-where-to-eat-and-drink-in-the-capital-of-puglia",
  },
];

function mapsUrl(place: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
}

function classNames(...items: Array<string | false | undefined>) {
  return items.filter(Boolean).join(" ");
}

export default function Home() {
  const [activeDayId, setActiveDayId] = useState("aug23");
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const stored = window.localStorage.getItem("vamos-italia-bingo");
    if (stored) {
      setChecked(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("vamos-italia-bingo", JSON.stringify(checked));
  }, [checked]);

  const activeDay = days.find((day) => day.id === activeDayId) ?? days[1];
  const selectedDays = [activeDay];
  const completedCount = Object.values(checked).filter(Boolean).length;
  const totalBingo = days.reduce((sum, day) => sum + day.bingo.length, 0);

  function toggleBingo(key: string) {
    setChecked((current) => ({ ...current, [key]: !current[key] }));
  }

  return (
    <main>
      <section className="hero">
        <div className="heroImage" />
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">Roadtrip familiar · 22-30 agosto</p>
          <h1>Il viaggio della famiglia Marcet in Italia</h1>
          <p className="heroCopy">
            Bari, Puglia, Matera, Amalfi, Pompeya y Nápoles en una ruta para seis,
            con La Fragoneta como personaje invitado.
          </p>
          <div className="heroStats" aria-label="Resumen del viaje">
            <span>6 viajeros</span>
            <span>9 días</span>
            <span>5 alojamientos</span>
            <span>{completedCount}/{totalBingo} bingo</span>
          </div>
        </div>
      </section>

      <section className="band introBand">
        <div className="container introGrid">
          <div>
            <p className="sectionKicker">Equipo</p>
            <h2>Los seis de la ruta</h2>
            <div className="travelerGrid">
              {travelers.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
            <p className="vehicleNote">La Fragoneta: Mercedes Vito o similar · Avis · 24-27 agosto</p>
          </div>
          <div className="routeRibbon" aria-label="Ruta principal">
            {["Bari", "Ostuni", "Matera", "Amalfi", "Nápoles", "Madrid"].map((stop, index) => (
              <div className="routeStop" key={stop}>
                <span>{index + 1}</span>
                <strong>{stop}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band daySelectorBand">
        <div className="container">
          <div className="daySelectorHeader">
            <span>Selecciona día</span>
            <strong>{activeDay.date}</strong>
          </div>
          <div className="dayTabs" role="tablist" aria-label="Seleccionar día del viaje">
            {days.map((day) => (
              <button
                aria-selected={activeDayId === day.id}
                className={classNames("dayTab", activeDayId === day.id && "isActive")}
                key={day.id}
                onClick={() => setActiveDayId(day.id)}
                role="tab"
                type="button"
              >
                <span>{day.shortDate.split(" ")[0]}</span>
                <small>{day.weekday}</small>
                <i>{day.region}</i>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="band daysBand">
        <div className="container dayList">
          {selectedDays.map((day) => {
            const done = day.bingo.filter((item) => checked[`${day.id}-${item}`]).length;

            return (
              <article className={classNames("dayCard", `tone-${day.color}`)} key={day.id}>
                <header className="dayHeader">
                  <div className="dateBadge">
                    <span>{day.shortDate}</span>
                    <small>{day.region}</small>
                  </div>
                  <div>
                    <p className="dayDate">{day.date}</p>
                    <h2>{day.title}</h2>
                    <p>{day.summary}</p>
                  </div>
                </header>

                <div className="factsGrid">
                  <div>
                    <span className="factLabel">Hotel</span>
                    {day.hotel.url ? (
                      <a href={day.hotel.url} target="_blank" rel="noreferrer">
                        {day.hotel.label}
                      </a>
                    ) : (
                      <strong>{day.hotel.label}</strong>
                    )}
                    <small>{day.stay ? `${day.hotel.city} · ${day.stay}` : day.hotel.city}</small>
                  </div>
                  <div>
                    <span className="factLabel">Coche</span>
                    <strong>{day.drive}</strong>
                    <small>tiempos aproximados</small>
                  </div>
                  <div>
                    <span className="factLabel">Viajeros</span>
                    <strong>{day.people}</strong>
                    <small>según incorporaciones y vuelos</small>
                  </div>
                </div>

                <div className="routeLine">
                  {day.route.map((stop) => (
                    <span key={stop}>{stop}</span>
                  ))}
                </div>

                <div className="contentGrid">
                  <section>
                    <p className="sectionKicker">Logística</p>
                    <ul className="cleanList">
                      {day.logistics.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <p className="sectionKicker">Historia para La Fragoneta</p>
                    <p className="storyText">{day.story}</p>
                    <div className="curiosityList">
                      {day.curiosities.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="mealsBlock">
                  <div className="blockHeader">
                    <p className="sectionKicker">Comer</p>
                    <h3>Reservas y antojos del día</h3>
                  </div>
                  <div className="mealGrid">
                    {day.meals.map((meal) => (
                      <div className="mealColumn" key={meal.slot}>
                        <strong>{meal.slot}</strong>
                        {meal.picks.map((pick) => (
                          <a href={mapsUrl(pick)} target="_blank" rel="noreferrer" key={pick}>
                            {pick}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                  {day.mustEat.length > 0 && (
                    <div className="mustEat">
                      {day.mustEat.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="bingoBlock">
                  <div className="blockHeader">
                    <p className="sectionKicker">Bingo del día</p>
                    <h3>
                      {done}/{day.bingo.length} vistos
                    </h3>
                  </div>
                  <div className="bingoGrid">
                    {day.bingo.map((item) => {
                      const key = `${day.id}-${item}`;
                      return (
                        <label className={classNames("bingoItem", checked[key] && "checked")} key={key}>
                          <input
                            checked={Boolean(checked[key])}
                            onChange={() => toggleBingo(key)}
                            type="checkbox"
                          />
                          <span>{item}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="band sourceBand">
        <div className="container sourceGrid">
          <div>
            <p className="sectionKicker">Notas útiles</p>
            <h2>Confirmad horarios el día anterior</h2>
            <p>
              Los tiempos de coche son orientativos y agosto puede cambiarlo todo.
              Para Pompeya, ferries y cenas clave, mejor reservar o revisar la noche antes.
            </p>
          </div>
          <div className="sourceLinks">
            {sourceLinks.map((source) => (
              <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                {source.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
