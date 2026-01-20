---
title: Staff Management
layout: default
nav_order: 6
---

# Staff Management

Managing your team effectively is crucial for smooth clinic operations. This guide covers how to add, manage, and configure staff members in Genkō.

---

## Accessing Staff Management

1. Click **Staff** in the sidebar
2. Or navigate from Settings → Staff tab
3. URL: `/admin/staff`

---

## Staff Overview

> 📸 **Screenshot Placeholder**: Staff management page
> - **Location**: `screenshots/admin-pages/staff/staff-overview.png`
> - **Description**: Full view of the staff management page showing the header with "Add Staff" button, staff limit warning (e.g., "Using 3 of 10 staff seats"), search and filter options, and staff list table displaying team member names, roles (Admin, Provider, Nurse, Staff), email addresses, phone numbers, and status indicators (Active/Inactive).
> - **Note**: Requires authenticated access to the admin portal with Admin role.

The Staff page displays:
- **Header**: Title and action buttons
- **Search & Filters**: Find staff quickly
- **Staff Limit Warning**: Shows usage against your plan's limit
- **Staff List**: Table of all team members

---

## Staff Roles

Genkō has four primary staff roles:

### Admin
- Full access to all features
- Can manage other staff members
- Access to billing and settings
- Can view all patients and appointments

### Provider
- Healthcare providers (doctors, specialists)
- Can manage their assigned patients
- Access to scheduling and telemedicine
- Can view medical records

### Nurse
- Clinical support staff
- Can assist with patient care
- Limited editing capabilities
- Access to vitals and basic records

### Staff
- Administrative personnel
- Basic patient view access
- Scheduling support
- No medical record editing

---

## Adding Staff Members

> 📸 **Screenshot Placeholder**: Add staff member form
> - **Location**: `screenshots/admin-pages/staff/add-staff-form.png`
> - **Description**: The staff member creation modal showing input fields for Personal Information (First Name, Last Name, Email, Phone), Role & Access section with role dropdown (Admin, Provider, Nurse, Staff), professional information fields, and permission toggles. Shows Save and Cancel buttons.
> - **Note**: Requires authenticated access to the admin portal with Admin role.

### Step 1: Click Add Staff

Click the **Add Staff** button in the top-right corner.

### Step 2: Fill in Staff Information

**Personal Information:**
| Field | Required | Description |
|-------|----------|-------------|
| First Name | Yes | Staff member's first name |
| Last Name | Yes | Staff member's last name |
| Email | Yes | Work email address |
| Phone | No | Contact number |

**Role & Access:**
| Field | Required | Description |
|-------|----------|-------------|
| Role | Yes | Admin, Provider, Nurse, or Staff |
| Title | No | Professional title (e.g., "Dr.", "RN") |
| Specialization | No | Area of specialty (for providers) |

**License Information (for Providers/Nurses):**
| Field | Required | Description |
|-------|----------|-------------|
| License Number | No | Professional license number |
| License Expiry | No | License expiration date |

### Step 3: Save and Invite

1. Click **Save** to create the staff account
2. An invitation email is sent automatically
3. Staff member must set their password to activate

---

## Importing Staff (CSV)

For bulk staff imports:

1. Click **Import Staff** button
2. Download the CSV template
3. Fill in staff information
4. Upload the completed file
5. Review and confirm import

### CSV Template Fields

| Column | Required | Description |
|--------|----------|-------------|
| first_name | Yes | First name |
| last_name | Yes | Last name |
| email | Yes | Email address |
| role | Yes | admin, provider, nurse, staff |
| phone | No | Phone number |
| title | No | Professional title |
| specialization | No | Area of specialty |
| license_number | No | License number |
| license_expiry | No | YYYY-MM-DD format |

---

## Managing Staff Members

### Viewing Staff Details

1. Click on a staff member's row
2. Or click the view icon (👁) in actions
3. Full profile opens with all details

### Staff Profile Sections

**Personal Information:**
- Name, title, contact details
- Role and specialization
- Account status

**Access Information:**
- Last login date
- Account status (Active/Inactive)
- Email verification status

**License Information:**
- License number
- Expiry date
- Renewal reminders

---

### Editing Staff Information

1. Click the edit icon (✏️) or open staff details
2. Make changes to allowed fields
3. Click **Save**

**Editable by Admin:**
- All personal information
- Role assignment
- License details
- Status

---

### Resetting Staff Password

If a staff member forgets their password:

1. Find the staff member in the list
2. Click the dropdown menu (⋮)
3. Select **Reset Password**
4. Confirm the action
5. A password reset email is sent to the staff member

**Note:** Staff members can also use "Forgot Password" on the login page.

---

### Activating/Deactivating Staff

#### Deactivate Staff

Use when a staff member leaves or needs temporary suspension:

1. Find the staff member
2. Click the dropdown menu (⋮)
3. Select **Deactivate**
4. Confirm the action

**Effects of Deactivation:**
- Staff member cannot log in
- Existing appointments remain
- Data is preserved
- Can be reactivated later

#### Reactivate Staff

1. Filter to show inactive staff
2. Find the staff member
3. Click **Activate**

---

### Deleting Staff

**Warning:** Deleting staff is permanent and cannot be undone.

1. Find the staff member
2. Click the dropdown menu (⋮)
3. Select **Delete**
4. Type confirmation if required
5. Click **Confirm Delete**

**Notes:**
- Account owner cannot be deleted
- Reassign patients before deleting providers
- Historical records are preserved

---

## Role Permissions

### Permission Matrix

| Permission | Admin | Provider | Nurse | Staff |
|------------|-------|----------|-------|-------|
| View basic patient info | ✅ | ✅ | ✅ | ✅ |
| Edit basic patient info | ✅ | ✅ | ✅ | ❌ |
| View medical records | ✅ | ✅ | ✅ | ❌ |
| Edit medical records | ✅ | ✅ | ❌ | ❌ |
| Manage appointments | ✅ | ✅ | ✅ | ✅ |
| Telemedicine access | ✅ | ✅ | ✅ | ❌ |
| Manage staff | ✅ | ❌ | ❌ | ❌ |
| Access settings | ✅ | ❌ | ❌ | ❌ |
| View billing | Owner only | ❌ | ❌ | ❌ |

### Customizing Permissions

Admins can customize role permissions in Settings:

1. Go to **Settings** → **Staff** tab
2. Find the **Role-Based Access Controls** section
3. Adjust checkboxes for each role
4. Click **Save**

---

## Staff Limit Management

Your subscription plan determines how many staff you can add:

| Plan | Staff Limit |
|------|-------------|
| Free | 1 (owner only) |
| Starter | 3 |
| Professional | 10 |
| Growth | Unlimited |

### When You Hit the Limit

- Warning banner appears on the Staff page
- Add Staff button is disabled
- Options:
  1. Deactivate inactive staff
  2. Upgrade your plan

---

## Searching and Filtering

### Quick Search
- Search by name, email, or phone
- Results update as you type

### Status Filter
- All staff
- Active only
- Inactive only

### Role Filter
- All roles
- Admin
- Provider
- Nurse
- Staff

---

## Staff Invitations

### Invitation Process

1. Staff member is created by admin
2. Invitation email is sent automatically
3. Staff member clicks the invitation link
4. Staff member sets their password
5. Account becomes active

### Invitation Status

| Status | Description |
|--------|-------------|
| Pending | Email sent, not yet accepted |
| Accepted | Password set, account active |
| Expired | Link expired (resend required) |

### Resending Invitations

1. Find the staff member
2. Click the dropdown menu
3. Select **Resend Invitation**

---

## Best Practices

### Adding Staff
1. Use work email addresses only
2. Assign the minimum necessary role
3. Complete license information for providers
4. Set up availability after account creation

### Security
1. Review staff access regularly
2. Deactivate departed staff immediately
3. Use strong password requirements
4. Enable two-factor authentication (when available)

### Organization
1. Use consistent naming conventions
2. Keep titles and specializations current
3. Track license expiration dates
4. Document role assignments

---

## Troubleshooting

### Staff Not Receiving Invitation
- Check email address is correct
- Ask staff to check spam folder
- Resend the invitation
- Verify email domain isn't blocked

### Cannot Add More Staff
- Check current plan limits
- Count active vs. total staff
- Consider plan upgrade
- Deactivate unused accounts

### Staff Cannot Log In
- Verify account is active
- Check email is correct
- Reset password if needed
- Confirm invitation was accepted

### Permission Issues
- Verify role assignment
- Check custom permission settings
- Admin may need to adjust access

---

*Previous: [Patient Management](./04-patient-management.md) | Next: [Scheduling & Calendar →](./06-scheduling.md)*
