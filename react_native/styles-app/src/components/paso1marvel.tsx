// app/index.tsx — función Paso1
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export function Paso1Picapiedra() {
  return (
    <ScrollView style={estilosPaso1.pantalla} contentContainerStyle={{ gap: 24, padding: 16 }}>

      {/* ── Columna (por defecto) ───────────────────────────────── */}
      <Text style={estilosPaso1.etiqueta}>Heroes</Text>
      <View style={estilosPaso1.columna}>
        <View style={[estilosPaso1.caja, { backgroundColor: '#cc4242' }]}>
          <Text style={estilosPaso1.textoCaja}>Spider-Man</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#d83c3cdc' }]}>
          <Text style={estilosPaso1.textoCaja}>Ant-Man</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#7c52ca' }]}>
          <Text style={estilosPaso1.textoCaja}>Wasp</Text>
        </View>
      </View>

      {/* ── Fila con justifyContent: 'space-between' ───────────── */}
      <Text style={estilosPaso1.etiqueta}>
        Villanos
      </Text>
      <View style={estilosPaso1.fila}>
        <View style={[estilosPaso1.caja, { backgroundColor: '#689b98' }]}>
          <Text style={estilosPaso1.textoCaja}>Duende Verde</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#9ebe61' }]}>
          <Text style={estilosPaso1.textoCaja}>Dormmamu</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#6aabc9' }]}>
          <Text style={estilosPaso1.textoCaja}>Mandarin</Text>
        </View>
      </View>

      {/* ── flex: 1 proporcional ───────────────────────────────── */}
      <Text style={estilosPaso1.etiqueta}>Ubicaciones</Text>
      <View style={estilosPaso1.filaFlex}>
        <View style={{ flex: 2, backgroundColor: '#b892924f', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>Sanctum Santorum</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#e53935', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>Torre Avengers</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#89a2d6', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>Daily Bugle</Text>
        </View>
      </View>

      {/* ── flexWrap + gap ──────────────────────────────────────── */}
      <Text style={estilosPaso1.etiqueta}>flexWrap: 'wrap' + gap: 8</Text>
      <View style={estilosPaso1.rejilla}>
        {['prod-01', 'prod-02', 'stg-01', 'stg-02', 'dev-01', 'dev-02'].map((nombre) => (
          <View key={nombre} style={estilosPaso1.chip}>
            <Text style={estilosPaso1.textoChip}>{nombre}</Text>
          </View>
        ))}
      </View>

    </ScrollView>
  )
}

const estilosPaso1 = StyleSheet.create({
  pantalla:   { flex: 1, backgroundColor: '#344f69' },
  etiqueta:   { fontSize: 12, color: '#6b7280', fontFamily: 'monospace' },
  columna: {
    flexDirection: 'column', // explícito para que sea visible
    gap: 8,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filaFlex: {
    flexDirection: 'row',
    gap: 6,
  },
  caja: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoCaja: { color: '#ffffff', fontWeight: '600', fontSize: 13 },
  rejilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: '#1565c0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  textoChip: { color: '#fff', fontSize: 13 },
})