# Configuración y Ajustes

La sección de Configuración te permite personalizar Genkō para que coincida con las necesidades de tu práctica. Esta guía cubre todas las opciones de configuración disponibles para administradores.

---

## Acceder a Configuración

1. Haz clic en **Configuración** en la barra lateral
2. URL: `/admin/settings`

---

## Estructura de Configuración

La configuración está organizada en pestañas:

| Pestaña | Propósito |
|---------|-----------|
| **Cuenta** | Configuración de cuenta personal |
| **Clínica** | Interruptores de funciones de la práctica |
| **Negocio** | Información de la organización |
| **Personal** | Permisos del equipo |
| **Disponibilidad** | Programación por defecto |
| **Seguros** | Proveedores de seguros |
| **Comunicaciones** | Configuración de notificaciones |
| **Integraciones** | Conexiones externas |

---

## Configuración de Cuenta

Configuración de cuenta personal para el usuario conectado.

### Información de Perfil

| Campo | Descripción |
|-------|-------------|
| Nombre | Tu nombre |
| Apellido | Tu apellido |
| Correo Electrónico | Correo de la cuenta (inicio de sesión) |
| Teléfono | Número de contacto |

### Cambiar Contraseña

1. Ingresa la contraseña actual
2. Ingresa la nueva contraseña
3. Confirma la nueva contraseña
4. Haz clic en **Actualizar Contraseña**

**Requisitos de Contraseña:**
- Mínimo 8 caracteres
- Se recomienda mezcla de letras y números
- Sin contraseñas comunes

### Autenticación de Dos Factores (Próximamente)

- Habilita 2FA para mayor seguridad
- Opciones de aplicación autenticadora o SMS
- Códigos de respaldo proporcionados

### Preferencias de Notificación

Controla qué correos recibes:

| Notificación | Descripción |
|--------------|-------------|
| Recordatorios de Citas | Correo para próximas citas |
| Nuevos Mensajes | Alerta para mensajes de pacientes |
| Resumen Diario | Resumen diario de la práctica |
| Actualizaciones de Marketing | Actualizaciones de productos de Genkō |

---

## Configuración de Clínica

Interruptores de funciones y configuración general de la práctica.

### Interruptores de Funciones

Habilita o deshabilita funciones:

| Función | Descripción |
|---------|-------------|
| **Telemedicina** | Habilitar consultas por video |
| **Portal del Paciente** | Permitir autoservicio del paciente |
| **Reservas en Línea** | Reserva pública de citas |
| **Recordatorios SMS** | Recordatorios por mensaje de texto |
| **Mensajería IA** | Chat asistido por IA con pacientes |

### Configuración de Facturación

| Configuración | Descripción |
|---------------|-------------|
| Moneda por Defecto | Moneda principal (USD, MXN, etc.) |
| Tasa de Impuesto | Porcentaje de impuesto aplicable |
| Prefijo de Factura | Numeración personalizada de facturas |

### Configuración de Citas

| Configuración | Descripción |
|---------------|-------------|
| Duración por Defecto | Duración estándar de citas |
| Tiempo de Colchón | Minutos entre citas |
| Ventana de Reserva | Qué tan adelante pueden reservar los pacientes |
| Política de Cancelación | Horas de aviso requeridas |

---

## Configuración de Negocio

Configuración a nivel de organización.

### Detalles de la Organización

| Campo | Descripción |
|-------|-------------|
| Nombre de la Organización | Nombre de la práctica |
| Nombre Legal | Nombre del negocio registrado |
| ID Fiscal | Identificación fiscal del negocio |
| Teléfono | Número de teléfono principal |
| Correo Electrónico | Correo de contacto general |

### Dirección

| Campo | Descripción |
|-------|-------------|
| Dirección | Línea de dirección física 1 |
| Oficina/Unidad | Línea de dirección 2 |
| Ciudad | Nombre de la ciudad |
| Estado | Estado/Provincia |
| Código Postal | Código postal |
| País | País |

### Marca

| Configuración | Descripción |
|---------------|-------------|
| Logo | Subir logo de la organización |
| Color Primario | Color primario de la marca |
| Zona Horaria | Zona horaria por defecto |

---

## Configuración de Personal

Gestión del equipo y permisos.

### Control de Acceso Basado en Roles (RBAC)

Configura lo que cada rol puede hacer:

#### Permisos de Admin
- Acceso completo a todas las funciones
- No se puede modificar

#### Permisos de Proveedor

| Permiso | Por Defecto |
|---------|-------------|
| Ver todos los pacientes | ✅ |
| Editar registros de pacientes | ✅ |
| Gestionar citas | ✅ |
| Acceso a telemedicina | ✅ |
| Ver análisis | ✅ |
| Gestionar personal | ❌ |

#### Permisos de Enfermero

| Permiso | Por Defecto |
|---------|-------------|
| Ver todos los pacientes | ✅ |
| Editar info básica de pacientes | ✅ |
| Ver registros médicos | ✅ |
| Editar registros médicos | ❌ |
| Gestionar citas | ✅ |
| Acceso a telemedicina | ✅ |

#### Permisos de Personal

| Permiso | Por Defecto |
|---------|-------------|
| Ver info básica de pacientes | ✅ |
| Editar registros de pacientes | ❌ |
| Ver registros médicos | ❌ |
| Gestionar citas | ✅ |
| Acceso a telemedicina | ❌ |

### Personalizar Permisos

1. Encuentra la sección del rol
2. Alterna permisos individuales encendido/apagado
3. Haz clic en **Guardar Cambios**

---

## Configuración de Disponibilidad

Configuración de programación por defecto.

### Horario de Atención

Establece horas de operación por defecto (afecta reservas públicas):

| Configuración | Descripción |
|---------------|-------------|
| Días Abiertos | Qué días operas |
| Hora de Apertura | Hora de apertura diaria |
| Hora de Cierre | Hora de cierre diaria |
| Zona Horaria | Zona horaria de operación |

### Tipos de Cita

Configura los tipos de citas disponibles:

| Tipo | Duración | Color |
|------|----------|-------|
| Paciente Nuevo | 60 min | Azul |
| Seguimiento | 30 min | Verde |
| Chequeo Anual | 45 min | Morado |
| Consulta | 20 min | Naranja |
| Telemedicina | 30 min | Cian |

### Agregar Tipos de Cita

1. Haz clic en **Agregar Tipo**
2. Ingresa nombre y duración
3. Elige color de visualización
4. Establece restricciones de disponibilidad
5. Haz clic en **Guardar**

### Reglas de Reserva

| Regla | Descripción |
|-------|-------------|
| Aviso Mínimo | Horas antes de que se pueda reservar cita |
| Máximo Adelanto | Días adelante permitidos para reservar |
| Reservas del Mismo Día | Permitir/no permitir mismo día |
| Prevención de Superposición | Bloquear dobles reservas |

---

## Configuración de Seguros

Gestiona los proveedores de seguros aceptados.

### Lista de Proveedores de Seguros

Tabla de aseguradoras configuradas:

| Columna | Descripción |
|---------|-------------|
| Nombre del Proveedor | Nombre de la compañía de seguros |
| ID del Pagador | ID electrónico del pagador |
| Estado | Activo/Inactivo |
| Acciones | Editar, Eliminar |

### Agregar Proveedor de Seguros

1. Haz clic en **Agregar Proveedor**
2. Ingresa detalles:
   - Nombre del Proveedor
   - ID del Pagador
   - Teléfono de Contacto
   - Tipo de Envío (Electrónico/Papel)
3. Haz clic en **Guardar**

### Editar Proveedor de Seguros

1. Haz clic en el icono de Editar en la fila del proveedor
2. Modifica campos
3. Haz clic en **Guardar**

### Desactivar Proveedor

1. Cambia el Estado a Inactivo
2. El proveedor se oculta de nuevas reclamaciones
3. Las reclamaciones existentes se preservan

---

## Configuración de Comunicaciones

Configura las comunicaciones con pacientes.

### Configuración de Correo Electrónico

| Configuración | Descripción |
|---------------|-------------|
| Nombre del Remitente | Nombre del remitente en correos |
| Correo de Respuesta | A dónde van las respuestas |
| Pie de Correo | Texto personalizado del pie de página |

### Configuración de Recordatorios

| Configuración | Descripción |
|---------------|-------------|
| Recordatorios de Citas | Habilitar/deshabilitar |
| Tiempo de Recordatorio | Cuándo enviar (24h, 48h, etc.) |
| Recordatorios SMS | Habilitar recordatorios por texto |

### Plantillas (Próximamente)

Personaliza plantillas de mensajes:
- Confirmación de cita
- Recordatorio de cita
- Aviso de cancelación
- Mensajes de seguimiento

---

## Integraciones

Conecta servicios externos.

### Integraciones Disponibles

| Integración | Estado | Propósito |
|-------------|--------|-----------|
| Stripe | Disponible | Procesamiento de pagos |
| Google Calendar | Próximamente | Sincronización de calendario |
| QuickBooks | Próximamente | Contabilidad |
| Zoom | Próximamente | Telemedicina |

### Integración con Stripe

1. Navega a la pestaña Integraciones
2. Haz clic en **Conectar Stripe**
3. Autoriza con Stripe
4. La conexión aparece como Activa

### Acceso a API (Plan Crecimiento)

Para suscriptores del plan Crecimiento:
- Generación de clave API
- Configuración de webhooks
- Información de límites de velocidad

---

## Guardar Configuración

### Guardado Automático

Algunas configuraciones se guardan automáticamente:
- Interruptores de alternancia
- Selecciones de menú desplegable
- Actualizaciones de campos individuales

### Guardado Manual

Otras requieren guardado explícito:
- Formularios complejos
- Cambios masivos
- Matrices de permisos

**Busca:**
- Notificación de confirmación "Guardado"
- Cambio de estado del botón "Guardar"
- Indicador de carga durante el guardado

---

## Mejores Prácticas

### Configuración Inicial

1. Completa la Configuración de Negocio primero
2. Configura Proveedores de Seguros
3. Establece valores por defecto de Disponibilidad
4. Personaliza Tipos de Cita
5. Revisa Permisos de Personal

### Mantenimiento Regular

1. Revisa permisos trimestralmente
2. Actualiza seguros anualmente
3. Verifica información de contacto
4. Prueba integraciones periódicamente

### Seguridad

1. Usa contraseñas fuertes
2. Habilita 2FA cuando esté disponible
3. Revisa registros de acceso
4. Minimiza concesiones de permisos

---

## Solución de Problemas

### La Configuración No Se Guarda

- Verifica la conexión a internet
- Busca errores de validación
- Desplázate hacia abajo para mensajes de error
- Intenta refrescar y volver a ingresar

### Los Cambios de Permisos No Funcionan

- El usuario puede necesitar cerrar sesión y volver a entrar
- Limpia la caché del navegador
- Verifica que el rol correcto esté seleccionado

### Falla la Conexión de Integración

- Verifica que las credenciales sean correctas
- Verifica que el servicio de terceros esté disponible
- Revisa los detalles del mensaje de error
- Contacta soporte para asistencia

---

## Configuración por Rol

| Sección de Config. | Admin | Proveedor | Enfermero | Personal |
|--------------------|-------|-----------|-----------|----------|
| Cuenta | Propia | Propia | Propia | Propia |
| Clínica | ✅ | ❌ | ❌ | ❌ |
| Negocio | ✅ | ❌ | ❌ | ❌ |
| Personal | ✅ | ❌ | ❌ | ❌ |
| Disponibilidad | ✅ | Propia | ❌ | ❌ |
| Seguros | ✅ | ❌ | ❌ | ❌ |
| Comunicaciones | ✅ | ❌ | ❌ | ❌ |
| Integraciones | ✅ | ❌ | ❌ | ❌ |

---

*Anterior: [Panel de Análisis](./08-analiticas.md) | Siguiente: [Facturación y Suscripción →](./10-facturacion.md)*
