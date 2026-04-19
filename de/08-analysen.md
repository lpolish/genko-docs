---
title: Analysen
layout: default
parent: Deutsch
nav_order: 8
redirect_to: https://getgenko.com/docs
---

# Analyse-Dashboard

Das Analyse-Dashboard bietet umfassende Einblicke in die Leistung Ihrer Praxis. Verfolgen Sie Umsatz, Ansprüche, Zahlungen und wichtige Leistungsindikatoren (KPIs).

---

## Zugriff auf Analysen

1. Klicken Sie auf **Analysen** in der Seitenleiste
2. URL: `/admin/analytics`

---

## Dashboard-Übersicht

Die Analysenseite enthält:
- **Header**: Titel und Aktionsbuttons
- **Filter**: Datumsbereich und Berichtstyp
- **KPI-Karten**: Wichtige Metriken auf einen Blick
- **Diagramme**: Visuelle Datendarstellungen
- **Detailberichte**: Tab-basierte Analyseabschnitte

---

## Filter und Steuerelemente

### Datumsbereichsauswahl

Legen Sie den Analysezeitraum fest:

| Feld | Beschreibung |
|------|--------------|
| Startdatum | Beginn des Analysezeitraums |
| Enddatum | Ende des Analysezeitraums |

**Schnelle Datumsbereiche:**
- Letzte 7 Tage
- Letzte 30 Tage
- Letzte 90 Tage
- Dieser Monat
- Dieses Quartal
- Benutzerdefinierter Bereich

### Berichtstyp

Wählen Sie den Analysetyp:

| Berichtstyp | Zeigt |
|-------------|-------|
| **Vollständiges Dashboard** | Alle Metriken und Diagramme |
| **Umsatzübersicht** | Umsatzbezogene Daten |
| **Anspruchsanalyse** | Versicherungsanspruchsdetails |
| **Zahlungsanalyse** | Zahlungsverfolgung |

### Anwenden und Aktualisieren

- Klicken Sie auf **Filter anwenden**, um Daten zu aktualisieren
- Klicken Sie auf **Aktualisieren** (🔄), um die aktuelle Ansicht neu zu laden
- Klicken Sie auf **Exportieren** (📥), um Berichte herunterzuladen

---

## KPI-Karten

Vier wichtige Metrikkarten werden oben angezeigt:

### 1. Gesamtumsatz
- **Wert**: Gesamtumsatz für den ausgewählten Zeitraum
- **Symbol**: 💵 Eurozeichen
- **Trend**: Aufwärts-/Abwärts-Indikator
- **Farbe**: Grün

### 2. Gesamtansprüche
- **Wert**: Anzahl eingereichter Ansprüche
- **Symbol**: 📄 Dokument
- **Trend**: Neutraler Indikator
- **Farbe**: Blau

### 3. Bezahlte Anspruchsquote
- **Wert**: Prozentsatz der bezahlten Ansprüche
- **Symbol**: ✅ Häkchen
- **Trend**: Aufwärts (>80%) oder Abwärts
- **Farbe**: Grün oder Rot

### 4. Ausstehende Ansprüche
- **Wert**: Ansprüche in Bearbeitung
- **Symbol**: ⏰ Uhr
- **Trend**: Neutral
- **Farbe**: Gelb

---

## Analyse-Tabs

### Übersicht-Tab

Standardansicht zeigt:

**Umsatzdiagramm:**
- Monatliche Umsatztrends
- Linien- oder Balkendiagramm-Visualisierung
- Vergleich mit Vorperioden

**Anspruchsanalyse:**
- Ansprüche nach Status (Kreisdiagramm)
- Aufschlüsselung Genehmigt, Abgelehnt, Ausstehend
- Durchschnittliche Bearbeitungszeiten

**Top-Zahler:**
- Rangliste der Versicherungszahler
- Zahlungsbeträge
- Prozentsatz des Gesamtumsatzes

---

### Umsatz-Tab

Detaillierte Umsatzanalyse:

**Umsatztrend-Diagramm:**
- Monatliche/Quartalsaufschlüsselung
- Umsatz über Zeit
- Vergleich mit Zielen

**Umsatz nach Quelle:**
- Versicherungszahlungen
- Patientenzahlungen
- Sonstige Einnahmen

**Umsatzmetriken:**
| Metrik | Beschreibung |
|--------|--------------|
| Gesamtumsatz | Bruttoumsatz |
| Durchschnitt pro Besuch | Umsatz pro Termin |
| Inkassoquote | Prozentsatz des abgerechneten Betrags, der eingezogen wurde |

---

### Ansprüche-Tab

Versicherungsanspruchsanalyse:

**Anspruchsstatus-Übersicht:**
| Status | Beschreibung |
|--------|--------------|
| Genehmigt | Von Versicherung bezahlte Ansprüche |
| Abgelehnt | Zurückgewiesene Ansprüche |
| Ausstehend | In Prüfung |
| Einspruch | Ablehnung wird angefochten |

**Anspruchsanalyse-Diagramm:**
- Statusverteilung (Kreisdiagramm)
- Ansprüche nach Zahler (Balkendiagramm)
- Ablehnungsquoten-Trends

**Anspruchsmetriken:**
| Metrik | Beschreibung |
|--------|--------------|
| Gesamtansprüche | Anzahl der Ansprüche |
| Genehmigungsquote | Genehmigter Prozentsatz |
| Durchschn. Bearbeitungszeit | Tage bis zur Lösung |
| Ablehnungsquote | Abgelehnter Prozentsatz |

---

### Zahlungen-Tab

Zahlungsverfolgung und -analyse:

**Zahlungsquellen:**
| Quelle | Beschreibung |
|--------|--------------|
| Versicherung | Drittzahler |
| Selbstzahler | Direkte Patientenzahlung |
| Bar | Barzahlung vor Ort |
| Karte | Kredit-/Debitkarte |

**Zahlungsmethoden:**
- Bargeld
- Kreditkarte
- Debitkarte
- Banküberweisung
- Scheck

**Kürzliche Zahlungen:**
- Liste der letzten Zahlungstransaktionen
- Betrag, Quelle, Methode, Status
- Schnellübersicht der Zahlungsaktivität

**Zahlungsmetriken:**
| Metrik | Beschreibung |
|--------|--------------|
| Gesamtzahlungen | Summe aller Zahlungen |
| Zahlungsanzahl | Anzahl der Transaktionen |
| Durchschnittszahlung | Durchschnittlicher Zahlungsbetrag |

---

## Key Performance Indicators (KPIs)

### KPI-Bereich

Zeigt für Ihre Praxis konfigurierte KPIs:

| KPI | Beschreibung | Ziel |
|-----|--------------|------|
| Inkassoquote | % des abgerechneten Betrags, der eingezogen wurde | 95% |
| Ablehnungsquote | % der abgelehnten Ansprüche | <5% |
| Tage in Außenständen | Durchschnittliche Tage bis zum Inkasso | <30 |
| Patientenvolumen | Patienten pro Monat | Variiert |
| Umsatz pro Besuch | Durchschn. Umsatz pro Termin | Variiert |

### KPI-Kartenanzeige

Jeder KPI zeigt:
- KPI-Name
- Kategorie-Badge
- Beschreibung
- Zielwert (wenn festgelegt)
- Aktueller Wert (wenn berechnet)
- Warnstatus

---

## Diagramme und Visualisierungen

### Verwendete Diagrammtypen

| Diagrammtyp | Verwendet für |
|-------------|---------------|
| Liniendiagramm | Trends über Zeit |
| Balkendiagramm | Kategorienvergleiche |
| Kreisdiagramm | Verteilungsaufschlüsselung |
| Flächendiagramm | Volumen über Zeit |

### Diagramminteraktionen

- **Hover**: Datenpunktdetails anzeigen
- **Legende klicken**: Datenserien ein-/ausblenden
- **Zoom**: Scrollen zum Anpassen des Datumsbereichs
- **Exportieren**: Diagrammbild herunterladen

---

## Daten exportieren

### Exportoptionen

1. Klicken Sie auf den **Exportieren**-Button
2. Wählen Sie das Format:
   - PDF-Bericht
   - Excel-Tabelle
   - CSV-Daten

### Was enthalten ist

| Berichtstyp | Inhalt |
|-------------|--------|
| Vollständiges Dashboard | Alle Metriken und Diagramme |
| Umsatzbericht | Umsatzdaten und Trends |
| Anspruchsbericht | Anspruchsanalysedaten |
| Zahlungsbericht | Zahlungstransaktionen |

---

## Datenaktualisierung

### Automatische Aktualisierung

- Daten werden aktualisiert, wenn Sie Filter ändern
- Echtzeitaktualisierungen für kritische Metriken
- Zwischengespeicherte Daten können bis zu 15 Minuten alt sein

### Manuelle Aktualisierung

1. Klicken Sie auf den **Aktualisieren**-Button (🔄)
2. Warten Sie, bis Daten neu geladen werden
3. "Aktualisiere"-Spinner zeigt laufende Aktualisierung

---

## Berichtsmetadaten

Am unteren Rand des Dashboards:

**Berichtsinformationen:**
- Generierungszeitstempel
- Abgedeckter Datumsbereich
- Berichtstyp
- Letzte Aktualisierungszeit

---

## Ihre Metriken verstehen

### Umsatzgesundheitsindikatoren

| Metrik | Gut | Warnung | Handlung erforderlich |
|--------|-----|---------|----------------------|
| Inkassoquote | >95% | 85-95% | <85% |
| Ablehnungsquote | <5% | 5-10% | >10% |
| Tage in Außenständen | <30 | 30-45 | >45 |

### Metriken verbessern

**Niedrige Inkassoquote:**
- Abrechnungsverfahren überprüfen
- Ausstehende Salden nachverfolgen
- Versicherungsinformationen vorab verifizieren

**Hohe Ablehnungsquote:**
- Häufige Ablehnungsgründe prüfen
- Personal in korrekter Kodierung schulen
- Anspruchsberechtigung vor Service verifizieren

**Hohe Tage in Außenständen:**
- Nachverfolgungsverfahren verbessern
- Ansprüche zeitnah einreichen
- Ablehnungen schnell anfechten

---

## Best Practices

### Regelmäßige Überprüfung

1. Dashboard täglich auf dringende Probleme prüfen
2. Wöchentlich auf Trends überprüfen
3. Monatlich für strategische Planung vertiefen
4. Quartalsweise für saisonale Muster vergleichen

### Filter effektiv nutzen

1. Mit breitem Datumsbereich für Übersicht beginnen
2. Für Problemuntersuchung eingrenzen
3. Ähnliche Perioden vergleichen (Monat zu Monat)
4. Spezifische Zahler oder Leistungen verfolgen

### Auf Daten reagieren

1. Ziele für Schlüsselmetriken festlegen
2. Fortschritt regelmäßig überwachen
3. Anomalien sofort untersuchen
4. Erkenntnisse mit dem Team teilen

---

## Fehlerbehebung

### Daten laden nicht

- Internetverbindung prüfen
- Überprüfen, ob Datumsbereich gültig ist
- Engeren Datumsbereich versuchen
- Seite aktualisieren

### Falsche Daten

- Filtereinstellungen überprüfen
- Dateneingabegenauigkeit prüfen
- Auf Synchronisation warten (max. 15 Min)
- Support bei Diskrepanzen kontaktieren

### Diagramme werden nicht angezeigt

- Anderen Browser versuchen
- JavaScript aktivieren
- Browser-Cache leeren
- Werbeblocker überprüfen

### Export funktioniert nicht

- Browser-Download-Einstellungen prüfen
- Pop-ups für die Website erlauben
- Anderes Format versuchen
- Datumsbereichsgröße reduzieren

---

## Plan-Funktionen

Analysefunktionen variieren nach Plan:

| Funktion | Kostenlos | Starter | Professional | Growth |
|----------|-----------|---------|--------------|--------|
| Basis-Dashboard | ✅ | ✅ | ✅ | ✅ |
| Umsatzverfolgung | ❌ | ✅ | ✅ | ✅ |
| Anspruchsanalyse | ❌ | ❌ | ✅ | ✅ |
| Zahlungsanalyse | ❌ | ❌ | ✅ | ✅ |
| Benutzerdefinierte KPIs | ❌ | ❌ | ❌ | ✅ |
| Datenexport | ❌ | ✅ | ✅ | ✅ |
| API-Zugang | ❌ | ❌ | ❌ | ✅ |

---

*Zurück: [Nachrichten und Lead-Verwaltung](./07-kommunikation.md) | Weiter: [Einstellungen und Konfiguration →](./09-einstellungen.md)*
