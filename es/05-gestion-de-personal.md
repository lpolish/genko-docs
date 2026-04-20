---
title: Proveedores y equipo
layout: default
nav_order: 5
parent: Español
---

# Proveedores y equipo

Genkō separa la configuración de proveedores del acceso general del equipo para que puedas gestionar horarios clínicos y permisos operativos de forma clara.

---

## Agregar proveedores

Puedes agregar proveedores de dos maneras comunes:

- **Invite Provider** cuando incorporas a un clínico al espacio de trabajo
- **Assign yourself as Provider** cuando el propietario también atiende pacientes directamente

Una vez invitados, los proveedores aparecen en las vistas de programación después de que su perfil y disponibilidad quedan configurados.

---

## Configurar la disponibilidad del proveedor

Abre la tarjeta de un proveedor y selecciona **Edit Schedule** para definir su disponibilidad semanal.

Para cada día puedes establecer:

- Si el proveedor está disponible
- Hora de inicio y de fin
- Un patrón de trabajo simple, como de lunes a viernes de 9 a 5

Genkō usa este horario en todos los lugares donde se crean reservas:

- Programación del personal
- Vistas del proveedor
- Reserva de autoservicio en el portal

Si un proveedor no está disponible en un día determinado, ese día simplemente no aparece como reservable.

---

## Reglas avanzadas de programación

En planes **Practice** y superiores puedes agregar reglas más estrictas para el proveedor, como:

- **Buffer minutes** entre visitas
- **Máximo de citas por día**
- **Ventanas de reserva** que limitan qué tan lejos pueden reservar los pacientes
- **Restricciones por día de la semana** para el portal

Empieza con una configuración simple y agrega estas reglas solo cuando resuelvan un problema operativo real.

---

## Invitar miembros del equipo

Ve a **Settings → Members** y haz clic en **Invite Member**.

Cada invitación incluye:

- Nombre completo
- Correo electrónico
- Rol

Genkō envía una invitación por correo con magic link. Las invitaciones pendientes se pueden revisar o revocar desde la página de miembros y vencen después de **72 horas**.

---

## Roles y permisos

Genkō usa cuatro roles principales:

| Rol | Uso típico |
|-----|------------|
| Owner | Control total de la organización, incluida facturación y transferencia de propiedad |
| Admin | Gerentes de práctica que necesitan acceso operativo amplio |
| Provider | Clínicos que administran citas y ven registros de pacientes |
| Staff | Soporte administrativo y de agenda sin control sobre configuración o facturación |

Owners y admins pueden cambiar roles o eliminar miembros en cualquier momento desde la página de miembros.

---

## Límites del equipo

Los límites del plan aplican a los miembros del equipo excluyendo al owner. Revisa tu uso actual en facturación antes de invitar a un grupo grande de una sola vez.

---

## Buenas prácticas

- Agrega proveedores antes de activar la reserva de autoservicio.
- Invita al equipo con el rol mínimo que necesiten.
- Usa especialidades y bios cuando pacientes o personal necesiten ayuda para elegir al clínico adecuado.

---

## Guías relacionadas

- [Perfil de la práctica y servicios](./03-perfil-de-negocio.md)
- [Programación y citas](./06-programacion.md)
- [Planes y facturación](./10-facturacion.md)
