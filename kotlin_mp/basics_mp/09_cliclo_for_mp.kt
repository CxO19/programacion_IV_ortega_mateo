data class Curso(
    val nombre: String,
    val activo: Boolean
)

fun main(){
    for (i in 1..5){
        println("Visitando leccion $i")
    }

    for (i in 10 downTo 1){
        println("Repasando leccion $i")
    }

    for (i in 1..20 step 2){
        val resultado = 3 * i
        println("Horas de clase: 3 * $i = $resultado")
        println("Horas de clase: 3 * $i = ${i * 3}")
    }
}