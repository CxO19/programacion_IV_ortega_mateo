data class Curso (
    val nombre: String,
    val estudiantes: Int
)

fun main(){
    var presupuestoTotal = 0.0
    println("Presupuesto de Cursos de Idiomas")
    for (modulo in 1..6){

        val costoOriginal = modulo * 25
        var descuento = 0.0

        if (costoOriginal >= 100){
            descuento = costoOriginal * 0.20
        }

        val costoFinal = costoOriginal - descuento
        println("Modulo $modulo")
        println("Costo original: $costoOriginal")
        println("Descuento aplicado: $descuento")
        println("Costo final: $costoFinal")
        presupuestoTotal += costoFinal
    }

    println("Presupuesto total de los modulos: %.1f dolares".format(presupuestoTotal))

    val cursos = arrayOf(
        Curso("Ingles", 30),
        Curso("Frances", 65),
        Curso("Aleman", 95),
        Curso("Italiano", 130),
        Curso("Portugues", 45),
        Curso("Japones", 89),
        Curso("Chino", 75)
    )

    val minimoEstudiantes = 50
    for (curso in cursos){
        println("Curso: ${curso.nombre}")
        println("Estudiantes inscritos: ${curso.estudiantes}")
        when {
            curso.estudiantes < 50 -> {
                println("Estado: CANCELADO")
                println("No se puede abrir el curso")
            }
            curso.estudiantes < 80 -> {
                println("Estado: ACTIVO")
            }
            curso.estudiantes < 120 -> {
                println("Estado: ESTABLE")
            }
            else -> {
                println("Estado: LISTA DE ESPERA")
            }
        }
        if (curso.estudiantes >= minimoEstudiantes) {
            val excedente = curso.estudiantes - minimoEstudiantes
            println("Curso autorizado")
            println("Estudiantes sobre el minimo: $excedente")
        }
    }
}