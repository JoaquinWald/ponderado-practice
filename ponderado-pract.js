const notes = [
  {
    course: "Educación Física",
    note: 10,
    credit: 2,
  },
  {
    course: "Programación",
    note: 8,
    credit: 5,
  },
  {
    course: "Finanzas",
    note: 7,
    credit: 5,
  },
];

//Multiplicación de las notas con los créditos
const notesWithCredit = notes.map(
  function(noteObject){
    return noteObject.note * noteObject.credit;
  }
);
//Suma de los resultados de la multiplicación
const sumOfNotesWithCredit = notesWithCredit.reduce(
  function(valorAcumulado = 0, nuevoValor){
    return valorAcumulado + nuevoValor;
  }
);

//Obtención del valor de los créditos otorgados por materia
const credits = notes.map(
  function(creditObject){
    return creditObject.credit;
  }
);
//Suma de los créditos otorgados por materia
const sumOfCredits = credits.reduce(
  function(valorActual = 0, newVal){
    return valorActual + newVal;
  }
);

//División del resultado obtenido de la suma de las notas multiplicadas por los créditos, entre la suma de solamente los créditos
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;