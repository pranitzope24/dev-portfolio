# Project Context Summary

## Overview
**Backend Systems Control Center** — A themed developer portfolio that reimagines professional experience and projects as a living backend system. Created by Pranit, a Backend Engineer with 1.5 years of experience specializing in TypeScript, Python, and Agentic AI.

## Core Identity
- **Theme**: Backend infrastructure dashboard masquerading as a portfolio
- **Positioning**: "I build backend services that stay predictable under load, and agentic systems that stay observable under failure"
- **Stack**: TypeScript, Python, React, Vite, Tailwind CSS, Three.js (optional System Core visualization)

## Feature Set
- **System View**: Interactive dashboard with lazy-loaded 3D System Core visualization
- **Simple View**: Static, recruiter-safe layout without WebGL dependencies
- Content sections treated as system metaphors:
  - Experience → Execution Logs
  - Projects → Deployed Services
  - Skills → Runtime Modules
  - AI work → Autonomous Systems Lab
  - Education → Milestones
  - Background → Background Processes

## Design System

### Color Palette (Dark theme)
| Component | RGB Value | Hex | Usage |
|-----------|-----------|-----|-------|
| **Background** | `11 14 20` | `#0B0E14` | Deep graphite/slate base |
| **Panel** | `16 20 29` | `#10141D` | Container backgrounds |
| **Border** | `36 46 66` | `#242E42` | Dividers, accents |
| **Text** | `226 232 240` | `#E2E8F0` | Primary text |
| **Muted** | `148 163 184` | `#94A3B8` | Secondary text |
| **Accent Blue** | `56 189 248` | `#38BDF8` | Primary accent |
| **Accent Teal** | `45 212 191` | `#2DD4BF` | Data/Infrastructure |
| **Accent Purple** | `167 139 250` | `#A78BFA` | Agentic AI systems |
| **Accent Green** | `74 222 128` | `#4ADE80` | Success, deployed |

### Visual Elements
- **Glass effect**: Frosted panels with `backdrop-filter: blur(10px)`
- **Grid backdrop**: Subtle 48×48px grid with radial fade mask at top
- **Glow effects**: Blue accent glow for interactive elements
- **Shadow**: Layered border + soft shadow for depth
- **Animation**: Soft pulsing at 2.2s intervals for subtle movement

### Typography
- **Sans-serif**: System fonts (Segoe UI, Roboto, SF Pro)
- **Monospace**: System monospace (Menlo, Monaco, Consolas)
- **Selection**: 25% opacity blue highlight

## Key Skills Covered
**Core Runtime**: TypeScript, Python, Node.js, FastAPI  
**Data & Infrastructure**: Postgres, MongoDB, Redis, Docker  
**Agentic AI**: Agent orchestration, tool safety, LangChain, CrewAI  
**DevOps & Observability**: Logs, metrics, structured errors, monitoring  

## Project Stats
- **6+ Deployed Services**
- **1.5 years production experience**
- **Main technologies**: TypeScript, Python, Postgres, Agentic AI

## Customization Entry Point
All content lives in [src/content.ts](src/content.ts) — profile, skills, logs, services, education, and background.

---
*Portfolio designed to stand out by treating backend engineering as a first-class narrative, not just a resume section.*
