// condicionales
let nivel: number=5;
if (nivel < 5) {
    console.log ("el charmander puede evolucionar a Charmeleon");
}



// condiciones dobles o dos caminos
if (nivel >= 16) {
    console.log("El charmander ouede evolucionar a Charizard");
} else {
    console.log("no puede")
}


if (nivel >= 16) {
    console.log("El charmander ouede evolucionar a Charizard");
} else if (nivel >=8){
    console.log("no puede")
} else {"El Charmander no puede evolucionar a Charmeleon ni a charizard"}


if (nivel >= 16) {
    console.log("El charmander ouede evolucionar a Charizard");
} else {
    if (nivel >= 8) {
        console.log("El Charmander puede evolucionar a Charizard");
    } else {
        console.log("El Charmander no puede evolucionar a Charmeleon ni a charizard")
    }
}

nivel = 20
let poder: number = 25
if (nivel >= 8 && nivel <16 && poder >16 ) {
    console.log("El charmander puede evolucionar a Charmeleon")
} else if (nivel >= 16){
    console.log("El Charmander puede evolucionar a Charizard")
} else {
    console.log("El Charmander no puede evolucionar a Charmeleon ni a charizard")
}


// condicional if con operadores logicos or
nivel = 5;
poder = 56
if (nivel > 8 || poder >=20){
    console.log ("El charmander puede evolucionar a Charmeleon")
} else if (nivel >= 16) {
    console.log("El Charmander puede evolucionar a Charizard")
} else {
    console.log("El Charmander no puede evolucionar a Charmeleon ni a charizard")
}



interface Entrenador {
  nombre: string;
  edad: number;
  medallas: number;
  suspendido: boolean;
}


interface Pokemon {
  nombre: string;
  tipo: TipoPokemon;
  nivel: number;
  vida: number;
  ataque: number;
  defensa: number;
}


const entrenador: Entrenador = {
  nombre: "Ash",
  edad: 15,
  medallas: 8,
  suspendido: false
};


const pokemon: Pokemon = {
  nombre: "Charizard",
  tipo: "Fuego",
  nivel: 85,
  vida: 120,
  ataque: 95,
  defensa: 78
};


// Primer IF: Validar entrenador
if (
  entrenador.medallas >= 8 &&
  entrenador.edad >= 12 &&
  !entrenador.suspendido
) {
  console.log("Entrenador autorizado");


  // Segundo IF: Validar Pokémon
  if (
    pokemon.nivel >= 40 &&
    pokemon.vida > 0 &&
    (
      pokemon.tipo === "Fuego" ||
      pokemon.tipo === "Agua" ||
      pokemon.tipo === "Eléctrico"
    )
  ) {
    console.log("Pokémon autorizado");
    if (
      pokemon.nivel >= 80 &&
      pokemon.ataque >= 90 &&
      pokemon.vida >= 100
    ) {
      console.log("Categoría Maestro");


    } else if (
      pokemon.nivel >= 60 &&
      (
        pokemon.ataque >= 75 ||
        pokemon.defensa >= 80
      )
    ) {
      console.log("Categoría Élite");
    } else if (
      pokemon.nivel >= 40 &&
      pokemon.ataque >= 50 &&
      pokemon.vida > 0
    ) {
      console.log("Categoría Avanzado");
    } else {
      console.log("Sin categoría asignada");
    }
  } else {
    console.log("El Pokémon no cumple los requisitos");
  }
} else {
  console.log("Entrenador no autorizado");
