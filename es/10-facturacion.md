---
title: Facturación
layout: default
parent: Español
nav_order: 10
---

# Facturación y Suscripción

La sección de Facturación permite a los propietarios de cuenta gestionar suscripciones, métodos de pago y ver facturas. Solo los propietarios de cuenta tienen acceso a las funciones de facturación.

---

## Acceder a Facturación

1. Haz clic en **Facturación** en la barra lateral
2. URL: `/admin/billing`

**Nota:** Solo los propietarios de cuenta pueden acceder a la sección de Facturación. Si no la ves en tu barra lateral, contacta al propietario de tu organización.

---

## Vista General de Facturación

La página de Facturación muestra:
- **Plan Actual**: Tu suscripción activa
- **Estadísticas de Uso**: Uso de funciones contra límites
- **Método de Pago**: Información de pago guardada
- **Historial de Facturación**: Facturas y transacciones pasadas

---

## Suscripción Actual

### Información del Plan

| Elemento | Descripción |
|----------|-------------|
| Nombre del Plan | Tu plan actual (Inicial, Profesional, etc.) |
| Estado | Activo, Prueba, Atrasado, Cancelado |
| Ciclo de Facturación | Mensual o Anual |
| Precio | Costo mensual/anual |
| Fecha de Renovación | Próxima fecha de facturación |

### Indicadores de Estado del Plan

| Estado | Color de Insignia | Significado |
|--------|-------------------|-------------|
| Activo | 🟢 Verde | La suscripción está al corriente |
| Prueba | 🔵 Azul | En período de prueba |
| Atrasado | 🟡 Amarillo | Problema de pago |
| Cancelado | 🔴 Rojo | Suscripción terminada |

---

## Entender Tu Plan

### Comparación de Planes

| Característica | Gratis | Inicial | Profesional | Crecimiento |
|----------------|--------|---------|-------------|-------------|
| Precio/mes | $0 | $29 | $99 | $249 |
| Miembros del Personal | 1 | 3 | 10 | Ilimitado |
| Pacientes | 10 | Ilimitados | Ilimitados | Ilimitados |
| Citas | 10/mes | Ilimitadas | Ilimitadas | Ilimitadas |
| Telemedicina | ❌ | 5/mes | Ilimitada | Ilimitada |
| Análisis | Básico | Estándar | Avanzado | Avanzado |
| Soporte | Comunidad | Correo | Prioritario | Dedicado |

### Límites de Funciones

Tu uso actual se muestra:

```
Miembros del Personal: 3 de 10 usados
Sesiones de Telemedicina: 12 este mes
Almacenamiento: 2.5 GB de 10 GB usados
```

---

## Cambiar Tu Plan

### Mejorar

1. Haz clic en **Mejorar Plan** o **Cambiar Plan**
2. Revisa los planes disponibles
3. Selecciona el plan deseado
4. Confirma los cambios
5. Los cargos prorrateados aplican inmediatamente

**Al Mejorar:**
- Nuevas funciones disponibles inmediatamente
- Cargo prorrateado por el período de facturación restante
- Los límites más altos aplican instantáneamente

### Degradar

1. Haz clic en **Cambiar Plan**
2. Selecciona plan de nivel inferior
3. Revisa el impacto (funciones que perderás)
4. Confirma la degradación
5. Toma efecto en el próximo ciclo de facturación

**Al Degradar:**
- Las funciones actuales disponibles hasta que termine el período
- Los nuevos límites aplican en el próximo ciclo de facturación
- Sin reembolsos por tiempo no usado
- Los datos que excedan los nuevos límites deben ser abordados

### Cambiar Ciclo de Facturación

Cambia entre facturación mensual y anual:

| Ciclo | Beneficio |
|-------|-----------|
| Mensual | Flexibilidad, paga según uses |
| Anual | ~20% de descuento, precio fijo |

1. Haz clic en **Cambiar Ciclo de Facturación**
2. Revisa el nuevo precio
3. Confirma el cambio
4. El nuevo ciclo aplica en la próxima renovación

---

## Período de Prueba

### Durante la Prueba

- Acceso completo a las funciones del plan seleccionado
- 14 días de duración
- No se requiere pago para comenzar
- Se requiere método de pago antes de que termine la prueba

### Prueba Por Terminar

Recibirás recordatorios:
- 7 días antes de que termine la prueba
- 3 días antes de que termine la prueba
- 1 día antes de que termine la prueba

### Después de Que Termine la Prueba

**Si se agregó método de pago:**
- Conversión automática a suscripción pagada
- Primer cargo procesado
- Sin interrupción del servicio

**Si no hay método de pago:**
- Acceso restringido a funciones del plan Gratis
- Datos preservados por 30 días
- Mejora en cualquier momento para restaurar acceso

---

## Métodos de Pago

### Agregar Método de Pago

1. Haz clic en **Agregar Método de Pago**
2. Ingresa los detalles de la tarjeta:
   - Número de tarjeta
   - Fecha de vencimiento
   - CVC
   - Dirección de facturación
3. Haz clic en **Guardar**

**Métodos de Pago Soportados:**
- Tarjetas de crédito (Visa, Mastercard, Amex, Discover)
- Tarjetas de débito
- Algunas tarjetas internacionales

### Gestionar Métodos de Pago

**Establecer como Predeterminado:**
- Haz clic en **Hacer Predeterminado** en la tarjeta
- La tarjeta predeterminada se usa para todos los cargos

**Eliminar Método de Pago:**
- Haz clic en **Eliminar**
- Debe haber al menos un método para planes de pago
- No se puede eliminar si hay cargos pendientes

### Actualizar Información de Pago

1. Haz clic en **Editar** en el método de pago
2. Actualiza la dirección de facturación
3. Para actualizaciones de tarjeta, elimina la antigua y agrega nueva

---

## Facturas y Recibos

### Ver Facturas

Todas las facturas pasadas están listadas:

| Columna | Descripción |
|---------|-------------|
| Fecha | Fecha de la factura |
| Factura # | Número único de factura |
| Monto | Total cobrado |
| Estado | Pagada, Pendiente, Fallida |
| Acciones | Ver, Descargar |

### Descargar Facturas

1. Encuentra la factura en la lista
2. Haz clic en **Descargar** (📥)
3. El PDF se descarga automáticamente

### Detalles de la Factura

Haz clic en una factura para ver:
- Líneas de detalle
- Impuestos aplicados
- Método de pago usado
- ID de transacción

---

## Monitoreo de Uso

### Uso en Tiempo Real

Rastrea tu uso contra los límites del plan:

**Miembros del Personal:**
```
Actual: 5
Límite: 10
Estado: ✅ Dentro del límite
```

**Citas Mensuales:**
```
Actual: 142
Límite: Ilimitadas
Estado: ✅ Sin límite
```

**Sesiones de Telemedicina:**
```
Actual: 23
Límite: 30
Estado: ⚠️ Acercándose al límite
```

### Alertas de Uso

Recibirás alertas cuando:
- Te acerques al 80% de un límite
- Estés al 100% de un límite
- Excedas un límite

---

## Violaciones de Límites

### Cuando Excedes los Límites

Si excedes los límites de tu plan:

1. **Banner de Advertencia**: Aparece en páginas afectadas
2. **Restricciones de Funciones**: Algunas funciones pueden estar limitadas
3. **Período de Gracia**: Breve período para abordar el problema
4. **Opciones de Resolución**:
   - Mejora tu plan
   - Reduce el uso
   - Contacta soporte

### Resolver Violaciones

**Opción 1: Mejorar Plan**
- Haz clic en **Mejorar** en el banner de advertencia
- Selecciona plan con límites más altos
- Las restricciones se eliminan inmediatamente

**Opción 2: Reducir Uso**
- Desactiva cuentas de personal no usadas
- Archiva datos antiguos
- Espera al próximo ciclo de facturación

---

## Cancelación

### Cancelar Tu Suscripción

1. Haz clic en **Cancelar Suscripción**
2. Selecciona razón de cancelación
3. Revisa lo que perderás
4. Confirma la cancelación

### Después de la Cancelación

- El acceso continúa hasta que termine el período de facturación
- Sin cargos adicionales
- Datos preservados por 30 días
- Puedes reactivar en cualquier momento

### Reactivar

1. Ve a la página de Facturación
2. Haz clic en **Reactivar Suscripción**
3. Selecciona plan
4. Agrega/confirma método de pago
5. Suscripción restaurada

---

## Soporte de Facturación

### Problemas Comunes

**Pago Fallido:**
1. Verifica la fecha de vencimiento de la tarjeta
2. Verifica la dirección de facturación
3. Contacta a tu banco
4. Prueba una tarjeta diferente

**Cargo Inesperado:**
1. Revisa los detalles de la factura
2. Verifica cargos prorrateados
3. Contacta soporte si no está claro

**Solicitud de Reembolso:**
- Contacta soporte dentro de 30 días
- Proporciona número de factura
- Explica la situación

### Contactar Soporte de Facturación

1. Haz clic en **Contactar Soporte** en la página de Facturación
2. O envía correo a billing@genko.app
3. Incluye el nombre de tu organización y números de factura

---

## Mejores Prácticas

### Gestionar Costos

1. Elige facturación anual para ahorros
2. Ajusta tu plan a las necesidades reales
3. Desactiva cuentas de personal no usadas
4. Monitorea el uso regularmente

### Seguridad de Pagos

1. Mantén el método de pago actualizado
2. Actualiza antes del vencimiento
3. Monitorea correos de facturas
4. Reporta cargos sospechosos inmediatamente

### Planificar para el Crecimiento

1. Rastrea tendencias de uso
2. Mejora antes de alcanzar límites
3. Presupuesta para equipo en crecimiento
4. Considera planes anuales para estabilidad

---

## Solución de Problemas

### No Puedo Acceder a Facturación

- Solo los propietarios de cuenta pueden acceder
- Contacta al propietario de tu organización
- Verifica tu rol de cuenta

### El Pago No Se Procesa

- Verifica los detalles de la tarjeta
- Verifica fondos suficientes
- Prueba una tarjeta diferente
- Contacta a tu banco

### Factura No Recibida

- Revisa la carpeta de spam
- Verifica la dirección de correo en configuración
- Descarga desde la página de Facturación

### El Cambio de Plan No Se Aplicó

- Verifica la fecha efectiva
- Los cambios pueden aplicar el próximo ciclo
- Contacta soporte para necesidades urgentes

---

## Seguridad y Cumplimiento

### Seguridad de Pagos

- Todos los pagos procesados vía Stripe
- Cumplimiento PCI-DSS
- Números de tarjeta nunca almacenados en nuestros servidores
- Transmisión encriptada

### Protección de Datos

- La información de facturación es privada
- Solo los propietarios de cuenta acceden a facturación
- Registros de auditoría mantenidos
- Manejo de datos compatible con HIPAA

---

*Anterior: [Configuración y Ajustes](./09-configuracion.md) | Siguiente: [Guía de Referencia Rápida →](./11-referencia-rapida.md)*
