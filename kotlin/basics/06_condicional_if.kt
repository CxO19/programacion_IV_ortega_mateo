fun main(){
    println("Condicional If")
    println("Condicional simple o un camino")
    var energia = 80
    if (energia>= 50){
        println("Mateo puede abrir el portal")
    }

    println("Condicional if-else dos caminos")
    energia = 30
    if (energia>= 50){
        println("Mateo puede abrit el portal")
    } else {
        println("energia insuficiente")
    }

    println("Condicional multiple")
    energia = 70
    if (energia>= 100){
        println("Mateo puede abrit el portal")
    } else if (energia >= 50) {
        println("energia suficiente")
    } else {
        println("Energia insuficiente")
    }

    println("Condicional multiple")
    energia = 70
    val motorActivo = true
    if (energia>=70){
        println("Rick puede abrir el portal")
        if (motorActivo){
            println("el motor anda activo papi")
        }
    }
}