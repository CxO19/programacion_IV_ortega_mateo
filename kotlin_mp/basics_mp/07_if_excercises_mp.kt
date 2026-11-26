data class Examen(
    val puntaje: Int,
    val inscrito: Boolean
)

data class Estudiante(
    val nombre: String,
    val asistencia: Int
)

data class Matricula(
    val puntaje: Int,
    val pagoRealizado: Boolean,
    val documentos: Boolean
)

fun main(){
    val examen = Examen(80, true)
    if(examen.puntaje >= 50 && examen.inscrito){
        println("Mateo puede pasar al nivel intermedio")
    }

    val notasOrales = arrayOf(20,45,85,30,60)
    if (notasOrales[2] > 70){
        println("Excelente nota en el examen oral")
    }else{
        println("Nota oral moderada")
    }

    val quizzes = arrayOf(80,65,90)
    val suma = quizzes[0]+quizzes[1]+quizzes[2]
    val promedio = suma / 3.0
    if (promedio >= 70){
        println("Curso aprobado")
    }else{
        println("Curso reprobado")
    }

    val estudiante = Estudiante("Mateo", 65)

    if (estudiante.asistencia >= 80){
        println("Asistencia excelente")
    }else if(estudiante.asistencia >= 50){
        println("Asistencia regular")
    }else if(estudiante.asistencia >= 20){
        println("Asistencia baja")
    }else{
        println("Riesgo de perder el curso")
    }

    val matricula = Matricula(120, true, false)
    if (matricula.puntaje >= 100){
        if(matricula.pagoRealizado){
            if(matricula.documentos){
                println("Matricula completa")
            } else {
                println("Faltan documentos para completar la matricula")
            }
        }
    }else {
        println("Puntaje insuficiente para el nivel avanzado")
    }
}