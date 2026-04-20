---
title: Patientenportal und Integrationen
layout: default
nav_order: 7
parent: Deutsch
---

# Patientenportal und Integrationen

Genkō ermöglicht Praxen, ein Self-Service-Buchungsportal zu öffnen und operative Werkzeuge wie Google Calendar zu verbinden. Das ist der schnellste Weg, manuellen Planungsaufwand zu reduzieren, ohne die Kontrolle über Verfügbarkeiten aufzugeben.

---

## Patientenportal aktivieren

Gehen Sie zu **Settings → Portal** und aktivieren Sie **Enable Patient Portal**.

Sobald das Portal aktiv ist, erhält Ihre Praxis einen öffentlichen Buchungslink auf Basis des Organisations-Slugs. Teilen Sie ihn dort, wo Patienten bereits mit Ihnen interagieren:

- Website
- E-Mail-Signatur
- Bestätigungs-E-Mails
- Intake- oder Empfehlungs-Workflows

Bevor Sie den Link veröffentlichen, sollten Leistungen und Anbieterzeitpläne stimmen.

![Einstellungsseite des Patientenportals mit Aktivierungsschalter und öffentlicher Buchungs-URL](../assets/images/docs/07-patient-portal.png)

---

## So funktioniert Self-Service-Buchung

Patienten folgen einem einfachen Ablauf:

1. Verfügbare Leistungen und Anbieteroptionen ansehen
2. Leistung, Anbieter, Datum und Uhrzeit wählen
3. Kontaktdaten eingeben
4. Eine Bestätigungs-E-Mail erhalten

Buchungen erscheinen sofort in Ihrem Kalender.

Wenn die E-Mail-Adresse bereits einem bestehenden Patienten entspricht, verknüpft Genkō die Buchung mit diesem Datensatz. Andernfalls wird automatisch ein neuer Patient erstellt.

---

## Warum Praxen das Portal nutzen

Das Portal hilft dabei:

- Routinebuchungen ohne Rückfragen zu ermöglichen
- Nur gültige Zeitfenster anhand von Verfügbarkeiten und Buchungsregeln zu zeigen
- Sauberere Patientendatensätze durch konsistente Angaben zu erzeugen

Es funktioniert am besten, wenn Leistungsnamen klar sind und Anbieter-Verfügbarkeiten aktuell gehalten werden.

---

## Google-Calendar-Synchronisierung

Genkō kann Termine mit Google Calendar synchronisieren, damit Anbieter ihre Planung über mehrere Werkzeuge hinweg konsistent halten.

So verbinden Sie die Integration:

1. Gehen Sie zu **Settings → Integrations**
2. Wählen Sie **Connect Google Calendar**
3. Melden Sie sich mit dem Google-Konto an, das synchronisiert werden soll
4. Erteilen Sie Kalender-Berechtigungen
5. Wählen Sie den Zielkalender und bestätigen Sie

![Integrationsseite mit der Verbindungskarte für Google Calendar](../assets/images/docs/08-integrations.png)

---

## Was synchronisiert wird

Nach der Verbindung gilt:

- Neue in Genkō erstellte Termine erscheinen in Google Calendar
- Verschobene Termine werden in Google Calendar aktualisiert
- Stornierte Termine werden ebenfalls dort abgebildet
- Anbietername, Patientenname und Terminnotizen erscheinen in den Event-Details

Jeder Anbieter kann seinen eigenen Kalender verbinden, sodass keine zentrale gemeinsame Kalenderstruktur erzwungen wird.

---

## Planzugriff

- **Das Patientenportal** ist Teil des zentralen Genkō-Terminworkflows
- **Google-Calendar-Sync** ist ab dem Plan **Solo** verfügbar

Beim Trennen der Integration bleiben bestehende Ereignisse in Google Calendar erhalten; nur zukünftige Synchronisierung stoppt.

---

## Best Practices

- Veröffentlichen Sie das Portal erst nach der Prüfung von Leistungen und Zeitplänen.
- Verwenden Sie klare Leistungsnamen, damit Patienten verstehen, was sie buchen.
- Ermutigen Sie Anbieter, ihren eigenen Kalender zu verbinden, wenn sie ihren Tagesablauf über Google Calendar steuern.

---

## Verwandte Leitfäden

- [Praxisprofil und Leistungen](./03-geschaeftsprofil.md)
- [Anbieter und Team](./05-personalverwaltung.md)
- [Einstellungen, KI und API](./09-einstellungen.md)
