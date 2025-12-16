<!--
Sync Impact Report:
Version change: 0.0.0 -> 1.0.0 (MINOR: Initial constitution creation/major update)
Modified principles:
  - PRINCIPLE_1_NAME -> Technical Accuracy
  - PRINCIPLE_2_NAME -> Clarity for Students
  - PRINCIPLE_3_NAME -> Modular Architecture
  - PRINCIPLE_4_NAME -> Consistency
  - PRINCIPLE_5_NAME -> Code Correctness
  - PRINCIPLE_6_NAME -> RAG Chatbot Integrity
Added sections:
  - Key Standards and Constraints
  - Success Criteria
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md: ✅ updated
  - .specify/templates/spec-template.md: ✅ updated
  - .specify/templates/tasks-template.md: ✅ updated
  - .specify/templates/commands/*.md: ✅ updated
Follow-up TODOs: None
-->
# Unified Book + RAG Chatbot Project on Physical AI & Humanoid Robotics Constitution

## Core Principles

### I. Technical Accuracy
All technical claims MUST be sourced from official robotics documentation (ROS 2, Gazebo, Unity, NVIDIA Isaac, Nav2, Whisper, VSLAM) and explicitly linked. Avoid assumptions or undocumented information.

### II. Clarity for Students
Content and explanations MUST be clear, concise, and accessible for students with an intermediate programming and AI background. Complex topics should be broken down into digestible parts.

### III. Modular Architecture
The project MUST adhere to a modular, reusable Spec-Kit Plus architecture. Components, code, and content structures should be independently manageable and testable.

### IV. Consistency
Strict consistency MUST be maintained across the entire book in terms of tone, structure, terminology, and code style. All diagrams MUST be auto-generated or reproducible.

### V. Code Correctness
All code (Python, ROS 2, FastAPI, ChatKit, Postgres, Qdrant) MUST be correct, functional, and run without modification unless explicitly stated. Code examples MUST be robust and illustrative.

### VI. RAG Chatbot Integrity
The RAG chatbot MUST answer strictly and exclusively from the book content or selected text. Zero hallucinations are tolerated. The pipeline MUST follow best practices, including Neon Postgres schema validation, documented Qdrant index parameters, and retrieval tests.

## Key Standards and Constraints

**Key Standards:**
- All technical claims MUST link to official documentation or primary sources.
- Code examples MUST run without modification unless stated otherwise.
- All diagrams MUST be auto-generated or reproducible.
- Book format MUST follow Docusaurus MDX structure.
- API specifications MUST be validated against actual FastAPI and SDK schemas.
- RAG chatbot pipeline MUST follow best practices for schema validation, index documentation, and retrieval tests.
- Writing clarity MUST meet a Flesch-Kincaid grade level of 9–11.

**Constraints:**
- Book length: 12–18 chapters.
- Each core module (ROS 2, Gazebo/Unity, Isaac, VLA) MUST comprise a minimum of 2 full chapters.
- A full Capstone Project chapter titled “The Autonomous Humanoid” MUST be included.
- **Deliverables:**
    1. Complete Docusaurus book ready for GitHub Pages deployment.
    2. Working RAG chatbot embedded within the book.
    3. Backend (FastAPI) + vector database (Qdrant) + Neon schema.
    4. Spec-Kit Plus specifications for both the book and the chatbot.
- All Spec documents MUST be machine-readable by SpecifyPlus.

## Success Criteria

- The book MUST successfully build and deploy to GitHub Pages.
- The RAG chatbot MUST answer correctly using ONLY book content or selected text, with zero hallucinations.
- All code in the book MUST run successfully in the designated test environment.
- All modules (ROS 2, Gazebo, Unity, Isaac, VLA) MUST be correctly explained with accompanying examples.
- The Capstone project MUST be fully reproducible.
- Internal consistency in terminology, APIs, folder structure, and diagrams MUST be maintained.
- The project MUST meet SpecifyPlus validation requirements.

## Governance
This constitution supersedes all other project practices. Amendments require thorough documentation, explicit approval from stakeholders, and a migration plan if affecting existing systems. All Pull Requests and code reviews MUST verify compliance with these principles. Any increase in complexity MUST be rigorously justified. The `.specify/memory/constitution.md` file serves as the primary source for runtime development guidance.

**Version**: 1.0.0 | **Ratified**: 2025-12-10 | **Last Amended**: 2025-12-10