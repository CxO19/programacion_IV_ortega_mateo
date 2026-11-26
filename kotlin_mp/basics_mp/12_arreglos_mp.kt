fun main(){
    val horasModulos = arrayOf(30,50,80,100,60)
    println("Horas del modulo 1: ${horasModulos[0]}")
    println("Horas del modulo 3: ${horasModulos[2]}")
    println("Horas del modulo 5: ${horasModulos[4]}")
    horasModulos[4] = 150
    println("Horas del modulo 5 actualizadas: ${horasModulos[4]}")
}