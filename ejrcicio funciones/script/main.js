`use strict`;

function ten() {
  for (let i = 0; i < 11; i++) {
    console.log("patata");
  }
}
ten();

function ten(word) {
  for (let i = 0; i < numero; i++) {
    console.log(word);
  }
}
ten("Patata"); //ten(word="patata", numero=10)
ten("Aguacate");
ten("Pizza");

function ten(word, numero) {
  for (let i = 0; i < numero; i++) {
    console.log(word);
  }
}
ten("Patata", 10); //ten(word="patata", numero=10)
ten("Aguacate", 07);
ten("Pizza", 50);
