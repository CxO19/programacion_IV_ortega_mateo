// app/index.tsx — agrega la función Paso3
import { useRef, useState, useEffect } from 'react'
import {
  StyleSheet, Text, TextInput, View, Pressable, TextInput as RNTextInput
} from 'react-native'

export function Paso3() {
  // ── Uso 1: referencia a un TextInput para foco programático ─────────
  const inputCursoRef = useRef<RNTextInput>(null)
  const inputNivelRef = useRef<RNTextInput>(null)

  const [curso, setCurso] = useState<string>('')
  const [nivel, setNivel] = useState<string>('B1')

  // Foco automático al montar la pantalla
  useEffect(() => {
    inputCursoRef.current?.focus()
  }, [])

  // ── Uso 2: contador de intentos silencioso (sin re-render) ───────────
  const intentosSilenciosRef = useRef<number>(0)
  const [ultimaPractica, setUltimaPractica] = useState<string>('—')

  function intentarPractica() {
    intentosSilenciosRef.current += 1   // muta sin re-render
    // Solo actualizamos el estado (y disparamos re-render) al iniciar práctica
    setUltimaPractica(
      `${curso || 'curso'} : Nivel ${nivel} — intento #${intentosSilenciosRef.current}`
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Configurar Curso de Idiomas</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Nombre del curso o idioma</Text>
        <TextInput
          ref={inputCursoRef}
          style={styles.input}
          value={curso}
          onChangeText={setCurso}
          placeholder="Inglés Avanzado"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => inputNivelRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Nivel objetivo</Text>
        <TextInput
          ref={inputNivelRef}
          style={styles.input}
          value={nivel}
          onChangeText={setNivel}
          placeholder="C1"
          placeholderTextColor="#aaa"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={intentarPractica}
      >
        <Text style={styles.textoBoton}>Iniciar Práctica</Text>
      </Pressable>

      <Text style={styles.detalle}>Último intento: {ultimaPractica}</Text>
      <Text style={styles.detalle}>
        (los reintentos silenciosos no causan re-renders)
      </Text>
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