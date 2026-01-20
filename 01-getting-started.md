---
title: Getting Started
layout: default
nav_order: 2
---

# Getting Started with Genkō

This guide walks you through the complete process of creating your Genkō account and completing the initial setup.

---

## 1. Creating Your Account

### Step 1: Access the Sign-Up Page

Navigate to the Genkō sign-up page at `yourdomain.com/auth/signup` or click "Start Free Trial" from the homepage.

> 📸 **Screenshot Placeholder**: Homepage with "Start Free Trial" button highlighted
> - **Location**: `screenshots/public-pages/homepage-cta.png`
> - **Description**: The Genkō homepage (getgenko.com) showing the prominent "Start Free Trial" call-to-action button in the header navigation. This is the primary entry point for new users to begin their account creation process.
> - **Note**: This is a public page and can be captured directly from getgenko.com without authentication.

### Step 2: Select Your Subscription Plan

> 📸 **Screenshot Placeholder**: Pricing page showing all subscription tiers
> - **Location**: `screenshots/public-pages/pricing-plans.png`
> - **Description**: The pricing page from getgenko.com displaying all available subscription plans (Free, Starter, Professional, Growth) with their features, pricing, and comparison table. This helps users understand their options before signing up.
> - **Note**: This is a public page and can be captured from the pricing section of getgenko.com.

Genkō offers several subscription tiers to match your clinic's needs:

| Plan | Price | Best For |
|------|-------|----------|
| **Free** | $0/month | Solo practitioners getting started |
| **Starter** | $29/month | Small practices with basic needs |
| **Professional** | $99/month | Growing clinics with multiple providers |
| **Growth** | $249/month | Large practices with advanced features |

**Note:** All paid plans include a 14-day free trial with no credit card required for the trial period.

#### What's Included in Each Plan:

**Free Plan:**
- Basic patient management
- Limited appointments
- Single user access

**Starter Plan:**
- Full patient management
- Unlimited appointments
- Up to 3 staff members
- Basic analytics

**Professional Plan (Most Popular):**
- Everything in Starter
- Up to 10 staff members
- Telemedicine features
- Advanced analytics
- Insurance claims management

**Growth Plan:**
- Everything in Professional
- Unlimited staff members
- Priority support
- Custom integrations
- API access

### Step 3: Enter Your Information

> ⚠️ **Authentication Required**: The sign-up form is part of the authentication flow and requires user input. Screenshots will be added once a secure testing environment is available.
> - **Pending Location**: `screenshots/admin-pages/auth/signup-form.png`
> - **Description**: The registration form showing fields for full name, email, organization name, organization URL, password, and password confirmation. Includes terms of service checkbox and "Create Account" button.

After selecting a plan, complete the registration form:

1. **Full Name**: Enter your full name (this will be your admin profile name)
2. **Email**: Enter a valid email address (used for login and notifications)
3. **Organization Name**: Enter your clinic or practice name
4. **Organization URL**: Choose a unique URL slug for your organization (e.g., `my-clinic` → `genko.app/my-clinic`)
5. **Password**: Create a secure password (minimum 8 characters)
6. **Confirm Password**: Re-enter your password to confirm

**Tips for Organization URL:**
- Use lowercase letters, numbers, and hyphens only
- Keep it short and memorable
- It will be part of your public profile URL
- Cannot be changed easily after creation

### Step 4: Accept Terms and Create Account

- Check the box to agree to the Terms of Service and Privacy Policy
- Click **"Create Account"** or **"Start Free Trial"**

### Step 5: For Paid Plans - Complete Payment (Optional for Trial)

If you selected a paid plan:
- You'll be shown a modal with plan details
- Click **"Start 14-Day Trial"** to begin your trial
- You can add payment information now or later before the trial ends

---

## 2. First-Time Login

### Signing In

> ⚠️ **Authentication Required**: The sign-in flow requires user credentials and organization selection.
> - **Pending Location**: `screenshots/admin-pages/auth/signin-flow.png`
> - **Description**: Multi-screenshot showing the two-step login process: (1) Email entry screen, (2) Organization selection screen (if applicable), (3) Password entry screen. Shows magic link option as alternative.

1. Go to `yourdomain.com/auth/signin`
2. Enter your email address and click **Continue**
3. Select your organization (if you have multiple)
4. Enter your password and click **Sign In**

**Alternative Sign-In Options:**
- **Magic Link**: Click "Use Magic Link" to receive a one-time login link via email
- **Password Sign-In**: Enter your password directly

### Two-Step Login Process

Genkō uses a two-step login for enhanced security:

1. **Step 1 - Email Verification**: Enter your email to see which organizations you're associated with
2. **Step 2 - Organization Selection**: Choose which organization to sign into (if you have multiple) and authenticate

---

## 3. The Onboarding Wizard

> 📸 **Screenshot Placeholder**: Dashboard with onboarding wizard
> - **Location**: `screenshots/admin-pages/dashboard/onboarding-wizard.png`
> - **Description**: Dashboard view showing the onboarding wizard banner at the top with progress percentage and list of setup steps (Welcome, Complete Profile, Add First Patient, Invite Team, Schedule Appointment). Shows both completed steps (green checkmarks) and pending steps (gray icons).
> - **Note**: Requires authenticated access to the admin dashboard.

After your first login, you'll see the **Onboarding Wizard** on your dashboard. This guides you through essential setup steps.

### Onboarding Progress

The wizard tracks your progress and shows:
- ✅ Completed steps (green checkmarks)
- ⏳ Pending steps (gray icons)
- Progress percentage at the top

### Onboarding Steps

1. **Welcome** ✅
   - Automatically completed on first login
   - Introduces you to the platform

2. **Complete Your Profile**
   - Add your clinic's contact information
   - Upload your logo
   - Set your business address
   - Location: Settings → Business Profile

3. **Add Your First Patient**
   - Create or import patient records
   - Essential for scheduling appointments
   - Location: Patients section

4. **Invite Your Team** (Admin only)
   - Add staff members to collaborate
   - Assign appropriate roles
   - Location: Staff section

5. **Schedule an Appointment**
   - Book your first patient appointment
   - Test the scheduling workflow
   - Location: Scheduling section

### Completing the Onboarding

- Click on any incomplete step to navigate directly to that section
- Complete actions in that section to mark the step as done
- Once all steps are complete, the wizard shows a celebration message
- You can dismiss the wizard at any time using "Skip for now"

---

## 4. Understanding the Admin Layout

> 📸 **Screenshot Placeholder**: Complete admin interface layout
> - **Location**: `screenshots/admin-pages/dashboard/admin-layout-overview.png`
> - **Description**: Full-screen view of the admin interface showing the sidebar navigation on the left with all menu items (Dashboard, Patients, Scheduling, Analytics, Messages, Leads, Staff, Business Profile, Settings, Billing), the top header bar with global search, notifications, and user menu, and the main content area displaying the dashboard.
> - **Note**: Requires authenticated access to the admin portal.

After logging in, you'll see the main admin interface:

### Navigation Sidebar (Left)

The sidebar contains all main navigation items organized into sections:

**Operations:**
- 🏠 **Dashboard** - Overview and quick stats
- 👥 **Patients** - Patient management
- 📅 **Scheduling** - Calendar and appointments
- 📊 **Analytics** - Reports and metrics

**Communication:**
- 💬 **Messages** - Patient conversations
- 📋 **Leads** - Potential patient tracking

**Management:**
- 👨‍⚕️ **Staff** - Team management
- 🏢 **Business Profile** - Organization settings
- ⚙️ **Settings** - System configuration
- 💳 **Billing** - Subscription management (Account owners only)

### Header Bar (Top)

- **Sidebar Toggle**: Collapse/expand the sidebar
- **Global Search**: Search patients, appointments, and settings (Ctrl/Cmd + K)
- **Notifications**: View alerts and updates
- **User Menu**: Profile settings, theme, language, and sign out

### User Menu Options

Click your avatar in the top-right to access:
- **Theme Switcher**: Toggle light/dark mode
- **Language Switcher**: Change interface language (English, Spanish, Japanese)
- **Density Switcher**: Adjust interface spacing
- **Account Settings**: Personal profile settings
- **Team Management**: Quick link to staff section (Admin only)
- **Sign Out**: Log out of your account

---

## 5. Language and Localization

Genkō supports multiple languages:
- 🇺🇸 English
- 🇲🇽 Spanish (Español)
- 🇯🇵 Japanese (日本語)

### Changing Language

1. Click your avatar in the top-right corner
2. Find the **Language** section in the dropdown
3. Click your preferred language
4. The interface will immediately update

---

## 6. Theme and Display Settings

### Dark Mode

Toggle between light and dark mode:
1. Click your avatar in the top-right corner
2. Find the **Theme** section
3. Choose: System, Light, or Dark

### Interface Density

Adjust how compact the interface appears:
1. Click your avatar in the top-right corner
2. Find the **Density** section
3. Choose: Compact, Comfortable, or Spacious

---

## Next Steps

Once you've completed the initial setup:

1. ➡️ [Set up your Business Profile](./03-business-profile.md)
2. ➡️ [Add your first patients](./04-patient-management.md)
3. ➡️ [Configure your schedule](./06-scheduling.md)

---

## Troubleshooting Common Issues

### "Email is already taken"
- This email is already registered
- Try signing in instead, or use a different email

### "Organization URL is not available"
- Someone else has claimed this URL
- Try adding a location suffix (e.g., `my-clinic-nyc`)

### "Password must be at least 8 characters"
- Choose a longer password
- Include a mix of letters, numbers, and symbols for security

### Didn't receive verification email
- Check your spam/junk folder
- Make sure you entered the correct email address
- Use the "Forgot Password" option to resend

---

*Continue to [Dashboard Overview →](./02-dashboard.md)*
