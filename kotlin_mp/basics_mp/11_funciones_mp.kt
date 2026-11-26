fun abrirInscripcion() {
    println("Abriendo inscripcion al curso de idiomas")
    println("Conteo regresivo")
    println("3")
    println("2")
    println("1")
    println("Mateo Ortega abrio la inscripcion")
}

fun inscribir(idioma: String, modulos: Int, horasPorModulo: Int) {
    println("Inscribiendo al curso de $idioma")

    val total = modulos * horasPorModulo
    println("Horas totales: $total")
}

fun calcularDescuento(precio: Double): Double {
    var descuento: Double = 0.0
    if (precio >= 100) {
        descuento = precio * 0.15
    }
    return descuento
}

fun calcularHorasTotales(horas: Array<Int>): Int {
    var total = 0
    for (h in horas) {
        total += h
        if (h >= 100) {
            println("Modulo con carga alta: $h horas")
        }
    }
    return total
}

fun main() {
    abrirInscripcion()
    abrirInscripcion()
    inscribir("Ingles", 5, 4)
    inscribir("Frances", 4, 7)
    val descuentoCliente = calcularDescuento(123.5)
    println("El estudiante Ortega Mateo tiene este descuento: $descuentoCliente")
    val horasPorModulo = arrayOf(20, 50, 80, 100, 60)
    val totalHoras = calcularHorasTotales(horasPorModulo)
    println("Horas totales del curso: $totalHoras")
}