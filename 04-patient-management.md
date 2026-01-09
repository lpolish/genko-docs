# Patient Management

Patient management is at the core of Genkō. This section covers everything you need to know about adding, managing, and organizing your patient records.

---

## Accessing Patients

1. Click **Patients** in the sidebar
2. Or use the quick action "Add Patient" from the dashboard
3. URL: `/admin/patients`

---

## Patients Overview Page

The Patients page displays:
- **Header**: Page title and action buttons
- **Search & Filters**: Find patients quickly
- **Patient List**: Table/card view of all patients
- **Pagination**: Navigate through large patient lists

---

## Adding Patients

### Method 1: Manual Entry

1. Click the **Add Patient** button (+ icon)
2. Fill in the patient form
3. Click **Save**

#### Patient Form Fields

**Basic Information (Required):**
| Field | Description |
|-------|-------------|
| First Name | Patient's first name |
| Last Name | Patient's last name |
| Date of Birth | Birth date for age calculation |

**Contact Information (Recommended):**
| Field | Description |
|-------|-------------|
| Email | Patient's email address |
| Phone | Primary contact number |
| Address | Home address |

**Medical Information:**
| Field | Description |
|-------|-------------|
| Medical Record Number | Unique identifier (auto-generated if blank) |
| Blood Type | A+, A-, B+, B-, AB+, AB-, O+, O- |
| Gender | Male, Female, Other, Prefer not to say |
| Preferred Language | Communication language preference |

**Lifestyle Information:**
| Field | Description |
|-------|-------------|
| Smoking Status | Never, Former, Current |
| Alcohol Use | None, Occasional, Moderate, Heavy |

**Insurance Information:**
| Field | Description |
|-------|-------------|
| Insurance Provider | Name of insurance company |
| Policy Number | Insurance policy number |
| Group Number | Group number (if applicable) |

---

### Method 2: CSV Import

For bulk patient imports:

1. Click **Import Patients** button
2. Download the template file (optional)
3. Drag and drop your CSV file or browse to select
4. Review the preview
5. Choose duplicate handling:
   - **Skip duplicates**: Ignore existing patients
   - **Update duplicates**: Overwrite with new data
6. Click **Start Import**

#### CSV Template Columns

| Column | Required | Description |
|--------|----------|-------------|
| first_name | Yes | Patient's first name |
| last_name | Yes | Patient's last name |
| date_of_birth | Yes | Format: YYYY-MM-DD |
| email | No | Email address |
| phone | No | Phone number |
| medical_record_number | No | Existing MRN |
| gender | No | male, female, other |
| blood_type | No | Standard blood type codes |
| address | No | Full address |
| insurance_provider | No | Insurance company name |
| policy_number | No | Insurance policy number |

**Import Tips:**
- Clean your data before importing
- Use consistent date formats (YYYY-MM-DD)
- Remove special characters from phone numbers
- Ensure unique identifiers are truly unique

---

## Searching and Filtering

### Quick Search
- Type in the search box to find patients
- Searches across: Name, Email, Phone, MRN

### Advanced Filters
Click **Advanced Filters** to filter by:
- Active/Inactive status
- Gender
- Age range
- Insurance provider
- Primary provider
- Last visit date

---

## Viewing Patient Details

Click on any patient to view their full profile:

### Patient Profile Tabs

#### 1. Overview Tab
- Basic demographics
- Contact information
- Primary provider
- Insurance details
- Quick stats (conditions, medications, etc.)

#### 2. Medical History Tab
- **Conditions**: Active and historical diagnoses
- **Allergies**: Allergen, severity, reaction
- **Medications**: Current and past medications
- **Vitals**: Historical vital signs

#### 3. Appointments Tab
- Past appointments
- Upcoming appointments
- Quick scheduling button

#### 4. Documents Tab
- Uploaded files
- Lab results
- Referral letters
- Insurance documents

#### 5. Emergency Contacts Tab
- Primary emergency contact
- Additional contacts
- Relationship and phone numbers

---

## Editing Patient Information

1. Click the patient row to open details
2. Click **Edit** button in the dropdown menu
3. Make changes in the form
4. Click **Save**

**Editable Sections:**
- Basic information
- Contact details
- Medical information
- Insurance details
- Emergency contacts

---

## Managing Medical Records

### Adding Allergies

1. Open patient details
2. Go to Medical History tab
3. Click **Add Allergy**
4. Enter:
   - Allergen name
   - Severity (Mild, Moderate, Severe)
   - Reaction type
5. Click **Save**

### Adding Conditions

1. Open patient details
2. Go to Medical History tab
3. Click **Add Condition**
4. Enter:
   - Condition name
   - ICD code (optional)
   - Status (Active, Resolved, Chronic)
   - Severity
   - Onset date
5. Click **Save**

### Adding Medications

1. Open patient details
2. Go to Medical History tab
3. Click **Add Medication**
4. Enter:
   - Medication name
   - Dosage
   - Frequency
   - Start date
   - Status (Active, Discontinued)
5. Click **Save**

---

## Bulk Actions

Select multiple patients to perform bulk actions:

### How to Select Patients

1. Check the checkbox next to patient names
2. Or click "Select All" in the header
3. The bulk action bar appears automatically

### Available Bulk Actions

| Action | Description |
|--------|-------------|
| **Activate** | Set selected patients to active |
| **Deactivate** | Set selected patients to inactive |
| **Delete** | Permanently remove patients |
| **Export** | Download selected patient data |

**Caution:** Delete actions cannot be undone. Patient data will be permanently removed.

---

## Scheduling from Patient View

Quickly schedule an appointment from a patient's profile:

1. Click the patient row to view details
2. Click the **Calendar** icon in the actions
3. Or navigate to patient profile and click **Schedule Appointment**
4. Complete the appointment form
5. Click **Save**

---

## Patient Status

Patients can have two status types:

| Status | Description | Impact |
|--------|-------------|--------|
| **Active** | Currently receiving care | Appears in all lists |
| **Inactive** | Not currently active | Hidden by default |

### Deactivating a Patient

1. Open patient profile
2. Click the dropdown menu (⋮)
3. Select **Deactivate**
4. Confirm the action

### Viewing Inactive Patients

1. Go to Patients page
2. Click Advanced Filters
3. Change Status to "Inactive" or "All"

---

## Best Practices

### Data Quality
1. Always verify patient information at check-in
2. Keep contact information up to date
3. Use consistent formatting for addresses and phones
4. Record allergies and medications accurately

### Privacy & Security
1. Only access patient records when necessary
2. Never share patient data outside the platform
3. Log out when leaving workstations
4. Report any suspicious access immediately

### Organization
1. Use medical record numbers consistently
2. Assign primary providers to all patients
3. Complete insurance information for billing
4. Keep emergency contacts current

---

## Troubleshooting

### Patient Not Appearing in Search
- Check if the patient is set to "Inactive"
- Try searching by a different field (email, phone)
- Verify the patient was saved successfully

### Duplicate Patients
- Search for the patient before creating a new record
- Use the CSV import duplicate detection feature
- Merge duplicates by contacting support

### Import Errors
- Check date format (YYYY-MM-DD required)
- Ensure required fields are present
- Remove special characters from data
- Check file encoding (UTF-8 recommended)

---

## Role-Based Access

Different roles have different patient access:

| Role | View | Edit | Delete |
|------|------|------|--------|
| Admin | ✅ All | ✅ All | ✅ All |
| Provider | ✅ All | ✅ Assigned | ❌ |
| Nurse | ✅ All | ✅ Limited | ❌ |
| Staff | ✅ Basic | ❌ | ❌ |

---

*Previous: [Business Profile](./03-business-profile.md) | Next: [Staff Management →](./05-staff-management.md)*
