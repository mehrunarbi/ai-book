---
id: 0001
title: Update project constitution
stage: constitution
date: 2025-12-10
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: unknown
command: /sp.constitution
labels: ["governance", "project-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests: null
---

## Prompt

```text
/sp.constitution

Project: Unified Book + RAG Chatbot Project on Physical AI & Humanoid Robotics

Core principles:
- Technical accuracy sourced from robotics documentation (ROS 2, Gazebo, Unity, NVIDIA Isaac, Nav2, Whisper, VSLAM)
- Clarity for students with intermediate programming + AI background
- Modular, reusable Spec-Kit Plus architecture
- Consistency across the entire book (tone, structure, terminology)
- Code correctness (Python, ROS 2, FastAPI, ChatKit, Postgres, Qdrant)
- RAG chatbot answers strictly from book content or selected text

Key standards:
- All technical claims must link to official docs or primary sources
- Code examples must run without modification unless stated
- All diagrams must be auto-generated or reproducible
- Book format must follow Docusaurus MDX structure
- API specs must be validated against actual FastAPI + SDK schemas
- RAG chatbot pipeline must follow best practices:
    - Neon Postgres schema validation
    - Qdrant index parameters documented
    - Retrieval tests included
- Writing clarity: Flesch-Kincaid grade 9–11

Constraints:
- Book length: 12–18 chapters
- Each module (ROS 2, Gazebo/Unity, Isaac, VLA) = minimum 2 full chapters
- Include full Capstone Project chapter: “The Autonomous Humanoid”
- Deliverables:
    1. Complete Docusaurus book ready for GitHub Pages deployment
    2. Working RAG chatbot embedded in book
    3. Backend (FastAPI) + vector DB (Qdrant) + Neon schema
    4. Spec-Kit Plus specifications for book + chatbot
- All Spec documents must be machine-readable by SpecifyPlus

Success criteria:
- Book successfully builds and deploys to GitHub Pages
- RAG chatbot answers correctly using ONLY book content or selected text
- All code in the book runs successfully in test environment
- All modules (ROS 2, Gazebo, Unity, Isaac, VLA) correctly explained with examples
- Capstone project fully reproducible
- Zero hallucinations in chatbot responses
- Internal consistency: terminology, APIs, folder structure, diagrams
- Meets Spec-Kit Plus validation wit
```

## Response snapshot

The project constitution was updated based on the provided input, incorporating core principles, key standards, constraints, and success criteria for the "Unified Book + RAG Chatbot Project on Physical AI & Humanoid Robotics". The constitution file at `.specify/memory/constitution.md` was updated to version 1.0.0. Dependent templates (plan, spec, tasks) were reviewed for consistency.

## Outcome

- ✅ Impact: Updated project constitution with new principles, standards, and criteria.
- 🧪 Tests: No tests were run for this operation.
- 📁 Files: One file was modified: `.specify/memory/constitution.md`.
- 🔁 Next prompts: Continue with project development based on the updated constitution.
- 🧠 Reflection: The constitution now clearly defines the project's foundational guidelines and success metrics.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
