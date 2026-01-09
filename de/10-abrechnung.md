---
title: Abrechnung
layout: default
parent: Deutsch
nav_order: 10
---

# Abrechnung und Abonnement

Der Abrechnungsbereich ermöglicht Kontoinhabern die Verwaltung von Abonnements, Zahlungsmethoden und die Anzeige von Rechnungen. Nur Kontoinhaber haben Zugriff auf Abrechnungsfunktionen.

---

## Zugriff auf Abrechnung

1. Klicken Sie auf **Abrechnung** in der Seitenleiste
2. URL: `/admin/billing`

**Hinweis:** Nur Kontoinhaber können auf den Abrechnungsbereich zugreifen. Wenn Sie ihn nicht in Ihrer Seitenleiste sehen, kontaktieren Sie den Inhaber Ihrer Organisation.

---

## Abrechnungs-Übersicht

Die Abrechnungsseite zeigt:
- **Aktueller Plan**: Ihr aktives Abonnement
- **Nutzungsstatistiken**: Funktionsnutzung gegenüber Limits
- **Zahlungsmethode**: Gespeicherte Zahlungsinformationen
- **Abrechnungsverlauf**: Frühere Rechnungen und Transaktionen

---

## Aktuelles Abonnement

### Plan-Informationen

| Element | Beschreibung |
|---------|--------------|
| Planname | Ihr aktueller Plan (Starter, Professional, etc.) |
| Status | Aktiv, Testversion, Überfällig, Gekündigt |
| Abrechnungszyklus | Monatlich oder Jährlich |
| Preis | Monatliche/jährliche Kosten |
| Verlängerungsdatum | Nächstes Abrechnungsdatum |

### Planstatus-Indikatoren

| Status | Badge-Farbe | Bedeutung |
|--------|-------------|-----------|
| Aktiv | 🟢 Grün | Abonnement ist aktuell |
| Testversion | 🔵 Blau | Im Testzeitraum |
| Überfällig | 🟡 Gelb | Zahlungsproblem |
| Gekündigt | 🔴 Rot | Abonnement beendet |

---

## Ihren Plan verstehen

### Planvergleich

| Funktion | Kostenlos | Starter | Professional | Growth |
|----------|-----------|---------|--------------|--------|
| Preis/Monat | 0€ | 29€ | 99€ | 249€ |
| Mitarbeiter | 1 | 3 | 10 | Unbegrenzt |
| Patienten | 10 | Unbegrenzt | Unbegrenzt | Unbegrenzt |
| Termine | 10/Monat | Unbegrenzt | Unbegrenzt | Unbegrenzt |
| Telemedizin | ❌ | 5/Monat | Unbegrenzt | Unbegrenzt |
| Analysen | Basis | Standard | Erweitert | Erweitert |
| Support | Community | E-Mail | Priorität | Dediziert |

### Funktionslimits

Ihre aktuelle Nutzung wird angezeigt:

```
Mitarbeiter: 3 von 10 verwendet
Telemedizin-Sitzungen: 12 diesen Monat
Speicher: 2,5 GB von 10 GB verwendet
```

---

## Ihren Plan ändern

### Upgrade

1. Klicken Sie auf **Plan upgraden** oder **Plan ändern**
2. Überprüfen Sie verfügbare Pläne
3. Wählen Sie den gewünschten Plan
4. Bestätigen Sie Änderungen
5. Anteilige Gebühren werden sofort berechnet

**Bei Upgrade:**
- Neue Funktionen sofort verfügbar
- Anteilige Berechnung für verbleibenden Abrechnungszeitraum
- Höhere Limits gelten sofort

### Downgrade

1. Klicken Sie auf **Plan ändern**
2. Wählen Sie niedrigeren Plan
3. Überprüfen Sie Auswirkungen (Funktionen, die Sie verlieren)
4. Bestätigen Sie Downgrade
5. Wird im nächsten Abrechnungszyklus wirksam

**Bei Downgrade:**
- Aktuelle Funktionen bis zum Periodenende verfügbar
- Neue Limits gelten im nächsten Abrechnungszyklus
- Keine Erstattung für ungenutzte Zeit
- Daten, die neue Limits überschreiten, müssen behandelt werden

### Abrechnungszyklus wechseln

Zwischen monatlicher und jährlicher Abrechnung wechseln:

| Zyklus | Vorteil |
|--------|---------|
| Monatlich | Flexibilität, nach Nutzung zahlen |
| Jährlich | ~20% Rabatt, fester Preis |

1. Klicken Sie auf **Abrechnungszyklus ändern**
2. Neuen Preis überprüfen
3. Änderung bestätigen
4. Neuer Zyklus gilt bei nächster Verlängerung

---

## Testzeitraum

### Während der Testversion

- Vollzugriff auf Funktionen des gewählten Plans
- 14 Tage Dauer
- Keine Zahlung für den Start erforderlich
- Zahlungsmethode vor Ende der Testversion erforderlich

### Testversion endet bald

Sie erhalten Erinnerungen:
- 7 Tage vor Testende
- 3 Tage vor Testende
- 1 Tag vor Testende

### Nach Ende der Testversion

**Wenn Zahlungsmethode hinzugefügt:**
- Automatische Umwandlung in bezahltes Abonnement
- Erste Gebühr wird verarbeitet
- Keine Dienstunterbrechung

**Wenn keine Zahlungsmethode:**
- Zugriff auf Kostenlos-Plan-Funktionen beschränkt
- Daten 30 Tage lang bewahrt
- Jederzeit upgraden, um Zugriff wiederherzustellen

---

## Zahlungsmethoden

### Zahlungsmethode hinzufügen

1. Klicken Sie auf **Zahlungsmethode hinzufügen**
2. Kartendetails eingeben:
   - Kartennummer
   - Ablaufdatum
   - CVC
   - Rechnungsadresse
3. Klicken Sie auf **Speichern**

**Unterstützte Zahlungsmethoden:**
- Kreditkarten (Visa, Mastercard, Amex, Discover)
- Debitkarten
- Einige internationale Karten

### Zahlungsmethoden verwalten

**Als Standard festlegen:**
- Klicken Sie bei der Karte auf **Als Standard festlegen**
- Standardkarte wird für alle Gebühren verwendet

**Zahlungsmethode entfernen:**
- Klicken Sie auf **Entfernen**
- Mindestens eine Methode für bezahlte Pläne erforderlich
- Kann nicht entfernt werden bei ausstehenden Gebühren

### Zahlungsinformationen aktualisieren

1. Klicken Sie auf **Bearbeiten** bei der Zahlungsmethode
2. Rechnungsadresse aktualisieren
3. Für Kartenaktualisierung: Alte entfernen und neue hinzufügen

---

## Rechnungen und Belege

### Rechnungen anzeigen

Alle früheren Rechnungen werden aufgelistet:

| Spalte | Beschreibung |
|--------|--------------|
| Datum | Rechnungsdatum |
| Rechnung # | Eindeutige Rechnungsnummer |
| Betrag | Berechneter Gesamtbetrag |
| Status | Bezahlt, Ausstehend, Fehlgeschlagen |
| Aktionen | Anzeigen, Herunterladen |

### Rechnungen herunterladen

1. Rechnung in der Liste finden
2. **Herunterladen** klicken (📥)
3. PDF wird automatisch heruntergeladen

### Rechnungsdetails

Auf eine Rechnung klicken, um zu sehen:
- Einzelposten
- Angewandte Steuern
- Verwendete Zahlungsmethode
- Transaktions-ID

---

## Nutzungsüberwachung

### Echtzeit-Nutzung

Verfolgen Sie Ihre Nutzung gegenüber Planlimits:

**Mitarbeiter:**
```
Aktuell: 5
Limit: 10
Status: ✅ Innerhalb des Limits
```

**Monatliche Termine:**
```
Aktuell: 142
Limit: Unbegrenzt
Status: ✅ Kein Limit
```

**Telemedizin-Sitzungen:**
```
Aktuell: 23
Limit: 30
Status: ⚠️ Nähert sich Limit
```

### Nutzungswarnungen

Sie erhalten Warnungen wenn:
- Sie sich 80% eines Limits nähern
- Sie bei 100% eines Limits sind
- Sie ein Limit überschreiten

---

## Limitverstöße

### Wenn Sie Limits überschreiten

Wenn Sie Ihre Planlimits überschreiten:

1. **Warnbanner**: Erscheint auf betroffenen Seiten
2. **Funktionsbeschränkungen**: Einige Funktionen können begrenzt sein
3. **Kulanzperiode**: Kurze Zeit zur Problembehebung
4. **Lösungsoptionen**:
   - Plan upgraden
   - Nutzung reduzieren
   - Support kontaktieren

### Verstöße beheben

**Option 1: Plan upgraden**
- Im Warnbanner auf **Upgraden** klicken
- Plan mit höheren Limits wählen
- Beschränkungen werden sofort aufgehoben

**Option 2: Nutzung reduzieren**
- Ungenutzte Mitarbeiterkonten deaktivieren
- Alte Daten archivieren
- Auf nächsten Abrechnungszyklus warten

---

## Kündigung

### Ihr Abonnement kündigen

1. Klicken Sie auf **Abonnement kündigen**
2. Kündigungsgrund auswählen
3. Überprüfen, was Sie verlieren
4. Kündigung bestätigen

### Nach der Kündigung

- Zugriff bis Ende des Abrechnungszeitraums
- Keine weiteren Gebühren
- Daten 30 Tage lang bewahrt
- Jederzeit reaktivierbar

### Reaktivieren

1. Zur Abrechnungsseite gehen
2. **Abonnement reaktivieren** klicken
3. Plan auswählen
4. Zahlungsmethode hinzufügen/bestätigen
5. Abonnement wiederhergestellt

---

## Abrechnungs-Support

### Häufige Probleme

**Zahlung fehlgeschlagen:**
1. Kartenablaufdatum prüfen
2. Rechnungsadresse verifizieren
3. Bank kontaktieren
4. Andere Karte versuchen

**Unerwartete Gebühr:**
1. Rechnungsdetails überprüfen
2. Auf anteilige Gebühren prüfen
3. Support kontaktieren, wenn unklar

**Erstattungsanfrage:**
- Support innerhalb von 30 Tagen kontaktieren
- Rechnungsnummer angeben
- Situation erklären

### Abrechnungs-Support kontaktieren

1. Auf der Abrechnungsseite **Support kontaktieren** klicken
2. Oder E-Mail an billing@genko.app
3. Organisationsname und Rechnungsnummern angeben

---

## Best Practices

### Kosten verwalten

1. Jährliche Abrechnung für Einsparungen wählen
2. Plan an tatsächliche Bedürfnisse anpassen
3. Ungenutzte Mitarbeiterkonten deaktivieren
4. Nutzung regelmäßig überwachen

### Zahlungssicherheit

1. Zahlungsmethode aktuell halten
2. Vor Ablauf aktualisieren
3. Rechnungs-E-Mails überwachen
4. Verdächtige Gebühren sofort melden

### Für Wachstum planen

1. Nutzungstrends verfolgen
2. Vor Erreichen von Limits upgraden
3. Budget für wachsendes Team einplanen
4. Jährliche Pläne für Stabilität erwägen

---

## Fehlerbehebung

### Kann nicht auf Abrechnung zugreifen

- Nur Kontoinhaber können zugreifen
- Organisationsinhaber kontaktieren
- Kontorolle überprüfen

### Zahlung wird nicht verarbeitet

- Kartendetails überprüfen
- Ausreichendes Guthaben sicherstellen
- Andere Karte versuchen
- Bank kontaktieren

### Rechnung nicht erhalten

- Spam-Ordner prüfen
- E-Mail-Adresse in Einstellungen verifizieren
- Von Abrechnungsseite herunterladen

### Planänderung nicht angewendet

- Wirksamkeitsdatum prüfen
- Änderungen können im nächsten Zyklus gelten
- Support für dringende Bedürfnisse kontaktieren

---

## Sicherheit und Compliance

### Zahlungssicherheit

- Alle Zahlungen über Stripe verarbeitet
- PCI-DSS-konform
- Kartennummern niemals auf unseren Servern gespeichert
- Verschlüsselte Übertragung

### Datenschutz

- Abrechnungsinformationen sind privat
- Nur Kontoinhaber haben Zugriff auf Abrechnung
- Audit-Protokolle werden geführt
- HIPAA-konforme Datenverarbeitung

---

*Zurück: [Einstellungen und Konfiguration](./09-einstellungen.md) | Weiter: [Kurzreferenzhandbuch →](./11-kurzreferenz.md)*
