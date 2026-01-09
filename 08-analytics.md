---
title: Analytics
layout: default
nav_order: 9
---

# Analytics Dashboard

The Analytics Dashboard provides comprehensive insights into your clinic's performance. Track revenue, claims, payments, and key performance indicators (KPIs).

---

## Accessing Analytics

1. Click **Analytics** in the sidebar
2. URL: `/admin/analytics`

---

## Dashboard Overview

The Analytics page contains:
- **Header**: Title and action buttons
- **Filters**: Date range and report type
- **KPI Cards**: Key metrics at a glance
- **Charts**: Visual data representations
- **Detailed Reports**: Tabbed analysis sections

---

## Filters and Controls

### Date Range Selection

Set the analysis period:

| Field | Description |
|-------|-------------|
| Start Date | Beginning of analysis period |
| End Date | End of analysis period |

**Quick Date Ranges:**
- Last 7 days
- Last 30 days
- Last 90 days
- This month
- This quarter
- Custom range

### Report Type

Choose the type of analysis:

| Report Type | Shows |
|-------------|-------|
| **Full Dashboard** | All metrics and charts |
| **Revenue Summary** | Revenue-focused data |
| **Claims Analysis** | Insurance claims details |
| **Payment Analysis** | Payment tracking |

### Apply and Refresh

- Click **Apply Filters** to update data
- Click **Refresh** (🔄) to reload current view
- Click **Export** (📥) to download reports

---

## KPI Cards

Four key metric cards display at the top:

### 1. Total Revenue
- **Value**: Total revenue for selected period
- **Icon**: 💵 Dollar sign
- **Trend**: Up/Down indicator
- **Color**: Green

### 2. Total Claims
- **Value**: Number of claims submitted
- **Icon**: 📄 Document
- **Trend**: Neutral indicator
- **Color**: Blue

### 3. Claims Paid Ratio
- **Value**: Percentage of claims paid
- **Icon**: ✅ Checkmark
- **Trend**: Up (>80%) or Down
- **Color**: Green or Red

### 4. Pending Claims
- **Value**: Claims awaiting processing
- **Icon**: ⏰ Clock
- **Trend**: Neutral
- **Color**: Yellow

---

## Analytics Tabs

### Overview Tab

The default view showing:

**Revenue Chart:**
- Monthly revenue trends
- Line or bar chart visualization
- Comparison to previous periods

**Claims Analysis:**
- Claims by status (pie chart)
- Approved, Denied, Pending breakdown
- Processing time averages

**Top Payers:**
- Ranked list of insurance payers
- Payment amounts
- Percentage of total revenue

---

### Revenue Tab

Detailed revenue analysis:

**Revenue Trend Chart:**
- Monthly/quarterly breakdown
- Revenue over time
- Comparison with targets

**Revenue by Source:**
- Insurance payments
- Patient payments
- Other income

**Revenue Metrics:**
| Metric | Description |
|--------|-------------|
| Total Revenue | Gross revenue |
| Average per Visit | Revenue per appointment |
| Collection Rate | Percentage of billed collected |

---

### Claims Tab

Insurance claims analysis:

**Claims Status Overview:**
| Status | Description |
|--------|-------------|
| Approved | Claims paid by insurance |
| Denied | Claims rejected |
| Pending | Under review |
| Appealed | Denial being contested |

**Claims Analysis Chart:**
- Status distribution (pie chart)
- Claims by payer (bar chart)
- Denial rate trends

**Claims Metrics:**
| Metric | Description |
|--------|-------------|
| Total Claims | Number of claims |
| Approval Rate | Percentage approved |
| Average Processing Time | Days to resolution |
| Denial Rate | Percentage denied |

---

### Payments Tab

Payment tracking and analysis:

**Payment Sources:**
| Source | Description |
|--------|-------------|
| Insurance | Third-party payer |
| Self-Pay | Patient direct payment |
| Cash | In-office cash |
| Card | Credit/debit card |

**Payment Methods:**
- Cash
- Credit Card
- Debit Card
- Bank Transfer
- Check

**Recent Payments:**
- List of latest payment transactions
- Amount, source, method, status
- Quick view of payment activity

**Payment Metrics:**
| Metric | Description |
|--------|-------------|
| Total Payments | Sum of all payments |
| Payment Count | Number of transactions |
| Average Payment | Mean payment amount |

---

## Key Performance Indicators (KPIs)

### KPI Section

Displays configured KPIs for your practice:

| KPI | Description | Target |
|-----|-------------|--------|
| Collection Rate | % of billed collected | 95% |
| Denial Rate | % of claims denied | <5% |
| Days in AR | Avg days to collection | <30 |
| Patient Volume | Patients per month | Varies |
| Revenue per Visit | Avg revenue per appt | Varies |

### KPI Cards Display

Each KPI shows:
- KPI name
- Category badge
- Description
- Target value (if set)
- Current value (when calculated)
- Alert status

---

## Charts and Visualizations

### Chart Types Used

| Chart Type | Used For |
|------------|----------|
| Line Chart | Trends over time |
| Bar Chart | Category comparisons |
| Pie Chart | Distribution breakdown |
| Area Chart | Volume over time |

### Chart Interactions

- **Hover**: View data point details
- **Legend Click**: Toggle data series
- **Zoom**: Scroll to adjust date range
- **Export**: Download chart image

---

## Exporting Data

### Export Options

1. Click **Export** button
2. Choose format:
   - PDF Report
   - Excel Spreadsheet
   - CSV Data

### What's Included

| Report Type | Contents |
|-------------|----------|
| Full Dashboard | All metrics and charts |
| Revenue Report | Revenue data and trends |
| Claims Report | Claims analysis data |
| Payment Report | Payment transactions |

---

## Data Refresh

### Automatic Refresh

- Data updates when you change filters
- Real-time updates for critical metrics
- Cached data may be up to 15 minutes old

### Manual Refresh

1. Click the **Refresh** button (🔄)
2. Wait for data to reload
3. "Refreshing" spinner indicates update in progress

---

## Report Metadata

At the bottom of the dashboard:

**Report Information:**
- Generation timestamp
- Date range covered
- Report type
- Last updated time

---

## Understanding Your Metrics

### Revenue Health Indicators

| Metric | Good | Warning | Action Needed |
|--------|------|---------|---------------|
| Collection Rate | >95% | 85-95% | <85% |
| Denial Rate | <5% | 5-10% | >10% |
| Days in AR | <30 | 30-45 | >45 |

### Improving Metrics

**Low Collection Rate:**
- Review billing procedures
- Follow up on outstanding balances
- Verify insurance information upfront

**High Denial Rate:**
- Audit common denial reasons
- Train staff on proper coding
- Verify eligibility before service

**High Days in AR:**
- Improve follow-up procedures
- Submit claims promptly
- Appeal denials quickly

---

## Best Practices

### Regular Review

1. Check dashboard daily for urgent issues
2. Review weekly for trends
3. Deep dive monthly for strategic planning
4. Compare quarterly for seasonal patterns

### Using Filters Effectively

1. Start with broad date range for overview
2. Narrow down to investigate issues
3. Compare similar periods (month to month)
4. Track specific payers or services

### Acting on Data

1. Set targets for key metrics
2. Monitor progress regularly
3. Investigate anomalies immediately
4. Share insights with team

---

## Troubleshooting

### Data Not Loading

- Check internet connection
- Verify date range is valid
- Try a narrower date range
- Refresh the page

### Incorrect Data

- Verify filter settings
- Check data entry accuracy
- Wait for sync (15 min max)
- Contact support for discrepancies

### Charts Not Displaying

- Try a different browser
- Enable JavaScript
- Clear browser cache
- Check for ad blockers

### Export Not Working

- Check browser download settings
- Allow pop-ups for the site
- Try a different format
- Reduce date range size

---

## Plan Features

Analytics features vary by plan:

| Feature | Free | Starter | Professional | Growth |
|---------|------|---------|--------------|--------|
| Basic Dashboard | ✅ | ✅ | ✅ | ✅ |
| Revenue Tracking | ❌ | ✅ | ✅ | ✅ |
| Claims Analysis | ❌ | ❌ | ✅ | ✅ |
| Payment Analysis | ❌ | ❌ | ✅ | ✅ |
| Custom KPIs | ❌ | ❌ | ❌ | ✅ |
| Data Export | ❌ | ✅ | ✅ | ✅ |
| API Access | ❌ | ❌ | ❌ | ✅ |

---

*Previous: [Messages & Lead Management](./07-communications.md) | Next: [Settings & Configuration →](./09-settings.md)*
