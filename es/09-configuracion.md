---
title: Configuración, IA y API
layout: default
nav_order: 9
parent: Español
---

# Configuración, IA y API

Settings es donde owners y admins definen cómo se comporta Genkō para toda la práctica. También es donde se configuran las funciones avanzadas de IA y la API MCP.

---

## Qué vive en Settings

Las áreas más importantes suelen incluir:

- **Practice profile** para los datos de la organización
- **Services** para tipos de cita y duraciones
- **Members** para invitaciones y roles
- **Portal** para la reserva de autoservicio
- **Integrations** para Google Calendar, claves API y controles de IA
- **Billing** para gestionar el plan

Buena parte de la configuración operativa termina pasando por Settings, incluso si las acciones del día a día ocurren en otras páginas.

---

## Asistente de IA del dashboard

En planes **Practice** y superiores, Genkō puede mostrar un asistente de IA integrado directamente en el dashboard.

Cuando está activado:

- Aparece un widget flotante de chat en el dashboard
- Solo owners y admins pueden usarlo
- El asistente puede responder preguntas operativas y tomar acciones usando la misma capa interna de herramientas que impulsa otros flujos de IA

Ejemplos de prompts:

- "¿Quién es mi próximo paciente hoy?"
- "Encuentra todas las citas de un paciente este mes"
- "¿Qué horarios están libres para un proveedor el viernes?"
- "Actualiza esta cita a una nueva hora"

Actívalo desde **Settings → Integrations** con **Dashboard AI Assistant**.

---

## Qué es la API MCP

Genkō expone un servidor **Model Context Protocol (MCP)** para agentes y herramientas externas con IA.

Esto permite a clientes compatibles trabajar con tus datos de Genkō mediante llamadas estructuradas a herramientas, en lugar de usar screen scraping o integraciones improvisadas.

El endpoint MCP está disponible en:

```text
https://www.getgenko.com/api/mcp
```

---

## Acceso MCP por plan

| Nivel de plan | Acceso MCP |
|---------------|------------|
| Group | Acceso de solo lectura, 1 clave |
| Practice y superiores | Lectura + escritura, 3 claves |
| Enterprise | Alcances completos y claves ilimitadas |

Las claves API se crean en **Settings → Integrations → API Access (MCP)**.

---

## Inicio rápido

1. Abre **Settings → Integrations**
2. Agrega una clave MCP
3. Nombra la clave y elige su alcance
4. Copia la clave en ese momento, porque solo se muestra una vez
5. Úsala como Bearer token en tu cliente MCP

Ejemplo de configuración:

```json
{
  "mcpServers": {
    "genko": {
      "url": "https://www.getgenko.com/api/mcp",
      "headers": {
        "Authorization": "Bearer genko_YOUR_KEY_HERE"
      }
    }
  }
}
```

---

## Autenticación y alcances

Todas las solicitudes MCP deben enviar:

```text
Authorization: Bearer genko_...
```

Alcances disponibles:

- **Read** para herramientas de listado y consulta
- **Read + Write** para acciones de creación y actualización
- **Admin** para el acceso más amplio en Enterprise

Las claves se pueden revocar en cualquier momento. La revocación es inmediata para solicitudes nuevas.

---

## Herramientas MCP disponibles

### Herramientas de lectura

- `list_appointments`
- `get_appointment`
- `list_patients`
- `get_patient`
- `list_providers`
- `get_provider`
- `list_appointment_types`
- `check_availability`

### Herramientas de escritura

- `create_appointment`
- `update_appointment`
- `cancel_appointment`
- `create_patient`
- `update_patient`
- `find_or_create_patient`

La creación y actualización de citas sigue ejecutando verificaciones de conflicto en el servidor, así que un cliente MCP no puede hacer doble reserva silenciosamente.

---

## Límites de tasa

Las claves MCP tienen rate limit por clave en ventanas de 60 segundos.

- **Límite por defecto:** 100 solicitudes por minuto
- **Si lo excedes:** `HTTP 429 Too Many Requests`
- **Enterprise:** límites más altos disponibles bajo solicitud a [hello@getgenko.com](mailto:hello@getgenko.com)

El uso de los últimos 7 días es visible en el panel de integraciones junto a cada clave.

---

## Límites de las funciones de IA

El asistente del dashboard es para el personal y usa automáticamente tu sesión actual. Está separado de los flujos de IA orientados al paciente, como el programador de WhatsApp con IA.

Esa distinción importa:

- **Dashboard AI** ayuda al personal dentro de Genkō
- **La IA orientada al paciente** ayuda a pacientes mediante canales de comunicación y flujos de reserva

---

## Guías relacionadas

- [Portal de pacientes e integraciones](./07-comunicaciones.md)
- [Planes y facturación](./10-facturacion.md)
- [Referencia rápida](./11-referencia-rapida.md)
