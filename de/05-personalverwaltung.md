# Personalverwaltung

Eine effektive Teamverwaltung ist entscheidend für einen reibungslosen Praxisbetrieb. Dieser Leitfaden behandelt das Hinzufügen, Verwalten und Konfigurieren von Mitarbeitern in Genkō.

---

## Zugriff auf die Personalverwaltung

1. Klicken Sie auf **Personal** in der Seitenleiste
2. Oder navigieren Sie über Einstellungen → Personal-Tab
3. URL: `/admin/staff`

---

## Personal-Übersicht

Die Personalseite zeigt:
- **Header**: Titel und Aktionsbuttons
- **Suche und Filter**: Personal schnell finden
- **Personallimit-Warnung**: Zeigt Nutzung gegenüber Planlimit
- **Personalliste**: Tabelle aller Teammitglieder

---

## Personalrollen

Genkō hat vier Hauptpersonalrollen:

### Admin
- Vollzugriff auf alle Funktionen
- Kann andere Mitarbeiter verwalten
- Zugriff auf Abrechnung und Einstellungen
- Kann alle Patienten und Termine sehen

### Anbieter
- Gesundheitsdienstleister (Ärzte, Fachärzte)
- Kann zugewiesene Patienten verwalten
- Zugriff auf Terminplanung und Telemedizin
- Kann Krankenakten einsehen

### Pfleger
- Klinisches Unterstützungspersonal
- Kann bei der Patientenversorgung assistieren
- Begrenzte Bearbeitungsmöglichkeiten
- Zugriff auf Vitalzeichen und Basisdaten

### Personal
- Verwaltungspersonal
- Basis-Patienteneinsicht
- Terminplanungsunterstützung
- Keine Bearbeitung von Krankenakten

---

## Mitarbeiter hinzufügen

### Schritt 1: Personal hinzufügen klicken

Klicken Sie auf den **Personal hinzufügen**-Button in der oberen rechten Ecke.

### Schritt 2: Mitarbeiterinformationen eingeben

**Persönliche Informationen:**
| Feld | Erforderlich | Beschreibung |
|------|--------------|--------------|
| Vorname | Ja | Vorname des Mitarbeiters |
| Nachname | Ja | Nachname des Mitarbeiters |
| E-Mail | Ja | Geschäftliche E-Mail-Adresse |
| Telefon | Nein | Kontaktnummer |

**Rolle und Zugriff:**
| Feld | Erforderlich | Beschreibung |
|------|--------------|--------------|
| Rolle | Ja | Admin, Anbieter, Pfleger oder Personal |
| Titel | Nein | Berufstitel (z.B. "Dr.", "Prof.") |
| Fachgebiet | Nein | Spezialisierungsbereich (für Anbieter) |

**Lizenzinformationen (für Anbieter/Pfleger):**
| Feld | Erforderlich | Beschreibung |
|------|--------------|--------------|
| Lizenznummer | Nein | Berufliche Lizenznummer |
| Lizenzablauf | Nein | Ablaufdatum der Lizenz |

### Schritt 3: Speichern und Einladen

1. Klicken Sie auf **Speichern**, um das Mitarbeiterkonto zu erstellen
2. Eine Einladungs-E-Mail wird automatisch gesendet
3. Der Mitarbeiter muss sein Passwort festlegen, um zu aktivieren

---

## Personal importieren (CSV)

Für Massen-Personalimporte:

1. Klicken Sie auf den **Personal importieren**-Button
2. Laden Sie die CSV-Vorlage herunter
3. Füllen Sie die Mitarbeiterinformationen aus
4. Laden Sie die ausgefüllte Datei hoch
5. Überprüfen und bestätigen Sie den Import

### CSV-Vorlagenfelder

| Spalte | Erforderlich | Beschreibung |
|--------|--------------|--------------|
| first_name | Ja | Vorname |
| last_name | Ja | Nachname |
| email | Ja | E-Mail-Adresse |
| role | Ja | admin, provider, nurse, staff |
| phone | Nein | Telefonnummer |
| title | Nein | Berufstitel |
| specialization | Nein | Fachgebiet |
| license_number | Nein | Lizenznummer |
| license_expiry | Nein | JJJJ-MM-TT Format |

---

## Mitarbeiter verwalten

### Mitarbeiterdetails anzeigen

1. Klicken Sie auf die Mitarbeiterzeile
2. Oder klicken Sie auf das Anzeigen-Symbol (👁) in den Aktionen
3. Das vollständige Profil mit allen Details öffnet sich

### Mitarbeiterprofil-Bereiche

**Persönliche Informationen:**
- Name, Titel, Kontaktdetails
- Rolle und Fachgebiet
- Kontostatus

**Zugriffsinformationen:**
- Letztes Anmeldedatum
- Kontostatus (Aktiv/Inaktiv)
- E-Mail-Verifizierungsstatus

**Lizenzinformationen:**
- Lizenznummer
- Ablaufdatum
- Erneuerungserinnerungen

---

### Mitarbeiterinformationen bearbeiten

1. Klicken Sie auf das Bearbeiten-Symbol (✏️) oder öffnen Sie die Mitarbeiterdetails
2. Nehmen Sie Änderungen an erlaubten Feldern vor
3. Klicken Sie auf **Speichern**

**Von Admin bearbeitbar:**
- Alle persönlichen Informationen
- Rollenzuweisung
- Lizenzdetails
- Status

---

### Mitarbeiterpasswort zurücksetzen

Wenn ein Mitarbeiter sein Passwort vergessen hat:

1. Finden Sie den Mitarbeiter in der Liste
2. Klicken Sie auf das Dropdown-Menü (⋮)
3. Wählen Sie **Passwort zurücksetzen**
4. Bestätigen Sie die Aktion
5. Eine Passwort-Reset-E-Mail wird an den Mitarbeiter gesendet

**Hinweis:** Mitarbeiter können auch "Passwort vergessen" auf der Anmeldeseite verwenden.

---

### Personal aktivieren/deaktivieren

#### Personal deaktivieren

Verwenden Sie dies, wenn ein Mitarbeiter geht oder eine vorübergehende Sperrung benötigt wird:

1. Finden Sie den Mitarbeiter
2. Klicken Sie auf das Dropdown-Menü (⋮)
3. Wählen Sie **Deaktivieren**
4. Bestätigen Sie die Aktion

**Auswirkungen der Deaktivierung:**
- Mitarbeiter kann sich nicht anmelden
- Vorhandene Termine bleiben
- Daten werden beibehalten
- Kann später reaktiviert werden

#### Personal reaktivieren

1. Filtern Sie, um inaktives Personal anzuzeigen
2. Finden Sie den Mitarbeiter
3. Klicken Sie auf **Aktivieren**

---

### Personal löschen

**Warnung:** Das Löschen von Personal ist dauerhaft und kann nicht rückgängig gemacht werden.

1. Finden Sie den Mitarbeiter
2. Klicken Sie auf das Dropdown-Menü (⋮)
3. Wählen Sie **Löschen**
4. Geben Sie bei Bedarf eine Bestätigung ein
5. Klicken Sie auf **Löschen bestätigen**

**Hinweise:**
- Der Kontoinhaber kann nicht gelöscht werden
- Weisen Sie Patienten neu zu, bevor Sie Anbieter löschen
- Historische Aufzeichnungen werden beibehalten

---

## Rollenberechtigungen

### Berechtigungsmatrix

| Berechtigung | Admin | Anbieter | Pfleger | Personal |
|--------------|-------|----------|---------|----------|
| Basis-Patienteninfo anzeigen | ✅ | ✅ | ✅ | ✅ |
| Basis-Patienteninfo bearbeiten | ✅ | ✅ | ✅ | ❌ |
| Krankenakten anzeigen | ✅ | ✅ | ✅ | ❌ |
| Krankenakten bearbeiten | ✅ | ✅ | ❌ | ❌ |
| Termine verwalten | ✅ | ✅ | ✅ | ✅ |
| Telemedizin-Zugriff | ✅ | ✅ | ✅ | ❌ |
| Personal verwalten | ✅ | ❌ | ❌ | ❌ |
| Einstellungszugriff | ✅ | ❌ | ❌ | ❌ |
| Abrechnung anzeigen | Nur Inhaber | ❌ | ❌ | ❌ |

### Berechtigungen anpassen

Admins können Rollenberechtigungen in den Einstellungen anpassen:

1. Gehen Sie zu **Einstellungen** → **Personal**-Tab
2. Finden Sie den Bereich **Rollenbasierte Zugriffskontrollen**
3. Passen Sie Kontrollkästchen für jede Rolle an
4. Klicken Sie auf **Speichern**

---

## Personallimit-Verwaltung

Ihr Abonnementplan bestimmt, wie viele Mitarbeiter Sie hinzufügen können:

| Plan | Personallimit |
|------|---------------|
| Kostenlos | 1 (nur Inhaber) |
| Starter | 3 |
| Professional | 10 |
| Growth | Unbegrenzt |

### Wenn Sie das Limit erreichen

- Ein Warnbanner erscheint auf der Personalseite
- Der Personal hinzufügen-Button ist deaktiviert
- Optionen:
  1. Inaktives Personal deaktivieren
  2. Ihren Plan upgraden

---

## Suche und Filterung

### Schnellsuche
- Suchen Sie nach Name, E-Mail oder Telefon
- Ergebnisse werden während der Eingabe aktualisiert

### Statusfilter
- Alles Personal
- Nur Aktive
- Nur Inaktive

### Rollenfilter
- Alle Rollen
- Admin
- Anbieter
- Pfleger
- Personal

---

## Personaleinladungen

### Einladungsprozess

1. Mitarbeiter wird von Admin erstellt
2. Einladungs-E-Mail wird automatisch gesendet
3. Mitarbeiter klickt auf Einladungslink
4. Mitarbeiter legt Passwort fest
5. Konto wird aktiviert

### Einladungsstatus

| Status | Beschreibung |
|--------|--------------|
| Ausstehend | E-Mail gesendet, noch nicht akzeptiert |
| Akzeptiert | Passwort festgelegt, Konto aktiv |
| Abgelaufen | Link abgelaufen (erneutes Senden erforderlich) |

### Einladungen erneut senden

1. Finden Sie den Mitarbeiter
2. Klicken Sie auf das Dropdown-Menü
3. Wählen Sie **Einladung erneut senden**

---

## Best Practices

### Personal hinzufügen
1. Verwenden Sie nur geschäftliche E-Mail-Adressen
2. Weisen Sie die minimal erforderliche Rolle zu
3. Vervollständigen Sie Lizenzinformationen für Anbieter
4. Richten Sie die Verfügbarkeit nach der Kontoerstellung ein

### Sicherheit
1. Überprüfen Sie den Personalzugriff regelmäßig
2. Deaktivieren Sie ausscheidendes Personal sofort
3. Verwenden Sie starke Passwortanforderungen
4. Aktivieren Sie Zwei-Faktor-Authentifizierung (wenn verfügbar)

### Organisation
1. Verwenden Sie konsistente Namenskonventionen
2. Halten Sie Titel und Fachgebiete aktuell
3. Verfolgen Sie Lizenzablaufdaten
4. Dokumentieren Sie Rollenzuweisungen

---

## Fehlerbehebung

### Personal erhält keine Einladung
- Überprüfen Sie, ob die E-Mail-Adresse korrekt ist
- Bitten Sie den Mitarbeiter, den Spam-Ordner zu überprüfen
- Senden Sie die Einladung erneut
- Überprüfen Sie, ob die E-Mail-Domain nicht blockiert ist

### Kann kein weiteres Personal hinzufügen
- Überprüfen Sie die aktuellen Planlimits
- Zählen Sie aktives vs. Gesamtpersonal
- Erwägen Sie ein Plan-Upgrade
- Deaktivieren Sie ungenutzte Konten

### Personal kann sich nicht anmelden
- Überprüfen Sie, ob das Konto aktiv ist
- Bestätigen Sie die korrekte E-Mail
- Setzen Sie das Passwort bei Bedarf zurück
- Bestätigen Sie, dass die Einladung akzeptiert wurde

### Berechtigungsprobleme
- Überprüfen Sie die Rollenzuweisung
- Prüfen Sie benutzerdefinierte Berechtigungseinstellungen
- Admin muss möglicherweise den Zugriff anpassen

---

*Zurück: [Patientenverwaltung](./04-patientenverwaltung.md) | Weiter: [Terminplanung und Kalender →](./06-terminplanung.md)*
