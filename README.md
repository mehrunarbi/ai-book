# AI-Native Robotics Book

This repository contains the source code and content for the AI-Native Robotics Book, built using Docusaurus.

## Getting Started

To set up and run the Docusaurus site locally:

1.  **Install Dependencies**:
    Navigate to the `docusaurus/` directory and install the required Node.js packages:
    ```bash
    cd docusaurus
    npm install
    ```

2.  **Run Locally**:
    Start the development server:
    ```bash
    npm start
    ```
    This will open the site in your browser at `http://localhost:3000`.

3.  **Build Static Site**:
    To create a production-ready static build of the site:
    ```bash
    npm run build
    ```
    The static files will be generated in the `docusaurus/build` directory.

4.  **Content Synchronization**:
    The book content is automatically synchronized from the `specs/` directories to `docusaurus/docs/` during the build process (via a `prebuild` script). If you need to manually trigger content synchronization, you can run:
    ```bash
    npm run sync:content
    ```
    (This command should be run from within the `docusaurus/` directory.)

## Contributing

For information on how to contribute new content or make changes, please refer to the `specs/` directory for module specifications and the Docusaurus documentation.
