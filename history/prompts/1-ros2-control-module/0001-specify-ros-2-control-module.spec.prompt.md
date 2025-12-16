--- 
id: 0001
title: Specify ROS 2 Control Module
stage: spec
date: 2025-12-10
surface: cli
model: {{MODEL}}
feature: 1-ros2-control-module
branch: 1-ros2-control-module
user: (unknown)
command: /sp.specify
labels: []
links:
  spec: "specs/1-ros2-control-module/spec.md"
  ticket: ""
  adr: ""
  pr: ""
files:
  - "specs/1-ros2-control-module/spec.md"
  - "specs/1-ros2-control-module/checklists/requirements.md"
tests:
  - ""
---

## Prompt

This is the Gemini CLI. We are setting up the context for our chat.
Today's date is Wednesday, December 10, 2025 (formatted according to the user's locale).
My operating system is: win32
The project's temporary directory is: C:\Users\HP\.gemini\tmp\adf9c2bc5cbdab9db35909be23ef3e1cf4594887ed87e7aae72a57f5d3d161e4
I'm currently working in the directory: C:\Users\HP\Desktop\ai-book
Here is the folder structure of the current working directories:

Showing up to 200 items (files + folders). Folders or files indicated with ... contain more items not shown, were ignored, or the display limit (200 items) was reached.

C:\Users\HP\Desktop\ai-book\
├───CLAUDE.md
├───.claude\
│   └───commands\
│       ├───sp.adr.md
│       ├───sp.analyze.md
│       ├───sp.checklist.md
│       ├───sp.clarify.md
│       ├───sp.constitution.md
│       ├───sp.git.commit_pr.md
│       ├───sp.implement.md
│       ├───sp.phr.md
│       ├───sp.plan.md
│       ├───sp.specify.md
│       └───sp.tasks.md
├───.gemini\
│   └───commands\
│       ├───sp.adr.toml
│       ├───sp.analyze.toml
│       ├───sp.checklist.toml
│       ├───sp.clarify.toml
│       ├───sp.constitution.toml
│       ├───sp.git.commit_pr.toml
│       ├───sp.implement.toml
│       ├───sp.phr.toml
│       ├───sp.plan.toml
│       ├───sp.specify.toml
│       └───sp.tasks.toml
├───.git\...
├───.specify\
│   ├───memory\
│   │   └───constitution.md
│   ├───scripts\
│   │   └───powershell\
│   │       ├───check-prerequisites.ps1
│   │       ├───common.ps1
│   │       ├───create-new-feature.ps1
│   │       ├───setup-plan.ps1
│   │       └───update-agent-context.ps1
│   └───templates\
│       ├───adr-template.md
│       ├───agent-file-template.md
│       ├───checklist-template.md
│       ├───phr-template.prompt.md
│       ├───plan-template.md
│       ├───spec-template.md
│       └───tasks-template.md
└───history\
    └───prompts\
        └───constitution\
            └───0001-update-constitution.constitution.prompt.md

Reminder: Do not return an empty response when a tool call is required.

My setup is complete. I will provide my first command in the next turn.---
description: Create or update the feature specification from a natural language feature description.
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

The text the user typed after `/sp.specify` in the triggering message **is** the feature description. Assume you always have it available in this conversation even if `Module 1 – The Robotic Nervous System (ROS 2)****Audience:** Beginner-to-intermediate robotics students and developers learning humanoid control systems.**Focus:*** ROS 2 as middleware for robot control* Nodes, Topics, Services basics* Connecting Python agents to ROS controllers via **rclpy*** Understanding **URDF** for humanoid robots**Output:**A structured module containing **2–3 chapters**, each with:* Clear explanations* Diagrams (described in text)* Code snippets (Python + ROS 2)* Practical examples relevant to humanoid robotics**Success criteria:*** Introduces ROS 2 fundamentals clearly* Shows how Python agents communicate with ROS controllers* Provides at least one URDF humanoid example* Beginner can build + run a minimal ROS 2 control pipeline after reading* Zero unnecessary theory; all content is practical and actionable**Constraints:*** Format: Markdown* Length: 1500–2500 words* Code: Only ROS 2 (rclpy) + URDF examples* No hardware-specific instructions (generic humanoid model only)* No ROS 1 content**Not building:*** Full humanoid locomotion algorithms* ROS 2 installation guides* Advanced control theory* Detailed URDF physics simulation tuning---If you want, I can also generate **SP.Specify prompts for Module 2, 3, 4** in the same style.` appears literally below. Do not ask the user to repeat it unless they provided an empty command.

Given that feature description, do this:

1. **Generate a concise short name** (2-4 words) for the branch:
   - Analyze the feature description and extract the most meaningful keywords
   - Create a 2-4 word short name that captures the essence of the feature
   - Use action-noun format when possible (e.g., "add-user-auth", "fix-payment-bug")
   - Preserve technical terms and acronyms (OAuth2, API, JWT, etc.)
   - Keep it concise but descriptive enough to understand the feature at a glance
   - Examples:
     - "I want to add user authentication" → "user-auth"
     - "Implement OAuth2 integration for the API" → "oauth2-api-integration"
     - "Create a dashboard for analytics" → "analytics-dashboard"
     - "Fix payment processing timeout bug" → "fix-payment-timeout"

2. **Check for existing branches before creating new one**:
   
   a. First, fetch all remote branches to ensure we have the latest information:
      ```bash
      git fetch --all --prune
      ```
   
   b. Find the highest feature number across all sources for the short-name:
      - Remote branches: `git ls-remote --heads origin | grep -E 'refs/heads/[0-9]+-<short-name>$'`
      - Local branches: `git branch | grep -E '^[* ]*[0-9]+-<short-name>$'`
      - Specs directories: Check for directories matching `specs/[0-9]+-<short-name>`
   
   c. Determine the next available number:
      - Extract all numbers from all three sources
      - Find the highest number N
      - Use N+1 for the new branch number
   
   d. Run the script `.specify/scripts/powershell/create-new-feature.ps1 -Json "Module 1 – The Robotic Nervous System (ROS 2)****Audience:** Beginner-to-intermediate robotics students and developers learning humanoid control systems.**Focus:*** ROS 2 as middleware for robot control* Nodes, Topics, Services basics* Connecting Python agents to ROS controllers via **rclpy*** Understanding **URDF** for humanoid robots**Output:**A structured module containing **2–3 chapters**, each with:* Clear explanations* Diagrams (described in text)* Code snippets (Python + ROS 2)* Practical examples relevant to humanoid robotics**Success criteria:*** Introduces ROS 2 fundamentals clearly* Shows how Python agents communicate with ROS controllers* Provides at least one URDF humanoid example* Beginner can build + run a minimal ROS 2 control pipeline after reading* Zero unnecessary theory; all content is practical and actionable**Constraints:*** Format: Markdown* Length: 1500–2500 words* Code: Only ROS 2 (rclpy) + URDF examples* No hardware-specific instructions (generic humanoid model only)* No ROS 1 content**Not building:*** Full humanoid locomotion algorithms* ROS 2 installation guides* Advanced control theory* Detailed URDF physics simulation tuning---If you want, I can also generate **SP.Specify prompts for Module 2, 3, 4** in the same style.