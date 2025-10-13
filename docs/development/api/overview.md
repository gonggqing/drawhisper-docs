---
title: API Overview
sidebar_position: 1
description: Understand the building blocks of the Drawhisper API before you start integrating.
---

The Drawhisper API lets you automate creative workflows, sync assets, and orchestrate AI-assisted editing directly from your own applications.

## What you can do

- 🎨 **Manage creative projects** — create, update, and archive projects in real time.
- 🧠 **Trigger AI render jobs** — queue generations, monitor their status, and fetch results programmatically.
- 🔄 **Sync assets** — upload source files, retrieve final renders, and keep metadata in sync with Drawhisper libraries.
- 📡 **React to events** — subscribe to webhooks for project updates, render completions, and review feedback.

## Quick start checklist

1. Request API credentials from the Drawhisper workspace admin.
2. Add your client ID and secret to a secure secrets manager.
3. Review the authentication flow and grab a short-lived access token.
4. Call the `/v1/projects` endpoint to confirm your integration is wired up.

Ready for more? Continue with the authentication guide to obtain tokens safely.
