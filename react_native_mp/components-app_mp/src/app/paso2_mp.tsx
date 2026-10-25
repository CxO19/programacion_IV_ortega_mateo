// app/index.tsx — agrega al archivo existente
import { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// ─── Paso 2 — children y composición ────────────────────────────────

interface CardCursoProps {
  titulo: string
  subtitulo?: string
  children: ReactNode
}

function CardCurso({ titulo, subtitulo, children }: CardCursoProps) {
  return (
    <View style={estilos2.card}>
      <View style={estilos2.cardCabecera}>
        <Text style={estilos2.cardTitulo}>{titulo}</Text>
        {subtitulo && (
          <Text style={estilos2.cardSubtitulo}>{subtitulo}</Text>
        )}
      </View>
      <View style={estilos2.cardCuerpo}>{children}</View>
    </View>
  )
}

function FilaDetalleIdioma({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <View style={estilos2.fila}>
      <Text style={estilos2.etiqueta}>{etiqueta}</Text>
      <Text style={estilos2.valor}>{valor}</Text>
    </View>
  )
}

export function Paso2() {
  return (
    <View style={estilos2.fondo}>
      <Text style={estilos2.titulo}>Detalle de curso y progreso</Text>

      <CardCurso titulo="Inglés Avanzado" subtitulo="Curso principal de fluidez">
        <FilaDetalleIdioma etiqueta="Código" valor="ENG-101" />
        <FilaDetalleIdioma etiqueta="Nivel" valor="C1 (Avanzado)" />
        <FilaDetalleIdioma etiqueta="Profesor" valor="John Doe" />
        <FilaDetalleIdioma etiqueta="Lecciones" valor="12 módulos · 85%" />
        <FilaDetalleIdioma etiqueta="Vocabulario" valor="1500 palabras · 1200 dominadas" />
      </CardCurso>

      <CardCurso titulo="Sesiones de práctica activa">
        <FilaDetalleIdioma etiqueta="Conversación" valor="45 min/día" />
        <FilaDetalleIdioma etiqueta="Gramática" valor="2 lecciones" />
        <FilaDetalleIdioma etiqueta="Último repaso" valor="hace 10 minutos" />
      </CardCurso>
    </View>
  )
}

const estilos2 = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardCabecera: {
    backgroundColor: '#1565c0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 2,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  cardSubtitulo: {
    fontSize: 12,
    color: '#bbdefb',
  },
  cardCuerpo: {
    padding: 12,
    gap: 8,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  etiqueta: {
    fontSize: 13,
    color: '#546e7a',
    fontWeight: '500',
  },
  valor: {
    fontSize: 13,
    color: '#1a1a1a',
    fontFamily: 'monospace',
  },
})