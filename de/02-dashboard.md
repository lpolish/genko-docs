---
title: Dashboard
layout: default
parent: Deutsch
nav_order: 2
redirect_to: https://getgenko.com/docs
---

# Dashboard-Übersicht

Das Dashboard ist Ihre Kommandozentrale in Genkō. Es bietet einen schnellen Überblick über den täglichen Betrieb Ihrer Klinik und wichtige Metriken.

---

## Zugriff auf das Dashboard

- Das Dashboard ist Ihre Standard-Startseite nach der Anmeldung
- Klicken Sie auf **Dashboard** in der Seitenleiste oder auf das Home-Symbol in den Breadcrumbs, um jederzeit zurückzukehren
- URL: `/admin/dashboard`

---

## Dashboard-Bereiche

### 1. Begrüßungs-Header

Oben auf dem Dashboard sehen Sie:
- **Personalisierte Begrüßung**: "Guten Morgen/Tag/Abend, [Ihr Name]"
- **Heutiges Datum**: Formatiert nach Ihren Regionaleinstellungen (z.B. "Montag, 9. Januar")
- **Organisationsname**: Der Name Ihrer Klinik in der Ecke angezeigt

---

### 2. Einrichtungsassistent (Neue Benutzer)

Wenn Sie die Einrichtung noch nicht abgeschlossen haben, sehen Sie das **Einrichtungsassistent**-Banner:

- Zeigt Ihren Einrichtungsfortschritt in Prozent
- Listet abgeschlossene und ausstehende Einrichtungsschritte
- Klicken Sie auf einen Schritt, um direkt zu diesem Bereich zu navigieren
- Kann erweitert/minimiert und nach Abschluss geschlossen werden

**Einrichtungsschritte:**
1. Willkommen (automatisch abgeschlossen)
2. Profil vervollständigen
3. Ersten Patienten hinzufügen
4. Team einladen
5. Termin planen

---

### 3. Dringende Warnungen (Falls zutreffend)

Wenn es kritische Punkte gibt, die Aufmerksamkeit erfordern, erscheinen sie in einem roten Warnfeld:
- Überfällige Termine
- Ablaufende Lizenzen
- Zahlungsprobleme
- Kritische Patienten-Updates

Klicken Sie auf eine Warnung, um das Problem direkt zu beheben.

---

### 4. Schnellstatistik-Karten

Drei wichtige Metriken werden als anklickbare Karten angezeigt:

| Metrik | Beschreibung | Klick-Aktion |
|--------|--------------|--------------|
| **Gesamtpatienten** | Anzahl der registrierten Patienten | Öffnet Patientenseite |
| **Heutige Termine** | Für heute geplante Termine | Öffnet Terminplanungsseite |
| **Telemedizin-Sitzungen** | Heutige Videokonsultationen | Öffnet Telemedizin-Tab |

Jede Karte zeigt:
- Aktuelle Anzahl/Wert
- Visuelles Symbol
- Hover-Effekt für Interaktivität

---

### 5. Heutiger Zeitplan

Der Hauptinhaltsbereich zeigt Ihren Tagesplan:

#### Wenn Termine vorhanden sind:
- Liste der bevorstehenden heutigen Termine
- Patientenname
- Terminzeit
- Termintyp (Regulär/Nachuntersuchung)
- Status-Badge (Geplant, Bestätigt, In Bearbeitung, Abgeschlossen, Abgesagt)

#### Wenn keine Termine vorhanden sind:
- Freundliche Nachricht: "Keine Termine geplant"
- Schnellaktion-Button: **"Ersten Termin erstellen"**

**Zeitplan-Aktionen:**
- Klicken Sie auf **"Alle anzeigen"**, um zur vollständigen Terminplanungsseite zu gelangen
- Klicken Sie auf einen Termin, um Details anzuzeigen

---

### 6. Schnellaktionen-Panel

Ein Seitenleisten-Panel mit Verknüpfungen zu häufigen Aufgaben:

| Aktion | Beschreibung |
|--------|--------------|
| **Patient hinzufügen** | Öffnet neues Patientenformular |
| **Termin planen** | Öffnet neues Termin-Modal |
| **Telemedizin starten** | Öffnet Telemedizin-Dashboard |

Jede Aktion enthält:
- Klares Symbol
- Titel
- Kurze Beschreibung
- Hover-Animation

---

### 7. Informative Warnungen

Nicht dringende Benachrichtigungen erscheinen in einem separaten Bereich:
- System-Updates
- Lizenzerneuerungs-Erinnerungen
- Funktions-Ankündigungen
- Tipps und Vorschläge

Farbcodiert nach Typ:
- 🟡 Gelber Rand: Warnungen
- 🔵 Blauer Rand: Informationen

---

### 8. Profilvervollständigungs-Banner

Unten kann ein **Profilvervollständigungs-Banner** erscheinen, wenn Ihr Geschäftsprofil Aufmerksamkeit benötigt:

- Zeigt Profilvervollständigungsprozentsatz
- Listet fehlende Informationen
- Direkter Link zum Vervollständigen Ihres Geschäftsprofils
- Verschwindet, sobald das Profil vollständig ist

---

## Dashboard-Tipps

### Best Practices

1. **Täglich überprüfen**: Beginnen Sie jeden Tag mit einer Überprüfung Ihres Dashboards
2. **Warnungen beachten**: Behandeln Sie dringende Warnungen sofort
3. **Profil vervollständigen**: Ein vollständiges Profil verbessert das Patientenvertrauen
4. **Schnellaktionen nutzen**: Sparen Sie Zeit mit Ein-Klick-Verknüpfungen

### Anpassung

Das Dashboard passt sich an basierend auf:
- Ihrer Rolle (Admin sieht mehr Optionen als Personal)
- Ihren Organisationseinstellungen
- Aktuellem Datum und Uhrzeit
- Ihrer Sprach-/Regionaleinstellung

---

## Navigation vom Dashboard

Vom Dashboard können Sie schnell zugreifen auf:

| Ziel | Zugriffsmethode |
|------|-----------------|
| Patienten | Klick auf "Gesamtpatienten"-Karte oder Seitenleiste |
| Terminplanung | Klick auf "Heutige Termine"-Karte oder Seitenleiste |
| Telemedizin | Klick auf "Telemedizin-Sitzungen"-Karte |
| Patient hinzufügen | Klick auf "Patient hinzufügen"-Schnellaktion |
| Neuer Termin | Klick auf "Termin planen"-Schnellaktion |
| Geschäftsprofil | Klick auf Profilvervollständigungs-Banner |

---

## Mobile Ansicht

Auf mobilen Geräten passt sich das Dashboard an:
- Karten werden vertikal gestapelt
- Seitenleiste wird zum Hamburger-Menü
- Schnellaktionen bleiben zugänglich
- Zeitplan zeigt komprimierte Ansicht

Tippen Sie auf das Menüsymbol **☰** in der oberen linken Ecke, um die Seitenleiste zu öffnen.

---

## Fehlerbehebung

### Dashboard lädt nicht
1. Überprüfen Sie Ihre Internetverbindung
2. Versuchen Sie, die Seite zu aktualisieren (F5 oder Strg/Cmd + R)
3. Browser-Cache leeren
4. Kontaktieren Sie den Support, wenn das Problem weiterhin besteht

### Fehlende Daten
- Wenn Statistiken unerwartet "0" zeigen, werden Daten möglicherweise noch geladen
- Warten Sie einige Sekunden, bis die Seite vollständig geladen ist
- Überprüfen Sie, ob Sie die richtige Organisation anzeigen (falls mehrere vorhanden)

### Warnungen verschwinden nicht
- Einige Warnungen erfordern eine Aktion, um zu verschwinden
- Klicken Sie auf die Warnung, um das zugrundeliegende Problem zu beheben
- Nach Behebung verschwindet die Warnung automatisch

---

*Zurück: [Erste Schritte](./01-erste-schritte.md) | Weiter: [Geschäftsprofilverwaltung →](./03-geschaeftsprofil.md)*
