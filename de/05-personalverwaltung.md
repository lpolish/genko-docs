---
title: Anbieter und Team
layout: default
nav_order: 5
parent: Deutsch
---

# Anbieter und Team

Genkō trennt die Einrichtung von Anbietern vom allgemeinen Teamzugang, damit Sie klinische Zeitpläne und operative Berechtigungen sauber verwalten können.

---

## Anbieter hinzufügen

Sie können Anbieter auf zwei übliche Arten hinzufügen:

- **Invite Provider**, wenn Sie einen Behandler in den Workspace einladen
- **Assign yourself as Provider**, wenn der Eigentümer selbst Patienten behandelt

Nach der Einladung erscheinen Anbieter in der Terminplanung, sobald Profil und Verfügbarkeit eingerichtet sind.

![Dialog zum Einladen eines Anbieters mit Feldern für Namen und E-Mail](../assets/images/docs/04-add-provider.png)

---

## Anbieter-Verfügbarkeit festlegen

Öffnen Sie eine Anbieterkarte und wählen Sie **Edit Schedule**, um die wöchentliche Verfügbarkeit festzulegen.

Für jeden Tag können Sie angeben:

- Ob der Anbieter verfügbar ist
- Start- und Endzeit
- Ein einfaches Wochenmuster, zum Beispiel Montag bis Freitag von 9 bis 17 Uhr

Genkō nutzt diesen Zeitplan überall dort, wo Buchungen erstellt werden:

- Mitarbeiterplanung
- Anbieteransichten
- Self-Service-Buchung im Portal

Wenn ein Anbieter an einem bestimmten Tag nicht verfügbar ist, erscheint dieser Tag einfach nicht als buchbar.

![Editor für Anbieterzeiten mit Wochentags-Schaltern sowie Start- und Endzeitfeldern](../assets/images/docs/04-provider-availability.png)

---

## Erweiterte Planungsregeln

Bei **Practice**-Plänen und höher können Sie strengere Regeln pro Anbieter hinzufügen, zum Beispiel:

- **Buffer-Minuten** zwischen Terminen
- **Maximale Termine pro Tag**
- **Buchungsfenster**, die einschränken, wie weit im Voraus Patienten buchen können
- **Wochentagsbeschränkungen** für das Portal

Starten Sie einfach und ergänzen Sie diese Regeln nur dann, wenn sie ein konkretes operatives Problem lösen.

---

## Teammitglieder einladen

Gehen Sie zu **Settings → Members** und klicken Sie auf **Invite Member**.

Jede Einladung enthält:

- Vollständigen Namen
- E-Mail-Adresse
- Rolle

Genkō versendet eine Einladung per Magic Link. Ausstehende Einladungen können auf der Mitgliederseite überprüft oder widerrufen werden und laufen nach **72 Stunden** ab.

![Dialog zum Einladen eines Teammitglieds mit Name, E-Mail und Rollenfeld](../assets/images/docs/04-invite-team-member.png)

![Mitgliederseite mit Teamliste und ausstehenden Einladungen](../assets/images/docs/06-members-invitations.png)

---

## Rollen und Berechtigungen

Genkō nutzt vier Hauptrollen:

| Rolle | Typische Nutzung |
|------|------------------|
| Owner | Volle Kontrolle über die Organisation, einschließlich Abrechnung und Eigentumsübertragung |
| Admin | Praxismanager mit breitem operativem Zugriff |
| Provider | Behandler, die Termine verwalten und Patientenakten einsehen |
| Staff | Administratives und terminbezogenes Support-Personal ohne Zugriff auf Einstellungen oder Abrechnung |

Owners und Admins können Rollen jederzeit ändern oder Mitglieder entfernen.

---

## Teamlimits

Die Planlimits gelten für Teammitglieder ohne den Owner. Prüfen Sie Ihren aktuellen Verbrauch in der Abrechnung, bevor Sie viele Personen auf einmal einladen.

---

## Best Practices

- Fügen Sie Anbieter hinzu, bevor Sie Self-Service-Buchungen aktivieren.
- Laden Sie Teammitglieder mit der niedrigsten nötigen Rolle ein.
- Nutzen Sie Fachgebiete und Bios, wenn Patienten oder Mitarbeitende Unterstützung bei der Auswahl des richtigen Behandlers brauchen.

---

## Verwandte Leitfäden

- [Praxisprofil und Leistungen](./03-geschaeftsprofil.md)
- [Terminplanung und Termine](./06-terminplanung.md)
- [Pläne und Abrechnung](./10-abrechnung.md)
