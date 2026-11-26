fun calcularTotal(costos: List<Int>): Int{
    var total = 0
    for (costo in costos){
        total += costo
        if (costo > 150){
            println("Curso costoso")
        }
    }
    return total
}

fun main() {
    val idiomas = listOf("Ingles", "Frances", "Aleman")
    var iteracion: Int = 1
    for (idioma in idiomas){
        println("Curso $iteracion : $idioma")
        iteracion++
    }
    val costos = listOf(100, 150, 200, 80, 120)
    val total = calcularTotal(costos)
    println("Costo total de los cursos de Mateo Ortega: $total")
}