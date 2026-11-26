fun main(){
    println("Inscripcion al curso de idiomas")

    println("¿Nombre del estudiante?")

    val nombre = readLine()

    println("Cantidad de cursos:")

    val cursos = readLine()!!.toInt()

    println("Costo por curso:")

    val costo = readLine()!!.toDouble()

    println("Presupuesto disponible:")

    val presupuesto = readLine()!!.toDouble()

    val costoTotal = cursos * costo

    val saldo = presupuesto - costoTotal
    
    println("Reporte")
    println("Estudiante: $nombre")
    println("Costo total: $costoTotal")
    println("Saldo: $saldo")
}