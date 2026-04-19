---
title: Terminplanung
layout: default
parent: Deutsch
nav_order: 6
redirect_to: https://getgenko.com/docs
---

# Terminplanung und Kalender

Das Terminplanungsmodul ist das Herzstück des täglichen Praxisbetriebs. Verwalten Sie Termine, Anbieterverfügbarkeit und Telemedizin-Sitzungen an einem Ort.

---

## Zugriff auf Terminplanung

1. Klicken Sie auf **Terminplanung** in der Seitenleiste
2. Oder verwenden Sie Dashboard-Schnellaktionen
3. URL: `/admin/scheduling`

---

## Terminplanungs-Tabs

Die Terminplanungsseite hat vier Haupttabs:

| Tab | Zweck |
|-----|-------|
| **Kalender** | Visuelle Kalenderansicht |
| **Termine** | Listenansicht aller Termine |
| **Telemedizin** | Videokonsultationsverwaltung |
| **Verfügbarkeit** | Anbieter-Zeitplankonfiguration |

---

## Kalenderansicht

### Kalendernavigation

**Datumsnavigation:**
- **Heute**: Zum aktuellen Datum springen
- **< >**: Vor-/Zurücknavigieren
- **Woche/Monat-Auswahl**: Ansichtstyp ändern

**Ansichtsoptionen:**
- Tagesansicht: Stündliche Aufschlüsselung
- Wochenansicht: 7-Tage-Übersicht
- Monatsansicht: Monatlicher Kalender

### Kalender verstehen

**Terminfarben nach Status:**
| Farbe | Status |
|-------|--------|
| 🔵 Blau | Geplant |
| 🟢 Grün | Bestätigt |
| ⬜ Grau | Abgeschlossen |
| 🔴 Rot | Abgesagt |

**Termintypen:**
- **Vor Ort**: Standard-Praxisbesuch
- **Telemedizin**: Videokonsultation (mit Video-Symbol markiert)

### Kalender-Interaktionen

**Auf leeren Zeitslot klicken:**
- Öffnet neues Termin-Modal
- Datum und Uhrzeit sind vorausgefüllt

**Auf Termin klicken:**
- Öffnet Termindetails-Modal
- Zeigt Patienteninfo, Notizen, Status

**Drag & Drop:**
- Termine ziehen, um umzuterminieren
- Bestätigungsdialog erscheint
- Automatische Benachrichtigung an Patient

---

## Termine erstellen

### Methode 1: Aus dem Kalender

1. Klicken Sie auf einen leeren Zeitslot
2. Füllen Sie das Terminformular aus
3. Klicken Sie auf **Erstellen**

### Methode 2: Aus dem Neuer Termin-Button

1. Klicken Sie auf den **+ Neuer Termin**-Button
2. Wählen Sie Datum, Uhrzeit und Dauer
3. Füllen Sie die Details aus
4. Klicken Sie auf **Erstellen**

### Methode 3: Aus dem Patientenprofil

1. Gehen Sie zu den Patientendetails
2. Klicken Sie auf das Kalender-Symbol
3. Füllen Sie das Terminformular aus
4. Klicken Sie auf **Erstellen**

---

### Terminformularfelder

**Pflichtfelder:**
| Feld | Beschreibung |
|------|--------------|
| Patient | Aus Patientenliste auswählen |
| Anbieter | Anbieter für Termin zuweisen |
| Datum | Termindatum |
| Uhrzeit | Startzeit |
| Dauer | Länge in Minuten |
| Typ | Termintyp |

**Optionale Felder:**
| Feld | Beschreibung |
|------|--------------|
| Notizen | Interne Notizen |
| Grund | Besuchsgrund |
| Nachuntersuchung | Als Nachuntersuchungsbesuch markieren |

### Termintypen

| Typ | Beschreibung |
|-----|--------------|
| Neuer Patient | Erstbesuch für neue Patienten |
| Nachuntersuchung | Besuch für laufende Behandlung |
| Jahresuntersuchung | Jährliche Vorsorgeuntersuchung |
| Beratung | Erstberatung |
| Telemedizin | Virtueller Videobesuch |
| Notfall | Notfallversorgung am selben Tag |

---

## Termindetails

Klicken Sie auf einen Termin, um seine Details anzuzeigen:

### Details-Modal-Bereiche

**Patienteninformationen:**
- Name und Kontaktinformationen
- Aktenzeichen
- Versicherungsinformationen

**Termininformationen:**
- Datum und Uhrzeit
- Dauer
- Zugewiesener Anbieter
- Termintyp
- Status

**Notizen:**
- Interne Notizen
- Besuchsgrund
- Anbieter-Kommentare

### Terminaktionen

Aus dem Details-Modal können Sie:
| Aktion | Beschreibung |
|--------|--------------|
| **Bearbeiten** | Termindetails ändern |
| **Umterminieren** | Datum/Uhrzeit ändern |
| **Absagen** | Termin absagen |
| **Als erledigt markieren** | Termin abschließen |
| **Telemedizin starten** | Videositzung starten |
| **Patient anzeigen** | Zum Patientenprofil gehen |

---

## Terminstatus-Workflow

```
Geplant → Bestätigt → In Bearbeitung → Abgeschlossen
               ↓
           Abgesagt
               ↓
           Nicht erschienen
```

### Statusbeschreibungen

| Status | Bedeutung |
|--------|-----------|
| **Geplant** | Erstbuchung |
| **Bestätigt** | Patient hat Teilnahme bestätigt |
| **In Bearbeitung** | Termin findet gerade statt |
| **Abgeschlossen** | Besuch erfolgreich beendet |
| **Abgesagt** | Termin wurde abgesagt |
| **Nicht erschienen** | Patient ist nicht erschienen |

### Status ändern

1. Öffnen Sie die Termindetails
2. Klicken Sie auf das Status-Dropdown
3. Wählen Sie neuen Status
4. Fügen Sie Notizen hinzu, falls erforderlich
5. Speichern Sie Änderungen

---

## Verfügbarkeit verwalten

### Zugriff auf Verfügbarkeitseinstellungen

1. Gehen Sie zu Terminplanung → Verfügbarkeit-Tab
2. Wählen Sie einen Anbieter aus der Liste
3. Zeigen Sie seinen Zeitplan an/bearbeiten Sie ihn

### Wochenzeitplan festlegen

Für jeden Wochentag:

1. **Verfügbarkeit umschalten**: Tag als verfügbar oder geschlossen markieren
2. **Arbeitszeiten festlegen**: Start- und Endzeiten
3. **Pausen hinzufügen**: Mittagessen, Besprechungen usw.

### Beispiel Wochenzeitplan

| Tag | Verfügbar | Zeiten | Pause |
|-----|-----------|--------|-------|
| Montag | ✅ | 9:00 - 17:00 | 12:00 - 13:00 |
| Dienstag | ✅ | 9:00 - 17:00 | 12:00 - 13:00 |
| Mittwoch | ✅ | 9:00 - 12:00 | — |
| Donnerstag | ✅ | 9:00 - 17:00 | 12:00 - 13:00 |
| Freitag | ✅ | 9:00 - 16:00 | 12:00 - 13:00 |
| Samstag | ❌ | — | — |
| Sonntag | ❌ | — | — |

### Verfügbarkeit speichern

1. Nehmen Sie Änderungen am Zeitplan vor
2. Klicken Sie auf **Speichern** im Verfügbarkeitskalender
3. Änderungen gelten für zukünftige Buchungen

---

## Terminlistenansicht

Der Termine-Tab zeigt ein Listenformat:

### Listenfunktionen

- Sortieren nach Datum, Patient, Anbieter
- Nach Status filtern
- Termine durchsuchen
- Schnelle Statusaktualisierungen

### Listenspalten

| Spalte | Beschreibung |
|--------|--------------|
| Patient | Patientenname (anklickbar) |
| Datum/Zeit | Termindatum und -zeit |
| Dauer | Länge in Minuten |
| Typ | Termintyp |
| Anbieter | Zugewiesener Anbieter |
| Status | Aktuelles Status-Badge |
| Aktionen | Bearbeiten, Anzeigen, Absagen-Buttons |

---

## Telemedizin-Sitzungen

### Telemedizin-Sitzung starten

1. Navigieren Sie zu Terminplanung → Telemedizin-Tab
2. Finden Sie den geplanten Telemedizin-Termin
3. Klicken Sie auf **Sitzung starten** (verfügbar nahe Terminzeit)
4. Video-Interface öffnet sich

### Telemedizin-Anforderungen

**Anbieter-Anforderungen:**
- Funktionierende Webcam
- Mikrofon
- Stabile Internetverbindung
- Unterstützter Browser (Chrome, Firefox, Safari)

**Patienten-Anforderungen:**
- Einladungs-E-Mail mit Beitrittslink
- Gerät mit Kamera/Mikrofon
- Internetverbindung

### Während der Sitzung

**Anbieter-Kontrollen:**
- Mikrofon stummschalten/entstummen
- Kamera aktivieren/deaktivieren
- Bildschirm teilen
- Sitzung beenden

**Sitzungsfunktionen:**
- HD-Videoanruf
- Bildschirmfreigabe
- Sitzungsaufzeichnung (wenn aktiviert)
- Chat-Nachrichten

### Nach der Sitzung

1. Sitzung endet automatisch, wenn Anbieter schließt
2. Aktualisieren Sie den Terminstatus auf "Abgeschlossen"
3. Fügen Sie Sitzungsnotizen hinzu, falls erforderlich
4. Patient erhält Nachbereitung, falls konfiguriert

---

## Termine umterminieren

### Methode 1: Drag & Drop

1. In der Kalenderansicht, klicken und halten Sie den Termin
2. Ziehen Sie zum neuen Datum/Uhrzeit
3. Loslassen zum Ablegen
4. Bestätigen Sie die Umterminierung

### Methode 2: Termin bearbeiten

1. Öffnen Sie die Termindetails
2. Klicken Sie auf **Umterminieren** oder **Bearbeiten**
3. Wählen Sie neues Datum und Uhrzeit
4. Speichern Sie Änderungen

### Automatische Benachrichtigungen

Bei Umterminierung:
- Patient wird per E-Mail/SMS benachrichtigt
- Anbieterkalender wird automatisch aktualisiert
- Ursprünglicher Slot wird verfügbar

---

## Termine absagen

1. Öffnen Sie die Termindetails
2. Klicken Sie auf **Termin absagen**
3. Wählen Sie Absagegrund (optional)
4. Bestätigen Sie die Absage

**Auswirkungen der Absage:**
- Zeitslot wird verfügbar
- Patient wird benachrichtigt
- Termin wird auf "Abgesagt"-Status verschoben
- Aufzeichnungen werden für Berichte beibehalten

---

## Best Practices

### Terminplanung
1. Lassen Sie Pufferzeit zwischen Terminen
2. Legen Sie realistische Termindauern fest
3. Blockieren Sie Zeit für administrative Aufgaben
4. Überprüfen Sie jeden Abend den Zeitplan für den nächsten Tag

### Verfügbarkeit
1. Halten Sie die Verfügbarkeit aktuell
2. Blockieren Sie Urlaub rechtzeitig
3. Berücksichtigen Sie Reisezeiten der Patienten
4. Planen Sie für Notfälle

### Telemedizin
1. Testen Sie die Ausrüstung vor Sitzungen
2. Haben Sie eine Backup-Kontaktmethode
3. Halten Sie die Umgebung professionell
4. Dokumentieren Sie Sitzungsnotizen zeitnah

---

## Fehlerbehebung

### Doppelbuchungen
- Aktivieren Sie Überlappungsverhinderung in Einstellungen
- Überprüfen Sie Anbieter-Verfügbarkeitseinstellungen
- Nutzen Sie das Konflikt-Warnsystem

### Termin erscheint nicht
- Überprüfen Sie, ob Patient aktiv ist
- Prüfen Sie den Datumsbereichsfilter
- Bestätigen Sie den Anbieterfilter
- Seite aktualisieren

### Telemedizin-Probleme
- Überprüfen Sie Browserkompatibilität
- Verifizieren Sie Kamera-/Mikrofonberechtigungen
- Testen Sie die Internetverbindung
- Browser-Cache leeren

### Verfügbarkeit wird nicht gespeichert
- Überprüfen Sie auf Validierungsfehler
- Stellen Sie sicher, dass Zeiten gültig sind
- Überlappen Sie keine Pausenzeiten mit Arbeitszeiten
- Probieren Sie einen anderen Browser

---

## Planlimits

### Terminlimits nach Plan

| Plan | Termine | Telemedizin |
|------|---------|-------------|
| Kostenlos | 10/Monat | ❌ |
| Starter | Unbegrenzt | 5/Monat |
| Professional | Unbegrenzt | Unbegrenzt |
| Growth | Unbegrenzt | Unbegrenzt |

Wenn Sie sich den Limits nähern, erscheint ein Warnbanner. Upgraden Sie Ihren Plan, um Beschränkungen aufzuheben.

---

*Zurück: [Personalverwaltung](./05-personalverwaltung.md) | Weiter: [Nachrichten und Lead-Verwaltung →](./07-kommunikation.md)*
