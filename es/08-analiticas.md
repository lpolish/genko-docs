# Panel de Análisis

El Panel de Análisis proporciona información integral sobre el rendimiento de tu clínica. Rastrea ingresos, reclamaciones, pagos e indicadores clave de rendimiento (KPIs).

---

## Acceder a Análisis

1. Haz clic en **Análisis** en la barra lateral
2. URL: `/admin/analytics`

---

## Vista General del Panel

La página de Análisis contiene:
- **Encabezado**: Título y botones de acción
- **Filtros**: Rango de fechas y tipo de reporte
- **Tarjetas de KPI**: Métricas clave de un vistazo
- **Gráficos**: Representaciones visuales de datos
- **Reportes Detallados**: Secciones de análisis en pestañas

---

## Filtros y Controles

### Selección de Rango de Fechas

Establece el período de análisis:

| Campo | Descripción |
|-------|-------------|
| Fecha de Inicio | Inicio del período de análisis |
| Fecha de Fin | Fin del período de análisis |

**Rangos de Fechas Rápidos:**
- Últimos 7 días
- Últimos 30 días
- Últimos 90 días
- Este mes
- Este trimestre
- Rango personalizado

### Tipo de Reporte

Elige el tipo de análisis:

| Tipo de Reporte | Muestra |
|-----------------|---------|
| **Panel Completo** | Todas las métricas y gráficos |
| **Resumen de Ingresos** | Datos enfocados en ingresos |
| **Análisis de Reclamaciones** | Detalles de reclamaciones de seguros |
| **Análisis de Pagos** | Seguimiento de pagos |

### Aplicar y Refrescar

- Haz clic en **Aplicar Filtros** para actualizar datos
- Haz clic en **Refrescar** (🔄) para recargar la vista actual
- Haz clic en **Exportar** (📥) para descargar reportes

---

## Tarjetas de KPI

Cuatro tarjetas de métricas clave se muestran en la parte superior:

### 1. Ingresos Totales
- **Valor**: Ingresos totales para el período seleccionado
- **Icono**: 💵 Signo de dólar
- **Tendencia**: Indicador arriba/abajo
- **Color**: Verde

### 2. Total de Reclamaciones
- **Valor**: Número de reclamaciones enviadas
- **Icono**: 📄 Documento
- **Tendencia**: Indicador neutral
- **Color**: Azul

### 3. Ratio de Reclamaciones Pagadas
- **Valor**: Porcentaje de reclamaciones pagadas
- **Icono**: ✅ Marca de verificación
- **Tendencia**: Arriba (>80%) o Abajo
- **Color**: Verde o Rojo

### 4. Reclamaciones Pendientes
- **Valor**: Reclamaciones esperando procesamiento
- **Icono**: ⏰ Reloj
- **Tendencia**: Neutral
- **Color**: Amarillo

---

## Pestañas de Análisis

### Pestaña Resumen

La vista por defecto muestra:

**Gráfico de Ingresos:**
- Tendencias mensuales de ingresos
- Visualización de gráfico de líneas o barras
- Comparación con períodos anteriores

**Análisis de Reclamaciones:**
- Reclamaciones por estado (gráfico circular)
- Desglose de Aprobadas, Denegadas, Pendientes
- Promedios de tiempo de procesamiento

**Principales Pagadores:**
- Lista clasificada de pagadores de seguros
- Montos de pago
- Porcentaje del ingreso total

---

### Pestaña Ingresos

Análisis detallado de ingresos:

**Gráfico de Tendencia de Ingresos:**
- Desglose mensual/trimestral
- Ingresos a lo largo del tiempo
- Comparación con objetivos

**Ingresos por Fuente:**
- Pagos de seguros
- Pagos de pacientes
- Otros ingresos

**Métricas de Ingresos:**
| Métrica | Descripción |
|---------|-------------|
| Ingresos Totales | Ingresos brutos |
| Promedio por Visita | Ingreso por cita |
| Tasa de Cobranza | Porcentaje de facturado cobrado |

---

### Pestaña Reclamaciones

Análisis de reclamaciones de seguros:

**Resumen de Estado de Reclamaciones:**
| Estado | Descripción |
|--------|-------------|
| Aprobadas | Reclamaciones pagadas por el seguro |
| Denegadas | Reclamaciones rechazadas |
| Pendientes | Bajo revisión |
| Apeladas | Denegación siendo contestada |

**Gráfico de Análisis de Reclamaciones:**
- Distribución de estados (gráfico circular)
- Reclamaciones por pagador (gráfico de barras)
- Tendencias de tasa de denegación

**Métricas de Reclamaciones:**
| Métrica | Descripción |
|---------|-------------|
| Total de Reclamaciones | Número de reclamaciones |
| Tasa de Aprobación | Porcentaje aprobado |
| Tiempo Promedio de Procesamiento | Días hasta resolución |
| Tasa de Denegación | Porcentaje denegado |

---

### Pestaña Pagos

Seguimiento y análisis de pagos:

**Fuentes de Pago:**
| Fuente | Descripción |
|--------|-------------|
| Seguro | Pagador tercero |
| Auto-Pago | Pago directo del paciente |
| Efectivo | Efectivo en consultorio |
| Tarjeta | Tarjeta de crédito/débito |

**Métodos de Pago:**
- Efectivo
- Tarjeta de Crédito
- Tarjeta de Débito
- Transferencia Bancaria
- Cheque

**Pagos Recientes:**
- Lista de últimas transacciones de pago
- Monto, fuente, método, estado
- Vista rápida de actividad de pagos

**Métricas de Pagos:**
| Métrica | Descripción |
|---------|-------------|
| Total de Pagos | Suma de todos los pagos |
| Conteo de Pagos | Número de transacciones |
| Pago Promedio | Monto promedio de pago |

---

## Indicadores Clave de Rendimiento (KPIs)

### Sección de KPIs

Muestra los KPIs configurados para tu práctica:

| KPI | Descripción | Objetivo |
|-----|-------------|----------|
| Tasa de Cobranza | % de facturado cobrado | 95% |
| Tasa de Denegación | % de reclamaciones denegadas | <5% |
| Días en CxC | Días promedio hasta cobro | <30 |
| Volumen de Pacientes | Pacientes por mes | Varía |
| Ingreso por Visita | Ingreso promedio por cita | Varía |

### Visualización de Tarjetas de KPI

Cada KPI muestra:
- Nombre del KPI
- Insignia de categoría
- Descripción
- Valor objetivo (si está establecido)
- Valor actual (cuando se calcula)
- Estado de alerta

---

## Gráficos y Visualizaciones

### Tipos de Gráficos Usados

| Tipo de Gráfico | Usado Para |
|-----------------|------------|
| Gráfico de Líneas | Tendencias a lo largo del tiempo |
| Gráfico de Barras | Comparaciones de categorías |
| Gráfico Circular | Desglose de distribución |
| Gráfico de Área | Volumen a lo largo del tiempo |

### Interacciones de Gráficos

- **Pasar el Cursor**: Ver detalles del punto de datos
- **Clic en Leyenda**: Alternar series de datos
- **Zoom**: Desplazar para ajustar rango de fechas
- **Exportar**: Descargar imagen del gráfico

---

## Exportar Datos

### Opciones de Exportación

1. Haz clic en el botón **Exportar**
2. Elige formato:
   - Reporte PDF
   - Hoja de Cálculo Excel
   - Datos CSV

### Qué Se Incluye

| Tipo de Reporte | Contenido |
|-----------------|-----------|
| Panel Completo | Todas las métricas y gráficos |
| Reporte de Ingresos | Datos y tendencias de ingresos |
| Reporte de Reclamaciones | Datos de análisis de reclamaciones |
| Reporte de Pagos | Transacciones de pagos |

---

## Actualización de Datos

### Actualización Automática

- Los datos se actualizan cuando cambias filtros
- Actualizaciones en tiempo real para métricas críticas
- Los datos en caché pueden tener hasta 15 minutos de antigüedad

### Actualización Manual

1. Haz clic en el botón **Refrescar** (🔄)
2. Espera a que los datos se recarguen
3. El indicador "Refrescando" muestra actualización en progreso

---

## Metadatos del Reporte

En la parte inferior del panel:

**Información del Reporte:**
- Marca de tiempo de generación
- Rango de fechas cubierto
- Tipo de reporte
- Hora de última actualización

---

## Entender Tus Métricas

### Indicadores de Salud de Ingresos

| Métrica | Bueno | Advertencia | Acción Necesaria |
|---------|-------|-------------|------------------|
| Tasa de Cobranza | >95% | 85-95% | <85% |
| Tasa de Denegación | <5% | 5-10% | >10% |
| Días en CxC | <30 | 30-45 | >45 |

### Mejorar Métricas

**Baja Tasa de Cobranza:**
- Revisa procedimientos de facturación
- Da seguimiento a saldos pendientes
- Verifica información del seguro por adelantado

**Alta Tasa de Denegación:**
- Audita razones comunes de denegación
- Entrena al personal en codificación apropiada
- Verifica elegibilidad antes del servicio

**Altos Días en CxC:**
- Mejora procedimientos de seguimiento
- Envía reclamaciones prontamente
- Apela denegaciones rápidamente

---

## Mejores Prácticas

### Revisión Regular

1. Revisa el panel diariamente para problemas urgentes
2. Revisa semanalmente para tendencias
3. Profundiza mensualmente para planificación estratégica
4. Compara trimestralmente para patrones estacionales

### Usar Filtros Efectivamente

1. Comienza con rango de fechas amplio para vista general
2. Reduce para investigar problemas
3. Compara períodos similares (mes a mes)
4. Rastrea pagadores o servicios específicos

### Actuar sobre los Datos

1. Establece objetivos para métricas clave
2. Monitorea el progreso regularmente
3. Investiga anomalías inmediatamente
4. Comparte insights con el equipo

---

## Solución de Problemas

### Los Datos No Cargan

- Verifica la conexión a internet
- Verifica que el rango de fechas sea válido
- Intenta un rango de fechas más reducido
- Refresca la página

### Datos Incorrectos

- Verifica la configuración de filtros
- Revisa la precisión de entrada de datos
- Espera la sincronización (máximo 15 min)
- Contacta soporte para discrepancias

### Los Gráficos No Se Muestran

- Prueba un navegador diferente
- Habilita JavaScript
- Limpia la caché del navegador
- Verifica bloqueadores de anuncios

### La Exportación No Funciona

- Verifica la configuración de descarga del navegador
- Permite pop-ups para el sitio
- Prueba un formato diferente
- Reduce el tamaño del rango de fechas

---

## Características del Plan

Las características de análisis varían por plan:

| Característica | Gratis | Inicial | Profesional | Crecimiento |
|----------------|--------|---------|-------------|-------------|
| Panel Básico | ✅ | ✅ | ✅ | ✅ |
| Seguimiento de Ingresos | ❌ | ✅ | ✅ | ✅ |
| Análisis de Reclamaciones | ❌ | ❌ | ✅ | ✅ |
| Análisis de Pagos | ❌ | ❌ | ✅ | ✅ |
| KPIs Personalizados | ❌ | ❌ | ❌ | ✅ |
| Exportación de Datos | ❌ | ✅ | ✅ | ✅ |
| Acceso a API | ❌ | ❌ | ❌ | ✅ |

---

*Anterior: [Mensajes y Gestión de Prospectos](./07-comunicaciones.md) | Siguiente: [Configuración y Ajustes →](./09-configuracion.md)*
