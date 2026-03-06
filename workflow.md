# Gruha Alankara – Project Development Workflow

This document outlines the seven-phase development lifecycle for the Gruha Alankara AI/AR Interior Design Platform.

---

## Phase 1: Project Initialization
- **Objectives & Scope**: Define core features, target audience, and system requirements.
- **Environment Setup**: Initialize Python virtual environment and install dependencies (`Flask`, `SQLAlchemy`, `transformers`, `opencv-python`, etc.).
- **Structure**: Organize directories for `static/`, `templates/`, `tools/`, `agents/`, and `database/`.
- **Integration Strategy**: Plan the handoff between computer vision (room analysis), NLP (interior agent), and AR visualization.

## Phase 2: Database Setup
- **Configuration**: Set up SQLite for localized data storage.
- **Modeling**: Design `User`, `Design`, `Furniture`, and `Booking` models using Flask-SQLAlchemy.
- **Schema Initialization**: Establish relationships (Foreign Keys) and perform initial migrations.
- **Integrity**: Implement data validation and constraints to ensure data integrity.

## Phase 3: Frontend Development
- **Aesthetics**: Apply a premium "Classic Dark" theme using consistent CSS tokens and responsive layouts.
- **Camera Integration**: Implement JavaScript `MediaDevices API` for live AR camera access.
- **UI/UX**: Build the style selection interface with preview swatches and CSS animations.
- **Visualization**: Integrate 3D furniture preview layers for immersive design sessions.

## Phase 4: AI Model Integration
- **Agentic AI**: Build the `InteriorDesignAgent` to orchestrate multi-tool workflows.
- **Vision Processing**: Use OpenCV and Vision Transformers for room feature extraction from photos.
- **LangChain Reasoning**: Configure the intelligent assistant to process user design queries.
- **Voice Support**: Integrate Google TTS for multilingual support in Telugu, Hindi, and English.

## Phase 5: Backend Development
- **Routing**: Develop Flask endpoints for authentication, secure file uploads, and design studios.
- **Security**: Implement session-based protection and password hashing.
- **API Design**: Create RESTful endpoints for real-time AI inference and catalog queries.
- **Automation**: Build logic for the intelligent agent to handle the end-to-end furniture booking workflow.

## Phase 6: Testing and Optimization
- **Functional Testing**: Rigorous testing of the AI pipeline, authentication, and database CRUD.
- **Compatibility**: Verify camera and browser WebRTC support across desktop and mobile.
- **Optimization**: Implement AI response caching and minimize image processing latency.
- **Debugging**: Resolve synchronization issues between the frontend AI state and backend models.

## Phase 7: Deployment and Maintenance
- **Local Deployment**: Deploy on a local production-ready server for final UAT.
- **Monitoring**: Set up logging to track AI performance and system resource usage.
- **Error Handling**: Refine global error handlers and debugging logs.
- **Evolution**: Draft the maintenance plan for upcoming feature additions.
