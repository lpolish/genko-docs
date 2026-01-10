---
title: Comunicaciones
layout: default
parent: Español
nav_order: 7
---

# Mensajes y Gestión de Prospectos

La comunicación efectiva con pacientes y prospectos potenciales es esencial para una práctica exitosa. Genkō proporciona herramientas robustas de mensajería y gestión de prospectos.

---

## Parte 1: Mensajes

### Acceder a Mensajes

1. Haz clic en **Mensajes** en la barra lateral
2. URL: `/admin/messages`

---

### Vista General de Mensajes

La interfaz de Mensajes tiene dos paneles principales:

**Panel Izquierdo: Lista de Conversaciones**
- Todas las conversaciones activas
- Opciones de búsqueda y filtro
- Indicadores de estado
- Insignias de prioridad

**Panel Derecho: Vista de Conversación**
- Mensajes de la conversación seleccionada
- Área de entrada de mensaje
- Controles del asistente de IA

---

### Entender las Conversaciones

Cada conversación muestra:
| Elemento | Descripción |
|----------|-------------|
| Nombre del Paciente | Participante de la conversación |
| Último Mensaje | Vista previa del mensaje más reciente |
| Insignia de Estado | Activa, Pendiente, Resuelta |
| Prioridad | Baja, Media, Alta |
| Icono de IA | Robot azul si la IA está habilitada |
| Conteo de Mensajes | Total de mensajes |
| Marca de Tiempo | Hora de última actividad |

---

### Estados de Conversación

| Estado | Color | Descripción |
|--------|-------|-------------|
| **Activa** | 🟢 Verde | Conversación en curso |
| **Pendiente** | 🟡 Amarillo | Esperando respuesta |
| **Resuelta** | ⬜ Gris | Conversación cerrada |

---

### Iniciar una Nueva Conversación

1. Haz clic en el botón **Nueva Conversación**
2. Selecciona un paciente o ingresa información de contacto
3. Establece la prioridad de la conversación
4. Elige preferencia de asistencia de IA
5. Haz clic en **Crear**

---

### Enviar Mensajes

1. Selecciona una conversación del panel izquierdo
2. Escribe tu mensaje en el área de entrada
3. Opcional: Activa la anulación de IA
4. Haz clic en **Enviar** o presiona Enter

**Opciones de Mensaje:**
| Opción | Descripción |
|--------|-------------|
| **Anulación de IA** | Cuando está habilitado, omite la IA para respuestas manuales |
| **Adjuntos** | Agregar archivos (próximamente) |

---

### Mensajería Asistida por IA

Genkō incluye asistencia inteligente de IA:

**Cómo Ayuda la IA:**
- Redacta respuestas iniciales
- Sugiere respuestas basadas en contexto
- Maneja consultas rutinarias
- Aprende de tu estilo de comunicación

**Alternar IA Por Conversación:**
1. Abre la configuración de la conversación
2. Alterna el interruptor "IA Habilitada"
3. Cuando ESTÁ ENCENDIDO: La IA puede responder automáticamente
4. Cuando ESTÁ APAGADO: Todas las respuestas son manuales

**Anulación de IA para un Solo Mensaje:**
1. Activa "Anulación de IA" antes de enviar
2. Tu mensaje omite el procesamiento de IA
3. Útil para respuestas sensibles o específicas

---

### Indicadores de Mensaje

**Tipos de Remitente de Mensaje:**
| Icono | Remitente | Descripción |
|-------|-----------|-------------|
| 👤 Usuario | Paciente | Mensaje del paciente |
| 🤖 Bot | IA | Respuesta generada por IA |
| 💬 Personal | Personal | Respuesta manual del personal |

**Insignia de Generado por IA:**
- Los mensajes creados por IA muestran un pequeño icono de robot
- Ayuda a distinguir entre respuestas de IA y del personal

---

### Filtrar Conversaciones

**Búsqueda Rápida:**
- Busca por nombre de paciente o contenido del mensaje

**Menú Desplegable de Filtro por Estado:**
| Filtro | Muestra |
|--------|---------|
| Todas | Todas las conversaciones |
| Activas | Conversaciones en curso |
| Pendientes | Esperando respuesta |
| Resueltas | Conversaciones cerradas |

---

### Acciones de Conversación

Desde una conversación, puedes:
| Acción | Cómo |
|--------|------|
| Cambiar Estado | Actualizar menú desplegable en el encabezado |
| Alternar IA | Cambiar el interruptor de IA Habilitada |
| Ver Paciente | Clic en el enlace del nombre del paciente |
| Cerrar Conversación | Establecer estado a Resuelta |

---

## Parte 2: Gestión de Prospectos

### Acceder a Prospectos

1. Haz clic en **Prospectos** en la barra lateral
2. URL: `/admin/leads`

---

### Entender los Prospectos

Los prospectos son pacientes potenciales que han mostrado interés pero aún no se han convertido en registros completos de pacientes.

**Fuentes de Prospectos:**
| Fuente | Descripción |
|--------|-------------|
| **WhatsApp** | Consultas vía WhatsApp |
| **Sitio Web** | Envíos de formularios del sitio web |
| **Referencia** | Referidos por pacientes existentes |

---

### Etapas del Pipeline de Prospectos

Los prospectos se mueven a través de un pipeline de ventas:

```
Prospecto → Interesado → Calificado → Convertido
                              ↓
                           Perdido
```

| Etapa | Descripción |
|-------|-------------|
| **Prospecto** | Contacto inicial, compromiso mínimo |
| **Interesado** | Mostró interés genuino |
| **Calificado** | Listo para convertirse en paciente |
| **Convertido** | Se convirtió exitosamente en paciente |
| **Perdido** | No se convirtió |

---

### Modos de Vista

Alterna entre dos modos de vista:

**Vista de Tabla:**
- Formato de lista tradicional
- Columnas ordenables
- Acciones masivas disponibles

**Vista Kanban:**
- Tablero visual del pipeline
- Arrastrar y soltar entre etapas
- Cambios rápidos de estado

---

### Agregar un Nuevo Prospecto

1. Haz clic en el botón **Agregar Prospecto**
2. Completa el formulario de prospecto:

| Campo | Requerido | Descripción |
|-------|-----------|-------------|
| Número de Teléfono | Sí | Número de contacto principal |
| Nombre | No | Nombre del prospecto |
| Apellido | No | Apellido del prospecto |
| Correo Electrónico | No | Dirección de correo |
| Fuente | Sí | De dónde vino |
| Estado | Sí | Etapa actual del pipeline |
| Notas | No | Información adicional |
| Etiquetas | No | Etiquetas personalizadas |

3. Haz clic en **Crear Prospecto**

---

### Gestionar Prospectos en Vista de Tabla

**Búsqueda y Filtros:**
- Buscar por nombre, correo, teléfono
- Filtrar por estado
- Filtrar por fuente

**Acciones de Tabla:**
| Icono | Acción |
|-------|--------|
| ✏️ Editar | Modificar información del prospecto |
| 💬 Mensaje | Iniciar conversación |
| ✅ Convertir | Convertir a paciente |
| 🗑️ Eliminar | Eliminar prospecto |

---

### Gestionar Prospectos en Vista Kanban

**Arrastrar y Soltar:**
1. Haz clic y mantén una tarjeta de prospecto
2. Arrastra a la columna deseada
3. Suelta para actualizar estado

**Acciones de Tarjeta:**
- Haz clic en iconos de la tarjeta para acciones rápidas
- Usa botones de flecha para mover izquierda/derecha
- El indicador de carga se muestra durante actualizaciones

**Mover con Flechas:**
1. Haz clic en ◀ para mover prospecto a la izquierda
2. Haz clic en ▶ para mover prospecto a la derecha
3. El estado se actualiza automáticamente

---

### Convertir Prospectos a Pacientes

Cuando un prospecto está listo para convertirse en paciente:

1. Encuentra el prospecto en vista de tabla o kanban
2. Haz clic en **Convertir a Paciente** (icono ✅)
3. Confirma la conversión
4. El prospecto se convierte en registro de paciente
5. El estado cambia a "Convertido"

**Después de la Conversión:**
- Se crea el registro de paciente
- El prospecto se marca como convertido
- Puedes programar su primera cita
- Los datos originales del prospecto se preservan

---

### Iniciar Conversaciones desde Prospectos

1. Haz clic en el icono de mensaje (💬) en cualquier prospecto
2. Se crea una nueva conversación
3. Eres redirigido a Mensajes
4. La información del prospecto está pre-llenada

---

### Editar Información del Prospecto

1. Haz clic en el icono de editar (✏️)
2. Actualiza campos en el modal
3. Haz clic en **Actualizar Prospecto**

**Campos Editables:**
- Nombre e información de contacto
- Fuente y estado
- Notas
- Etiquetas

---

### Eliminar Prospectos

1. Haz clic en el icono de eliminar (🗑️)
2. Confirma la eliminación
3. El prospecto se elimina permanentemente

**Advertencia:** Los prospectos eliminados no se pueden recuperar. Convierte prospectos importantes a pacientes antes de eliminar.

---

### Etiquetas de Prospectos

Usa etiquetas para categorizar prospectos:

**Etiquetas Comunes:**
- `urgente`
- `seguimiento`
- `pregunta-seguro`
- `sensible-precio`
- `referencia`

**Agregar Etiquetas:**
1. Edita el prospecto
2. Agrega etiquetas en el campo de etiquetas
3. Guarda cambios

---

## Mejores Prácticas

### Mensajes

1. **Responde Prontamente**: Apunta a respuestas el mismo día
2. **Usa la IA Sabiamente**: Deja que la IA maneje consultas rutinarias
3. **Establece Prioridades**: Marca conversaciones urgentes apropiadamente
4. **Cierra las Resueltas**: Archiva conversaciones completadas
5. **Mantente Profesional**: Mantén comunicación compatible con HIPAA

### Gestión de Prospectos

1. **Haz Seguimiento Rápido**: Contacta nuevos prospectos dentro de 24 horas
2. **Actualiza las Etapas**: Mantén el estado del pipeline actualizado
3. **Agrega Notas**: Documenta todas las interacciones
4. **Usa Etiquetas**: Categoriza para filtrado fácil
5. **Convierte Prontamente**: Mueve prospectos calificados a pacientes

---

## Solución de Problemas

### Mensajes

**La Conversación No Carga:**
- Refresca la página
- Verifica la conexión a internet
- Selecciona una conversación diferente

**La IA No Responde:**
- Verifica que la IA esté habilitada para la conversación
- Revisa la configuración de IA de la organización
- La IA puede estar deshabilitada en planes gratuitos

### Prospectos

**El Prospecto No Se Mueve (Kanban):**
- Espera a que la carga complete
- Intenta usar los botones de flecha en su lugar
- Refresca la página

**No Puedo Convertir a Paciente:**
- Verifica que los campos requeridos estén llenos
- El prospecto puede ya estar convertido
- Verifica que tengas permiso

**Prospectos Duplicados:**
- Busca antes de crear nuevos prospectos
- Fusiona duplicados contactando a soporte
- Usa formato de teléfono consistente

---

## Integración con Otros Módulos

### Mensajes ↔ Pacientes
- Haz clic en el nombre del paciente para ver perfil
- Accede al historial de mensajes desde registros de pacientes

### Prospectos ↔ Pacientes
- Convierte prospectos para crear registros de pacientes
- El historial del prospecto se preserva en notas del paciente

### Mensajes ↔ Prospectos
- Inicia conversaciones directamente desde prospectos
- El contexto del prospecto disponible en la conversación

---

*Anterior: [Programación y Calendario](./06-programacion.md) | Siguiente: [Panel de Análisis →](./08-analiticas.md)*
