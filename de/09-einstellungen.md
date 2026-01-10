---
title: Einstellungen
layout: default
parent: Deutsch
nav_order: 9
---

# Einstellungen und Konfiguration

Der Einstellungsbereich ermöglicht es Ihnen, Genkō an die Bedürfnisse Ihrer Praxis anzupassen. Dieser Leitfaden behandelt alle für Administratoren verfügbaren Konfigurationsoptionen.

---

## Zugriff auf Einstellungen

1. Klicken Sie auf **Einstellungen** in der Seitenleiste
2. URL: `/admin/settings`

---

## Einstellungsstruktur

Einstellungen sind in Tabs organisiert:

| Tab | Zweck |
|-----|-------|
| **Konto** | Persönliche Kontoeinstellungen |
| **Praxis** | Praxisfunktions-Toggles |
| **Geschäft** | Organisationsinformationen |
| **Personal** | Teamberechtigungen |
| **Verfügbarkeit** | Standard-Terminplanung |
| **Versicherung** | Versicherungsanbieter |
| **Kommunikation** | Benachrichtigungseinstellungen |
| **Integrationen** | Externe Verbindungen |

---

## Kontoeinstellungen

Persönliche Kontoeinstellungen für den angemeldeten Benutzer.

### Profilinformationen

| Feld | Beschreibung |
|------|--------------|
| Vorname | Ihr Vorname |
| Nachname | Ihr Nachname |
| E-Mail | Konto-E-Mail (Login) |
| Telefon | Kontaktnummer |

### Passwort ändern

1. Aktuelles Passwort eingeben
2. Neues Passwort eingeben
3. Neues Passwort bestätigen
4. **Passwort aktualisieren** klicken

**Passwortanforderungen:**
- Mindestens 8 Zeichen
- Mischung aus Buchstaben und Zahlen empfohlen
- Keine häufigen Passwörter

### Zwei-Faktor-Authentifizierung (Demnächst)

- 2FA für zusätzliche Sicherheit aktivieren
- Authenticator-App oder SMS-Optionen
- Backup-Codes bereitgestellt

### Benachrichtigungseinstellungen

Steuern Sie, welche E-Mails Sie erhalten:

| Benachrichtigung | Beschreibung |
|------------------|--------------|
| Terminerinnerungen | E-Mail für bevorstehende Termine |
| Neue Nachrichten | Benachrichtigung für Patientennachrichten |
| Tageszusammenfassung | Tägliche Praxiszusammenfassung |
| Marketing-Updates | Genkō-Produktaktualisierungen |

---

## Praxiseinstellungen

Funktions-Toggles und allgemeine Praxiseinstellungen.

### Funktions-Toggles

Funktionen aktivieren oder deaktivieren:

| Funktion | Beschreibung |
|----------|--------------|
| **Telemedizin** | Videokonsultationen aktivieren |
| **Patientenportal** | Patienten-Selbstbedienung erlauben |
| **Online-Buchung** | Öffentliche Terminbuchung |
| **SMS-Erinnerungen** | SMS-Erinnerungen |
| **KI-Nachrichten** | KI-unterstützter Patientenchat |

### Abrechnungseinstellungen

| Einstellung | Beschreibung |
|-------------|--------------|
| Standardwährung | Hauptwährung (EUR, USD, etc.) |
| Steuersatz | Anwendbarer Steuerprozentsatz |
| Rechnungspräfix | Benutzerdefinierte Rechnungsnummerierung |

### Termineinstellungen

| Einstellung | Beschreibung |
|-------------|--------------|
| Standarddauer | Standard-Terminlänge |
| Pufferzeit | Minuten zwischen Terminen |
| Buchungsfenster | Wie weit im Voraus Patienten buchen können |
| Stornierungsrichtlinie | Erforderliche Vorlaufzeit |

---

## Geschäftseinstellungen

Einstellungen auf Organisationsebene.

### Organisationsdetails

| Feld | Beschreibung |
|------|--------------|
| Organisationsname | Praxisname |
| Rechtlicher Name | Eingetragener Firmenname |
| Steuer-ID | Geschäftssteuer-Identifikation |
| Telefon | Haupttelefonnummer |
| E-Mail | Allgemeine Kontakt-E-Mail |

### Adresse

| Feld | Beschreibung |
|------|--------------|
| Adresse | Physische Adresszeile 1 |
| Zusatz | Adresszeile 2 |
| Stadt | Stadtname |
| Bundesland | Bundesland |
| Postleitzahl | PLZ |
| Land | Land |

### Branding

| Einstellung | Beschreibung |
|-------------|--------------|
| Logo | Organisations-Logo hochladen |
| Primärfarbe | Marken-Primärfarbe |
| Zeitzone | Standard-Zeitzone |

---

## Personaleinstellungen

Teamverwaltung und Berechtigungen.

### Rollenbasierte Zugriffssteuerung (RBAC)

Konfigurieren Sie, was jede Rolle tun kann:

#### Admin-Berechtigungen
- Vollzugriff auf alle Funktionen
- Nicht änderbar

#### Anbieter-Berechtigungen

| Berechtigung | Standard |
|--------------|----------|
| Alle Patienten anzeigen | ✅ |
| Patientenakten bearbeiten | ✅ |
| Termine verwalten | ✅ |
| Telemedizin-Zugriff | ✅ |
| Analysen anzeigen | ✅ |
| Personal verwalten | ❌ |

#### Pfleger-Berechtigungen

| Berechtigung | Standard |
|--------------|----------|
| Alle Patienten anzeigen | ✅ |
| Basis-Patienteninfo bearbeiten | ✅ |
| Krankenakten anzeigen | ✅ |
| Krankenakten bearbeiten | ❌ |
| Termine verwalten | ✅ |
| Telemedizin-Zugriff | ✅ |

#### Personal-Berechtigungen

| Berechtigung | Standard |
|--------------|----------|
| Basis-Patienteninfo anzeigen | ✅ |
| Patientenakten bearbeiten | ❌ |
| Krankenakten anzeigen | ❌ |
| Termine verwalten | ✅ |
| Telemedizin-Zugriff | ❌ |

### Berechtigungen anpassen

1. Rollenbereich finden
2. Einzelne Berechtigungen ein-/ausschalten
3. **Änderungen speichern** klicken

---

## Verfügbarkeitseinstellungen

Standard-Terminplanungskonfiguration.

### Geschäftszeiten

Standard-Öffnungszeiten festlegen (beeinflusst öffentliche Buchung):

| Einstellung | Beschreibung |
|-------------|--------------|
| Geöffnete Tage | An welchen Tagen Sie arbeiten |
| Öffnungszeit | Tägliche Öffnungszeit |
| Schließzeit | Tägliche Schließzeit |
| Zeitzone | Betriebs-Zeitzone |

### Termintypen

Verfügbare Termintypen konfigurieren:

| Typ | Dauer | Farbe |
|-----|-------|-------|
| Neuer Patient | 60 Min | Blau |
| Nachuntersuchung | 30 Min | Grün |
| Jahresuntersuchung | 45 Min | Lila |
| Beratung | 20 Min | Orange |
| Telemedizin | 30 Min | Cyan |

### Termintypen hinzufügen

1. **Typ hinzufügen** klicken
2. Name und Dauer eingeben
3. Anzeigefarbe wählen
4. Verfügbarkeitsbeschränkungen festlegen
5. **Speichern** klicken

### Buchungsregeln

| Regel | Beschreibung |
|-------|--------------|
| Mindestvorlauf | Stunden bevor Termin gebucht werden kann |
| Max. Vorausbuchung | Tage im Voraus für Buchung erlaubt |
| Buchung am selben Tag | Erlauben/Nicht erlauben |
| Überlappungsverhinderung | Doppelbuchungen blockieren |

---

## Versicherungseinstellungen

Akzeptierte Versicherungsanbieter verwalten.

### Versicherungsanbieterliste

Tabelle der konfigurierten Versicherer:

| Spalte | Beschreibung |
|--------|--------------|
| Anbietername | Versicherungsgesellschaft |
| Zahler-ID | Elektronische Zahler-ID |
| Status | Aktiv/Inaktiv |
| Aktionen | Bearbeiten, Löschen |

### Versicherungsanbieter hinzufügen

1. **Anbieter hinzufügen** klicken
2. Details eingeben:
   - Anbietername
   - Zahler-ID
   - Kontakttelefon
   - Einreichungstyp (Elektronisch/Papier)
3. **Speichern** klicken

### Versicherungsanbieter bearbeiten

1. Bearbeiten-Symbol in der Anbieterzeile klicken
2. Felder ändern
3. **Speichern** klicken

### Anbieter deaktivieren

1. Status auf Inaktiv umschalten
2. Anbieter wird bei neuen Ansprüchen ausgeblendet
3. Bestehende Ansprüche bleiben erhalten

---

## Kommunikationseinstellungen

Patientenkommunikation konfigurieren.

### E-Mail-Einstellungen

| Einstellung | Beschreibung |
|-------------|--------------|
| Absendername | Absendername in E-Mails |
| Antwort-E-Mail | Wohin Antworten gehen |
| E-Mail-Fußzeile | Benutzerdefinierter Fußzeilentext |

### Erinnerungseinstellungen

| Einstellung | Beschreibung |
|-------------|--------------|
| Terminerinnerungen | Aktivieren/Deaktivieren |
| Erinnerungszeit | Wann senden (24h, 48h, etc.) |
| SMS-Erinnerungen | SMS-Erinnerungen aktivieren |

### Vorlagen (Demnächst)

Nachrichtenvorlagen anpassen:
- Terminbestätigung
- Terminerinnerung
- Stornierungsbenachrichtigung
- Nachbereitungsnachrichten

---

## Integrationen

Externe Dienste verbinden.

### Verfügbare Integrationen

| Integration | Status | Zweck |
|-------------|--------|-------|
| Stripe | Verfügbar | Zahlungsabwicklung |
| Google Kalender | Demnächst | Kalender-Synchronisation |
| QuickBooks | Demnächst | Buchhaltung |
| Zoom | Demnächst | Telemedizin |

### Stripe-Integration

1. Zum Integrationen-Tab navigieren
2. **Mit Stripe verbinden** klicken
3. Bei Stripe autorisieren
4. Verbindung erscheint als Aktiv

### API-Zugang (Growth-Plan)

Für Growth-Plan-Abonnenten:
- API-Schlüssel-Generierung
- Webhook-Konfiguration
- Rate-Limit-Informationen

---

## Einstellungen speichern

### Automatisches Speichern

Einige Einstellungen speichern automatisch:
- Toggle-Schalter
- Dropdown-Auswahlen
- Einzelfeldaktualisierungen

### Manuelles Speichern

Andere erfordern explizites Speichern:
- Komplexe Formulare
- Massenänderungen
- Berechtigungsmatrizen

**Achten Sie auf:**
- "Gespeichert"-Bestätigungstoast
- "Speichern"-Button-Statusänderung
- Ladespinner beim Speichern

---

## Best Practices

### Ersteinrichtung

1. Geschäftseinstellungen zuerst abschließen
2. Versicherungsanbieter konfigurieren
3. Verfügbarkeitsstandards festlegen
4. Termintypen anpassen
5. Personalberechtigungen überprüfen

### Regelmäßige Wartung

1. Berechtigungen vierteljährlich überprüfen
2. Versicherung jährlich aktualisieren
3. Kontaktinformationen verifizieren
4. Integrationen regelmäßig testen

### Sicherheit

1. Starke Passwörter verwenden
2. 2FA aktivieren, wenn verfügbar
3. Zugriffsprotokolle überprüfen
4. Berechtigungsvergabe minimieren

---

## Fehlerbehebung

### Einstellungen werden nicht gespeichert

- Internetverbindung prüfen
- Nach Validierungsfehlern suchen
- Nach unten scrollen für Fehlermeldungen
- Aktualisieren und erneut eingeben

### Berechtigungsänderungen funktionieren nicht

- Benutzer muss sich möglicherweise ab- und wieder anmelden
- Browser-Cache leeren
- Überprüfen, ob richtige Rolle ausgewählt ist

### Integrationsverbindung fehlgeschlagen

- Anmeldedaten überprüfen
- Drittanbieterdienst verfügbar prüfen
- Fehlermeldungsdetails überprüfen
- Support kontaktieren

---

## Einstellungen nach Rolle

| Einstellungsbereich | Admin | Anbieter | Pfleger | Personal |
|---------------------|-------|----------|---------|----------|
| Konto | Eigenes | Eigenes | Eigenes | Eigenes |
| Praxis | ✅ | ❌ | ❌ | ❌ |
| Geschäft | ✅ | ❌ | ❌ | ❌ |
| Personal | ✅ | ❌ | ❌ | ❌ |
| Verfügbarkeit | ✅ | Eigene | ❌ | ❌ |
| Versicherung | ✅ | ❌ | ❌ | ❌ |
| Kommunikation | ✅ | ❌ | ❌ | ❌ |
| Integrationen | ✅ | ❌ | ❌ | ❌ |

---

*Zurück: [Analyse-Dashboard](./08-analysen.md) | Weiter: [Abrechnung und Abonnement →](./10-abrechnung.md)*
