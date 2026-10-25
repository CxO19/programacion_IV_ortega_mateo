// app/index.tsx — agrega la función Paso31
import { useRef, useState, useEffect } from 'react'
import {
  StyleSheet, Text, TextInput, View, Pressable, TextInput as RNTextInput
} from 'react-native'

export function Paso31() {
  const inputCursoRef = useRef<RNTextInput>(null)
  const inputNivelRef = useRef<RNTextInput>(null)

  const [vocabularioBase, setVocabularioBase] = useState<string>('')
  const [vocabularioExtra, setVocabularioExtra] = useState<string>('')

  useEffect(() => {
    inputCursoRef.current?.focus()
  }, [])

  // ── Uso 2: contador de intentos silencioso (sin re-render) ───────────
  const intentosSilenciosRef = useRef<number>(0)
  const [totalPalabras, setTotalPalabras] = useState<string>('—')

  function calcularTotalVocabulario() {
    intentosSilenciosRef.current += 1  
    const base = Number(vocabularioBase) || 0
    const extra = Number(vocabularioExtra) || 0
    setTotalPalabras(
      String(base + extra)
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Conteo de Vocabulario</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Palabras Base</Text>
        <TextInput
          ref={inputCursoRef}
          style={styles.input}
          value={vocabularioBase}
          onChangeText={setVocabularioBase}
          placeholder="Ingrese: Palabras Base"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => inputNivelRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Palabras Extra</Text>
        <TextInput
          ref={inputNivelRef}
          style={styles.input}
          value={vocabularioExtra}
          onChangeText={setVocabularioExtra}
          placeholder="Ingrese: Palabras Extra"
          placeholderTextColor="#aaa"
          keyboardType="number-pad"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={calcularTotalVocabulario}
      >
        <Text style={styles.textoBoton}>Calcular Total</Text>
      </Pressable>

      <Text style={styles.detalle}>Total de Palabras: {totalPalabras}</Text>
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
  input: {
    fontSize: 10,
    fontWeight: '700',
    color: '#d37b95',
  },
  formulario: {
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
  botonActivo: {
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