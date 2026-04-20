---
title: Referencia rápida
layout: default
nav_order: 11
parent: Español
---

# Referencia rápida

Usa esta página como una guía operativa breve para las tareas más comunes en Genkō.

---

## Lista del primer día

1. Agrega tus servicios principales
2. Agrega al menos un proveedor
3. Configura la disponibilidad del proveedor
4. Agrega tu primer paciente
5. Reserva tu primera cita
6. Activa el portal de pacientes si quieres autoservicio
7. Invita a tu equipo

---

## Dónde realizar tareas comunes

| Tarea | Dónde hacerlo |
|------|----------------|
| Agregar un paciente | **Patients** |
| Reservar una cita | **Appointments → New Appointment** |
| Definir horario de un proveedor | **Providers → Edit Schedule** |
| Agregar o cambiar servicios | **Settings → Services** |
| Invitar personal | **Settings → Members** |
| Activar reservas del portal | **Settings → Portal** |
| Conectar Google Calendar | **Settings → Integrations** |
| Crear claves API MCP | **Settings → Integrations** |
| Cambiar plan o método de pago | **Settings → Billing** |

---

## Estados de cita

| Estado | Significado |
|--------|-------------|
| Scheduled | Reservada y activa |
| Completed | La visita terminó |
| Cancelled | La reserva se canceló y liberó el horario |
| No-show | El paciente no asistió |

---

## Resumen de roles

| Rol | Resumen de acceso |
|-----|-------------------|
| Owner | Control total, incluida facturación y acciones de propiedad |
| Admin | Acceso operativo amplio, incluida configuración y facturación |
| Provider | Administra citas y ve registros de pacientes |
| Staff | Apoya operaciones y agenda sin control sobre configuración |

---

## Funciones destacadas por plan

| Capacidad | Disponible en |
|-----------|---------------|
| Sincronización con Google Calendar | Solo y superiores |
| Analíticas | Group y superiores |
| API MCP | Group y superiores |
| Asistente de IA del dashboard | Practice y superiores |
| Reglas avanzadas de programación | Practice y superiores |

---

## Inicio rápido de MCP

1. Ve a **Settings → Integrations**
2. Crea una clave MCP
3. Cópiala una sola vez
4. Úsala como `Authorization: Bearer genko_...`
5. Apunta tu cliente a `https://www.getgenko.com/api/mcp`

---

## Documentación canónica

Este sitio Jekyll es un mirror mantenido. La documentación canónica del producto sigue disponible en [getgenko.com/docs](https://getgenko.com/docs).
