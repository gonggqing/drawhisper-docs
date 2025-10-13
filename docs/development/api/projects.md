---
title: Projects API
sidebar_position: 3
description: Create and manage Drawhisper projects programmatically.
---

## List projects

```bash
curl https://api.drawhisper.com/v1/projects \
  -H "Authorization: Bearer <ACCESS_TOKEN>"
```

Query parameters:

- `limit` — number of items per page (default `25`, max `100`).
- `status` — filter by project status (`active`, `archived`).
- `updated_after` — ISO timestamp for incremental syncs.

Response snippet:

```json
{
  "data": [
    {
      "id": "proj_8C2d4R",
      "name": "Storyboard 2026",
      "status": "active",
      "created_at": "2025-07-21T09:14:03Z"
    }
  ],
  "pagination": {
    "cursor": "eyJvZmZzZXQiOjI1fQ=="
  }
}
```

## Create a project

```bash
curl -X POST https://api.drawhisper.com/v1/projects \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Autumn Release 2025",
    "description": "Launch assets for the Autumn campaign"
  }'
```

Successful responses return the newly created project payload.

## Archive a project

```bash
curl -X POST https://api.drawhisper.com/v1/projects/proj_8C2d4R/archive \
  -H "Authorization: Bearer <ACCESS_TOKEN>"
```

The endpoint responds with `204 No Content` when the archive succeeds.
