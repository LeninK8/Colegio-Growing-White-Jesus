// Lista de datos curiosos bíblicos
const curiosidades = [
  "La Biblia fue escrita por más de 40 autores diferentes en un período de aproximadamente 1500 años.",
  "La Biblia se escribió en tres idiomas: hebreo, arameo y griego.",
  "El versículo más corto de la Biblia es: 'Jesús lloró' (Juan 11:35).",
  "El capítulo más largo de la Biblia es el Salmo 119, con 176 versículos.",
  "El capítulo más corto de la Biblia es el Salmo 117, con solo 2 versículos.",
  "El libro más largo de la Biblia es Salmos.",
  "El libro más corto de la Biblia es 2 Juan.",
  "La Biblia tiene 66 libros en total: 39 del Antiguo Testamento y 27 del Nuevo Testamento.",
  "El último libro escrito de la Biblia fue Apocalipsis, escrito por el apóstol Juan.",
  "La palabra 'Biblia' viene del griego y significa 'libros'.",
  "La Biblia ha sido traducida a más de 3,000 idiomas.",
  "La Biblia es el libro más vendido y distribuido de la historia.",
  "Moisés escribió los primeros cinco libros de la Biblia, conocidos como el Pentateuco.",
  "El número 40 aparece muchas veces en la Biblia: 40 días del diluvio, 40 años en el desierto, 40 días de Jesús en el desierto.",
  "En la Biblia no se menciona el nombre de Dios en el libro de Ester.",
  "La primera impresión de la Biblia fue hecha por Gutenberg en 1455.",
  "La palabra 'trinidad' no aparece en la Biblia, pero la doctrina sí está presente.",
  "David es el personaje bíblico más mencionado después de Jesús.",
  "La Biblia contiene profecías que se cumplieron cientos de años después.",
  "El Antiguo Testamento fue escrito principalmente en hebreo.",
  "El Nuevo Testamento fue escrito originalmente en griego koiné.",
  "La Biblia prohíbe comer murciélago (Levítico 11:19).",
  "La Biblia tiene 1,189 capítulos.",
  "La palabra 'cristiano' aparece solo 3 veces en la Biblia.",
  "En Apocalipsis 21:4 dice que en el cielo ya no habrá muerte ni llanto.",
  "La serpiente fue el primer animal en hablar en la Biblia.",
  "La Biblia menciona que el amor es el mayor de todos los dones (1 Corintios 13:13).",
  "Sansón mató a un león con sus propias manos (Jueces 14:6).",
  "El arca de Noé tenía aproximadamente el tamaño de un barco moderno.",
  "Jesús realizó más de 30 milagros registrados en los evangelios.",
  "Jesús alimentó a más de 5,000 personas con solo cinco panes y dos peces.",
  "Pablo escribió más libros del Nuevo Testamento que cualquier otro autor.",
  "Jesús resucitó al tercer día según las Escrituras.",
  "Los Diez Mandamientos fueron dados a Moisés en el monte Sinaí.",
  "El rey Salomón tuvo 700 esposas y 300 concubinas (1 Reyes 11:3).",
  "Pedro caminó sobre el agua hacia Jesús (Mateo 14:29).",
  "El arca de Noé reposó sobre el monte Ararat.",
  "El Espíritu Santo descendió como paloma cuando Jesús fue bautizado.",
  "La oración del Padre Nuestro fue enseñada por Jesús en el Sermón del Monte.",
  "En Génesis 5:27, Matusalén vivió 969 años: ¡la persona más longeva en la Biblia!",
  "En el cielo, las calles son de oro puro (Apocalipsis 21:21).",
  "La Biblia enseña que Dios conoce hasta el número de cabellos en tu cabeza (Lucas 12:7).",
  "Los sabios que visitaron a Jesús no eran tres necesariamente, solo se mencionan tres regalos.",
  "La Biblia nos llama a perdonar 70 veces 7 (Mateo 18:22), o sea, siempre.",
  "Jonás estuvo 3 días en el vientre del gran pez antes de ser vomitado.",
  "El nombre más largo de la Biblia es Maher-salal-hasbaz (Isaías 8:1)."
];


// Mostrar una curiosidad aleatoria al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const parrafo = document.querySelector(".curiosidades p");
  if (parrafo) {
    const random = Math.floor(Math.random() * curiosidades.length);
    parrafo.innerText = curiosidades[random];
  }
});
