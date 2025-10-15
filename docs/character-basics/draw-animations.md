---
title: Draw Animations
sidebar_position: 4
description: Prepare and upload motion assets that sync with voices and scene beats.
---

Animations turn static art into believable reactions. Drawhisper currently supports **Spine** rigs and **Live2D** models with default lipsync.

## Know the animation types
| Type | Best for | Notes |
| --- | --- | --- |
| Idle loops | Holding states between dialogue | Keep under 6 seconds; loop seamlessly. |
| Emotes | Quick emotional bursts | Pair with sentiment tags (joy, surprise, doubt). |
| Action beats | Narrative moments or transitions | Use camera-safe movement to avoid cropping issues. |

## Prep your files
- **Spine**: Export `.json` plus texture atlases (`.png` and `.atlas`). Maintain bone naming that matches facial features for lipsync.
- **Live2D**: Upload `.moc3` files with texture folders. Lipsync defaults to neutral mouth shapes—add expression toggles for variety.
- Include a `.md` or `.txt` changelog so collaborators know what was updated.

## Upload workflow
1. Open the **Animations** tab within your character profile.
2. Drag-and-drop idle, emote, and action files into their respective slots.
3. Map each animation to a **Sentiment Trigger** or **Manual Node**.
4. Preview the animation with the voice you configured earlier; adjust timing offsets until the mouth hits feel natural.

## Integrate with scenes
- Tag each animation with the scene(s) where it fits; this limits clutter in the flow builder.
- For high-intensity scenes, add fallback idle animations in case advanced rigs fail to load.

Once animations respond the way you expect, you’re ready to wire everything into a flow.
