// app/index.tsx
import { StyleSheet, Text, View } from 'react-native'
import { Paso1 } from './paso1_mp'
import { Paso2 } from './paso2_mp'
import { Paso3 } from './paso3_mp'
import { Paso4 } from './paso4_mp'
import { Paso6 } from './paso6_mp'
import { Paso1_Simpson } from './paso1_simpson_mp'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1  Props tipadas — TarjetaServidor                     │
// │  2  Paso 2  children y composición — Card reutilizable          │
// │  3  Paso 3  Props opcionales y BadgeEstado                      │
// │  4  Paso 4  ScrollView y SafeAreaView                           │                     
// └──────────────────────────────────────────────────────────────────┘
const PASO = 4

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />
    case 4:
      return <Paso4 />
    default:
      return (
        <View style={styles.centrado}>
          <Text>Paso {PASO}: crea el componente primero</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})