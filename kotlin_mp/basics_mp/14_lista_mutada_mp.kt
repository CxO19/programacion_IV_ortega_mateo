fun main() {
    val portales = mutableListOf<String>()
    var opcion = 0
    
    do {
        println("1. Agregar Portal")
        println("2. Mostrar Portales")
        println("3. Modificar Portal")
        println("4. Eliminar Portal")
        println("5. Salir")
        
        opcion = readLine()!!.toInt()
        
        when (opcion) {
            1 -> {
                println("Ingrese el nombre del portal:")
                val nombre = readLine()!!
                portales.add(nombre)
                println("Portal incluido")
            }
            2 -> {
                println("Portales:")
                for (portal in portales) {
                    println("Portal: $portal")
                }
            }
            3 -> {
                println("Actualizar")
                println("Indice a modificar:")
                val indice = readLine()!!.toInt()
                if (indice in portales.indices) {
                    println("Nuevo nombre:")
                    val nuevoNombre = readLine()!!
                    portales[indice] = nuevoNombre
                    println("Portal Actualizado")
                } else {
                    println("Índice inválido")
                }
            }
            4 -> {
                // Opción para eliminar portal (se extiende según la estructura del menú)
            }
            5 -> {
                println("Saliendo...")
            }
        }
    } while (opcion != 5)
}