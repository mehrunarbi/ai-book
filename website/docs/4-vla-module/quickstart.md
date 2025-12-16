# Quickstart Guide: AI-Native Robotics Book

This guide provides the essential steps to set up the Docusaurus environment and contribute new content to the book.

## 1. Prerequisites

- [Node.js](https://nodejs.org/) (v18.0 or later)
- [Yarn](https://yarnpkg.com/) (or npm)

## 2. Initial Docusaurus Setup

This only needs to be done once to initialize the project.

1.  **Navigate to the repository root.**
2.  **Create the Docusaurus project:**
    ```bash
    npx create-docusaurus@latest docusaurus classic
    ```
3.  **Navigate into the new directory:**
    ```bash
    cd docusaurus
    ```
4.  **Install dependencies:**
    ```bash
    yarn install
    ```

## 3. Authoring a New Module

The workflow for creating new book content is spec-driven.

1.  **Define the Module Specification**:
    - From the repository root, use the `/sp.specify` command to create a new feature specification for the book module you want to write.
    - Example: `/sp.specify "Module 5: Advanced Motor Control"`

2.  **Author Chapter Content**:
    - Based on the `spec.md` you created, write the content for each chapter as separate Markdown files.
    - It is recommended to create a working directory for your raw content, for example, under `staging/<module-name>/`.

## 4. Integrating Content into Docusaurus

1.  **Create Module Directory**:
    - Create a new subdirectory inside `docusaurus/docs/` that matches the URL slug for your module.
    - Example: `mkdir docusaurus/docs/advanced-motor-control`

2.  **Copy Content**:
    - Copy your completed chapter Markdown files into the new directory you created.
    - Example: `cp staging/advanced-motor-control/*.md docusaurus/docs/advanced-motor-control/`

## 5. Previewing and Building the Site

All commands should be run from within the `docusaurus/` directory.

1.  **Start the Local Development Server**:
    - This command starts a local server and opens a browser window. The site will automatically reload as you edit your content.
    ```bash
    yarn start
    ```

2.  **Test the Production Build**:
    - This command generates the static site files into the `build/` directory. It is crucial to run this to ensure there are no build errors before committing.
    ```bash
    yarn build
    ```

3.  **Serve the Production Build Locally**:
    - After a successful build, you can preview the final production site locally.
    ```bash
    yarn serve
    ```
