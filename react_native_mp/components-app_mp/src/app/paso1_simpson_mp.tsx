// ─── Paso 1 — Idiomas ──────────────────────────────────────────
import { StyleSheet, Text, View } from 'react-native'


interface TarjetaEstudianteProps {
  nombre: string
  edad: number
  idiomaTarget: string
  fraseObjetivo: string
}

function TarjetaEstudiante({ nombre, edad, idiomaTarget, fraseObjetivo }: TarjetaEstudianteProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreEstudiante}>{nombre}</Text>
      <Text style={styles.datoEdad}>{edad}</Text>
      <Text style={styles.datoIdioma}>{idiomaTarget}</Text>
      <Text style={styles.datoFrase}>{fraseObjetivo}</Text>
    </View>
  )
}

export function Paso1_Idiomas() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Estudiantes de Idiomas</Text>
      <TarjetaEstudiante
        nombre="Mateo Ortega"
        edad={21}
        idiomaTarget='Inglés Avanzado'
        fraseObjetivo='Practicar fluidez y pronunciación diaria'
      />
      <TarjetaEstudiante
        nombre="Sofia Lopez"
        edad={23}
        idiomaTarget='Francés Intermedio'
        fraseObjetivo='Aprender 20 palabras de vocabulario al día'
      />
      <TarjetaEstudiante
        nombre="Carlos Mendoza"
        edad={25}
        idiomaTarget='Japonés Principiante'
        fraseObjetivo='Dominar Kanji e Inmersión Auditiva'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 12,
  },
  encabezado: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 4,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 4,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  nombreEstudiante: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  datoEdad: {
    fontSize: 13,
    color: '#1565c0',
    fontFamily: 'monospace',
  },
  datoIdioma: {
    fontSize: 13,
    color: '#1565c0',
    fontFamily: 'monospace',
  },
  datoFrase: {
    fontSize: 12,
    color: '#757575',
  },
})