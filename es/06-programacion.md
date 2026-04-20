---
title: Programación y citas
layout: default
nav_order: 6
parent: Español
---

# Programación y citas

Las citas son el flujo principal de Genkō. La experiencia de programación está pensada para que reservar sea rápido, sin dejar de proteger a los proveedores frente a conflictos y sobrecarga.

---

## Reservar una cita

Haz clic en **New Appointment** desde la página de Appointments.

El flujo de reserva normalmente incluye:

- **Patient** - busca por nombre o correo, o agrega al paciente en línea si todavía no existe
- **Provider** - elige entre los proveedores disponibles para la fecha y hora seleccionadas
- **Service** - selecciona el tipo de cita que fija la duración por defecto
- **Date and time** - reserva un horario disponible
- **Notes** - notas internas opcionales para tu equipo

Cuando las notificaciones por correo están activadas, las confirmaciones se envían automáticamente después de guardar la cita.

---

## Vistas del calendario

Usa los controles en la parte superior de Appointments para cambiar entre:

- **Day view** para programación detallada hora por hora
- **Week view** para el mejor equilibrio entre detalle y planificación
- **Month view** para visibilidad a más largo plazo

También puedes filtrar por proveedor para que el personal se concentre en un clínico o vea la agenda completa de la práctica.

---

## Detección de conflictos

Genkō evita la doble reserva en tiempo real.

- Si un proveedor ya está ocupado, el horario en conflicto no se guardará.
- Las verificaciones de conflicto ocurren en el servidor, por lo que varios miembros del equipo reservando al mismo tiempo siguen estando protegidos.
- Los horarios no disponibles aparecen atenuados antes de guardar, lo que ayuda a evitar errores desde el principio.

En planes **Practice** y superiores, **buffer minutes** puede añadir un espacio automático entre citas.

---

## Estados de las citas

Las citas pasan por un ciclo operativo simple:

| Estado | Significado |
|--------|-------------|
| Scheduled | La reserva está confirmada y aparece en el calendario |
| Completed | La visita se realizó con éxito |
| Cancelled | La cita se canceló y el horario vuelve a quedar libre |
| No-show | El paciente no asistió |

El personal, los proveedores y los administradores pueden actualizar los estados desde la vista de detalle. Solo owners y admins pueden eliminar citas.

---

## Por qué importa el seguimiento de estados

Mantener estados precisos mejora:

- Los reportes de productividad de proveedores
- El análisis de inasistencias
- La precisión del calendario para reprogramar
- La comunicación y el seguimiento con pacientes

Si notas un aumento en las inasistencias, combina esta página con recordatorios y configuración del portal.

---

## Flujo recomendado

1. Agrega o confirma el registro del paciente
2. Elige el servicio correcto
3. Reserva con el proveedor y la hora adecuados
4. Actualiza el estado después de la visita
5. Revisa cancelaciones e inasistencias en analíticas

---

## Guías relacionadas

- [Pacientes](./04-gestion-de-pacientes.md)
- [Proveedores y equipo](./05-gestion-de-personal.md)
- [Analíticas e insights](./08-analiticas.md)
