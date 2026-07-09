# Changelog

All notable changes to the AVE System MPA project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- CI/CD pipeline configuration with GitHub Actions
- Unit testing with Vitest and @testing-library/react
- Comprehensive documentation updates
- CONTRIBUTING.md with development guidelines
- CHANGELOG.md for tracking changes

### Changed
- Migrated frontend from Create React App to Vite
- Updated all documentation to reflect Vite migration
- Renamed .js files to .jsx for proper JSX support
- Updated package.json scripts for Vite

### Fixed
- Test compatibility issues with Vite and Vitest

## [1.0.0] - 2024-07-08

### Added
- Initial project structure with backend and frontend
- 7 main pages: Home, Modules, How AVE Works, Installations, Partners, About, Contact
- Responsive design for all screen sizes
- Contact form with validation
- Node.js + Express backend with contact API
- React 18 frontend with React Router v6
- Custom CSS styling with variables
- Font Awesome 6 icons via CDN
- README.md with comprehensive documentation
- QUICKSTART.md with quick start guide
- PROJECT_SUMMARY.md with project overview

### Features
- **Home Page**: Hero section, energy types, advantages, target audiences, award
- **Modules Page**: All 6 AVE modules with descriptions and features
- **How AVE Works Page**: 6-step workflow, architecture diagram, benefits
- **Installations Page**: Countries list, companies by country, statistics
- **Partners Page**: Global partners list, partnership benefits
- **About Page**: Company overview, history timeline, values, awards
- **Contact Page**: Contact information, form with validation, location map

### Tech Stack
- Backend: Node.js + Express
- Frontend: React 18 + React Router v6
- Build Tool: Create React App (react-scripts)
- Styling: Custom CSS
- HTTP Client: Axios
- Icons: Font Awesome 6

## [1.1.0] - 2024-07-08

### Added
- Vite build tool for faster development and builds
- Vitest for unit testing
- @testing-library/react for React component testing
- @vitest/coverage-v8 for test coverage
- GitHub Actions CI/CD workflow

### Changed
- Migrated from react-scripts to Vite
- Updated all file extensions from .js to .jsx
- Moved index.html from public/ to root directory
- Updated package.json scripts
- Updated all documentation

### Performance
- Development server start: ~10-100x faster
- Hot Module Replacement: Instant updates
- Production builds: Significantly faster

### Testing
- 5 test files added
- 26 unit tests covering main components
- Test coverage reports available

### CI/CD
- Automated testing on push and PR
- Build verification
- Code quality checks
- Optional GitHub Pages deployment

## Template for Future Releases

```markdown
## [X.Y.Z] - YYYY-MM-DD

### Added
- New features or functionality

### Changed
- Changes to existing functionality

### Fixed
- Bug fixes

### Deprecated
- Features that are deprecated

### Removed
- Features that are removed

### Security
- Security-related changes

### Performance
- Performance improvements
```

---

**Note:** Version numbers follow Semantic Versioning (MAJOR.MINOR.PATCH)

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)
