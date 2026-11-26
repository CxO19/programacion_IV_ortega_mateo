println("Operadores")
println("Operadores Aritmeticos")
var numero1: Double = 10.50
var numero2: Double = 5.50
var suma: Double = numero1 + numero2

println("Suma + : $numero1 + $numero2 = ${numero1 + numero2}")
println("Suma + : $numero1 + $numero2 = ${suma}")
println("Resta - : $numero1 - $numero2 = ${numero1 - numero2}")
println("Multiplicación * : $numero1 * $numero2 = ${numero1 * numero2}")
println("Division / : $numero1 / $numero2 = ${numero1 / numero2}")

println("Prioridades de los operadores aritmeticos")
var resultadoPrioridad = 10.0 + 5.0 * 2.0
println("10.0 + 5.0 * 2.0 = $resultadoPrioridad") // Da 20.0 porque la multiplicación tiene prioridad

var resultadoConParentesis = (10.0 + 5.0) * 2.0
println("(10.0 + 5.0) * 2.0 = $resultadoConParentesis") // Da 30.0 por el uso de paréntesis