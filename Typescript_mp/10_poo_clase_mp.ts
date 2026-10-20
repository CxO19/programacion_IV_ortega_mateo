class Estudiante {
    public nombre: string;
    public nivelVocabulario: number;
    public energia: number;
    constructor(
        nombre: string,
        nivelVocabulario: number,
        energia: number,
    ){
        this.nombre = nombre;
        this.nivelVocabulario = nivelVocabulario;
        this.energia = energia;


    }
    estudiar(): void{
        console.log(`${this.nombre} ha estudiado`)
    }
    entrenar(): void{
        this.nivelVocabulario+=10
        console.log(`${this.nombre} ha entrenado`)
    }
}

const mateo = new Estudiante("Mateo Ortega", 80, 100);
const sofia = new Estudiante("Sofia Lopez", 90, 100);

mateo.estudiar();
sofia.entrenar();