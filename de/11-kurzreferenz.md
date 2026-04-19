---
title: Kurzreferenz
layout: default
parent: Deutsch
nav_order: 11
redirect_to: https://getgenko.com/docs
---

# Kurzreferenzhandbuch

Dieses Kurzreferenzhandbuch bietet schnelle Informationen für häufige Aufgaben und Navigation in Genkō.

---

## Tastaturkürzel

### Globale Kürzel

| Kürzel | Aktion |
|--------|--------|
| `Strg/Cmd + K` | Globale Suche öffnen |
| `Strg/Cmd + /` | Tastaturkürzel anzeigen |
| `Esc` | Modal/Dialog schließen |

### Navigation

| Kürzel | Aktion |
|--------|--------|
| `G + D` | Zu Dashboard gehen |
| `G + P` | Zu Patienten gehen |
| `G + S` | Zu Terminplanung gehen |
| `G + M` | Zu Nachrichten gehen |

---

## Kurzschritte für häufige Aufgaben

### Neuen Patienten hinzufügen

1. Seitenleiste → **Patienten**
2. **+ Patient hinzufügen** klicken
3. Pflichtfelder ausfüllen (Vorname, Nachname, Geburtsdatum)
4. **Speichern** klicken

### Termin planen

1. Seitenleiste → **Terminplanung**
2. Leeren Zeitslot klicken ODER **+ Neuer Termin**
3. Patient und Anbieter auswählen
4. Datum, Zeit, Dauer festlegen
5. **Erstellen** klicken

### Mitarbeiter hinzufügen

1. Seitenleiste → **Personal**
2. **+ Personal hinzufügen** klicken
3. Name, E-Mail, Rolle eingeben
4. **Speichern** klicken (Einladung wird automatisch gesendet)

### Telemedizin-Sitzung starten

1. Seitenleiste → **Terminplanung** → **Telemedizin**-Tab
2. Geplante Sitzung finden
3. **Sitzung starten** klicken (nahe Terminzeit)

### Nachricht senden

1. Seitenleiste → **Nachrichten**
2. Konversation auswählen ODER **Neue Konversation** klicken
3. Nachricht eingeben
4. **Senden** klicken

### Lead zu Patient konvertieren

1. Seitenleiste → **Leads**
2. Lead finden
3. ✅ (Konvertieren) Symbol klicken
4. Konvertierung bestätigen

---

## Statusindikatoren

### Patientenstatus

| Status | Bedeutung |
|--------|-----------|
| 🟢 Aktiv | Erhält derzeit Behandlung |
| ⚪ Inaktiv | Derzeit nicht aktiv |

### Terminstatus

| Status | Farbe | Bedeutung |
|--------|-------|-----------|
| Geplant | 🔵 Blau | Gebucht |
| Bestätigt | 🟢 Grün | Patient hat bestätigt |
| In Bearbeitung | 🟡 Gelb | Läuft gerade |
| Abgeschlossen | ⬜ Grau | Beendet |
| Abgesagt | 🔴 Rot | Wurde abgesagt |
| Nicht erschienen | 🔴 Rot | Patient kam nicht |

### Personalstatus

| Status | Bedeutung |
|--------|-----------|
| 🟢 Aktiv | Kann sich anmelden |
| ⚪ Inaktiv | Kann sich nicht anmelden |

### Lead-Status

| Stufe | Farbe |
|-------|-------|
| Lead | 🔵 Blau |
| Interessent | 🟡 Gelb |
| Qualifiziert | 🟣 Lila |
| Konvertiert | 🟢 Grün |
| Verloren | 🔴 Rot |

---

## Navigationsstruktur

```
📱 Genkō Admin
│
├── 📊 Operationen
│   ├── Dashboard
│   ├── Patienten
│   ├── Terminplanung
│   └── Analysen
│
├── 💬 Kommunikation
│   ├── Nachrichten
│   └── Leads
│
└── ⚙️ Verwaltung
    ├── Personal
    ├── Geschäftsprofil
    ├── Einstellungen
    └── Abrechnung (nur Inhaber)
```

---

## Rollenberechtigungs-Zusammenfassung

| Aktion | Admin | Anbieter | Pfleger | Personal |
|--------|:-----:|:--------:|:-------:|:--------:|
| Patienten anzeigen | ✅ | ✅ | ✅ | ✅ |
| Patienten bearbeiten | ✅ | ✅ | ✅ | ❌ |
| Patienten löschen | ✅ | ❌ | ❌ | ❌ |
| Termine erstellen | ✅ | ✅ | ✅ | ✅ |
| Telemedizin | ✅ | ✅ | ✅ | ❌ |
| Personal verwalten | ✅ | ❌ | ❌ | ❌ |
| Analysen anzeigen | ✅ | ✅ | ❌ | ❌ |
| Einstellungszugriff | ✅ | ❌ | ❌ | ❌ |
| Abrechnungszugriff | Inhaber | ❌ | ❌ | ❌ |

---

## URL-Kurzreferenz

| Seite | URL-Pfad |
|-------|----------|
| Dashboard | `/admin/dashboard` |
| Patienten | `/admin/patients` |
| Terminplanung | `/admin/scheduling` |
| Personal | `/admin/staff` |
| Nachrichten | `/admin/messages` |
| Leads | `/admin/leads` |
| Analysen | `/admin/analytics` |
| Geschäftsprofil | `/admin/business-profile` |
| Einstellungen | `/admin/settings` |
| Abrechnung | `/admin/billing` |

---

## Planvergleich

| Funktion | Kostenlos | Starter | Pro | Growth |
|----------|:---------:|:-------:|:---:|:------:|
| **Preis** | 0€ | 29€/Mo | 99€/Mo | 249€/Mo |
| **Personal** | 1 | 3 | 10 | ∞ |
| **Patienten** | 10 | ∞ | ∞ | ∞ |
| **Termine** | 10/Mo | ∞ | ∞ | ∞ |
| **Telemedizin** | ❌ | 5/Mo | ∞ | ∞ |
| **Analysen** | Basis | ✅ | Erweitert | Erweitert |
| **API** | ❌ | ❌ | ❌ | ✅ |

---

## Häufige Symbole

| Symbol | Bedeutung |
|:------:|-----------|
| ➕ | Neu hinzufügen |
| ✏️ | Bearbeiten |
| 🗑️ | Löschen |
| 👁️ | Details anzeigen |
| 📅 | Kalender/Termin |
| 💬 | Nachricht |
| 📊 | Analysen |
| ⚙️ | Einstellungen |
| 🔔 | Benachrichtigungen |
| 👤 | Benutzer/Patient |
| 👥 | Personal/Team |
| 📱 | Telemedizin |
| 💳 | Abrechnung |
| ❓ | Hilfe |

---

## Datums- und Zeitformate

| Sprache | Beispieldatum | Beispielzeit |
|---------|---------------|--------------|
| Englisch (US) | Jan 9, 2026 | 2:30 PM |
| Spanisch | 9 ene 2026 | 14:30 |
| Japanisch | 2026年1月9日 | 14:30 |
| Deutsch | 9. Jan. 2026 | 14:30 |

---

## Schnelle Fehlerbehebung

| Problem | Schnelllösung |
|---------|---------------|
| Seite lädt nicht | Aktualisieren (F5 oder Strg+R) |
| Unerwarteter Logout | Erneut anmelden |
| Daten werden nicht angezeigt | Filter prüfen, aktualisieren |
| Kann nicht bearbeiten | Berechtigungen/Rolle prüfen |
| Button deaktiviert | Planlimits prüfen |
| Fehlermeldung | Nachricht notieren, Support kontaktieren |

---

## Support-Kontakte

| Problemtyp | Kontakt |
|------------|---------|
| Allgemeiner Support | support@genko.app |
| Abrechnungsfragen | billing@genko.app |
| Technische Probleme | In-App Hilfe → Ticket senden |
| Kontowiederherstellung | Über Anmeldeseite zurücksetzen |

---

## Einrichtungs-Checkliste

Checkliste für neue Admin-Einrichtung:

- [ ] Konto erstellen und Plan wählen
- [ ] E-Mail-Verifizierung abschließen
- [ ] Geschäftsprofil einrichten
  - [ ] Praxisname hinzufügen
  - [ ] Logo hochladen
  - [ ] Adresse eingeben
  - [ ] Kontaktinformationen hinzufügen
- [ ] Erste Patienten hinzufügen
- [ ] Mitarbeiter einladen
- [ ] Verfügbarkeit konfigurieren
- [ ] Ersten Termin planen
- [ ] Telemedizin testen (wenn verfügbar)
- [ ] Analysen überprüfen
- [ ] Einstellungen konfigurieren

---

## Täglicher Workflow

Empfohlene tägliche Routine für Admins:

**Morgens:**
1. Dashboard für Tagesübersicht prüfen
2. Warnungen und Benachrichtigungen überprüfen
3. Heutige Termine bestätigen

**Während des Tages:**
4. Termine nach Bedarf verwalten
5. Auf Nachrichten antworten
6. Neue Leads bearbeiten

**Ende des Tages:**
7. Abgeschlossene Termine überprüfen
8. Nicht-Erschienene entsprechend markieren
9. Vorschau auf morgigen Zeitplan

---

## Wöchentliche Aufgaben

| Tag | Aufgabe |
|-----|---------|
| Montag | Wochenkalender überprüfen |
| Mittwoch | Ausstehende Leads nachverfolgen |
| Freitag | Wöchentliche Analysen überprüfen |
| Monatlich | Abrechnung prüfen, Einstellungen aktualisieren |

---

## Notfallverfahren

### Patient kann nicht auf Portal zugreifen
1. Bestätigen, dass E-Mail des Patienten korrekt ist
2. Passwort-Reset-Link senden
3. Patientenstatus auf aktiv prüfen

### Mitarbeiter kann sich nicht anmelden
1. Prüfen, ob Konto aktiv ist
2. Passwort-Reset senden
3. Auf Kontosperrung prüfen
4. Einladung erneut senden, falls erforderlich

### Zahlungsfehler
1. Zahlungsmethode überprüfen
2. Kartendetails aktualisieren
3. Bank kontaktieren bei Ablehnung
4. Alternative Zahlungsmethode hinzufügen

### Daten fehlen
1. Datumsbereichsfilter prüfen
2. Richtige Organisation bestätigen (bei mehreren)
3. Auf Synchronisation warten (max. 15 Min)
4. Support kontaktieren, wenn Problem anhält

---

## Glossar

| Begriff | Definition |
|---------|------------|
| **Organisation** | Ihre Klinik/Praxis in Genkō |
| **Anbieter** | Gesundheitsdienstleister (Arzt, Facharzt) |
| **Aktenzeichen** | Medizinische Aktenzeichen |
| **Lead** | Potenzieller Patient |
| **Telemedizin** | Videokonsultation |
| **RBAC** | Rollenbasierte Zugriffssteuerung |
| **KPI** | Key Performance Indicator |
| **Außenstände** | Debitorenbuchhaltung |

---

## Versionsverlauf

| Version | Datum | Änderungen |
|---------|-------|------------|
| 1.0 | Januar 2026 | Erstveröffentlichung |

---

*[← Zurück zum Inhaltsverzeichnis](./)*
