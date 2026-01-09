# Patientenverwaltung

Die Patientenverwaltung ist das Herzstück von Genkō. Dieser Abschnitt behandelt alles, was Sie über das Hinzufügen, Verwalten und Organisieren Ihrer Patientenakten wissen müssen.

---

## Zugriff auf Patienten

1. Klicken Sie auf **Patienten** in der Seitenleiste
2. Oder verwenden Sie die Schnellaktion "Patient hinzufügen" vom Dashboard
3. URL: `/admin/patients`

---

## Patienten-Übersichtsseite

Die Patientenseite zeigt:
- **Header**: Seitentitel und Aktionsbuttons
- **Suche und Filter**: Patienten schnell finden
- **Patientenliste**: Tabellen-/Kartenansicht aller Patienten
- **Paginierung**: Durch große Patientenlisten navigieren

---

## Patienten hinzufügen

### Methode 1: Manuelle Eingabe

1. Klicken Sie auf den **Patient hinzufügen**-Button (+Symbol)
2. Füllen Sie das Patientenformular aus
3. Klicken Sie auf **Speichern**

#### Patientenformularfelder

**Grundinformationen (Erforderlich):**
| Feld | Beschreibung |
|------|--------------|
| Vorname | Vorname des Patienten |
| Nachname | Nachname des Patienten |
| Geburtsdatum | Geburtsdatum für Altersberechnung |

**Kontaktinformationen (Empfohlen):**
| Feld | Beschreibung |
|------|--------------|
| E-Mail | E-Mail-Adresse des Patienten |
| Telefon | Primäre Kontaktnummer |
| Adresse | Wohnadresse |

**Medizinische Informationen:**
| Feld | Beschreibung |
|------|--------------|
| Aktenzeichen | Eindeutige Kennung (automatisch generiert wenn leer) |
| Blutgruppe | A+, A-, B+, B-, AB+, AB-, O+, O- |
| Geschlecht | Männlich, Weiblich, Sonstig, Keine Angabe |
| Bevorzugte Sprache | Sprachpräferenz für Kommunikation |

**Lebensstil-Informationen:**
| Feld | Beschreibung |
|------|--------------|
| Raucherstatus | Nie, Ehemaliger, Aktuell |
| Alkoholkonsum | Keiner, Gelegentlich, Moderat, Häufig |

**Versicherungsinformationen:**
| Feld | Beschreibung |
|------|--------------|
| Versicherungsanbieter | Name der Versicherungsgesellschaft |
| Versicherungsnummer | Versicherungspolicennummer |
| Gruppennummer | Gruppennummer (falls zutreffend) |

---

### Methode 2: CSV-Import

Für Massen-Patientenimporte:

1. Klicken Sie auf den **Patienten importieren**-Button
2. Laden Sie die Vorlagendatei herunter (optional)
3. Ziehen Sie Ihre CSV-Datei per Drag & Drop oder wählen Sie sie aus
4. Überprüfen Sie die Vorschau
5. Wählen Sie die Duplikatbehandlung:
   - **Duplikate überspringen**: Vorhandene Patienten ignorieren
   - **Duplikate aktualisieren**: Mit neuen Daten überschreiben
6. Klicken Sie auf **Import starten**

#### CSV-Vorlagenspalten

| Spalte | Erforderlich | Beschreibung |
|--------|--------------|--------------|
| first_name | Ja | Vorname des Patienten |
| last_name | Ja | Nachname des Patienten |
| date_of_birth | Ja | Format: JJJJ-MM-TT |
| email | Nein | E-Mail-Adresse |
| phone | Nein | Telefonnummer |
| medical_record_number | Nein | Vorhandenes Aktenzeichen |
| gender | Nein | male, female, other |
| blood_type | Nein | Standard-Blutgruppencodes |
| address | Nein | Vollständige Adresse |
| insurance_provider | Nein | Versicherungsgesellschaft |
| policy_number | Nein | Versicherungsnummer |

**Import-Tipps:**
- Bereinigen Sie Ihre Daten vor dem Import
- Verwenden Sie konsistente Datumsformate (JJJJ-MM-TT)
- Entfernen Sie Sonderzeichen aus Telefonnummern
- Stellen Sie sicher, dass eindeutige Kennungen wirklich eindeutig sind

---

## Suche und Filterung

### Schnellsuche
- Geben Sie im Suchfeld ein, um Patienten zu finden
- Durchsucht: Name, E-Mail, Telefon, Aktenzeichen

### Erweiterte Filter
Klicken Sie auf **Erweiterte Filter** zum Filtern nach:
- Aktiv/Inaktiv-Status
- Geschlecht
- Altersbereich
- Versicherungsanbieter
- Primärer Anbieter
- Letztes Besuchsdatum

---

## Patientendetails anzeigen

Klicken Sie auf einen Patienten, um sein vollständiges Profil anzuzeigen:

### Patientenprofil-Tabs

#### 1. Übersicht-Tab
- Grundlegende Demografie
- Kontaktinformationen
- Primärer Anbieter
- Versicherungsdetails
- Schnellstatistiken (Erkrankungen, Medikamente usw.)

#### 2. Krankengeschichte-Tab
- **Erkrankungen**: Aktive und vergangene Diagnosen
- **Allergien**: Allergen, Schweregrad, Reaktion
- **Medikamente**: Aktuelle und vergangene Medikamente
- **Vitalzeichen**: Verlauf der Vitalzeichen

#### 3. Termine-Tab
- Vergangene Termine
- Bevorstehende Termine
- Schnellplanungs-Button

#### 4. Dokumente-Tab
- Hochgeladene Dateien
- Laborergebnisse
- Überweisungsbriefe
- Versicherungsdokumente

#### 5. Notfallkontakte-Tab
- Primärer Notfallkontakt
- Zusätzliche Kontakte
- Beziehung und Telefonnummern

---

## Patienteninformationen bearbeiten

1. Klicken Sie auf die Patientenzeile, um Details zu öffnen
2. Klicken Sie auf den **Bearbeiten**-Button im Dropdown-Menü
3. Nehmen Sie Änderungen im Formular vor
4. Klicken Sie auf **Speichern**

**Bearbeitbare Bereiche:**
- Grundinformationen
- Kontaktdetails
- Medizinische Informationen
- Versicherungsdetails
- Notfallkontakte

---

## Krankenakten verwalten

### Allergien hinzufügen

1. Öffnen Sie die Patientendetails
2. Gehen Sie zum Krankengeschichte-Tab
3. Klicken Sie auf **Allergie hinzufügen**
4. Geben Sie ein:
   - Allergenname
   - Schweregrad (Leicht, Mittel, Schwer)
   - Reaktionstyp
5. Klicken Sie auf **Speichern**

### Erkrankungen hinzufügen

1. Öffnen Sie die Patientendetails
2. Gehen Sie zum Krankengeschichte-Tab
3. Klicken Sie auf **Erkrankung hinzufügen**
4. Geben Sie ein:
   - Erkrankungsname
   - ICD-Code (optional)
   - Status (Aktiv, Gelöst, Chronisch)
   - Schweregrad
   - Beginndatum
5. Klicken Sie auf **Speichern**

### Medikamente hinzufügen

1. Öffnen Sie die Patientendetails
2. Gehen Sie zum Krankengeschichte-Tab
3. Klicken Sie auf **Medikament hinzufügen**
4. Geben Sie ein:
   - Medikamentenname
   - Dosierung
   - Häufigkeit
   - Startdatum
   - Status (Aktiv, Abgesetzt)
5. Klicken Sie auf **Speichern**

---

## Massenaktionen

Wählen Sie mehrere Patienten aus, um Massenaktionen durchzuführen:

### So wählen Sie Patienten aus

1. Aktivieren Sie das Kontrollkästchen neben den Patientennamen
2. Oder klicken Sie auf "Alle auswählen" in der Kopfzeile
3. Die Massenaktionsleiste erscheint automatisch

### Verfügbare Massenaktionen

| Aktion | Beschreibung |
|--------|--------------|
| **Aktivieren** | Ausgewählte Patienten auf aktiv setzen |
| **Deaktivieren** | Ausgewählte Patienten auf inaktiv setzen |
| **Löschen** | Patienten dauerhaft löschen |
| **Exportieren** | Ausgewählte Patientendaten herunterladen |

**Vorsicht:** Löschaktionen können nicht rückgängig gemacht werden. Patientendaten werden dauerhaft gelöscht.

---

## Termine aus der Patientenansicht planen

Planen Sie schnell einen Termin aus dem Patientenprofil:

1. Klicken Sie auf die Patientenzeile, um Details anzuzeigen
2. Klicken Sie auf das **Kalender**-Symbol in den Aktionen
3. Oder navigieren Sie zum Patientenprofil und klicken Sie auf **Termin planen**
4. Füllen Sie das Terminformular aus
5. Klicken Sie auf **Speichern**

---

## Patientenstatus

Patienten können zwei Statustypen haben:

| Status | Beschreibung | Auswirkung |
|--------|--------------|------------|
| **Aktiv** | Erhält derzeit Behandlung | Erscheint in allen Listen |
| **Inaktiv** | Derzeit nicht aktiv | Standardmäßig ausgeblendet |

### Einen Patienten deaktivieren

1. Öffnen Sie das Patientenprofil
2. Klicken Sie auf das Dropdown-Menü (⋮)
3. Wählen Sie **Deaktivieren**
4. Bestätigen Sie die Aktion

### Inaktive Patienten anzeigen

1. Gehen Sie zur Patientenseite
2. Klicken Sie auf Erweiterte Filter
3. Ändern Sie Status auf "Inaktiv" oder "Alle"

---

## Best Practices

### Datenqualität
1. Überprüfen Sie immer Patienteninformationen beim Check-in
2. Halten Sie Kontaktinformationen aktuell
3. Verwenden Sie konsistente Formatierung für Adressen und Telefonnummern
4. Erfassen Sie Allergien und Medikamente genau

### Datenschutz und Sicherheit
1. Greifen Sie nur bei Bedarf auf Patientenakten zu
2. Teilen Sie niemals Patientendaten außerhalb der Plattform
3. Melden Sie sich ab, wenn Sie Arbeitsstationen verlassen
4. Melden Sie verdächtige Zugriffe sofort

### Organisation
1. Verwenden Sie Aktenzeichen konsistent
2. Weisen Sie allen Patienten primäre Anbieter zu
3. Vervollständigen Sie Versicherungsinformationen für die Abrechnung
4. Halten Sie Notfallkontakte aktuell

---

## Fehlerbehebung

### Patient erscheint nicht in der Suche
- Überprüfen Sie, ob der Patient auf "Inaktiv" gesetzt ist
- Versuchen Sie, nach einem anderen Feld zu suchen (E-Mail, Telefon)
- Überprüfen Sie, ob der Patient erfolgreich gespeichert wurde

### Doppelte Patienten
- Suchen Sie nach dem Patienten, bevor Sie einen neuen Datensatz erstellen
- Verwenden Sie die Duplikaterkennung beim CSV-Import
- Kontaktieren Sie den Support zum Zusammenführen von Duplikaten

### Importfehler
- Überprüfen Sie das Datumsformat (JJJJ-MM-TT erforderlich)
- Stellen Sie sicher, dass Pflichtfelder vorhanden sind
- Entfernen Sie Sonderzeichen aus Daten
- Überprüfen Sie die Dateikodierung (UTF-8 empfohlen)

---

## Rollenbasierter Zugriff

Verschiedene Rollen haben unterschiedlichen Patientenzugriff:

| Rolle | Anzeigen | Bearbeiten | Löschen |
|-------|----------|------------|---------|
| Admin | ✅ Alle | ✅ Alle | ✅ Alle |
| Anbieter | ✅ Alle | ✅ Zugewiesene | ❌ |
| Pfleger | ✅ Alle | ✅ Begrenzt | ❌ |
| Personal | ✅ Basis | ❌ | ❌ |

---

*Zurück: [Geschäftsprofil](./03-geschaeftsprofil.md) | Weiter: [Personalverwaltung →](./05-personalverwaltung.md)*
