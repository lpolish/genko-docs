# Programación y Calendario

El módulo de Programación es el corazón de las operaciones diarias de tu clínica. Gestiona citas, disponibilidad de proveedores y sesiones de telemedicina todo en un solo lugar.

---

## Acceder a Programación

1. Haz clic en **Programación** en la barra lateral
2. O usa las acciones rápidas del panel de control
3. URL: `/admin/scheduling`

---

## Pestañas de Programación

La página de programación tiene cuatro pestañas principales:

| Pestaña | Propósito |
|---------|-----------|
| **Calendario** | Vista visual del calendario |
| **Citas** | Vista de lista de todas las citas |
| **Telemedicina** | Gestión de consultas por video |
| **Disponibilidad** | Configuración de horarios de proveedores |

---

## Vista de Calendario

### Navegación del Calendario

**Navegación de Fecha:**
- **Hoy**: Saltar a la fecha actual
- **< >**: Navegar adelante/atrás
- **Selector Semana/Mes**: Cambiar tipo de vista

**Opciones de Vista:**
- Vista de día: Desglose por hora
- Vista de semana: Resumen de 7 días
- Vista de mes: Calendario mensual

### Entender el Calendario

**Colores de Cita por Estado:**
| Color | Estado |
|-------|--------|
| 🔵 Azul | Programada |
| 🟢 Verde | Confirmada |
| ⬜ Gris | Completada |
| 🔴 Rojo | Cancelada |

**Tipos de Cita:**
- **Presencial**: Visita estándar en consultorio
- **Telemedicina**: Consulta por video (marcada con icono de video)

### Interacciones del Calendario

**Clic en Espacio de Tiempo Vacío:**
- Abre modal de nueva cita
- Fecha y hora pre-llenadas

**Clic en Cita:**
- Abre modal de detalles de cita
- Ver información del paciente, notas, estado

**Arrastrar y Soltar:**
- Arrastra citas para reprogramar
- Aparece diálogo de confirmación
- Notificación automática enviada al paciente

---

## Crear Citas

### Método 1: Desde el Calendario

1. Haz clic en un espacio de tiempo vacío
2. Completa el formulario de cita
3. Haz clic en **Crear**

### Método 2: Desde el Botón Nueva Cita

1. Haz clic en el botón **+ Nueva Cita**
2. Selecciona fecha, hora y duración
3. Completa los detalles
4. Haz clic en **Crear**

### Método 3: Desde el Perfil del Paciente

1. Ve a los detalles del paciente
2. Haz clic en el icono de calendario
3. Completa el formulario de cita
4. Haz clic en **Crear**

---

### Campos del Formulario de Cita

**Campos Requeridos:**
| Campo | Descripción |
|-------|-------------|
| Paciente | Seleccionar de la lista de pacientes |
| Proveedor | Asignar proveedor para la cita |
| Fecha | Fecha de la cita |
| Hora | Hora de inicio |
| Duración | Duración en minutos |
| Tipo | Tipo de cita |

**Campos Opcionales:**
| Campo | Descripción |
|-------|-------------|
| Notas | Notas internas |
| Motivo | Motivo de la visita |
| Seguimiento | Marcar como visita de seguimiento |

### Tipos de Cita

| Tipo | Descripción |
|------|-------------|
| Paciente Nuevo | Primera visita para pacientes nuevos |
| Seguimiento | Visita de atención continua |
| Chequeo Anual | Examen anual |
| Consulta | Consulta inicial |
| Telemedicina | Visita virtual por video |
| Urgente | Atención urgente del mismo día |

---

## Detalles de la Cita

Haz clic en cualquier cita para ver sus detalles:

### Secciones del Modal de Detalles

**Información del Paciente:**
- Nombre e información de contacto
- Número de expediente médico
- Información del seguro

**Información de la Cita:**
- Fecha y hora
- Duración
- Proveedor asignado
- Tipo de cita
- Estado

**Notas:**
- Notas internas
- Motivo de la visita
- Comentarios del proveedor

### Acciones de la Cita

Desde el modal de detalles, puedes:
| Acción | Descripción |
|--------|-------------|
| **Editar** | Modificar detalles de la cita |
| **Reprogramar** | Cambiar fecha/hora |
| **Cancelar** | Cancelar la cita |
| **Marcar Completada** | Cerrar la cita |
| **Iniciar Telemedicina** | Lanzar sesión de video |
| **Ver Paciente** | Ir al perfil del paciente |

---

## Flujo de Estado de Citas

```
Programada → Confirmada → En Progreso → Completada
                ↓
            Cancelada
                ↓
            No Asistió
```

### Descripciones de Estado

| Estado | Significado |
|--------|-------------|
| **Programada** | Reserva inicial |
| **Confirmada** | El paciente confirmó asistencia |
| **En Progreso** | La cita está ocurriendo ahora |
| **Completada** | Visita terminada exitosamente |
| **Cancelada** | Cita cancelada |
| **No Asistió** | El paciente no llegó |

### Cambiar Estado

1. Abre los detalles de la cita
2. Haz clic en el menú desplegable de estado
3. Selecciona nuevo estado
4. Agrega notas si es requerido
5. Guarda cambios

---

## Gestionar Disponibilidad

### Acceder a Configuración de Disponibilidad

1. Ve a Programación → pestaña Disponibilidad
2. Selecciona un proveedor de la lista
3. Ver/editar su horario

### Establecer Horario Semanal

Para cada día de la semana:

1. **Alternar Disponibilidad**: Marcar día como disponible o cerrado
2. **Establecer Horas de Trabajo**: Horas de inicio y fin
3. **Agregar Tiempos de Descanso**: Almuerzo, reuniones, etc.

### Ejemplo de Horario Semanal

| Día | Disponible | Horas | Descanso |
|-----|------------|-------|----------|
| Lunes | ✅ | 9:00 AM - 5:00 PM | 12:00 - 1:00 PM |
| Martes | ✅ | 9:00 AM - 5:00 PM | 12:00 - 1:00 PM |
| Miércoles | ✅ | 9:00 AM - 12:00 PM | — |
| Jueves | ✅ | 9:00 AM - 5:00 PM | 12:00 - 1:00 PM |
| Viernes | ✅ | 9:00 AM - 4:00 PM | 12:00 - 1:00 PM |
| Sábado | ❌ | — | — |
| Domingo | ❌ | — | — |

### Guardar Disponibilidad

1. Realiza cambios en el horario
2. Haz clic en **Guardar** en el calendario de disponibilidad
3. Los cambios aplican a reservas futuras

---

## Vista de Lista de Citas

La pestaña Citas muestra un formato de lista:

### Características de la Lista

- Ordenar por fecha, paciente, proveedor
- Filtrar por estado
- Buscar citas
- Actualizaciones rápidas de estado

### Columnas de la Lista

| Columna | Descripción |
|---------|-------------|
| Paciente | Nombre del paciente (clickeable) |
| Fecha/Hora | Fecha y hora de la cita |
| Duración | Duración en minutos |
| Tipo | Tipo de cita |
| Proveedor | Proveedor asignado |
| Estado | Insignia de estado actual |
| Acciones | Botones de editar, ver, cancelar |

---

## Sesiones de Telemedicina

### Iniciar una Sesión de Telemedicina

1. Navega a Programación → pestaña Telemedicina
2. Encuentra la cita de telemedicina programada
3. Haz clic en **Iniciar Sesión** (disponible cerca de la hora de la cita)
4. Se abre la interfaz de video

### Requisitos de Telemedicina

**Requisitos del Proveedor:**
- Cámara web funcionando
- Micrófono
- Conexión a internet estable
- Navegador compatible (Chrome, Firefox, Safari)

**Requisitos del Paciente:**
- Correo de invitación con enlace de unión
- Dispositivo con cámara/micrófono
- Conexión a internet

### Durante la Sesión

**Controles del Proveedor:**
- Silenciar/activar micrófono
- Habilitar/deshabilitar cámara
- Compartir pantalla
- Terminar sesión

**Características de la Sesión:**
- Videollamada HD
- Compartir pantalla
- Grabación de sesión (si está habilitado)
- Mensajería de chat

### Después de la Sesión

1. La sesión termina automáticamente cuando el proveedor cierra
2. Actualiza el estado de la cita a "Completada"
3. Agrega notas de la sesión si es necesario
4. El paciente recibe seguimiento si está configurado

---

## Reprogramar Citas

### Método 1: Arrastrar y Soltar

1. En vista de calendario, haz clic y mantén la cita
2. Arrastra a nueva fecha/hora
3. Suelta para soltar
4. Confirma la reprogramación

### Método 2: Editar Cita

1. Abre los detalles de la cita
2. Haz clic en **Reprogramar** o **Editar**
3. Selecciona nueva fecha y hora
4. Guarda cambios

### Notificaciones Automáticas

Al reprogramar:
- El paciente es notificado por correo/SMS
- El calendario del proveedor se actualiza automáticamente
- El espacio original queda disponible

---

## Cancelar Citas

1. Abre los detalles de la cita
2. Haz clic en **Cancelar Cita**
3. Selecciona motivo de cancelación (opcional)
4. Confirma la cancelación

**Efectos de la Cancelación:**
- El espacio de tiempo queda disponible
- El paciente es notificado
- La cita se mueve a estado "Cancelada"
- Los registros se preservan para reportes

---

## Mejores Prácticas

### Programación
1. Deja tiempo de colchón entre citas
2. Establece duraciones de cita realistas
3. Bloquea tiempo para tareas administrativas
4. Revisa la agenda del día siguiente cada noche

### Disponibilidad
1. Mantén la disponibilidad actualizada
2. Bloquea tiempo libre con anticipación
3. Considera tiempos de traslado de pacientes
4. Planifica para emergencias

### Telemedicina
1. Prueba el equipo antes de las sesiones
2. Ten un método de contacto de respaldo
3. Mantén el ambiente profesional
4. Documenta notas de la sesión prontamente

---

## Solución de Problemas

### Dobles Reservas
- Habilita prevención de superposición en configuración
- Verifica configuración de disponibilidad del proveedor
- Usa el sistema de advertencia de conflictos

### La Cita No Aparece
- Verifica que el paciente esté activo
- Comprueba el filtro de rango de fechas
- Confirma el filtro del proveedor
- Refresca la página

### Problemas de Telemedicina
- Verifica compatibilidad del navegador
- Verifica permisos de cámara/micrófono
- Prueba la conexión a internet
- Limpia la caché del navegador

### La Disponibilidad No Se Guarda
- Verifica errores de validación
- Asegúrate de que las horas sean válidas
- No superpongas tiempos de descanso con horas de trabajo
- Prueba un navegador diferente

---

## Límites del Plan

### Límites de Citas por Plan

| Plan | Citas | Telemedicina |
|------|-------|--------------|
| Gratis | 10/mes | ❌ |
| Inicial | Ilimitadas | 5/mes |
| Profesional | Ilimitadas | Ilimitadas |
| Crecimiento | Ilimitadas | Ilimitadas |

Cuando te acerques a los límites, verás un banner de advertencia. Mejora tu plan para eliminar restricciones.

---

*Anterior: [Gestión de Personal](./05-gestion-de-personal.md) | Siguiente: [Mensajes y Gestión de Prospectos →](./07-comunicaciones.md)*
