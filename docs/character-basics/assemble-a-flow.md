---
title: Assemble a Flow
sidebar_position: 5
description: Combine characters, scenes, voices, and animations into an interactive Drawhisper experience.
---

Flows are where all your prep pays off. The node-based canvas lets you orchestrate dialogue, reactions, and sentiment shifts without code.

## Start with the essentials
1. **Create a new flow** from the dashboard and pick the default model (or select a custom one if you need specialized behavior).
2. Drag the **Character Node** onto the canvas and choose the character you built earlier.
3. Attach the **Scene Node** so lighting, props, and entry animations load automatically.

## Layer in voice and sentiment
- Connect the **Voice Node** to the character. Choose your primary voice or leave it blank for silent animations.
- Add a **Sentiment Router** to branch responses for joy, surprise, concern, or custom moods.
- Pair each sentiment branch with matching emote animations from your library.

## Build the conversation path
- Use **Dialogue Nodes** to script prompts, hints, and guardrails.
- Insert **Condition Nodes** for user inputs (keywords, intent scores, or inventory checks).
- Create **Action Nodes** to trigger animations or external webhooks when conditions are met.

> Drag-and-drop tip: Hold `Option` while dragging to duplicate nodes with their connections—perfect for alternate dialogue beats.

## Test the flow
1. Hit **Playtest** to open the canvas preview.
2. Run through happy, neutral, and challenging user paths.
3. Watch for timing mismatches between voice and animation; adjust node delays as needed.

When the flow feels cohesive, you’re ready to deliver it to the chat experience.
