---
title: Settings, AI & API
layout: default
nav_order: 10
---

# Settings, AI & API

Settings is where owners and admins shape how Genkō behaves for the whole practice. It is also where advanced AI and MCP API features are configured.

---

## What lives in Settings

The most important areas usually include:

- **Practice profile** for organization details
- **Services** for appointment types and durations
- **Members** for invitations and roles
- **Portal** for self-booking
- **Integrations** for Google Calendar, API keys, and AI controls
- **Billing** for plan management

Most operational setup work eventually flows through Settings, even when the day-to-day actions happen elsewhere.

---

## Dashboard AI assistant

On **Practice** plans and above, Genkō can show a built-in AI assistant directly in the dashboard.

When enabled:

- A floating chat widget appears in the dashboard
- Only owners and admins can use it
- The assistant can answer operational questions and take action using the same internal tool layer that powers other AI workflows

Example prompts include:

- "Who is my next patient today?"
- "Find all appointments for a patient this month"
- "What slots are open for a provider on Friday?"
- "Update this appointment to a new time"

Enable it from **Settings → Integrations** with **Dashboard AI Assistant**.

---

## What the MCP API is

Genkō exposes a **Model Context Protocol (MCP)** server for external AI agents and tools.

This lets compatible clients work with your Genkō data through structured tool calls instead of screen scraping or custom one-off integrations.

The MCP endpoint is available at:

```text
https://www.getgenko.com/api/mcp
```

---

## Plan access for MCP

| Plan level | MCP access |
|------------|------------|
| Group | Read-only access, 1 key |
| Practice and above | Read + write access, 3 keys |
| Enterprise | Full scopes and unlimited keys |

API keys are created in **Settings → Integrations → API Access (MCP)**.

---

## Quick start

1. Open **Settings → Integrations**
2. Add an MCP key
3. Name the key and choose its scope
4. Copy the raw key immediately, because it is shown only once
5. Use it as a Bearer token in your MCP client

Example configuration:

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

## Authentication and scopes

All MCP requests must send:

```text
Authorization: Bearer genko_...
```

Available scopes:

- **Read** for list and get tools
- **Read + Write** for create and update actions
- **Admin** for the broadest Enterprise-level access

Keys can be revoked at any time. Revocation is immediate for new requests.

---

## Available MCP tools

### Read tools

- `list_appointments`
- `get_appointment`
- `list_patients`
- `get_patient`
- `list_providers`
- `get_provider`
- `list_appointment_types`
- `check_availability`

### Write tools

- `create_appointment`
- `update_appointment`
- `cancel_appointment`
- `create_patient`
- `update_patient`
- `find_or_create_patient`

Appointment creation and updates still run server-side conflict checks, so MCP clients cannot silently double-book a provider.

---

## Rate limits

MCP keys are rate-limited per key in a 60-second window.

- **Default limit:** 100 requests per minute
- **When exceeded:** `HTTP 429 Too Many Requests`
- **Enterprise:** higher limits available on request via [hello@getgenko.com](mailto:hello@getgenko.com)

Usage over the last 7 days is visible in the integrations panel next to each key.

---

## AI feature boundaries

The dashboard assistant is for staff and uses your current session automatically. It is separate from patient-facing AI flows such as the WhatsApp AI scheduler.

That distinction matters:

- **Dashboard AI** helps staff inside Genkō
- **Patient-facing AI** helps patients through communication channels and booking workflows

---

## Related guides

- [Patient Portal & Integrations](./07-communications.md)
- [Plans & Billing](./10-billing.md)
- [Quick Reference](./11-quick-reference.md)
