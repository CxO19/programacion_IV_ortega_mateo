// app/index.tsx — agrega la función Paso2
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

type EstadoPractica = 'practicando' | 'ok' | 'timeout' | 'inactivo'

export function Paso2() {
  const [puntaje, setPuntaje] = useState<number | null>(null)
  const [estado, setEstado] = useState<EstadoPractica>('inactivo')
  const [activo, setActivo] = useState<boolean>(false)
  const [ciclos, setCiclos] = useState<number>(0)

  useEffect(() => {
    if (!activo) return   // no arrancar el intervalo si la práctica está detenida

    const intervalo = setInterval(() => {
      setEstado('practicando')

      // Simula puntaje de fluidez: número aleatorio entre 10 y 200 puntos
      // con un 15 % de probabilidad de timeout (retraso en respuesta)
      setTimeout(() => {
        const falla = Math.random() < 0.15
        if (falla) {
          setPuntaje(null)
          setEstado('timeout')
        } else {
          const pts = Math.floor(Math.random() * 190) + 10
          setPuntaje(pts)
          setEstado('ok')
        }
        setCiclos(c => c + 1)
      }, 400)
    }, 2000)

    // ← función de limpieza: cancela el intervalo
    return () => clearInterval(intervalo)
  }, [activo])   // se re-ejecuta cuando 'activo' cambia

  const colorEstado: Record<EstadoPractica, string> = {
    practicando: '#1565c0',
    ok:          '#2e7d32',
    timeout:     '#c62828',
    inactivo:    '#757575',
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Monitor de Práctica — Inglés Avanzado</Text>

      <View style={styles.tarjeta}>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
          {estado.toUpperCase()}
        </Text>
        <Text style={styles.latencia}>
          {puntaje !== null ? `${puntaje} pts` : '— pts'}
        </Text>
        <Text style={styles.ciclos}>Sesiones completadas: {ciclos}</Text>
        <Text style={styles.detalle}>Inglés Avanzado · Módulo C1 · Lección 4</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          activo ? styles.botonDetener : styles.botonIniciar,
          pressed && { opacity: 0.75 },
        ]}
        onPress={() => setActivo(a => !a)}
      >
        <Text style={styles.textoBoton}>
          {activo ? 'Detener práctica' : 'Iniciar práctica'}
        </Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  etiqueta: {
    fontSize: 15,
    fontWeight: '700',
    color: '#948ed3',
  },
  latencia: {
    fontSize: 10,
    fontWeight: '700',
    color: '#d37b95',
  },
  ciclos: {
    fontSize: 12,
    fontWeight: '500',
    color: '#633140',
  },
  tarjeta: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
    gap: 6,
  },
  estado: {
    fontSize: 15,
    fontWeight: '600',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonIniciar: {
    backgroundColor: '#1565c0',
  },
  botonDetener: {
    backgroundColor: '#a5d6a7',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  botonSecundario: {
    paddingVertical: 10,
  },
  textoSecundario: {
    color: '#1565c0',
    fontSize: 14,
  },
})