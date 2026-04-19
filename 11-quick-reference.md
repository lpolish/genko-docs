---
title: Quick Reference
layout: default
nav_order: 12
---

# Quick Reference

Use this page as a short operational cheat sheet for the most common Genkō tasks.

---

## First-day checklist

1. Add your core services
2. Add at least one provider
3. Set provider availability
4. Add your first patient
5. Book your first appointment
6. Turn on the patient portal if you want self-booking
7. Invite team members

---

## Where to go for common tasks

| Task | Where to do it |
|------|----------------|
| Add a patient | **Patients** |
| Book an appointment | **Appointments → New Appointment** |
| Set provider hours | **Providers → Edit Schedule** |
| Add or change services | **Settings → Services** |
| Invite staff | **Settings → Members** |
| Enable portal booking | **Settings → Portal** |
| Connect Google Calendar | **Settings → Integrations** |
| Create MCP API keys | **Settings → Integrations** |
| Change plan or payment method | **Settings → Billing** |

---

## Appointment statuses

| Status | Meaning |
|--------|---------|
| Scheduled | Booked and active |
| Completed | Visit finished |
| Cancelled | Booking cancelled and slot released |
| No-show | Patient did not attend |

---

## Roles summary

| Role | Access summary |
|------|----------------|
| Owner | Full control, including billing and ownership actions |
| Admin | Broad operational access, including settings and billing |
| Provider | Manages appointments and views patient records |
| Staff | Supports scheduling and operations without settings control |

---

## Plan highlights

| Capability | Available on |
|------------|--------------|
| Google Calendar sync | Solo and above |
| Analytics | Group and above |
| MCP API | Group and above |
| Dashboard AI assistant | Practice and above |
| Advanced scheduling rules | Practice and above |

---

## MCP quick start

1. Go to **Settings → Integrations**
2. Create an MCP key
3. Copy it once
4. Use it as `Authorization: Bearer genko_...`
5. Point your client to `https://www.getgenko.com/api/mcp`

---

## Canonical docs

This Jekyll site is a maintained mirror. The canonical product docs are always available at [getgenko.com/docs](https://getgenko.com/docs).
