// Encapsulamiento
class EstudianteIdioma {
    private energia: number = 100;

    realizarExamen(danio: number): void {
        if(danio>0){
            this.energia = Math.max(0,this.energia-danio);
        }
    }
    consultarEnergia(): number{
        return this.energia;
    }
}

const mateo = new EstudianteIdioma();
mateo.realizarExamen(50);
console.log(mateo.consultarEnergia())
mateo.realizarExamen(25);
console.log(mateo.consultarEnergia())