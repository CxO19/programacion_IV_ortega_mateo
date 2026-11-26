fun main(){
    val nivel = 2
    when(nivel){
        1 -> println("Curso: Ingles basico")
        2 -> println("Curso: Ingles intermedio")
        3 -> println("Curso: Ingles avanzado")
        else -> println("Nivel no disponible")
    }

    print("Ingrese el dia de la semana (1-7): ")
    val dia = readLine()!!.toInt()
    when(dia){
        1,2,3,4,5 -> println("Dia de clases")
        6,7 -> println("Dia de descanso")
        else -> println("Dia no valido")
    }

    print("Ingrese el puntaje del examen (0-100): ")
    val puntaje = readLine()!!.toInt()
    when(puntaje){
        in 0..39 -> println("Puntaje bajo")
        in 40..79 -> println("Puntaje medio")
        in 80..100 -> println("Puntaje alto")
        else -> println("Puntaje no valido")
    }

    val presupuesto = 80
    val matriculaActiva = true
    val costoCurso = 40
    /* Trabajo con condicionales y comentarios con when */
    when{
        presupuesto >= costoCurso && matriculaActiva -> {
            val restante = presupuesto - costoCurso
            println("Inscripcion autorizada")
            println("Presupuesto restante: $restante")
        }
        presupuesto < costoCurso && matriculaActiva -> {
            println("Presupuesto insuficiente")
        }
        !matriculaActiva -> {
            println("La matricula esta inactiva")
        }
    }
}