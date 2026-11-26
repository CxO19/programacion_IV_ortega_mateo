fun main(){
    println("Condicional If")
    println("Condicional simple o un camino")
    var puntaje = 80
    if (puntaje >= 50){
        println("Mateo puede inscribirse al nivel intermedio")
    }

    println("Condicional if-else dos caminos")
    puntaje = 30
    if (puntaje >= 50){
        println("Mateo puede inscribirse al nivel intermedio")
    } else {
        println("Puntaje insuficiente, debe repetir el nivel basico")
    }

    println("Condicional multiple")
    puntaje = 70
    if (puntaje >= 100){
        println("Mateo puede inscribirse al nivel avanzado")
    } else if (puntaje >= 50) {
        println("Puntaje suficiente para el nivel intermedio")
    } else {
        println("Puntaje insuficiente")
    }

    println("Condicional anidado")
    puntaje = 70
    val pagoRealizado = true
    if (puntaje >= 70){
        println("Mateo puede inscribirse al curso de ingles")
        if (pagoRealizado){
            println("El pago esta confirmado, inscripcion completa")
        }
    }
}