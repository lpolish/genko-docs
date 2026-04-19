---
title: Primeros Pasos
layout: default
parent: Español
nav_order: 1
redirect_to: https://getgenko.com/docs
---

# Primeros Pasos con Genkō

Esta guía te lleva a través del proceso completo de crear tu cuenta de Genkō y completar la configuración inicial.

---

## 1. Crear Tu Cuenta

### Paso 1: Acceder a la Página de Registro

Navega a la página de registro de Genkō en `tudominio.com/auth/signup` o haz clic en "Iniciar Prueba Gratuita" desde la página principal.

### Paso 2: Seleccionar Tu Plan de Suscripción

Genkō ofrece varios niveles de suscripción para adaptarse a las necesidades de tu clínica:

| Plan | Precio | Ideal Para |
|------|--------|------------|
| **Gratis** | $0/mes | Profesionales independientes que comienzan |
| **Inicial** | $29/mes | Prácticas pequeñas con necesidades básicas |
| **Profesional** | $99/mes | Clínicas en crecimiento con múltiples proveedores |
| **Crecimiento** | $249/mes | Prácticas grandes con funciones avanzadas |

**Nota:** Todos los planes de pago incluyen una prueba gratuita de 14 días sin necesidad de tarjeta de crédito para el período de prueba.

#### Qué Incluye Cada Plan:

**Plan Gratis:**
- Gestión básica de pacientes
- Citas limitadas
- Acceso de un solo usuario

**Plan Inicial:**
- Gestión completa de pacientes
- Citas ilimitadas
- Hasta 3 miembros del personal
- Análisis básicos

**Plan Profesional (Más Popular):**
- Todo lo del plan Inicial
- Hasta 10 miembros del personal
- Funciones de telemedicina
- Análisis avanzados
- Gestión de reclamaciones de seguros

**Plan Crecimiento:**
- Todo lo del plan Profesional
- Miembros del personal ilimitados
- Soporte prioritario
- Integraciones personalizadas
- Acceso a API

### Paso 3: Ingresar Tu Información

Después de seleccionar un plan, completa el formulario de registro:

1. **Nombre Completo**: Ingresa tu nombre completo (este será tu nombre de perfil de administrador)
2. **Correo Electrónico**: Ingresa una dirección de correo válida (usado para iniciar sesión y notificaciones)
3. **Nombre de la Organización**: Ingresa el nombre de tu clínica o práctica
4. **URL de la Organización**: Elige un slug de URL único para tu organización (ej., `mi-clinica` → `genko.app/mi-clinica`)
5. **Contraseña**: Crea una contraseña segura (mínimo 8 caracteres)
6. **Confirmar Contraseña**: Vuelve a ingresar tu contraseña para confirmar

**Consejos para la URL de la Organización:**
- Usa solo letras minúsculas, números y guiones
- Mantenla corta y memorable
- Será parte de tu URL de perfil público
- No se puede cambiar fácilmente después de crearla

### Paso 4: Aceptar Términos y Crear Cuenta

- Marca la casilla para aceptar los Términos de Servicio y la Política de Privacidad
- Haz clic en **"Crear Cuenta"** o **"Iniciar Prueba Gratuita"**

### Paso 5: Para Planes de Pago - Completar Pago (Opcional para Prueba)

Si seleccionaste un plan de pago:
- Verás un modal con los detalles del plan
- Haz clic en **"Iniciar Prueba de 14 Días"** para comenzar tu prueba
- Puedes agregar información de pago ahora o más tarde antes de que termine la prueba

---

## 2. Primer Inicio de Sesión

### Iniciar Sesión

1. Ve a `tudominio.com/auth/signin`
2. Ingresa tu dirección de correo electrónico y haz clic en **Continuar**
3. Selecciona tu organización (si tienes múltiples)
4. Ingresa tu contraseña y haz clic en **Iniciar Sesión**

**Opciones Alternativas de Inicio de Sesión:**
- **Enlace Mágico**: Haz clic en "Usar Enlace Mágico" para recibir un enlace de inicio de sesión único por correo
- **Inicio con Contraseña**: Ingresa tu contraseña directamente

### Proceso de Inicio de Sesión en Dos Pasos

Genkō usa un inicio de sesión en dos pasos para mayor seguridad:

1. **Paso 1 - Verificación de Correo**: Ingresa tu correo para ver con qué organizaciones estás asociado
2. **Paso 2 - Selección de Organización**: Elige en qué organización iniciar sesión (si tienes múltiples) y autentica

---

## 3. El Asistente de Incorporación

Después de tu primer inicio de sesión, verás el **Asistente de Incorporación** en tu panel. Este te guía a través de los pasos esenciales de configuración.

### Progreso de Incorporación

El asistente rastrea tu progreso y muestra:
- ✅ Pasos completados (marcas de verificación verdes)
- ⏳ Pasos pendientes (iconos grises)
- Porcentaje de progreso en la parte superior

### Pasos de Incorporación

1. **Bienvenida** ✅
   - Se completa automáticamente en el primer inicio de sesión
   - Te presenta la plataforma

2. **Completar Tu Perfil**
   - Agrega la información de contacto de tu clínica
   - Sube tu logo
   - Establece tu dirección comercial
   - Ubicación: Configuración → Perfil de Negocio

3. **Agregar Tu Primer Paciente**
   - Crea o importa registros de pacientes
   - Esencial para programar citas
   - Ubicación: Sección de Pacientes

4. **Invitar a Tu Equipo** (Solo Admin)
   - Agrega miembros del personal para colaborar
   - Asigna roles apropiados
   - Ubicación: Sección de Personal

5. **Programar una Cita**
   - Reserva tu primera cita de paciente
   - Prueba el flujo de programación
   - Ubicación: Sección de Programación

### Completar la Incorporación

- Haz clic en cualquier paso incompleto para navegar directamente a esa sección
- Completa acciones en esa sección para marcar el paso como hecho
- Una vez que todos los pasos estén completos, el asistente muestra un mensaje de celebración
- Puedes descartar el asistente en cualquier momento usando "Omitir por ahora"

---

## 4. Entender el Diseño del Admin

Después de iniciar sesión, verás la interfaz principal de administración:

### Barra Lateral de Navegación (Izquierda)

La barra lateral contiene todos los elementos principales de navegación organizados en secciones:

**Operaciones:**
- 🏠 **Panel** - Vista general y estadísticas rápidas
- 👥 **Pacientes** - Gestión de pacientes
- 📅 **Programación** - Calendario y citas
- 📊 **Análisis** - Informes y métricas

**Comunicación:**
- 💬 **Mensajes** - Conversaciones con pacientes
- 📋 **Prospectos** - Seguimiento de pacientes potenciales

**Gestión:**
- 👨‍⚕️ **Personal** - Gestión del equipo
- 🏢 **Perfil de Negocio** - Configuración de la organización
- ⚙️ **Configuración** - Configuración del sistema
- 💳 **Facturación** - Gestión de suscripción (Solo propietarios de cuenta)

### Barra de Encabezado (Superior)

- **Alternar Barra Lateral**: Contraer/expandir la barra lateral
- **Búsqueda Global**: Buscar pacientes, citas y configuración (Ctrl/Cmd + K)
- **Notificaciones**: Ver alertas y actualizaciones
- **Menú de Usuario**: Configuración de perfil, tema, idioma y cerrar sesión

### Opciones del Menú de Usuario

Haz clic en tu avatar en la esquina superior derecha para acceder a:
- **Selector de Tema**: Alternar entre modo claro/oscuro
- **Selector de Idioma**: Cambiar idioma de la interfaz (Inglés, Español, Japonés)
- **Selector de Densidad**: Ajustar espaciado de la interfaz
- **Configuración de Cuenta**: Configuración de perfil personal
- **Gestión de Equipo**: Enlace rápido a la sección de personal (Solo Admin)
- **Cerrar Sesión**: Salir de tu cuenta

---

## 5. Idioma y Localización

Genkō soporta múltiples idiomas:
- 🇺🇸 Inglés
- 🇲🇽 Español
- 🇯🇵 Japonés (日本語)

### Cambiar Idioma

1. Haz clic en tu avatar en la esquina superior derecha
2. Encuentra la sección de **Idioma** en el menú desplegable
3. Haz clic en tu idioma preferido
4. La interfaz se actualizará inmediatamente

---

## 6. Tema y Configuración de Pantalla

### Modo Oscuro

Alterna entre modo claro y oscuro:
1. Haz clic en tu avatar en la esquina superior derecha
2. Encuentra la sección de **Tema**
3. Elige: Sistema, Claro u Oscuro

### Densidad de la Interfaz

Ajusta qué tan compacta aparece la interfaz:
1. Haz clic en tu avatar en la esquina superior derecha
2. Encuentra la sección de **Densidad**
3. Elige: Compacto, Cómodo o Espacioso

---

## Próximos Pasos

Una vez que hayas completado la configuración inicial:

1. ➡️ [Configura tu Perfil de Negocio](./03-perfil-de-negocio.md)
2. ➡️ [Agrega tus primeros pacientes](./04-gestion-de-pacientes.md)
3. ➡️ [Configura tu horario](./06-programacion.md)

---

## Solución de Problemas Comunes

### "El correo electrónico ya está en uso"
- Este correo ya está registrado
- Intenta iniciar sesión en su lugar, o usa un correo diferente

### "La URL de la organización no está disponible"
- Alguien más ha reclamado esta URL
- Intenta agregar un sufijo de ubicación (ej., `mi-clinica-cdmx`)

### "La contraseña debe tener al menos 8 caracteres"
- Elige una contraseña más larga
- Incluye una mezcla de letras, números y símbolos para seguridad

### No recibí el correo de verificación
- Revisa tu carpeta de spam/correo no deseado
- Asegúrate de haber ingresado la dirección de correo correcta
- Usa la opción "Olvidé mi contraseña" para reenviar

---

*Continuar a [Vista General del Panel →](./02-panel-de-control.md)*
