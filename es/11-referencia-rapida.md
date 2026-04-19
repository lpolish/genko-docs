---
title: Referencia Rápida
layout: default
parent: Español
nav_order: 11
redirect_to: https://getgenko.com/docs
---

# Guía de Referencia Rápida

Esta guía de referencia rápida proporciona información de un vistazo para tareas comunes y navegación en Genkō.

---

## Atajos de Teclado

### Atajos Globales

| Atajo | Acción |
|-------|--------|
| `Ctrl/Cmd + K` | Abrir búsqueda global |
| `Ctrl/Cmd + /` | Mostrar atajos de teclado |
| `Esc` | Cerrar modal/diálogo |

### Navegación

| Atajo | Acción |
|-------|--------|
| `G + D` | Ir al Panel |
| `G + P` | Ir a Pacientes |
| `G + S` | Ir a Programación |
| `G + M` | Ir a Mensajes |

---

## Pasos Rápidos para Tareas Comunes

### Agregar un Nuevo Paciente

1. Barra lateral → **Pacientes**
2. Clic en **+ Agregar Paciente**
3. Llena campos requeridos (Nombre, Apellido, Fecha de Nacimiento)
4. Clic en **Guardar**

### Programar una Cita

1. Barra lateral → **Programación**
2. Clic en espacio de tiempo vacío O **+ Nueva Cita**
3. Selecciona paciente y proveedor
4. Establece fecha, hora, duración
5. Clic en **Crear**

### Agregar un Miembro del Personal

1. Barra lateral → **Personal**
2. Clic en **+ Agregar Personal**
3. Ingresa nombre, correo, rol
4. Clic en **Guardar** (invitación enviada automáticamente)

### Iniciar una Sesión de Telemedicina

1. Barra lateral → **Programación** → pestaña **Telemedicina**
2. Encuentra la sesión programada
3. Clic en **Iniciar Sesión** (cerca de la hora de la cita)

### Enviar un Mensaje

1. Barra lateral → **Mensajes**
2. Selecciona conversación O clic en **Nueva Conversación**
3. Escribe mensaje
4. Clic en **Enviar**

### Convertir un Prospecto a Paciente

1. Barra lateral → **Prospectos**
2. Encuentra el prospecto
3. Clic en el icono ✅ (Convertir)
4. Confirma la conversión

---

## Indicadores de Estado

### Estado del Paciente

| Estado | Significado |
|--------|-------------|
| 🟢 Activo | Actualmente recibiendo atención |
| ⚪ Inactivo | No activo actualmente |

### Estado de la Cita

| Estado | Color | Significado |
|--------|-------|-------------|
| Programada | 🔵 Azul | Reservada |
| Confirmada | 🟢 Verde | Paciente confirmó |
| En Progreso | 🟡 Amarillo | Ocurriendo ahora |
| Completada | ⬜ Gris | Terminada |
| Cancelada | 🔴 Rojo | Cancelada |
| No Asistió | 🔴 Rojo | Paciente no llegó |

### Estado del Personal

| Estado | Significado |
|--------|-------------|
| 🟢 Activo | Puede iniciar sesión |
| ⚪ Inactivo | No puede iniciar sesión |

### Estado del Prospecto

| Etapa | Color |
|-------|-------|
| Prospecto | 🔵 Azul |
| Interesado | 🟡 Amarillo |
| Calificado | 🟣 Morado |
| Convertido | 🟢 Verde |
| Perdido | 🔴 Rojo |

---

## Estructura de Navegación

```
📱 Genkō Admin
│
├── 📊 Operaciones
│   ├── Panel
│   ├── Pacientes
│   ├── Programación
│   └── Análisis
│
├── 💬 Comunicación
│   ├── Mensajes
│   └── Prospectos
│
└── ⚙️ Gestión
    ├── Personal
    ├── Perfil de Negocio
    ├── Configuración
    └── Facturación (Solo propietario)
```

---

## Resumen de Permisos por Rol

| Acción | Admin | Proveedor | Enfermero | Personal |
|--------|:-----:|:---------:|:---------:|:--------:|
| Ver pacientes | ✅ | ✅ | ✅ | ✅ |
| Editar pacientes | ✅ | ✅ | ✅ | ❌ |
| Eliminar pacientes | ✅ | ❌ | ❌ | ❌ |
| Crear citas | ✅ | ✅ | ✅ | ✅ |
| Telemedicina | ✅ | ✅ | ✅ | ❌ |
| Gestionar personal | ✅ | ❌ | ❌ | ❌ |
| Ver análisis | ✅ | ✅ | ❌ | ❌ |
| Acceso a configuración | ✅ | ❌ | ❌ | ❌ |
| Acceso a facturación | Propietario | ❌ | ❌ | ❌ |

---

## Referencia Rápida de URLs

| Página | Ruta URL |
|--------|----------|
| Panel | `/admin/dashboard` |
| Pacientes | `/admin/patients` |
| Programación | `/admin/scheduling` |
| Personal | `/admin/staff` |
| Mensajes | `/admin/messages` |
| Prospectos | `/admin/leads` |
| Análisis | `/admin/analytics` |
| Perfil de Negocio | `/admin/business-profile` |
| Configuración | `/admin/settings` |
| Facturación | `/admin/billing` |

---

## Comparación de Planes

| Característica | Gratis | Inicial | Pro | Crecimiento |
|----------------|:------:|:-------:|:---:|:-----------:|
| **Precio** | $0 | $29/mes | $99/mes | $249/mes |
| **Personal** | 1 | 3 | 10 | ∞ |
| **Pacientes** | 10 | ∞ | ∞ | ∞ |
| **Citas** | 10/mes | ∞ | ∞ | ∞ |
| **Telemedicina** | ❌ | 5/mes | ∞ | ∞ |
| **Análisis** | Básico | ✅ | Avanzado | Avanzado |
| **API** | ❌ | ❌ | ❌ | ✅ |

---

## Iconos Comunes

| Icono | Significado |
|:-----:|-------------|
| ➕ | Agregar nuevo |
| ✏️ | Editar |
| 🗑️ | Eliminar |
| 👁️ | Ver detalles |
| 📅 | Calendario/Programación |
| 💬 | Mensaje |
| 📊 | Análisis |
| ⚙️ | Configuración |
| 🔔 | Notificaciones |
| 👤 | Usuario/Paciente |
| 👥 | Personal/Equipo |
| 📱 | Telemedicina |
| 💳 | Facturación |
| ❓ | Ayuda |

---

## Formatos de Fecha y Hora

| Configuración Regional | Ejemplo de Fecha | Ejemplo de Hora |
|------------------------|------------------|-----------------|
| Inglés (EE.UU.) | Jan 9, 2026 | 2:30 PM |
| Español | 9 ene 2026 | 14:30 |
| Japonés | 2026年1月9日 | 14:30 |

---

## Soluciones Rápidas de Problemas

| Problema | Solución Rápida |
|----------|-----------------|
| Página no carga | Refrescar (F5 o Ctrl+R) |
| Sesión cerrada inesperadamente | Iniciar sesión de nuevo |
| Datos no aparecen | Verificar filtros, refrescar |
| No puedo editar | Verificar permisos/rol |
| Botón deshabilitado | Verificar límites del plan |
| Mensaje de error | Anotar mensaje, contactar soporte |

---

## Contactos de Soporte

| Tipo de Problema | Contacto |
|------------------|----------|
| Soporte General | support@genko.app |
| Preguntas de Facturación | billing@genko.app |
| Problemas Técnicos | Ayuda dentro de la app → Enviar ticket |
| Recuperación de Cuenta | Restablecer vía página de inicio de sesión |

---

## Lista de Verificación de Incorporación

Lista de verificación para configuración de nuevo administrador:

- [ ] Crear cuenta y seleccionar plan
- [ ] Completar verificación de correo
- [ ] Configurar Perfil de Negocio
  - [ ] Agregar nombre de la clínica
  - [ ] Subir logo
  - [ ] Ingresar dirección
  - [ ] Agregar información de contacto
- [ ] Agregar primer paciente
- [ ] Invitar miembros del personal
- [ ] Configurar disponibilidad
- [ ] Programar primera cita
- [ ] Probar telemedicina (si está disponible)
- [ ] Revisar análisis
- [ ] Configurar ajustes

---

## Flujo de Trabajo Diario

Rutina diaria recomendada para admin:

**Mañana:**
1. Revisar Panel para resumen del día
2. Revisar alertas o notificaciones
3. Confirmar citas del día

**Durante el Día:**
4. Gestionar citas según sea necesario
5. Responder mensajes
6. Procesar nuevos prospectos

**Fin del Día:**
7. Revisar citas completadas
8. Marcar no asistencias apropiadamente
9. Vista previa de la agenda de mañana

---

## Tareas Semanales

| Día | Tarea |
|-----|-------|
| Lunes | Revisar semana por delante |
| Miércoles | Seguimiento de prospectos pendientes |
| Viernes | Revisar análisis semanales |
| Mensual | Revisar facturación, actualizar configuración |

---

## Procedimientos de Emergencia

### El Paciente No Puede Acceder al Portal
1. Verificar que el correo del paciente sea correcto
2. Enviar enlace de restablecimiento de contraseña
3. Verificar que el estado del paciente sea Activo

### El Personal No Puede Iniciar Sesión
1. Verificar que la cuenta esté Activa
2. Enviar restablecimiento de contraseña
3. Verificar bloqueo de cuenta
4. Reenviar invitación si es necesario

### Pago Fallido
1. Verificar método de pago
2. Actualizar detalles de la tarjeta
3. Contactar banco si fue rechazado
4. Agregar método de pago alternativo

### Datos Parecen Faltar
1. Verificar filtros de rango de fechas
2. Verificar organización correcta (si hay múltiples)
3. Esperar sincronización (hasta 15 min)
4. Contactar soporte si persiste

---

## Glosario

| Término | Definición |
|---------|------------|
| **Organización** | Tu clínica/práctica en Genkō |
| **Proveedor** | Proveedor de salud (médico, especialista) |
| **NEM** | Número de Expediente Médico |
| **Prospecto** | Paciente potencial |
| **Telemedicina** | Consulta por video |
| **RBAC** | Control de Acceso Basado en Roles |
| **KPI** | Indicador Clave de Rendimiento |
| **CxC** | Cuentas por Cobrar |

---

## Historial de Versiones

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0 | Ene 2026 | Lanzamiento inicial |

---

*[← Regresar a la Tabla de Contenidos](./)*
