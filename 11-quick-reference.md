# Quick Reference Guide

This quick reference guide provides at-a-glance information for common tasks and navigation in Genkō.

---

## Keyboard Shortcuts

### Global Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + K` | Open global search |
| `Ctrl/Cmd + /` | Show keyboard shortcuts |
| `Esc` | Close modal/dialog |

### Navigation

| Shortcut | Action |
|----------|--------|
| `G + D` | Go to Dashboard |
| `G + P` | Go to Patients |
| `G + S` | Go to Scheduling |
| `G + M` | Go to Messages |

---

## Common Tasks Quick Steps

### Add a New Patient

1. Sidebar → **Patients**
2. Click **+ Add Patient**
3. Fill required fields (First Name, Last Name, DOB)
4. Click **Save**

### Schedule an Appointment

1. Sidebar → **Scheduling**
2. Click empty time slot OR **+ New Appointment**
3. Select patient and provider
4. Set date, time, duration
5. Click **Create**

### Add a Staff Member

1. Sidebar → **Staff**
2. Click **+ Add Staff**
3. Enter name, email, role
4. Click **Save** (invitation sent automatically)

### Start a Telemedicine Session

1. Sidebar → **Scheduling** → **Telemedicine** tab
2. Find the scheduled session
3. Click **Start Session** (near appointment time)

### Send a Message

1. Sidebar → **Messages**
2. Select conversation OR click **New Conversation**
3. Type message
4. Click **Send**

### Convert a Lead to Patient

1. Sidebar → **Leads**
2. Find the lead
3. Click ✅ (Convert) icon
4. Confirm conversion

---

## Status Indicators

### Patient Status

| Status | Meaning |
|--------|---------|
| 🟢 Active | Currently receiving care |
| ⚪ Inactive | Not currently active |

### Appointment Status

| Status | Color | Meaning |
|--------|-------|---------|
| Scheduled | 🔵 Blue | Booked |
| Confirmed | 🟢 Green | Patient confirmed |
| In-Progress | 🟡 Yellow | Currently happening |
| Completed | ⬜ Gray | Finished |
| Cancelled | 🔴 Red | Cancelled |
| No-Show | 🔴 Red | Patient didn't arrive |

### Staff Status

| Status | Meaning |
|--------|---------|
| 🟢 Active | Can log in |
| ⚪ Inactive | Cannot log in |

### Lead Status

| Stage | Color |
|-------|-------|
| Lead | 🔵 Blue |
| Prospect | 🟡 Yellow |
| Qualified | 🟣 Purple |
| Converted | 🟢 Green |
| Lost | 🔴 Red |

---

## Navigation Structure

```
📱 Genkō Admin
│
├── 📊 Operations
│   ├── Dashboard
│   ├── Patients
│   ├── Scheduling
│   └── Analytics
│
├── 💬 Communication
│   ├── Messages
│   └── Leads
│
└── ⚙️ Management
    ├── Staff
    ├── Business Profile
    ├── Settings
    └── Billing (Owner only)
```

---

## Role Permissions Summary

| Action | Admin | Provider | Nurse | Staff |
|--------|:-----:|:--------:|:-----:|:-----:|
| View patients | ✅ | ✅ | ✅ | ✅ |
| Edit patients | ✅ | ✅ | ✅ | ❌ |
| Delete patients | ✅ | ❌ | ❌ | ❌ |
| Create appointments | ✅ | ✅ | ✅ | ✅ |
| Telemedicine | ✅ | ✅ | ✅ | ❌ |
| Manage staff | ✅ | ❌ | ❌ | ❌ |
| View analytics | ✅ | ✅ | ❌ | ❌ |
| Access settings | ✅ | ❌ | ❌ | ❌ |
| Access billing | Owner | ❌ | ❌ | ❌ |

---

## URL Quick Reference

| Page | URL Path |
|------|----------|
| Dashboard | `/admin/dashboard` |
| Patients | `/admin/patients` |
| Scheduling | `/admin/scheduling` |
| Staff | `/admin/staff` |
| Messages | `/admin/messages` |
| Leads | `/admin/leads` |
| Analytics | `/admin/analytics` |
| Business Profile | `/admin/business-profile` |
| Settings | `/admin/settings` |
| Billing | `/admin/billing` |

---

## Plan Comparison

| Feature | Free | Starter | Pro | Growth |
|---------|:----:|:-------:|:---:|:------:|
| **Price** | $0 | $29/mo | $99/mo | $249/mo |
| **Staff** | 1 | 3 | 10 | ∞ |
| **Patients** | 10 | ∞ | ∞ | ∞ |
| **Appointments** | 10/mo | ∞ | ∞ | ∞ |
| **Telemedicine** | ❌ | 5/mo | ∞ | ∞ |
| **Analytics** | Basic | ✅ | Advanced | Advanced |
| **API** | ❌ | ❌ | ❌ | ✅ |

---

## Common Icons

| Icon | Meaning |
|:----:|---------|
| ➕ | Add new |
| ✏️ | Edit |
| 🗑️ | Delete |
| 👁️ | View details |
| 📅 | Calendar/Schedule |
| 💬 | Message |
| 📊 | Analytics |
| ⚙️ | Settings |
| 🔔 | Notifications |
| 👤 | User/Patient |
| 👥 | Staff/Team |
| 📱 | Telemedicine |
| 💳 | Billing |
| ❓ | Help |

---

## Date & Time Formats

| Locale | Date Example | Time Example |
|--------|--------------|--------------|
| English (US) | Jan 9, 2026 | 2:30 PM |
| Spanish | 9 ene 2026 | 14:30 |
| Japanese | 2026年1月9日 | 14:30 |

---

## Troubleshooting Quick Fixes

| Problem | Quick Fix |
|---------|-----------|
| Page not loading | Refresh (F5 or Ctrl+R) |
| Logged out unexpectedly | Sign in again |
| Data not appearing | Check filters, refresh |
| Cannot edit | Verify permissions/role |
| Button disabled | Check plan limits |
| Error message | Note message, contact support |

---

## Support Contacts

| Issue Type | Contact |
|------------|---------|
| General Support | support@genko.app |
| Billing Questions | billing@genko.app |
| Technical Issues | In-app help → Submit ticket |
| Account Recovery | Reset via login page |

---

## Onboarding Checklist

New administrator setup checklist:

- [ ] Create account and select plan
- [ ] Complete email verification
- [ ] Set up Business Profile
  - [ ] Add clinic name
  - [ ] Upload logo
  - [ ] Enter address
  - [ ] Add contact info
- [ ] Add first patient
- [ ] Invite staff members
- [ ] Configure availability
- [ ] Schedule first appointment
- [ ] Test telemedicine (if available)
- [ ] Review analytics
- [ ] Configure settings

---

## Daily Workflow

Recommended daily admin routine:

**Morning:**
1. Check Dashboard for today's overview
2. Review any alerts or notifications
3. Confirm day's appointments

**Throughout Day:**
4. Manage appointments as needed
5. Respond to messages
6. Process new leads

**End of Day:**
7. Review completed appointments
8. Mark no-shows appropriately
9. Preview tomorrow's schedule

---

## Weekly Tasks

| Day | Task |
|-----|------|
| Monday | Review week ahead |
| Wednesday | Follow up on pending leads |
| Friday | Review weekly analytics |
| Monthly | Review billing, update settings |

---

## Emergency Procedures

### Patient Cannot Access Portal
1. Verify patient email is correct
2. Send password reset link
3. Check patient status is Active

### Staff Cannot Log In
1. Verify account is Active
2. Send password reset
3. Check for account lockout
4. Resend invitation if needed

### Payment Failed
1. Check payment method
2. Update card details
3. Contact bank if declined
4. Add alternative payment method

### Data Appears Missing
1. Check date range filters
2. Verify correct organization (if multiple)
3. Wait for sync (up to 15 min)
4. Contact support if persists

---

## Glossary

| Term | Definition |
|------|------------|
| **Organization** | Your clinic/practice in Genkō |
| **Provider** | Healthcare provider (doctor, specialist) |
| **MRN** | Medical Record Number |
| **Lead** | Potential patient |
| **Telemedicine** | Video consultation |
| **RBAC** | Role-Based Access Control |
| **KPI** | Key Performance Indicator |
| **AR** | Accounts Receivable |

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jan 2026 | Initial release |

---

*[← Back to Table of Contents](./README.md)*
