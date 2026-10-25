// app/index.tsx — agrega la función Paso3
import { useRef, useState, useEffect } from 'react'
import {
  StyleSheet, Text, TextInput, View, Pressable, TextInput as RNTextInput
} from 'react-native'

export function Paso31() {
  const inputHostRef = useRef<RNTextInput>(null)
  const inputPuertoRef = useRef<RNTextInput>(null)

  const [host, setHost] = useState<number>()
  const [puerto, setPuerto] = useState<number>()

  useEffect(() => {
    inputHostRef.current?.focus()
  }, [])

  // ── Uso 2: contador de intentos silencioso (sin re-render) ───────────
  const intentosSilenciosRef = useRef<number>(0)
  const [ultimaConexion, setUltimaConexion] = useState<string>('—')

  function intentarConexion() {
    intentosSilenciosRef.current += 1  
    setUltimaConexion(
      host + puerto
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Suma de numeros</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Numero 1</Text>
        <TextInput
          ref={inputHostRef}
          style={styles.input}
          value={host}
          onChangeText={setHost}
          placeholder="Ingrese: Numero 1"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => inputPuertoRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Numero 2</Text>
        <TextInput
          ref={inputPuertoRef}
          style={styles.input}
          value={puerto}
          onChangeText={setPuerto}
          placeholder="Ingrese: Numero 2"
          placeholderTextColor="#aaa"
          keyboardType="number-pad"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={intentarConexion}
      >
        <Text style={styles.textoBoton}>Sumar</Text>
      </Pressable>

      <Text style={styles.detalle}>Resultado: {ultimaConexion}</Text>
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