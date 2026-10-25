// ─── Paso 1 — Props tipadas ──────────────────────────────────────────
import { StyleSheet, Text, View } from 'react-native'


interface TarjetaCursoProps {
  nombre: string
  codigo: string
  nivel: string
  creditos?: number
}

function TarjetaCurso({ nombre, codigo, nivel, creditos }: TarjetaCursoProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreServidor}>{nombre}</Text>
      <Text style={styles.datoDireccion}>{codigo}:{creditos}</Text>
      <Text style={styles.datoSistema}>{nivel}</Text>
    </View>
  )
}

export function Paso1() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Inventario de cursos</Text>
      <TarjetaCurso
        nombre="Inglés Técnico"
        codigo="ENG-101"
        nivel="Principiante"
        creditos={4}
      />
      <TarjetaCurso
        nombre="Francés Conversacional"
        codigo="FRA-202"
        nivel="Intermedio"
        creditos={3}
      />
      <TarjetaCurso
        nombre="Japonés Intensivo"
        codigo="JPN-301"
        nivel="Avanzado"
        creditos={5}
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
  nombreServidor: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  datoDireccion: {
    fontSize: 13,
    color: '#1565c0',
    fontFamily: 'monospace',
  },
  datoSistema: {
    fontSize: 12,
    color: '#757575',
  },
})