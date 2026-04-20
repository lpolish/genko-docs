---
title: Einstellungen, KI und API
layout: default
nav_order: 9
parent: Deutsch
---

# Einstellungen, KI und API

**Settings** ist der Bereich, in dem Owners und Admins festlegen, wie sich Genkō für die gesamte Praxis verhält. Hier werden auch die erweiterten KI-Funktionen und die MCP-API konfiguriert.

---

## Was in Settings liegt

Die wichtigsten Bereiche sind in der Regel:

- **Practice profile** für Organisationsdetails
- **Services** für Terminarten und Dauern
- **Members** für Einladungen und Rollen
- **Portal** für Self-Service-Buchungen
- **Integrations** für Google Calendar, API-Schlüssel und KI-Steuerung
- **Billing** für die Planverwaltung

Ein großer Teil der operativen Konfiguration läuft letztlich über Settings, auch wenn die täglichen Aktionen an anderer Stelle stattfinden.

---

## KI-Assistent im Dashboard

In **Practice**-Plänen und höher kann Genkō einen eingebauten KI-Assistenten direkt im Dashboard anzeigen.

Wenn er aktiviert ist:

- Erscheint ein schwebendes Chat-Widget im Dashboard
- Können nur Owners und Admins ihn nutzen
- Kann der Assistent operative Fragen beantworten und Aktionen ausführen, gestützt auf dieselbe interne Tool-Ebene wie andere KI-Workflows

Beispiel-Prompts:

- "Wer ist heute mein nächster Patient?"
- "Finde alle Termine eines Patienten in diesem Monat"
- "Welche Zeitfenster sind für einen Anbieter am Freitag frei?"
- "Verschiebe diesen Termin auf eine neue Uhrzeit"

Aktivieren Sie ihn unter **Settings → Integrations** mit **Dashboard AI Assistant**.

---

## Was die MCP-API ist

Genkō stellt einen **Model Context Protocol (MCP)**-Server für externe KI-Agenten und Werkzeuge bereit.

Dadurch können kompatible Clients mit Ihren Genkō-Daten über strukturierte Tool-Aufrufe arbeiten, statt auf Screen Scraping oder Einzelintegrationen angewiesen zu sein.

Der MCP-Endpunkt ist unter folgender Adresse erreichbar:

```text
https://www.getgenko.com/api/mcp
```

---

## MCP-Zugriff nach Plan

| Planstufe | MCP-Zugriff |
|-----------|-------------|
| Group | Nur Lesezugriff, 1 Schlüssel |
| Practice und höher | Lesen + Schreiben, 3 Schlüssel |
| Enterprise | Voller Umfang und unbegrenzte Schlüssel |

API-Schlüssel werden unter **Settings → Integrations → API Access (MCP)** erstellt.

---

## Schnellstart

1. Öffnen Sie **Settings → Integrations**
2. Fügen Sie einen MCP-Schlüssel hinzu
3. Benennen Sie den Schlüssel und wählen Sie den Umfang
4. Kopieren Sie den Schlüssel sofort, da er nur einmal angezeigt wird
5. Verwenden Sie ihn als Bearer-Token in Ihrem MCP-Client

Beispiel-Konfiguration:

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

## Authentifizierung und Scopes

Alle MCP-Anfragen müssen senden:

```text
Authorization: Bearer genko_...
```

Verfügbare Scopes:

- **Read** für Listen- und Abruf-Tools
- **Read + Write** für Erstellung und Aktualisierung
- **Admin** für den umfassendsten Enterprise-Zugriff

Schlüssel können jederzeit widerrufen werden. Der Widerruf wirkt sofort für neue Anfragen.

---

## Verfügbare MCP-Tools

### Lese-Tools

- `list_appointments`
- `get_appointment`
- `list_patients`
- `get_patient`
- `list_providers`
- `get_provider`
- `list_appointment_types`
- `check_availability`

### Schreib-Tools

- `create_appointment`
- `update_appointment`
- `cancel_appointment`
- `create_patient`
- `update_patient`
- `find_or_create_patient`

Die Erstellung und Aktualisierung von Terminen führt weiterhin serverseitige Konfliktprüfungen aus, sodass MCP-Clients keine stillen Doppelbuchungen erzeugen können.

---

## Rate Limits

MCP-Schlüssel sind pro Schlüssel in 60-Sekunden-Fenstern rate-limitiert.

- **Standardlimit:** 100 Anfragen pro Minute
- **Bei Überschreitung:** `HTTP 429 Too Many Requests`
- **Enterprise:** Höhere Limits sind auf Anfrage über [hello@getgenko.com](mailto:hello@getgenko.com) möglich

Die Nutzung der letzten 7 Tage ist im Integrationsbereich neben jedem Schlüssel sichtbar.

---

## Grenzen der KI-Funktionen

Der Dashboard-Assistent ist für Mitarbeitende gedacht und nutzt automatisch Ihre aktuelle Sitzung. Er ist getrennt von patientenseitigen KI-Flows wie dem WhatsApp-KI-Scheduler.

Diese Unterscheidung ist wichtig:

- **Dashboard AI** unterstützt Mitarbeitende innerhalb von Genkō
- **Patientenseitige KI** unterstützt Patienten über Kommunikationskanäle und Buchungs-Workflows

---

## Verwandte Leitfäden

- [Patientenportal und Integrationen](./07-kommunikation.md)
- [Pläne und Abrechnung](./10-abrechnung.md)
- [Schnellreferenz](./11-kurzreferenz.md)
