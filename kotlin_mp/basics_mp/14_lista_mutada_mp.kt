fun main() {
    val cursos = mutableListOf<String>()
    var opcion = 0

    do {
        println("1. Agregar curso")
        println("2. Mostrar cursos")
        println("3. Modificar curso")
        println("4. Eliminar curso")
        println("5. Salir")

        opcion = readLine()!!.toInt()

        when (opcion) {
            1 -> {
                println("Ingrese el nombre del curso:")
                val nombre = readLine()!!
                cursos.add(nombre)
                println("Curso agregado")
            }
            2 -> {
                println("Cursos:")
                for (curso in cursos) {
                    println("Curso: $curso")
                }
            }
            3 -> {
                println("Actualizar")
                println("Indice a modificar:")
                val indice = readLine()!!.toInt()
                if (indice in cursos.indices) {
                    println("Nuevo nombre:")
                    val nuevoNombre = readLine()!!
                    cursos[indice] = nuevoNombre
                    println("Curso actualizado")
                } else {
                    println("Indice invalido")
                }
            }
            4 -> {
                println("Eliminar")
                println("Indice a eliminar:")
                val indice = readLine()!!.toInt()
                if (indice in cursos.indices) {
                    cursos.removeAt(indice)
                    println("Curso eliminado")
                } else {
                    println("Indice invalido")
                }
            }
            5 -> {
                println("Saliendo...")
            }
            else -> {
                println("Opcion no valida")
            }
        }
    } while (opcion != 5)
}