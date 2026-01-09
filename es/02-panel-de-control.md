# Vista General del Panel de Control

El Panel de Control es tu centro de comando en Genkō. Proporciona una vista rápida de las operaciones diarias de tu clínica y métricas importantes.

---

## Acceder al Panel de Control

- El Panel de Control es tu página de inicio por defecto después de iniciar sesión
- Haz clic en **Panel** en la barra lateral o en el icono de Inicio en las migas de pan para regresar en cualquier momento
- URL: `/admin/dashboard`

---

## Secciones del Panel de Control

### 1. Encabezado de Saludo

En la parte superior del panel de control, verás:
- **Saludo personalizado**: "Buenos días/tardes/noches, [Tu Nombre]"
- **Fecha de hoy**: Formateada según tu configuración regional (ej., "Lunes, 9 de Enero")
- **Nombre de la organización**: El nombre de tu clínica mostrado en la esquina

---

### 2. Asistente de Incorporación (Nuevos Usuarios)

Si no has completado la incorporación, verás el banner del **Asistente de Incorporación**:

- Muestra tu porcentaje de progreso de configuración
- Lista los pasos de configuración completados y pendientes
- Haz clic en cualquier paso para navegar directamente a esa sección
- Se puede expandir/contraer y descartar cuando esté completo

**Pasos de Incorporación:**
1. Bienvenida (auto-completado)
2. Completar tu perfil
3. Agregar tu primer paciente
4. Invitar a tu equipo
5. Programar una cita

---

### 3. Alertas Urgentes (Cuando Aplique)

Si hay elementos críticos que requieren atención, aparecen en un cuadro de alerta rojo:
- Citas vencidas
- Licencias por expirar
- Problemas de pago
- Actualizaciones críticas de pacientes

Haz clic en cualquier alerta para abordar el problema directamente.

---

### 4. Tarjetas de Estadísticas Rápidas

Tres métricas clave se muestran como tarjetas clickeables:

| Métrica | Descripción | Acción al Clic |
|---------|-------------|----------------|
| **Total de Pacientes** | Número de pacientes registrados | Abre la página de Pacientes |
| **Citas de Hoy** | Citas programadas para hoy | Abre la página de Programación |
| **Sesiones de Telemedicina** | Consultas por video hoy | Abre la pestaña de Telemedicina |

Cada tarjeta muestra:
- Conteo/valor actual
- Icono visual
- Efecto hover para interactividad

---

### 5. Agenda del Día

El área de contenido principal muestra tu agenda diaria:

#### Cuando Hay Citas:
- Lista de próximas citas para hoy
- Nombre del paciente
- Hora de la cita
- Tipo de cita (Regular/Seguimiento)
- Insignia de estado (Programada, Confirmada, En Progreso, Completada, Cancelada)

#### Cuando No Hay Citas:
- Mensaje amigable: "No hay citas programadas"
- Botón de acción rápida: **"Crear Tu Primera Cita"**

**Acciones de la Agenda:**
- Haz clic en **"Ver Todo"** para ir a la página completa de Programación
- Haz clic en cualquier cita para ver detalles

---

### 6. Panel de Acciones Rápidas

Un panel lateral con atajos a tareas comunes:

| Acción | Descripción |
|--------|-------------|
| **Agregar Paciente** | Abre el formulario de nuevo paciente |
| **Programar Cita** | Abre el modal de nueva cita |
| **Iniciar Telemedicina** | Abre el panel de telemedicina |

Cada acción incluye:
- Icono claro
- Título
- Breve descripción
- Animación al pasar el cursor

---

### 7. Alertas Informativas

Notificaciones no urgentes aparecen en una sección separada:
- Actualizaciones del sistema
- Recordatorios de renovación de licencias
- Anuncios de funciones
- Consejos y sugerencias

Codificadas por color según tipo:
- 🟡 Borde amarillo: Advertencias
- 🔵 Borde azul: Información

---

### 8. Banner de Completación de Perfil

En la parte inferior, puede aparecer un **Banner de Completación de Perfil** si tu perfil de negocio necesita atención:

- Muestra el porcentaje de completación del perfil
- Lista la información faltante
- Enlace directo para completar tu perfil de negocio
- Desaparece una vez que el perfil esté completo

---

## Consejos del Panel de Control

### Mejores Prácticas

1. **Revisar Diariamente**: Comienza cada día revisando tu panel de control
2. **Atender Alertas**: Maneja las alertas urgentes inmediatamente
3. **Completar Perfil**: Un perfil completo mejora la confianza del paciente
4. **Usar Acciones Rápidas**: Ahorra tiempo con atajos de un clic

### Personalización

El panel de control se adapta según:
- Tu rol (Admin ve más opciones que Personal)
- La configuración de tu organización
- Fecha y hora actual
- Tu preferencia de idioma/configuración regional

---

## Navegación desde el Panel de Control

Desde el panel de control, puedes acceder rápidamente a:

| Destino | Cómo Acceder |
|---------|--------------|
| Pacientes | Clic en tarjeta "Total de Pacientes" o barra lateral |
| Programación | Clic en tarjeta "Citas de Hoy" o barra lateral |
| Telemedicina | Clic en tarjeta "Sesiones de Telemedicina" |
| Agregar Paciente | Clic en acción rápida "Agregar Paciente" |
| Nueva Cita | Clic en acción rápida "Programar Cita" |
| Perfil de Negocio | Clic en banner de completación de perfil |

---

## Vista Móvil

En dispositivos móviles, el panel de control se adapta:
- Las tarjetas se apilan verticalmente
- La barra lateral se convierte en un menú hamburguesa
- Las acciones rápidas permanecen accesibles
- La agenda muestra vista condensada

Accede a la barra lateral tocando el icono de menú **☰** en la esquina superior izquierda.

---

## Solución de Problemas

### El Panel de Control No Carga
1. Verifica tu conexión a internet
2. Intenta refrescar la página (F5 o Ctrl/Cmd + R)
3. Limpia la caché del navegador
4. Contacta soporte si el problema persiste

### Datos Faltantes
- Si las estadísticas muestran "0" inesperadamente, los datos pueden estar cargando aún
- Espera unos segundos para que la página cargue completamente
- Verifica que estés viendo la organización correcta (si tienes múltiples)

### Las Alertas No Se Descartan
- Algunas alertas requieren acción para descartarse
- Haz clic en la alerta para abordar el problema subyacente
- Una vez resuelto, la alerta desaparecerá automáticamente

---

*Anterior: [Primeros Pasos](./01-primeros-pasos.md) | Siguiente: [Gestión del Perfil de Negocio →](./03-perfil-de-negocio.md)*
