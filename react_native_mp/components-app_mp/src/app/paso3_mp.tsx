import { Pressable, StyleSheet, Text, View } from 'react-native'

// ─── Paso 3 — Props opcionales ───────────────────────────────────────


type EstadoEstudiante = 'activo' | 'pausado' | 'inactivo' | 'reprobado' | 'revision'

interface BadgeEstadoProps {
  estado: EstadoEstudiante
  tamaño?: number          
  mostrarIcono?: boolean   
}


const COLOR_ESTADO: Record<EstadoEstudiante, { fondo: string; texto: string }> = {
  activo:     { fondo: '#e8f5e9', texto: '#2e7d32' },
  pausado:    { fondo: '#fff8e1', texto: '#f57f17' },
  inactivo:   { fondo: '#f5f5f5', texto: '#616161' },
  reprobado:  { fondo: '#fce4ec', texto: '#c62828' },
  revision:   { fondo: '#e1f5fe', texto: '#0288d1' },
}

const ICONO_ESTADO: Record<EstadoEstudiante, string> = {
  activo:     '●',
  pausado:    '◐',
  inactivo:   '○',
  reprobado:  '✕',
  revision:   '🔍',
}

export function BadgeEstado({
  estado,
  tamaño = 12,
  mostrarIcono = false,
}: BadgeEstadoProps) {
  const colores = COLOR_ESTADO[estado]
  return (
    <View style={[estilos3.badge, { backgroundColor: colores.fondo }]}>
      {mostrarIcono && (
        <Text style={[estilos3.icono, { color: colores.texto, fontSize: tamaño }]}>
          {ICONO_ESTADO[estado]}{' '}
        </Text>
      )}
      <Text style={[estilos3.textoBadge, { color: colores.texto, fontSize: tamaño }]}>
        {estado.toUpperCase()}
      </Text>
    </View>
  )
}

interface FilaEstudianteProps {
  nombre: string
  codigo: string
  estado: EstadoEstudiante
  puntaje?: number        // puntos — opcional
  onPress?: () => void    
}

function FilaEstudiante({ nombre, codigo, estado, puntaje, onPress }: FilaEstudianteProps) {
  return (
    <Pressable onPress={onPress} style={estilos3.fila}>
      <View style={estilos3.infoIzq}>
        <Text style={estilos3.nombreEstudiante}>{nombre}</Text>
        <Text style={estilos3.codigoTexto}>{codigo}</Text>
      </View>
      <View style={estilos3.infoDer}>
        {puntaje !== undefined && (
          <Text style={estilos3.puntaje}>{puntaje} pts</Text>
        )}
        <BadgeEstado estado={estado} mostrarIcono={false} tamaño={11} />
      </View>
    </Pressable>
  )
}

export function Paso3() {
  return (
    <View style={estilos3.fondo}>
      <Text style={estilos3.titulo}>Progreso de estudiantes</Text>
      <FilaEstudiante nombre="Mateo Ortega"   codigo="ENG-101" estado="activo"     puntaje={95}  onPress={() => console.log('Tapped Mateo')} />
      <FilaEstudiante nombre="Sofia Lopez"    codigo="FRA-201" estado="activo"     puntaje={88}  />
      <FilaEstudiante nombre="Carlos Mendoza" codigo="JPN-301" estado="pausado"    puntaje={60}  />
      <FilaEstudiante nombre="Ana Gomez"      codigo="GER-101" estado="reprobado"  />
      <FilaEstudiante nombre="Luis Torres"    codigo="ITA-102" estado="inactivo"   />
      <FilaEstudiante nombre="Maria Perez"    codigo="POR-202" estado="revision"   />
    </View>
  )
}

const estilos3 = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 8,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 8,
  },
  fila: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  infoIzq: { gap: 2 },
  infoDer: { alignItems: 'flex-end', gap: 4 },
  nombreEstudiante: { fontSize: 14, fontWeight: '600', color: '#1a1a1a' },
  codigoTexto: { fontSize: 12, color: '#90a4ae', fontFamily: 'monospace' },
  puntaje: { fontSize: 11, color: '#546e7a' },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  icono: { fontWeight: '700' },
  textoBadge: { fontWeight: '600' },
})