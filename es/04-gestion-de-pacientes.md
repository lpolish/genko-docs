# Gestión de Pacientes

La gestión de pacientes está en el centro de Genkō. Esta sección cubre todo lo que necesitas saber sobre agregar, gestionar y organizar tus registros de pacientes.

---

## Acceder a Pacientes

1. Haz clic en **Pacientes** en la barra lateral
2. O usa la acción rápida "Agregar Paciente" desde el panel de control
3. URL: `/admin/patients`

---

## Página de Vista General de Pacientes

La página de Pacientes muestra:
- **Encabezado**: Título de la página y botones de acción
- **Búsqueda y Filtros**: Encuentra pacientes rápidamente
- **Lista de Pacientes**: Vista de tabla/tarjeta de todos los pacientes
- **Paginación**: Navega a través de listas grandes de pacientes

---

## Agregar Pacientes

### Método 1: Entrada Manual

1. Haz clic en el botón **Agregar Paciente** (icono +)
2. Completa el formulario del paciente
3. Haz clic en **Guardar**

#### Campos del Formulario de Paciente

**Información Básica (Requerida):**
| Campo | Descripción |
|-------|-------------|
| Nombre | Nombre del paciente |
| Apellido | Apellido del paciente |
| Fecha de Nacimiento | Fecha de nacimiento para cálculo de edad |

**Información de Contacto (Recomendada):**
| Campo | Descripción |
|-------|-------------|
| Correo Electrónico | Dirección de correo del paciente |
| Teléfono | Número de contacto principal |
| Dirección | Dirección del domicilio |

**Información Médica:**
| Campo | Descripción |
|-------|-------------|
| Número de Expediente Médico | Identificador único (auto-generado si está en blanco) |
| Tipo de Sangre | A+, A-, B+, B-, AB+, AB-, O+, O- |
| Género | Masculino, Femenino, Otro, Prefiero no decir |
| Idioma Preferido | Preferencia de idioma para comunicación |

**Información de Estilo de Vida:**
| Campo | Descripción |
|-------|-------------|
| Estado de Tabaquismo | Nunca, Exfumador, Actual |
| Consumo de Alcohol | Ninguno, Ocasional, Moderado, Frecuente |

**Información de Seguro:**
| Campo | Descripción |
|-------|-------------|
| Proveedor de Seguro | Nombre de la compañía de seguros |
| Número de Póliza | Número de póliza de seguro |
| Número de Grupo | Número de grupo (si aplica) |

---

### Método 2: Importación CSV

Para importaciones masivas de pacientes:

1. Haz clic en el botón **Importar Pacientes**
2. Descarga el archivo de plantilla (opcional)
3. Arrastra y suelta tu archivo CSV o navega para seleccionar
4. Revisa la vista previa
5. Elige el manejo de duplicados:
   - **Omitir duplicados**: Ignorar pacientes existentes
   - **Actualizar duplicados**: Sobrescribir con nuevos datos
6. Haz clic en **Iniciar Importación**

#### Columnas de la Plantilla CSV

| Columna | Requerido | Descripción |
|---------|-----------|-------------|
| first_name | Sí | Nombre del paciente |
| last_name | Sí | Apellido del paciente |
| date_of_birth | Sí | Formato: AAAA-MM-DD |
| email | No | Dirección de correo |
| phone | No | Número de teléfono |
| medical_record_number | No | NEM existente |
| gender | No | male, female, other |
| blood_type | No | Códigos estándar de tipo de sangre |
| address | No | Dirección completa |
| insurance_provider | No | Nombre de la compañía de seguros |
| policy_number | No | Número de póliza de seguro |

**Consejos de Importación:**
- Limpia tus datos antes de importar
- Usa formatos de fecha consistentes (AAAA-MM-DD)
- Elimina caracteres especiales de los números de teléfono
- Asegúrate de que los identificadores únicos sean realmente únicos

---

## Búsqueda y Filtrado

### Búsqueda Rápida
- Escribe en el cuadro de búsqueda para encontrar pacientes
- Busca en: Nombre, Correo, Teléfono, NEM

### Filtros Avanzados
Haz clic en **Filtros Avanzados** para filtrar por:
- Estado Activo/Inactivo
- Género
- Rango de edad
- Proveedor de seguro
- Proveedor primario
- Fecha de última visita

---

## Ver Detalles del Paciente

Haz clic en cualquier paciente para ver su perfil completo:

### Pestañas del Perfil del Paciente

#### 1. Pestaña Resumen
- Datos demográficos básicos
- Información de contacto
- Proveedor primario
- Detalles del seguro
- Estadísticas rápidas (condiciones, medicamentos, etc.)

#### 2. Pestaña Historial Médico
- **Condiciones**: Diagnósticos activos e históricos
- **Alergias**: Alérgeno, severidad, reacción
- **Medicamentos**: Medicamentos actuales y pasados
- **Signos Vitales**: Historial de signos vitales

#### 3. Pestaña Citas
- Citas pasadas
- Próximas citas
- Botón de programación rápida

#### 4. Pestaña Documentos
- Archivos subidos
- Resultados de laboratorio
- Cartas de referencia
- Documentos de seguro

#### 5. Pestaña Contactos de Emergencia
- Contacto de emergencia primario
- Contactos adicionales
- Relación y números de teléfono

---

## Editar Información del Paciente

1. Haz clic en la fila del paciente para abrir detalles
2. Haz clic en el botón **Editar** en el menú desplegable
3. Realiza cambios en el formulario
4. Haz clic en **Guardar**

**Secciones Editables:**
- Información básica
- Detalles de contacto
- Información médica
- Detalles del seguro
- Contactos de emergencia

---

## Gestionar Registros Médicos

### Agregar Alergias

1. Abre los detalles del paciente
2. Ve a la pestaña Historial Médico
3. Haz clic en **Agregar Alergia**
4. Ingresa:
   - Nombre del alérgeno
   - Severidad (Leve, Moderada, Severa)
   - Tipo de reacción
5. Haz clic en **Guardar**

### Agregar Condiciones

1. Abre los detalles del paciente
2. Ve a la pestaña Historial Médico
3. Haz clic en **Agregar Condición**
4. Ingresa:
   - Nombre de la condición
   - Código ICD (opcional)
   - Estado (Activa, Resuelta, Crónica)
   - Severidad
   - Fecha de inicio
5. Haz clic en **Guardar**

### Agregar Medicamentos

1. Abre los detalles del paciente
2. Ve a la pestaña Historial Médico
3. Haz clic en **Agregar Medicamento**
4. Ingresa:
   - Nombre del medicamento
   - Dosis
   - Frecuencia
   - Fecha de inicio
   - Estado (Activo, Descontinuado)
5. Haz clic en **Guardar**

---

## Acciones Masivas

Selecciona múltiples pacientes para realizar acciones masivas:

### Cómo Seleccionar Pacientes

1. Marca la casilla junto a los nombres de los pacientes
2. O haz clic en "Seleccionar Todo" en el encabezado
3. La barra de acciones masivas aparece automáticamente

### Acciones Masivas Disponibles

| Acción | Descripción |
|--------|-------------|
| **Activar** | Establecer pacientes seleccionados como activos |
| **Desactivar** | Establecer pacientes seleccionados como inactivos |
| **Eliminar** | Eliminar pacientes permanentemente |
| **Exportar** | Descargar datos de pacientes seleccionados |

**Precaución:** Las acciones de eliminación no se pueden deshacer. Los datos del paciente se eliminarán permanentemente.

---

## Programar desde la Vista del Paciente

Programa rápidamente una cita desde el perfil de un paciente:

1. Haz clic en la fila del paciente para ver detalles
2. Haz clic en el icono de **Calendario** en las acciones
3. O navega al perfil del paciente y haz clic en **Programar Cita**
4. Completa el formulario de cita
5. Haz clic en **Guardar**

---

## Estado del Paciente

Los pacientes pueden tener dos tipos de estado:

| Estado | Descripción | Impacto |
|--------|-------------|---------|
| **Activo** | Actualmente recibiendo atención | Aparece en todas las listas |
| **Inactivo** | No activo actualmente | Oculto por defecto |

### Desactivar un Paciente

1. Abre el perfil del paciente
2. Haz clic en el menú desplegable (⋮)
3. Selecciona **Desactivar**
4. Confirma la acción

### Ver Pacientes Inactivos

1. Ve a la página de Pacientes
2. Haz clic en Filtros Avanzados
3. Cambia Estado a "Inactivo" o "Todos"

---

## Mejores Prácticas

### Calidad de Datos
1. Siempre verifica la información del paciente al registrarse
2. Mantén la información de contacto actualizada
3. Usa formato consistente para direcciones y teléfonos
4. Registra alergias y medicamentos con precisión

### Privacidad y Seguridad
1. Solo accede a registros de pacientes cuando sea necesario
2. Nunca compartas datos de pacientes fuera de la plataforma
3. Cierra sesión al dejar estaciones de trabajo
4. Reporta cualquier acceso sospechoso inmediatamente

### Organización
1. Usa números de expediente médico consistentemente
2. Asigna proveedores primarios a todos los pacientes
3. Completa información del seguro para facturación
4. Mantén contactos de emergencia actualizados

---

## Solución de Problemas

### El Paciente No Aparece en la Búsqueda
- Verifica si el paciente está configurado como "Inactivo"
- Intenta buscar por un campo diferente (correo, teléfono)
- Verifica que el paciente se guardó exitosamente

### Pacientes Duplicados
- Busca al paciente antes de crear un nuevo registro
- Usa la función de detección de duplicados en la importación CSV
- Fusiona duplicados contactando a soporte

### Errores de Importación
- Verifica el formato de fecha (AAAA-MM-DD requerido)
- Asegúrate de que los campos requeridos estén presentes
- Elimina caracteres especiales de los datos
- Verifica la codificación del archivo (UTF-8 recomendado)

---

## Acceso Basado en Roles

Diferentes roles tienen diferente acceso a pacientes:

| Rol | Ver | Editar | Eliminar |
|-----|-----|--------|----------|
| Admin | ✅ Todos | ✅ Todos | ✅ Todos |
| Proveedor | ✅ Todos | ✅ Asignados | ❌ |
| Enfermero | ✅ Todos | ✅ Limitado | ❌ |
| Personal | ✅ Básico | ❌ | ❌ |

---

*Anterior: [Perfil de Negocio](./03-perfil-de-negocio.md) | Siguiente: [Gestión de Personal →](./05-gestion-de-personal.md)*
