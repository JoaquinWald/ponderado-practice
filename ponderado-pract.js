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

const notesWithCredit = notes.map(
  function(noteObject){
    return noteObject.note * noteObject.credit;
  }
);

const sumOfNotesWithCredit = notesWithCredit.reduce(
  function(valorAcumulado = 0, nuevoValor){
    return valorAcumulado + nuevoValor;
  }
);

const credits = notes.map(
  function(creditObject){
    return creditObject.credit;
  }
);

const sumOfCredits = credits.reduce(
  function(valorActual = 0, newVal){
    return valorActual + newVal;
  }
);


const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;