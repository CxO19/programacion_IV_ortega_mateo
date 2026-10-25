// app/index.tsx — agrega al archivo existente
import { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { BadgeEstado } from './paso3_mp'
import { Card, FilaInfo } from './paso2_mp'
import { ModalConfirm } from './paso5_mp'

// ─── Paso 6 — Pantalla completa de detalle (Curso de Idiomas) ────────

interface AccionProps {
  etiqueta: string
  color: string
  onPress: () => void
}

function BotonAccion({ etiqueta, color, onPress }: AccionProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos6.botonAccion,
        { backgroundColor: color },
        pressed && { opacity: 0.75 },
      ]}
      onPress={onPress}
    >
      <Text style={estilos6.textoBotonAccion}>{etiqueta}</Text>
    </Pressable>
  )
}

export function Paso6() {
  const [modalVisible, setModalVisible] = useState(false)
  const [accionPendiente, setAccionPendiente] = useState<string>('')
  const [log, setLog] = useState<string[]>([])

  function pedirConfirmacion(accion: string) {
    setAccionPendiente(accion)
    setModalVisible(true)
  }

  function ejecutarAccion() {
    const entrada = `[${new Date().toLocaleTimeString()}] ${accionPendiente} ejecutado en curso de Inglés`
    setLog((prev) => [entrada, ...prev])
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={estilos6.safeArea}>
      {/* Cabecera fija — fuera del scroll */}
      <View style={estilos6.cabecera}>
        <View>
          <Text style={estilos6.cabNombre}>Inglés Avanzado</Text>
          <Text style={estilos6.cabIp}>ENG-101 · Nivel C1 · 85% completado</Text>
        </View>
        <BadgeEstado estado="activo" mostrarIcono tamaño={12} />
      </View>

      {/* Contenido desplazable */}
      <ScrollView
        contentContainerStyle={estilos6.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {/* Card de métricas */}
        <Card titulo="Métricas de estudio" subtitulo="Última actualización: hace 30 s">
          <FilaInfo etiqueta="Vocabulario" valor="1500 palabras · 1200 dominadas" />
          <FilaInfo etiqueta="Racha diaria" valor="14 días consecutivos" />
          <FilaInfo etiqueta="Fluidez oral" valor="78% · Nivel avanzado" />
          <FilaInfo etiqueta="Práctica E/S" valor="45 min audios · 15 min lectura" />
          <FilaInfo etiqueta="Tiempo total" valor="32 horas, 15 minutos" />
        </Card>

        {/* Card de configuración */}
        <Card titulo="Configuración del curso">
          <FilaInfo etiqueta="Modalidad" valor="Inmersión total y gramática" />
          <FilaInfo etiqueta="Profesor" valor="John Doe · Certificación TESOL" />
          <FilaInfo etiqueta="Evaluación" valor="Examen parcial · 3 intentos" />
          <FilaInfo etiqueta="Sección" valor="Grupo Global B" />
          <FilaInfo etiqueta="Plataforma" valor="EdTech Academy Pro" />
        </Card>

        {/* Card de acciones */}
        <Card titulo="Acciones de estudio">
          <View style={estilos6.gridAcciones}>
            <BotonAccion
              etiqueta="Practicar"
              color="#1565c0"
              onPress={() => pedirConfirmacion('Práctica de vocabulario')}
            />
            <BotonAccion
              etiqueta="Reiniciar"
              color="#b71c1c"
              onPress={() => pedirConfirmacion('Reinicio de módulo')}
            />
            <BotonAccion
              etiqueta="Audio"
              color="#2e7d32"
              onPress={() => pedirConfirmacion('Inmersión auditiva')}
            />
            <BotonAccion
              etiqueta="Ver reporte"
              color="#6a1b9a"
              onPress={() => pedirConfirmacion('Descarga de reporte')}
            />
          </View>
        </Card>

        {/* Card de log de actividad */}
        {log.length > 0 && (
          <Card titulo="Actividad reciente">
            {log.map((entrada, i) => (
              <Text key={i} style={estilos6.entradaLog}>{entrada}</Text>
            ))}
          </Card>
        )}
      </ScrollView>

      {/* Modal reutilizado del Paso 5 */}
      <ModalConfirm
        visible={modalVisible}
        titulo={`Confirmar: ${accionPendiente}`}
        mensaje={`¿Ejecutar "${accionPendiente}" en el curso de Inglés?\nEsta acción actualizará tu progreso académico.`}
        etiquetaConfirmar="Ejecutar"
        onConfirmar={ejecutarAccion}
        onCancelar={() => setModalVisible(false)}
      />
    </SafeAreaView>
  )
}

const estilos6 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  cabecera: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e7ef',
  },
  cabNombre: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a237e',
  },
  cabIp: {
    fontSize: 12,
    color: '#78909c',
    fontFamily: 'monospace',
    marginTop: 2,
  },
  scrollContenido: {
    padding: 16,
    gap: 14,
    paddingBottom: 40,
  },
  gridAcciones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  botonAccion: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    minWidth: '45%',
    alignItems: 'center',
  },
  textoBotonAccion: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  entradaLog: {
    fontSize: 11,
    color: '#2e7d32',
    fontFamily: 'monospace',
    lineHeight: 18,
  },
})