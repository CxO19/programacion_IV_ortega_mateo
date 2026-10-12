// Constantes 
const PI: number = 3.1435;
const IVA: number =15;
const Servicio_API: string= "apiService";
const ACTIVE: boolean = true;
console.log("PI: ", PI)
console.log("I.V.A: ", IVA)
console.log("NOMBRE DEL SERVICIO: ", Servicio_API)
console.log("PRODUCTO ACTIVO: ", ACTIVE)


// Variables
// let

let contador: number =0;
console.log(contador);
contador= 5;
console.log(contador);
contador++;
console.log(contador);
contador+= 5;
console.log(contador);
contador=contador+3;
console.log(contador);
contador= 5

let alumno: string= "Mateo Ortega";
let caducado: boolean="True";

console.log(alumno)
console.log(caducado)

let equipo: string[] = ["Pikachu", "Charmander", "Bulbasur"];
console.log(equipo);

let pokemoncapturado: string | null = null;
let pokemonInicial: string | undefined;

let experienciaAcumulada: bigint = 9869869849456534n;
//tipo symbol

let pokemon1: symbol = Symbol("Pikachu");
    console.log(pokemon1.description);
let pokemon2: symbol = Symbol("Pikachu");
    console.log(pokemon2.description);
console.log(pokemon1 === pokemon2);


