---
title: Communications
layout: default
nav_order: 8
---

# Messages & Lead Management

Effective communication with patients and potential leads is essential for a successful practice. Genkō provides robust messaging and lead management tools.

---

## Part 1: Messages

### Accessing Messages

1. Click **Messages** in the sidebar
2. URL: `/admin/messages`

---

### Messages Overview

> 📸 **Screenshot Placeholder**: Messages interface
> - **Location**: `screenshots/admin-pages/communications/messages-overview.png`
> - **Description**: Split-panel messages interface showing the left panel with conversations list (patient names, last message previews, status badges, priority indicators, AI icons, timestamps) and the right panel with the selected conversation view including message history, message input area with AI assistant toggle, and send button.
> - **Note**: Requires authenticated access to the admin portal with sample conversations.

The Messages interface has two main panels:

**Left Panel: Conversations List**
- All active conversations
- Search and filter options
- Status indicators
- Priority badges

**Right Panel: Conversation View**
- Selected conversation messages
- Message input area
- AI assistant controls

---

### Understanding Conversations

Each conversation shows:
| Element | Description |
|---------|-------------|
| Patient Name | Conversation participant |
| Last Message | Preview of most recent message |
| Status Badge | Active, Pending, Resolved |
| Priority | Low, Medium, High |
| AI Icon | Blue robot if AI is enabled |
| Message Count | Total messages |
| Timestamp | Last activity time |

---

### Conversation Statuses

| Status | Color | Description |
|--------|-------|-------------|
| **Active** | 🟢 Green | Ongoing conversation |
| **Pending** | 🟡 Yellow | Awaiting response |
| **Resolved** | ⬜ Gray | Conversation closed |

---

### Starting a New Conversation

1. Click **New Conversation** button
2. Select a patient or enter contact info
3. Set conversation priority
4. Choose AI assistance preference
5. Click **Create**

---

### Sending Messages

1. Select a conversation from the left panel
2. Type your message in the input area
3. Optional: Toggle AI override
4. Click **Send** or press Enter

**Message Options:**
| Option | Description |
|--------|-------------|
| **AI Override** | When enabled, bypasses AI for manual responses |
| **Attachments** | Add files (coming soon) |

---

### AI-Assisted Messaging

Genkō includes intelligent AI assistance:

**How AI Helps:**
- Drafts initial responses
- Suggests replies based on context
- Handles routine inquiries
- Learns from your communication style

**AI Toggle Per Conversation:**
1. Open conversation settings
2. Toggle "AI Enabled" switch
3. When ON: AI may respond automatically
4. When OFF: All responses are manual

**AI Override for Single Message:**
1. Toggle "AI Override" before sending
2. Your message bypasses AI processing
3. Useful for sensitive or specific responses

---

### Message Indicators

**Message Sender Types:**
| Icon | Sender | Description |
|------|--------|-------------|
| 👤 User | Patient | Message from patient |
| 🤖 Bot | AI | AI-generated response |
| 💬 Staff | Staff | Manual staff response |

**AI Generated Badge:**
- Messages created by AI show a small robot icon
- Helps distinguish between AI and staff responses

---

### Filtering Conversations

**Quick Search:**
- Search by patient name or message content

**Status Filter Dropdown:**
| Filter | Shows |
|--------|-------|
| All | All conversations |
| Active | Ongoing conversations |
| Pending | Awaiting response |
| Resolved | Closed conversations |

---

### Conversation Actions

From a conversation, you can:
| Action | How |
|--------|-----|
| Change Status | Update dropdown in header |
| Toggle AI | Flip the AI Enabled switch |
| View Patient | Click patient name link |
| Close Conversation | Set status to Resolved |

---

## Part 2: Lead Management

### Accessing Leads

1. Click **Leads** in the sidebar
2. URL: `/admin/leads`

---

### Understanding Leads

Leads are potential patients who have shown interest but haven't converted to full patient records yet.

**Lead Sources:**
| Source | Description |
|--------|-------------|
| **WhatsApp** | Inquiries via WhatsApp |
| **Website** | Form submissions from website |
| **Referral** | Referred by existing patients |

---

### Lead Pipeline Stages

Leads move through a sales pipeline:

```
Lead → Prospect → Qualified → Converted
                        ↓
                      Lost
```

| Stage | Description |
|-------|-------------|
| **Lead** | Initial contact, minimal engagement |
| **Prospect** | Showed genuine interest |
| **Qualified** | Ready to become patient |
| **Converted** | Successfully became patient |
| **Lost** | Did not convert |

---

### View Modes

Toggle between two view modes:

**Table View:**
- Traditional list format
- Sortable columns
- Bulk actions available

**Kanban View:**
- Visual pipeline board
- Drag-and-drop between stages
- Quick status changes

---

### Adding a New Lead

1. Click **Add Lead** button
2. Fill in the lead form:

| Field | Required | Description |
|-------|----------|-------------|
| Phone Number | Yes | Primary contact number |
| First Name | No | Lead's first name |
| Last Name | No | Lead's last name |
| Email | No | Email address |
| Source | Yes | Where they came from |
| Status | Yes | Current pipeline stage |
| Notes | No | Additional information |
| Tags | No | Custom labels |

3. Click **Create Lead**

---

### Managing Leads in Table View

**Search and Filters:**
- Search by name, email, phone
- Filter by status
- Filter by source

**Table Actions:**
| Icon | Action |
|------|--------|
| ✏️ Edit | Modify lead information |
| 💬 Message | Start conversation |
| ✅ Convert | Convert to patient |
| 🗑️ Delete | Remove lead |

---

### Managing Leads in Kanban View

**Drag and Drop:**
1. Click and hold a lead card
2. Drag to desired column
3. Release to update status

**Card Actions:**
- Click icons on card for quick actions
- Use arrow buttons to move left/right
- Loading spinner shows during updates

**Moving with Arrows:**
1. Click ◀ to move lead left
2. Click ▶ to move lead right
3. Status updates automatically

---

### Converting Leads to Patients

When a lead is ready to become a patient:

1. Find the lead in table or kanban view
2. Click **Convert to Patient** (✅ icon)
3. Confirm the conversion
4. Lead becomes a patient record
5. Status changes to "Converted"

**After Conversion:**
- Patient record is created
- Lead is marked as converted
- You can schedule their first appointment
- Original lead data is preserved

---

### Starting Conversations from Leads

1. Click the message icon (💬) on any lead
2. A new conversation is created
3. You're redirected to Messages
4. Lead information is pre-populated

---

### Editing Lead Information

1. Click the edit icon (✏️)
2. Update fields in the modal
3. Click **Update Lead**

**Editable Fields:**
- Name and contact info
- Source and status
- Notes
- Tags

---

### Deleting Leads

1. Click the delete icon (🗑️)
2. Confirm deletion
3. Lead is permanently removed

**Warning:** Deleted leads cannot be recovered. Convert important leads to patients before deleting.

---

### Lead Tags

Use tags to categorize leads:

**Common Tags:**
- `urgent`
- `follow-up`
- `insurance-question`
- `price-sensitive`
- `referral`

**Adding Tags:**
1. Edit the lead
2. Add tags in the tags field
3. Save changes

---

## Best Practices

### Messages

1. **Respond Promptly**: Aim for same-day responses
2. **Use AI Wisely**: Let AI handle routine inquiries
3. **Set Priorities**: Mark urgent conversations appropriately
4. **Close Resolved**: Archive completed conversations
5. **Stay Professional**: Maintain HIPAA-compliant communication

### Lead Management

1. **Follow Up Quickly**: Contact new leads within 24 hours
2. **Update Stages**: Keep pipeline status current
3. **Add Notes**: Document all interactions
4. **Use Tags**: Categorize for easy filtering
5. **Convert Promptly**: Move qualified leads to patients

---

## Troubleshooting

### Messages

**Conversation Not Loading:**
- Refresh the page
- Check internet connection
- Select a different conversation

**AI Not Responding:**
- Verify AI is enabled for conversation
- Check organization AI settings
- AI may be disabled on free plans

### Leads

**Lead Not Moving (Kanban):**
- Wait for loading to complete
- Try using arrow buttons instead
- Refresh the page

**Cannot Convert to Patient:**
- Check required fields are filled
- Lead may already be converted
- Verify you have permission

**Duplicate Leads:**
- Search before creating new leads
- Merge duplicates by contacting support
- Use consistent phone formatting

---

## Integration with Other Modules

### Messages ↔ Patients
- Click patient name to view profile
- Access message history from patient records

### Leads ↔ Patients
- Convert leads to create patient records
- Lead history preserved in patient notes

### Messages ↔ Leads
- Start conversations directly from leads
- Lead context available in conversation

---

*Previous: [Scheduling & Calendar](./06-scheduling.md) | Next: [Analytics Dashboard →](./08-analytics.md)*
