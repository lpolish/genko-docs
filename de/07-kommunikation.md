---
title: Kommunikation
layout: default
parent: Deutsch
nav_order: 7
redirect_to: https://getgenko.com/docs
---

# Nachrichten und Lead-Verwaltung

Effektive Kommunikation mit Patienten und potenziellen Leads ist für eine erfolgreiche Praxis unerlässlich. Genkō bietet robuste Nachrichten- und Lead-Verwaltungstools.

---

## Teil 1: Nachrichten

### Zugriff auf Nachrichten

1. Klicken Sie auf **Nachrichten** in der Seitenleiste
2. URL: `/admin/messages`

---

### Nachrichten-Übersicht

Die Nachrichten-Oberfläche hat zwei Hauptbereiche:

**Linker Bereich: Konversationsliste**
- Alle aktiven Konversationen
- Such- und Filteroptionen
- Statusindikatoren
- Prioritäts-Badges

**Rechter Bereich: Konversationsansicht**
- Nachrichten der ausgewählten Konversation
- Nachrichteneingabebereich
- KI-Assistenten-Steuerung

---

### Konversationen verstehen

Jede Konversation zeigt:
| Element | Beschreibung |
|---------|--------------|
| Patientenname | Konversationsteilnehmer |
| Letzte Nachricht | Vorschau der neuesten Nachricht |
| Status-Badge | Aktiv, Ausstehend, Gelöst |
| Priorität | Niedrig, Mittel, Hoch |
| KI-Symbol | Blauer Roboter, wenn KI aktiviert |
| Nachrichtenanzahl | Gesamte Nachrichten |
| Zeitstempel | Zeit der letzten Aktivität |

---

### Konversationsstatus

| Status | Farbe | Beschreibung |
|--------|-------|--------------|
| **Aktiv** | 🟢 Grün | Laufende Konversation |
| **Ausstehend** | 🟡 Gelb | Wartet auf Antwort |
| **Gelöst** | ⬜ Grau | Konversation geschlossen |

---

### Neue Konversation starten

1. Klicken Sie auf den **Neue Konversation**-Button
2. Wählen Sie einen Patienten oder geben Sie Kontaktinformationen ein
3. Legen Sie die Konversationspriorität fest
4. Wählen Sie KI-Assistenz-Präferenz
5. Klicken Sie auf **Erstellen**

---

### Nachrichten senden

1. Wählen Sie eine Konversation aus dem linken Bereich
2. Geben Sie Ihre Nachricht im Eingabebereich ein
3. Optional: Aktivieren Sie KI-Override
4. Klicken Sie auf **Senden** oder drücken Sie Enter

**Nachrichtenoptionen:**
| Option | Beschreibung |
|--------|--------------|
| **KI-Override** | Wenn aktiviert, wird KI für manuelle Antworten umgangen |
| **Anhänge** | Dateien hinzufügen (demnächst verfügbar) |

---

### KI-unterstützte Nachrichten

Genkō beinhaltet intelligente KI-Unterstützung:

**Wie KI hilft:**
- Entwirft erste Antworten
- Schlägt Antworten basierend auf Kontext vor
- Bearbeitet Routineanfragen
- Lernt aus Ihrem Kommunikationsstil

**KI pro Konversation umschalten:**
1. Öffnen Sie die Konversationseinstellungen
2. Schalten Sie den "KI aktiviert"-Schalter um
3. AN: KI kann automatisch antworten
4. AUS: Alle Antworten sind manuell

**KI-Override für einzelne Nachricht:**
1. Aktivieren Sie "KI-Override" vor dem Senden
2. Ihre Nachricht umgeht die KI-Verarbeitung
3. Nützlich für sensible oder spezifische Antworten

---

### Nachrichtenindikatoren

**Nachrichten-Absendertypen:**
| Symbol | Absender | Beschreibung |
|--------|----------|--------------|
| 👤 Benutzer | Patient | Nachricht vom Patienten |
| 🤖 Bot | KI | KI-generierte Antwort |
| 💬 Personal | Personal | Manuelle Personalantwort |

**KI-generiert-Badge:**
- Von KI erstellte Nachrichten zeigen ein kleines Robotersymbol
- Hilft, zwischen KI- und Personalantworten zu unterscheiden

---

### Konversationen filtern

**Schnellsuche:**
- Nach Patientenname oder Nachrichteninhalt suchen

**Statusfilter-Dropdown:**
| Filter | Zeigt |
|--------|-------|
| Alle | Alle Konversationen |
| Aktiv | Laufende Konversationen |
| Ausstehend | Wartet auf Antwort |
| Gelöst | Geschlossene Konversationen |

---

### Konversationsaktionen

Aus einer Konversation können Sie:
| Aktion | Wie |
|--------|-----|
| Status ändern | Dropdown in der Kopfzeile aktualisieren |
| KI umschalten | KI aktiviert-Schalter ändern |
| Patient anzeigen | Auf Patientennamenslink klicken |
| Konversation schließen | Status auf Gelöst setzen |

---

## Teil 2: Lead-Verwaltung

### Zugriff auf Leads

1. Klicken Sie auf **Leads** in der Seitenleiste
2. URL: `/admin/leads`

---

### Leads verstehen

Leads sind potenzielle Patienten, die Interesse gezeigt haben, aber noch nicht in vollständige Patientenakten umgewandelt wurden.

**Lead-Quellen:**
| Quelle | Beschreibung |
|--------|--------------|
| **WhatsApp** | Anfragen über WhatsApp |
| **Website** | Formulareinreichungen von der Website |
| **Empfehlung** | Empfehlungen von bestehenden Patienten |

---

### Lead-Pipeline-Stufen

Leads durchlaufen eine Vertriebspipeline:

```
Lead → Interessent → Qualifiziert → Konvertiert
                          ↓
                       Verloren
```

| Stufe | Beschreibung |
|-------|--------------|
| **Lead** | Erstkontakt, minimales Engagement |
| **Interessent** | Hat echtes Interesse gezeigt |
| **Qualifiziert** | Bereit, Patient zu werden |
| **Konvertiert** | Erfolgreich zu Patient geworden |
| **Verloren** | Nicht konvertiert |

---

### Ansichtsmodi

Wechseln Sie zwischen zwei Ansichtsmodi:

**Tabellenansicht:**
- Traditionelles Listenformat
- Sortierbare Spalten
- Massenaktionen verfügbar

**Kanban-Ansicht:**
- Visuelles Pipeline-Board
- Drag & Drop zwischen Stufen
- Schnelle Statusänderungen

---

### Neuen Lead hinzufügen

1. Klicken Sie auf den **Lead hinzufügen**-Button
2. Füllen Sie das Lead-Formular aus:

| Feld | Erforderlich | Beschreibung |
|------|--------------|--------------|
| Telefonnummer | Ja | Primäre Kontaktnummer |
| Vorname | Nein | Vorname des Leads |
| Nachname | Nein | Nachname des Leads |
| E-Mail | Nein | E-Mail-Adresse |
| Quelle | Ja | Woher kam der Lead |
| Status | Ja | Aktuelle Pipeline-Stufe |
| Notizen | Nein | Zusätzliche Informationen |
| Tags | Nein | Benutzerdefinierte Labels |

3. Klicken Sie auf **Lead erstellen**

---

### Leads in Tabellenansicht verwalten

**Suche und Filter:**
- Nach Name, E-Mail, Telefon suchen
- Nach Status filtern
- Nach Quelle filtern

**Tabellenaktionen:**
| Symbol | Aktion |
|--------|--------|
| ✏️ Bearbeiten | Lead-Informationen ändern |
| 💬 Nachricht | Konversation starten |
| ✅ Konvertieren | Zu Patient konvertieren |
| 🗑️ Löschen | Lead löschen |

---

### Leads in Kanban-Ansicht verwalten

**Drag & Drop:**
1. Klicken und halten Sie eine Lead-Karte
2. Ziehen Sie zur gewünschten Spalte
3. Loslassen, um Status zu aktualisieren

**Kartenaktionen:**
- Auf Kartensymbole für Schnellaktionen klicken
- Pfeilbuttons zum Links-/Rechtsbewegen verwenden
- Ladeanzeige während Aktualisierungen

**Mit Pfeilen bewegen:**
1. Klicken Sie ◀ um Lead nach links zu bewegen
2. Klicken Sie ▶ um Lead nach rechts zu bewegen
3. Status wird automatisch aktualisiert

---

### Leads zu Patienten konvertieren

Wenn ein Lead bereit ist, Patient zu werden:

1. Finden Sie den Lead in Tabellen- oder Kanban-Ansicht
2. Klicken Sie auf **Zu Patient konvertieren** (✅ Symbol)
3. Bestätigen Sie die Konvertierung
4. Lead wird zu Patientenakte
5. Status ändert sich zu "Konvertiert"

**Nach der Konvertierung:**
- Patientenakte wird erstellt
- Lead wird als konvertiert markiert
- Sie können ihren ersten Termin planen
- Ursprüngliche Lead-Daten werden beibehalten

---

### Konversationen von Leads starten

1. Klicken Sie auf das Nachrichtensymbol (💬) bei einem Lead
2. Eine neue Konversation wird erstellt
3. Sie werden zu Nachrichten weitergeleitet
4. Lead-Informationen sind vorausgefüllt

---

### Lead-Informationen bearbeiten

1. Klicken Sie auf das Bearbeiten-Symbol (✏️)
2. Aktualisieren Sie Felder im Modal
3. Klicken Sie auf **Lead aktualisieren**

**Bearbeitbare Felder:**
- Name und Kontaktinformationen
- Quelle und Status
- Notizen
- Tags

---

### Leads löschen

1. Klicken Sie auf das Löschen-Symbol (🗑️)
2. Bestätigen Sie die Löschung
3. Lead wird dauerhaft gelöscht

**Warnung:** Gelöschte Leads können nicht wiederhergestellt werden. Konvertieren Sie wichtige Leads vor dem Löschen zu Patienten.

---

### Lead-Tags

Verwenden Sie Tags, um Leads zu kategorisieren:

**Häufige Tags:**
- `dringend`
- `nachfassen`
- `versicherungsfrage`
- `preissensibel`
- `empfehlung`

**Tags hinzufügen:**
1. Lead bearbeiten
2. Tags im Tag-Feld hinzufügen
3. Änderungen speichern

---

## Best Practices

### Nachrichten

1. **Zeitnah antworten**: Streben Sie Antworten am selben Tag an
2. **KI klug nutzen**: Lassen Sie KI Routineanfragen bearbeiten
3. **Prioritäten setzen**: Markieren Sie dringende Konversationen entsprechend
4. **Gelöste schließen**: Archivieren Sie abgeschlossene Konversationen
5. **Professionell bleiben**: HIPAA-konforme Kommunikation einhalten

### Lead-Verwaltung

1. **Schnell nachfassen**: Kontaktieren Sie neue Leads innerhalb von 24 Stunden
2. **Stufen aktualisieren**: Halten Sie den Pipeline-Status aktuell
3. **Notizen hinzufügen**: Dokumentieren Sie alle Interaktionen
4. **Tags verwenden**: Kategorisieren Sie für einfaches Filtern
5. **Zeitnah konvertieren**: Verschieben Sie qualifizierte Leads zu Patienten

---

## Fehlerbehebung

### Nachrichten

**Konversation lädt nicht:**
- Seite aktualisieren
- Internetverbindung prüfen
- Andere Konversation auswählen

**KI antwortet nicht:**
- Prüfen Sie, ob KI für Konversation aktiviert ist
- Überprüfen Sie Organisations-KI-Einstellungen
- KI kann in kostenlosen Plänen deaktiviert sein

### Leads

**Lead bewegt sich nicht (Kanban):**
- Warten Sie, bis der Ladevorgang abgeschlossen ist
- Versuchen Sie stattdessen die Pfeilbuttons
- Seite aktualisieren

**Kann nicht zu Patient konvertieren:**
- Überprüfen Sie, ob Pflichtfelder ausgefüllt sind
- Lead könnte bereits konvertiert sein
- Überprüfen Sie, ob Sie die Berechtigung haben

**Doppelte Leads:**
- Suchen Sie vor dem Erstellen neuer Leads
- Kontaktieren Sie Support zum Zusammenführen von Duplikaten
- Verwenden Sie konsistente Telefonnummerformatierung

---

## Integration mit anderen Modulen

### Nachrichten ↔ Patienten
- Auf Patientenname klicken, um Profil anzuzeigen
- Auf Nachrichtenverlauf aus Patientenakten zugreifen

### Leads ↔ Patienten
- Leads konvertieren, um Patientenakten zu erstellen
- Lead-Historie wird in Patientennotizen beibehalten

### Nachrichten ↔ Leads
- Konversationen direkt von Leads starten
- Lead-Kontext in Konversation verfügbar

---

*Zurück: [Terminplanung und Kalender](./06-terminplanung.md) | Weiter: [Analyse-Dashboard →](./08-analysen.md)*
