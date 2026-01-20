---
title: Billing
layout: default
nav_order: 11
---

# Billing & Subscription

The Billing section allows account owners to manage subscriptions, payment methods, and view invoices. Only account owners have access to billing features.

---

## Accessing Billing

1. Click **Billing** in the sidebar
2. URL: `/admin/billing`

**Note:** Only account owners can access the Billing section. If you don't see it in your sidebar, contact your organization's owner.

---

## Billing Overview

> 📸 **Screenshot Placeholder**: Billing page overview
> - **Location**: `screenshots/admin-pages/billing/billing-overview.png`
> - **Description**: Complete billing page showing current plan card with plan name, status badge, billing cycle, price, and renewal date. Usage statistics section displaying feature usage against plan limits (e.g., "3 of 10 staff members"). Payment method section with saved card information (last 4 digits masked). Billing history table showing past invoices with dates, amounts, and download links.
> - **Note**: Requires authenticated access to the admin portal with Account Owner role.

The Billing page displays:
- **Current Plan**: Your active subscription
- **Usage Statistics**: Feature usage against limits
- **Payment Method**: Saved payment information
- **Billing History**: Past invoices and transactions

---

## Current Subscription

### Plan Information

| Element | Description |
|---------|-------------|
| Plan Name | Your current plan (Starter, Professional, etc.) |
| Status | Active, Trial, Past Due, Cancelled |
| Billing Cycle | Monthly or Annual |
| Price | Monthly/annual cost |
| Renewal Date | Next billing date |

### Plan Status Indicators

| Status | Badge Color | Meaning |
|--------|-------------|---------|
| Active | 🟢 Green | Subscription is current |
| Trial | 🔵 Blue | In trial period |
| Past Due | 🟡 Yellow | Payment issue |
| Cancelled | 🔴 Red | Subscription ended |

---

## Understanding Your Plan

### Plan Comparison

| Feature | Free | Starter | Professional | Growth |
|---------|------|---------|--------------|--------|
| Price/month | $0 | $29 | $99 | $249 |
| Staff Members | 1 | 3 | 10 | Unlimited |
| Patients | 10 | Unlimited | Unlimited | Unlimited |
| Appointments | 10/mo | Unlimited | Unlimited | Unlimited |
| Telemedicine | ❌ | 5/mo | Unlimited | Unlimited |
| Analytics | Basic | Standard | Advanced | Advanced |
| Support | Community | Email | Priority | Dedicated |

### Feature Limits

Your current usage is displayed:

```
Staff Members: 3 of 10 used
Telemedicine Sessions: 12 this month
Storage: 2.5 GB of 10 GB used
```

---

## Changing Your Plan

### Upgrading

1. Click **Upgrade Plan** or **Change Plan**
2. Review available plans
3. Select desired plan
4. Confirm changes
5. Pro-rated charges apply immediately

**When Upgrading:**
- New features available immediately
- Pro-rated charge for remaining billing period
- Higher limits apply instantly

### Downgrading

1. Click **Change Plan**
2. Select lower tier plan
3. Review impact (features you'll lose)
4. Confirm downgrade
5. Takes effect at next billing cycle

**When Downgrading:**
- Current features available until period ends
- New limits apply at next billing cycle
- No refunds for unused time
- Data exceeding new limits must be addressed

### Switching Billing Cycle

Switch between monthly and annual billing:

| Cycle | Benefit |
|-------|---------|
| Monthly | Flexibility, pay as you go |
| Annual | ~20% discount, locked price |

1. Click **Change Billing Cycle**
2. Review new price
3. Confirm change
4. New cycle applies at next renewal

---

## Trial Period

### During Trial

- Full access to selected plan features
- 14 days duration
- No payment required to start
- Payment method required before trial ends

### Trial Ending Soon

You'll receive reminders:
- 7 days before trial ends
- 3 days before trial ends
- 1 day before trial ends

### After Trial Ends

**If payment method is added:**
- Automatic conversion to paid subscription
- First charge processed
- No service interruption

**If no payment method:**
- Access restricted to Free plan features
- Data preserved for 30 days
- Upgrade anytime to restore access

---

## Payment Methods

### Adding Payment Method

1. Click **Add Payment Method**
2. Enter card details:
   - Card number
   - Expiration date
   - CVC
   - Billing address
3. Click **Save**

**Supported Payment Methods:**
- Credit cards (Visa, Mastercard, Amex, Discover)
- Debit cards
- Some international cards

### Managing Payment Methods

**Set as Default:**
- Click **Make Default** on the card
- Default card used for all charges

**Remove Payment Method:**
- Click **Remove**
- Must have at least one method for paid plans
- Cannot remove if charges are pending

### Updating Payment Information

1. Click **Edit** on the payment method
2. Update billing address
3. For card updates, remove old and add new

---

## Invoices and Receipts

### Viewing Invoices

All past invoices are listed:

| Column | Description |
|--------|-------------|
| Date | Invoice date |
| Invoice # | Unique invoice number |
| Amount | Total charged |
| Status | Paid, Pending, Failed |
| Actions | View, Download |

### Downloading Invoices

1. Find the invoice in the list
2. Click **Download** (📥)
3. PDF downloads automatically

### Invoice Details

Click an invoice to view:
- Line items
- Taxes applied
- Payment method used
- Transaction ID

---

## Usage Monitoring

### Real-Time Usage

Track your usage against plan limits:

**Staff Members:**
```
Current: 5
Limit: 10
Status: ✅ Within limit
```

**Monthly Appointments:**
```
Current: 142
Limit: Unlimited
Status: ✅ No limit
```

**Telemedicine Sessions:**
```
Current: 23
Limit: 30
Status: ⚠️ Approaching limit
```

### Usage Alerts

You'll receive alerts when:
- Approaching 80% of a limit
- At 100% of a limit
- Exceeding a limit

---

## Limit Violations

### When You Exceed Limits

If you exceed your plan limits:

1. **Warning Banner**: Appears on affected pages
2. **Feature Restrictions**: Some features may be limited
3. **Grace Period**: Brief period to address the issue
4. **Resolution Options**:
   - Upgrade your plan
   - Reduce usage
   - Contact support

### Resolving Violations

**Option 1: Upgrade Plan**
- Click **Upgrade** in the warning banner
- Select plan with higher limits
- Restrictions removed immediately

**Option 2: Reduce Usage**
- Deactivate unused staff accounts
- Archive old data
- Wait for next billing cycle

---

## Cancellation

### Cancelling Your Subscription

1. Click **Cancel Subscription**
2. Select cancellation reason
3. Review what you'll lose
4. Confirm cancellation

### After Cancellation

- Access continues until billing period ends
- No further charges
- Data preserved for 30 days
- Can reactivate anytime

### Reactivating

1. Go to Billing page
2. Click **Reactivate Subscription**
3. Select plan
4. Add/confirm payment method
5. Subscription restored

---

## Billing Support

### Common Issues

**Payment Failed:**
1. Check card expiration date
2. Verify billing address
3. Contact your bank
4. Try a different card

**Unexpected Charge:**
1. Review invoice details
2. Check for pro-rated charges
3. Contact support if unclear

**Refund Request:**
- Contact support within 30 days
- Provide invoice number
- Explain situation

### Contacting Billing Support

1. Click **Contact Support** in Billing page
2. Or email billing@genko.app
3. Include your organization name and invoice numbers

---

## Best Practices

### Managing Costs

1. Choose annual billing for savings
2. Right-size your plan to actual needs
3. Deactivate unused staff accounts
4. Monitor usage regularly

### Payment Security

1. Keep payment method current
2. Update before expiration
3. Monitor invoice emails
4. Report suspicious charges immediately

### Planning for Growth

1. Track usage trends
2. Upgrade before hitting limits
3. Budget for growing team
4. Consider annual plans for stability

---

## Troubleshooting

### Cannot Access Billing

- Only account owners can access
- Contact your organization owner
- Verify your account role

### Payment Not Processing

- Check card details
- Verify sufficient funds
- Try a different card
- Contact your bank

### Invoice Not Received

- Check spam folder
- Verify email address in settings
- Download from Billing page

### Plan Change Not Applied

- Check effective date
- Changes may apply next cycle
- Contact support for urgent needs

---

## Security and Compliance

### Payment Security

- All payments processed via Stripe
- PCI-DSS compliant
- Card numbers never stored on our servers
- Encrypted transmission

### Data Protection

- Billing information is private
- Only account owners access billing
- Audit logs maintained
- HIPAA compliant data handling

---

*Previous: [Settings & Configuration](./09-settings.md) | Next: [Quick Reference Guide →](./11-quick-reference.md)*
