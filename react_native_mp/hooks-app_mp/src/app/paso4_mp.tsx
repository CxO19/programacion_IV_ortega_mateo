// app/index.tsx — agrega la función Paso4
import { useWindowDimensions, useColorScheme } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

export function Paso4() {
  const { width, height, scale, fontScale } = useWindowDimensions()
  const esquema = useColorScheme()   // 'light' | 'dark' | null

  // Paleta dinámica según el tema del sistema
  const colores = {
    fondo:   esquema === 'dark' ? '#0d1b2a' : '#f5f5f5',
    tarjeta: esquema === 'dark' ? '#1a2a3a' : '#ffffff',
    texto:   esquema === 'dark' ? '#e8eaed' : '#1a1a1a',
    detalle: esquema === 'dark' ? '#9aa0a6' : '#666666',
    borde:   esquema === 'dark' ? '#2d3e50' : '#e0e0e0',
  }

  // Layout adaptativo: 1 columna en pantallas angostas, 2 en anchas
  const columnas = width > 500 ? 2 : 1
  const anchoTarjeta = (width - 48 - (columnas - 1) * 12) / columnas

  const cursos = [
    { nombre: 'Inglés Avanzado',   codigo: 'ENG-101', estado: 'activo' },
    { nombre: 'Francés Intermedio', codigo: 'FRA-202', estado: 'activo' },
    { nombre: 'Japonés Intensivo', ip: 'JPN-301', estado: 'pausado' },
    { nombre: 'Alemán Básico',      ip: 'GER-101', estado: 'activo' },
  ]

  return (
    <View style={[styles.contenedor, { backgroundColor: colores.fondo }]}>
      <Text style={[styles.titulo, { color: colores.texto }]}>
        Inventario de Cursos de Idiomas
      </Text>

      {/* Información de pantalla */}
      <View style={[styles.tarjeta, {
        backgroundColor: colores.tarjeta,
        borderColor: colores.borde,
        width: '100%',
      }]}>
        <Text style={[styles.etiqueta, { color: colores.detalle }]}>
          Pantalla: {Math.round(width)} × {Math.round(height)} dp
          {'  '}·{'  '}escala: {scale.toFixed(1)}
          {'  '}·{'  '}tema: {esquema ?? 'sin preferencia'}
        </Text>
      </View>

      {/* Grid de cursos con columnas adaptativas */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
        {cursos.map(curso => (
          <View
            key={curso.nombre}
            style={[styles.tarjeta, {
              backgroundColor: colores.tarjeta,
              borderColor: colores.borde,
              width: anchoTarjeta,
            }]}
          >
            <Text style={[styles.nombreCurso, { color: colores.texto }]}>
              {curso.nombre}
            </Text>
            <Text style={[styles.codigoCurso, { color: colores.detalle }]}>
              {curso.codigo}
            </Text>
            <Text style={{
              fontSize: 12,
              fontWeight: '600',
              color: curso.estado === 'activo' ? '#2e7d32' : '#f57f17',
            }}>
              {curso.estado.toUpperCase()}
            </Text>
          </View>
        ))}
      </View>

      {/* Nota sobre useSafeAreaInsets */}
      <View style={[styles.nota, { borderColor: colores.borde }]}>
        <Text style={[styles.notaTexto, { color: colores.detalle }]}>
          💡 useSafeAreaInsets() — disponible desde react-native-safe-area-context
          (ya visto en Página 2 como SafeAreaView). El hook expone los valores
          numéricos {'{'}top, bottom, left, right{'}'} para cuando necesitas
          posicionar elementos manualmente respetando el notch y la barra de inicio.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f5f5',
    gap: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  tarjeta: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: '#fff',
    gap: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  etiqueta: {
    fontSize: 13,
    fontWeight: '500',
    color: '#666',
  },
  nombreCurso: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  codigoCurso: {
    fontSize: 13,
    color: '#666',
  },
  nota: {
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'transparent',
    marginTop: 8,
  },
  notaTexto: {
    fontSize: 12,
    lineHeight: 18,
    color: '#666',
  },
})