---
title: Gestión de Personal
layout: default
parent: Español
nav_order: 5
---

# Gestión de Personal

Gestionar tu equipo efectivamente es crucial para las operaciones fluidas de la clínica. Esta guía cubre cómo agregar, gestionar y configurar miembros del personal en Genkō.

---

## Acceder a Gestión de Personal

1. Haz clic en **Personal** en la barra lateral
2. O navega desde Configuración → pestaña Personal
3. URL: `/admin/staff`

---

## Vista General del Personal

La página de Personal muestra:
- **Encabezado**: Título y botones de acción
- **Búsqueda y Filtros**: Encuentra personal rápidamente
- **Advertencia de Límite de Personal**: Muestra uso contra el límite de tu plan
- **Lista de Personal**: Tabla de todos los miembros del equipo

---

## Roles del Personal

Genkō tiene cuatro roles principales de personal:

### Admin
- Acceso completo a todas las funciones
- Puede gestionar otros miembros del personal
- Acceso a facturación y configuración
- Puede ver todos los pacientes y citas

### Proveedor
- Proveedores de salud (médicos, especialistas)
- Puede gestionar sus pacientes asignados
- Acceso a programación y telemedicina
- Puede ver registros médicos

### Enfermero
- Personal de apoyo clínico
- Puede asistir con el cuidado del paciente
- Capacidades de edición limitadas
- Acceso a signos vitales y registros básicos

### Personal
- Personal administrativo
- Acceso básico de visualización de pacientes
- Soporte de programación
- Sin edición de registros médicos

---

## Agregar Miembros del Personal

### Paso 1: Clic en Agregar Personal

Haz clic en el botón **Agregar Personal** en la esquina superior derecha.

### Paso 2: Completar Información del Personal

**Información Personal:**
| Campo | Requerido | Descripción |
|-------|-----------|-------------|
| Nombre | Sí | Nombre del miembro del personal |
| Apellido | Sí | Apellido del miembro del personal |
| Correo Electrónico | Sí | Dirección de correo laboral |
| Teléfono | No | Número de contacto |

**Rol y Acceso:**
| Campo | Requerido | Descripción |
|-------|-----------|-------------|
| Rol | Sí | Admin, Proveedor, Enfermero o Personal |
| Título | No | Título profesional (ej., "Dr.", "Lic.") |
| Especialización | No | Área de especialidad (para proveedores) |

**Información de Licencia (para Proveedores/Enfermeros):**
| Campo | Requerido | Descripción |
|-------|-----------|-------------|
| Número de Licencia | No | Número de licencia profesional |
| Vencimiento de Licencia | No | Fecha de vencimiento de licencia |

### Paso 3: Guardar e Invitar

1. Haz clic en **Guardar** para crear la cuenta del personal
2. Un correo de invitación se envía automáticamente
3. El miembro del personal debe establecer su contraseña para activar

---

## Importar Personal (CSV)

Para importaciones masivas de personal:

1. Haz clic en el botón **Importar Personal**
2. Descarga la plantilla CSV
3. Completa la información del personal
4. Sube el archivo completado
5. Revisa y confirma la importación

### Campos de la Plantilla CSV

| Columna | Requerido | Descripción |
|---------|-----------|-------------|
| first_name | Sí | Nombre |
| last_name | Sí | Apellido |
| email | Sí | Dirección de correo |
| role | Sí | admin, provider, nurse, staff |
| phone | No | Número de teléfono |
| title | No | Título profesional |
| specialization | No | Área de especialidad |
| license_number | No | Número de licencia |
| license_expiry | No | Formato AAAA-MM-DD |

---

## Gestionar Miembros del Personal

### Ver Detalles del Personal

1. Haz clic en la fila del miembro del personal
2. O haz clic en el icono de ver (👁) en acciones
3. El perfil completo se abre con todos los detalles

### Secciones del Perfil del Personal

**Información Personal:**
- Nombre, título, detalles de contacto
- Rol y especialización
- Estado de la cuenta

**Información de Acceso:**
- Fecha del último inicio de sesión
- Estado de la cuenta (Activo/Inactivo)
- Estado de verificación de correo

**Información de Licencia:**
- Número de licencia
- Fecha de vencimiento
- Recordatorios de renovación

---

### Editar Información del Personal

1. Haz clic en el icono de editar (✏️) o abre los detalles del personal
2. Realiza cambios en los campos permitidos
3. Haz clic en **Guardar**

**Editable por Admin:**
- Toda la información personal
- Asignación de rol
- Detalles de licencia
- Estado

---

### Restablecer Contraseña del Personal

Si un miembro del personal olvida su contraseña:

1. Encuentra al miembro del personal en la lista
2. Haz clic en el menú desplegable (⋮)
3. Selecciona **Restablecer Contraseña**
4. Confirma la acción
5. Un correo de restablecimiento de contraseña se envía al miembro del personal

**Nota:** Los miembros del personal también pueden usar "Olvidé mi Contraseña" en la página de inicio de sesión.

---

### Activar/Desactivar Personal

#### Desactivar Personal

Usa cuando un miembro del personal se va o necesita suspensión temporal:

1. Encuentra al miembro del personal
2. Haz clic en el menú desplegable (⋮)
3. Selecciona **Desactivar**
4. Confirma la acción

**Efectos de la Desactivación:**
- El miembro del personal no puede iniciar sesión
- Las citas existentes permanecen
- Los datos se preservan
- Se puede reactivar después

#### Reactivar Personal

1. Filtra para mostrar personal inactivo
2. Encuentra al miembro del personal
3. Haz clic en **Activar**

---

### Eliminar Personal

**Advertencia:** Eliminar personal es permanente y no se puede deshacer.

1. Encuentra al miembro del personal
2. Haz clic en el menú desplegable (⋮)
3. Selecciona **Eliminar**
4. Escribe confirmación si se requiere
5. Haz clic en **Confirmar Eliminación**

**Notas:**
- El propietario de la cuenta no puede ser eliminado
- Reasigna pacientes antes de eliminar proveedores
- Los registros históricos se preservan

---

## Permisos de Roles

### Matriz de Permisos

| Permiso | Admin | Proveedor | Enfermero | Personal |
|---------|-------|-----------|-----------|----------|
| Ver info básica de pacientes | ✅ | ✅ | ✅ | ✅ |
| Editar info básica de pacientes | ✅ | ✅ | ✅ | ❌ |
| Ver registros médicos | ✅ | ✅ | ✅ | ❌ |
| Editar registros médicos | ✅ | ✅ | ❌ | ❌ |
| Gestionar citas | ✅ | ✅ | ✅ | ✅ |
| Acceso a telemedicina | ✅ | ✅ | ✅ | ❌ |
| Gestionar personal | ✅ | ❌ | ❌ | ❌ |
| Acceso a configuración | ✅ | ❌ | ❌ | ❌ |
| Ver facturación | Solo propietario | ❌ | ❌ | ❌ |

### Personalizar Permisos

Los Admins pueden personalizar permisos de roles en Configuración:

1. Ve a **Configuración** → pestaña **Personal**
2. Encuentra la sección **Controles de Acceso Basado en Roles**
3. Ajusta las casillas para cada rol
4. Haz clic en **Guardar**

---

## Gestión del Límite de Personal

Tu plan de suscripción determina cuánto personal puedes agregar:

| Plan | Límite de Personal |
|------|-------------------|
| Gratis | 1 (solo propietario) |
| Inicial | 3 |
| Profesional | 10 |
| Crecimiento | Ilimitado |

### Cuando Alcanzas el Límite

- Un banner de advertencia aparece en la página de Personal
- El botón Agregar Personal está deshabilitado
- Opciones:
  1. Desactivar personal inactivo
  2. Mejorar tu plan

---

## Búsqueda y Filtrado

### Búsqueda Rápida
- Busca por nombre, correo o teléfono
- Los resultados se actualizan mientras escribes

### Filtro de Estado
- Todo el personal
- Solo activos
- Solo inactivos

### Filtro de Rol
- Todos los roles
- Admin
- Proveedor
- Enfermero
- Personal

---

## Invitaciones de Personal

### Proceso de Invitación

1. El miembro del personal es creado por el admin
2. El correo de invitación se envía automáticamente
3. El miembro del personal hace clic en el enlace de invitación
4. El miembro del personal establece su contraseña
5. La cuenta se activa

### Estado de la Invitación

| Estado | Descripción |
|--------|-------------|
| Pendiente | Correo enviado, aún no aceptada |
| Aceptada | Contraseña establecida, cuenta activa |
| Expirada | Enlace expirado (reenvío requerido) |

### Reenviar Invitaciones

1. Encuentra al miembro del personal
2. Haz clic en el menú desplegable
3. Selecciona **Reenviar Invitación**

---

## Mejores Prácticas

### Agregar Personal
1. Usa solo direcciones de correo laboral
2. Asigna el rol mínimo necesario
3. Completa información de licencia para proveedores
4. Configura disponibilidad después de crear la cuenta

### Seguridad
1. Revisa el acceso del personal regularmente
2. Desactiva personal que se va inmediatamente
3. Usa requisitos de contraseña fuertes
4. Habilita autenticación de dos factores (cuando esté disponible)

### Organización
1. Usa convenciones de nomenclatura consistentes
2. Mantén títulos y especializaciones actualizados
3. Rastrea fechas de vencimiento de licencias
4. Documenta asignaciones de roles

---

## Solución de Problemas

### El Personal No Recibe la Invitación
- Verifica que la dirección de correo sea correcta
- Pide al personal que revise la carpeta de spam
- Reenvía la invitación
- Verifica que el dominio de correo no esté bloqueado

### No Puedo Agregar Más Personal
- Verifica los límites del plan actual
- Cuenta personal activo vs. total
- Considera mejorar el plan
- Desactiva cuentas no usadas

### El Personal No Puede Iniciar Sesión
- Verifica que la cuenta esté activa
- Comprueba que el correo sea correcto
- Restablece la contraseña si es necesario
- Confirma que la invitación fue aceptada

### Problemas de Permisos
- Verifica la asignación del rol
- Revisa la configuración de permisos personalizados
- El Admin puede necesitar ajustar el acceso

---

*Anterior: [Gestión de Pacientes](./04-gestion-de-pacientes.md) | Siguiente: [Programación y Calendario →](./06-programacion.md)*
