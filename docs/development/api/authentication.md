---
title: Authentication
sidebar_position: 2
description: Learn how to securely authorize requests to the Drawhisper API.
---

All Drawhisper API requests require a valid bearer token obtained via OAuth 2.0 client credentials.

## Create a client

1. Navigate to **Workspace Settings → API clients**.
2. Click **New client** and assign it a descriptive name.
3. Choose the least-privilege scopes your integration needs.
4. Save the client secret somewhere safe — you will not be able to view it again.

## Request a token

```bash
curl -X POST https://api.drawhisper.com/oauth/token \
  -u "$CLIENT_ID:$CLIENT_SECRET" \
  -d 'grant_type=client_credentials'
```

The response returns a JSON payload similar to:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "projects:read renders:write"
}
```

Store the token in memory and refresh it before the `expires_in` window closes.

## Sending authenticated requests

Include the token in the `Authorization` header:

```http
GET /v1/projects HTTP/1.1
Host: api.drawhisper.com
Authorization: Bearer <ACCESS_TOKEN>
```

If the token becomes invalid, the API responds with `401 Unauthorized`. Refresh your token and retry the request.
