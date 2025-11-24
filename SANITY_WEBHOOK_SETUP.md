# Sanity Webhook Setup for Instant Updates

This guide explains how to set up Sanity webhooks to instantly update your Next.js website when content changes in Sanity CMS.

## Current Setup

✅ **ISR (Incremental Static Regeneration)** is already configured:

- Pages revalidate every 60 seconds automatically
- This means content updates within 1 minute without webhooks

✅ **Webhook API Route** is created at `/api/revalidate`

- This allows instant updates when configured with Sanity webhooks

## Setting Up Sanity Webhook

### Step 1: Get Your Revalidation Secret

1. Add a secret to your `.env.local` file:

```env
SANITY_REVALIDATE_SECRET=your-super-secret-key-here
```

2. Add the same secret to your Vercel environment variables:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add `SANITY_REVALIDATE_SECRET` with your secret value

### Step 2: Configure Sanity Webhook

1. Go to your Sanity project: https://www.sanity.io/manage
2. Navigate to: **API** → **Webhooks**
3. Click **Create webhook**
4. Configure:
   - **Name**: `Next.js Revalidation`
   - **URL**: `https://www.jacksonjames.in/api/revalidate?secret=YOUR_SECRET_HERE`
     (Replace `YOUR_SECRET_HERE` with the secret from Step 1)
   - **Dataset**: `production`
   - **Trigger on**:
     - ✅ Create
     - ✅ Update
     - ✅ Delete
   - **Filter**: Leave empty (or use: `_type == "testimonial" || _type == "story" || _type == "film"`)
   - **Projection**: Leave empty
   - **HTTP method**: `POST`
   - **API version**: `v2021-03-25` or latest
   - **Secret**: (optional, but recommended)

5. Click **Save**

### Step 3: Test the Webhook

1. Make a change in Sanity (add/update/delete a testimonial, story, or film)
2. Check your Vercel function logs to see if the webhook was called
3. Visit your website - it should update immediately

## How It Works

1. **ISR (60 seconds)**: Pages automatically refresh every 60 seconds
2. **Webhook (instant)**: When Sanity content changes, it triggers the webhook which instantly revalidates the affected pages

## Troubleshooting

### Webhook not working?

- Check Vercel function logs: Vercel Dashboard → Your Project → Functions → `/api/revalidate`
- Verify the secret matches in both `.env.local` and Vercel environment variables
- Test the endpoint manually: `curl -X POST https://www.jacksonjames.in/api/revalidate?secret=YOUR_SECRET`

### Still seeing old content?

- Clear browser cache
- Check if the webhook is being called in Vercel logs
- Verify the revalidation paths in `/api/revalidate/route.ts` match your pages

## Manual Revalidation

You can also manually trigger revalidation by calling:

```
POST https://www.jacksonjames.in/api/revalidate?secret=YOUR_SECRET
```
