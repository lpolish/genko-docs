# Settings & Configuration

The Settings section allows you to customize Genkō to match your practice's needs. This guide covers all configuration options available to administrators.

---

## Accessing Settings

1. Click **Settings** in the sidebar
2. URL: `/admin/settings`

---

## Settings Structure

Settings are organized into tabs:

| Tab | Purpose |
|-----|---------|
| **Account** | Personal account settings |
| **Clinic** | Practice feature toggles |
| **Business** | Organization information |
| **Staff** | Team permissions |
| **Availability** | Default scheduling |
| **Insurance** | Insurance providers |
| **Communications** | Notification settings |
| **Integrations** | External connections |

---

## Account Settings

Personal account configuration for the logged-in user.

### Profile Information

| Field | Description |
|-------|-------------|
| First Name | Your first name |
| Last Name | Your last name |
| Email | Account email (login) |
| Phone | Contact number |

### Password Change

1. Enter current password
2. Enter new password
3. Confirm new password
4. Click **Update Password**

**Password Requirements:**
- Minimum 8 characters
- Mix of letters and numbers recommended
- No common passwords

### Two-Factor Authentication (Coming Soon)

- Enable 2FA for enhanced security
- Authenticator app or SMS options
- Backup codes provided

### Notification Preferences

Control what emails you receive:

| Notification | Description |
|--------------|-------------|
| Appointment Reminders | Email for upcoming appointments |
| New Messages | Alert for patient messages |
| Daily Summary | Daily practice summary |
| Marketing Updates | Genkō product updates |

---

## Clinic Settings

Feature toggles and practice-wide settings.

### Feature Toggles

Enable or disable features:

| Feature | Description |
|---------|-------------|
| **Telemedicine** | Enable video consultations |
| **Patient Portal** | Allow patient self-service |
| **Online Booking** | Public appointment booking |
| **SMS Reminders** | Text message reminders |
| **AI Messaging** | AI-assisted patient chat |

### Billing Settings

| Setting | Description |
|---------|-------------|
| Default Currency | Primary currency (USD, MXN, etc.) |
| Tax Rate | Applicable tax percentage |
| Invoice Prefix | Custom invoice numbering |

### Appointment Settings

| Setting | Description |
|---------|-------------|
| Default Duration | Standard appointment length |
| Buffer Time | Minutes between appointments |
| Booking Window | How far ahead patients can book |
| Cancellation Policy | Hours notice required |

---

## Business Settings

Organization-level configuration.

### Organization Details

| Field | Description |
|-------|-------------|
| Organization Name | Practice name |
| Legal Name | Registered business name |
| Tax ID | Business tax identification |
| Phone | Main phone number |
| Email | General contact email |

### Address

| Field | Description |
|-------|-------------|
| Street Address | Physical address line 1 |
| Suite/Unit | Address line 2 |
| City | City name |
| State | State/Province |
| Postal Code | ZIP code |
| Country | Country |

### Branding

| Setting | Description |
|---------|-------------|
| Logo | Organization logo upload |
| Primary Color | Brand primary color |
| Timezone | Default timezone |

---

## Staff Settings

Team management and permissions.

### Role-Based Access Control (RBAC)

Configure what each role can do:

#### Admin Permissions
- Full access to all features
- Cannot be modified

#### Provider Permissions

| Permission | Default |
|------------|---------|
| View all patients | ✅ |
| Edit patient records | ✅ |
| Manage appointments | ✅ |
| Access telemedicine | ✅ |
| View analytics | ✅ |
| Manage staff | ❌ |

#### Nurse Permissions

| Permission | Default |
|------------|---------|
| View all patients | ✅ |
| Edit basic patient info | ✅ |
| View medical records | ✅ |
| Edit medical records | ❌ |
| Manage appointments | ✅ |
| Access telemedicine | ✅ |

#### Staff Permissions

| Permission | Default |
|------------|---------|
| View basic patient info | ✅ |
| Edit patient records | ❌ |
| View medical records | ❌ |
| Manage appointments | ✅ |
| Access telemedicine | ❌ |

### Customizing Permissions

1. Find the role section
2. Toggle individual permissions on/off
3. Click **Save Changes**

---

## Availability Settings

Default scheduling configuration.

### Business Hours

Set default operating hours (affects public booking):

| Setting | Description |
|---------|-------------|
| Days Open | Which days you operate |
| Start Time | Daily opening time |
| End Time | Daily closing time |
| Timezone | Operating timezone |

### Appointment Types

Configure available appointment types:

| Type | Duration | Color |
|------|----------|-------|
| New Patient | 60 min | Blue |
| Follow-Up | 30 min | Green |
| Annual Checkup | 45 min | Purple |
| Consultation | 20 min | Orange |
| Telemedicine | 30 min | Cyan |

### Adding Appointment Types

1. Click **Add Type**
2. Enter name and duration
3. Choose display color
4. Set availability restrictions
5. Click **Save**

### Booking Rules

| Rule | Description |
|------|-------------|
| Minimum Notice | Hours before appointment can be booked |
| Maximum Advance | Days ahead booking is allowed |
| Same-Day Booking | Allow/disallow same-day |
| Overlap Prevention | Block double-booking |

---

## Insurance Settings

Manage accepted insurance providers.

### Insurance Provider List

Table of configured insurers:

| Column | Description |
|--------|-------------|
| Provider Name | Insurance company name |
| Payer ID | Electronic payer ID |
| Status | Active/Inactive |
| Actions | Edit, Delete |

### Adding Insurance Provider

1. Click **Add Provider**
2. Enter details:
   - Provider Name
   - Payer ID
   - Contact Phone
   - Submission Type (Electronic/Paper)
3. Click **Save**

### Editing Insurance Provider

1. Click Edit icon on provider row
2. Modify fields
3. Click **Save**

### Deactivating Provider

1. Toggle Status to Inactive
2. Provider hidden from new claims
3. Existing claims preserved

---

## Communication Settings

Configure patient communications.

### Email Settings

| Setting | Description |
|---------|-------------|
| From Name | Sender name on emails |
| Reply-To Email | Where replies go |
| Email Footer | Custom footer text |

### Reminder Settings

| Setting | Description |
|---------|-------------|
| Appointment Reminders | Enable/disable |
| Reminder Timing | When to send (24h, 48h, etc.) |
| SMS Reminders | Enable text reminders |

### Templates (Coming Soon)

Customize message templates:
- Appointment confirmation
- Appointment reminder
- Cancellation notice
- Follow-up messages

---

## Integrations

Connect external services.

### Available Integrations

| Integration | Status | Purpose |
|-------------|--------|---------|
| Stripe | Available | Payment processing |
| Google Calendar | Coming Soon | Calendar sync |
| QuickBooks | Coming Soon | Accounting |
| Zoom | Coming Soon | Telemedicine |

### Stripe Integration

1. Navigate to Integrations tab
2. Click **Connect Stripe**
3. Authorize with Stripe
4. Connection appears as Active

### API Access (Growth Plan)

For Growth plan subscribers:
- API key generation
- Webhook configuration
- Rate limit information

---

## Saving Settings

### Auto-Save

Some settings save automatically:
- Toggle switches
- Dropdown selections
- Individual field updates

### Manual Save

Others require explicit save:
- Complex forms
- Bulk changes
- Permission matrices

**Look for:**
- "Saved" confirmation toast
- "Save" button state change
- Loading spinner during save

---

## Best Practices

### Initial Setup

1. Complete Business Settings first
2. Configure Insurance Providers
3. Set up Availability defaults
4. Customize Appointment Types
5. Review Staff Permissions

### Regular Maintenance

1. Review permissions quarterly
2. Update insurance yearly
3. Verify contact information
4. Test integrations periodically

### Security

1. Use strong passwords
2. Enable 2FA when available
3. Review access logs
4. Minimize permission grants

---

## Troubleshooting

### Settings Not Saving

- Check internet connection
- Look for validation errors
- Scroll down for error messages
- Try refreshing and re-entering

### Permission Changes Not Working

- User may need to log out and back in
- Clear browser cache
- Verify correct role is selected

### Integration Connection Failed

- Check credentials are correct
- Verify third-party service is available
- Review error message details
- Contact support for assistance

---

## Settings by Role

| Setting Section | Admin | Provider | Nurse | Staff |
|-----------------|-------|----------|-------|-------|
| Account | Own | Own | Own | Own |
| Clinic | ✅ | ❌ | ❌ | ❌ |
| Business | ✅ | ❌ | ❌ | ❌ |
| Staff | ✅ | ❌ | ❌ | ❌ |
| Availability | ✅ | Own | ❌ | ❌ |
| Insurance | ✅ | ❌ | ❌ | ❌ |
| Communications | ✅ | ❌ | ❌ | ❌ |
| Integrations | ✅ | ❌ | ❌ | ❌ |

---

*Previous: [Analytics Dashboard](./08-analytics.md) | Next: [Billing & Subscription →](./10-billing.md)*
