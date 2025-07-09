// Lista de datos curiosos bíblicos
const datosBiblicos = [
  "La Biblia fue escrita por más de 40 autores diferentes en un período de aproximadamente 1500 años.",
  "El versículo más corto de la Biblia es: 'Jesús lloró' (Juan 11:35).",
  "Salmos es el libro más largo de la Biblia, con 150 capítulos.",
  "La Biblia ha sido traducida a más de 3,000 idiomas.",
  "El capítulo más largo de la Biblia es el Salmo 119.",
  "El libro más corto es 2 Juan, con solo 13 versículos.",
  "El primer libro impreso con la imprenta de Gutenberg fue la Biblia.",
  "Hay 1,189 capítulos en toda la Biblia.",
  "El Antiguo Testamento tiene 39 libros y el Nuevo Testamento tiene 27.",
  "La Biblia menciona a más de 3,000 personas por nombre."
];

// Elegir uno al azar
const datoAleatorio = datosBiblicos[Math.floor(Math.random() * datosBiblicos.length)];

// Mostrar en el aside
document.addEventListener("DOMContentLoaded", () => {
  const curiosidadElemento = document.querySelector(".curiosidades p");
  if (curiosidadElemento) {
    curiosidadElemento.innerText = datoAleatorio;
  }
});
