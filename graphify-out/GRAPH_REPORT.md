# Graph Report - portfolio-client-43  (2026-07-09)

## Corpus Check
- 19 files · ~51,668 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 99 nodes · 103 edges · 22 communities (10 shown, 12 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b641aad4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]

## God Nodes (most connected - your core abstractions)
1. `Google Drive Screenshot - Bài 3` - 8 edges
2. `portfolioData` - 7 edges
3. `Index HTML` - 6 edges
4. `scripts` - 5 edges
5. `React + Vite` - 5 edges
6. `ResourceAction()` - 3 edges
7. `App()` - 2 edges
8. `EvidenceTable()` - 2 edges
9. `HomeTab()` - 2 edges
10. `PrintView()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Index HTML` --references--> `ULIS Logo`  [EXTRACTED]
  index.html → public/logo.png
- `Index HTML` --references--> `Đại học Công nghệ Logo`  [EXTRACTED]
  index.html → public/logo.png
- `Index HTML` --calls--> `Main Entry Point`  [EXTRACTED]
  index.html → src/main.jsx
- `graphify` --conceptually_related_to--> `React + Vite`  [INFERRED]
  AGENTS.md → README.md
- `React + Vite` --conceptually_related_to--> `Index HTML`  [INFERRED]
  README.md → index.html

## Import Cycles
- None detected.

## Communities (22 total, 12 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.28
Nodes (7): EvidenceTable(), HomeTab(), PrintView(), RubricTable(), Sidebar(), Summary(), portfolioData

### Community 1 - "Community 1"
Cohesion: 0.14
Nodes (13): dependencies, lucide-react, react, react-dom, name, private, scripts, build (+5 more)

### Community 2 - "Community 2"
Cohesion: 0.15
Nodes (13): devDependencies, autoprefixer, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, postcss (+5 more)

### Community 4 - "Community 4"
Cohesion: 0.15
Nodes (10): graphify, Index HTML, ULIS Logo, German Language & Culture Learning Portfolio, Đại học Công nghệ Logo, Expanding the ESLint configuration, React Compiler, React + Vite (+2 more)

### Community 20 - "Community 20"
Cohesion: 0.25
Nodes (7): Brand & Style, Colors, Components, Elevation & Depth, Layout & Spacing, Shapes, Typography

### Community 21 - "Community 21"
Cohesion: 0.47
Nodes (4): notRequired(), ProjectsTab(), ResourceAction(), unavailable()

## Knowledge Gaps
- **45 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 2` to `Community 1`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._