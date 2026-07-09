# Contributing Guide

Thank you for your interest in contributing to the AVE System MPA project! This document provides guidelines for contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Code Review Process](#code-review-process)

## 🤝 Code of Conduct

Please follow these guidelines when contributing:

- Be respectful and inclusive
- Follow the existing code style
- Write clear, maintainable code
- Include tests for new features
- Update documentation as needed

## 🛠️ How to Contribute

### Reporting Bugs

1. Check existing issues to avoid duplicates
2. Create a new issue with:
   - Clear title describing the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment information (Node.js version, browser, etc.)

### Suggesting Features

1. Check existing feature requests
2. Create a new issue with:
   - Clear description of the feature
   - Use case and benefits
   - Any relevant examples or references

### Submitting Changes

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Run tests (`npm test`)
5. Run linting (`npx eslint src --ext .jsx,.js`)
6. Commit your changes
7. Push to your fork
8. Submit a pull request

## 💻 Development Setup

### Prerequisites

- Node.js v20 or later
- npm or yarn
- Git

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd ave-system-mpa

# Install dependencies
cd backend && npm install
cd ../frontend && npm install

# Start development servers
# Terminal 1: Backend
cd backend && npm start

# Terminal 2: Frontend
cd frontend && npm run dev
```

### Available Scripts

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage

**Backend:**
- `npm start` - Start production server
- `npm run dev` - Start with nodemon (auto-restart)

## 📜 Coding Standards

### JavaScript/JSX

- Use ES6+ features
- Use functional components with hooks
- Follow React best practices
- Use descriptive variable and function names
- Keep functions small and focused
- Add comments for complex logic

### CSS

- Use the existing CSS variables for colors
- Follow the existing naming conventions
- Use BEM-like naming for classes
- Keep styles organized and maintainable
- Use inline styles sparingly (only for dynamic values)

### File Organization

- Components: `frontend/src/components/`
- Pages: `frontend/src/pages/`
- Styles: `frontend/src/styles/`
- Tests: `frontend/src/test/`
- Utilities: Create a `utils/` folder if needed

### Naming Conventions

- **Components**: PascalCase (e.g., `Navbar.jsx`, `Footer.jsx`)
- **Pages**: PascalCase (e.g., `HomePage.jsx`, `ContactPage.jsx`)
- **Test Files**: `<Component>.test.jsx` (e.g., `Navbar.test.jsx`)
- **Variables**: camelCase
- **Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE

## 🧪 Testing

### Test Structure

All tests are located in `frontend/src/test/`:

```
frontend/src/test/
├──── setup.js         # Test setup and mocks
├──── App.test.jsx     # Main app tests
├──── Navbar.test.jsx  # Navbar component tests
├──── Footer.test.jsx  # Footer component tests
├──── HomePage.test.jsx # Home page tests
└──── ContactPage.test.jsx # Contact page tests
```

### Writing Tests

- Use Vitest for test runner
- Use @testing-library/react for React component testing
- Use @testing-library/jest-dom for assertions
- Test user interactions, not implementation details
- Mock external dependencies (axios, etc.)
- Keep tests focused and fast

### Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Coverage

Aim for at least 80% coverage for new features. Run coverage with:

```bash
npm run test:coverage
```

Coverage reports are generated in the `coverage/` directory.

## 📝 Pull Request Guidelines

### Before Submitting

1. ✅ All tests pass (`npm test`)
2. ✅ Code is properly formatted
3. ✅ New features have tests
4. ✅ Documentation is updated
5. ✅ No console.log statements (use proper logging)
6. ✅ No hardcoded secrets or credentials

### PR Template

```markdown
## Summary
- Brief description of changes

## Changes Made
- List of changes
- Files modified

## Testing
- Tests added/updated
- How to verify the changes

## Screenshots (if applicable)

## Related Issues
- Closes #<issue-number>
```

### PR Checklist

- [ ] Code follows project standards
- [ ] All tests pass
- [ ] New tests added for new features
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
- [ ] Ready for review

## 📝 Commit Message Guidelines

### Format

```
type(scope): subject

body

footer
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring (no functional changes)
- `perf`: Performance improvements
- `test`: Adding or fixing tests
- `chore`: Build process or auxiliary tool changes
- `revert`: Revert a previous commit

### Examples

```bash
# Good
feat(contact-form): add email validation
fix(navbar): mobile menu toggle not working
 docs(readme): update deployment instructions
refactor(homepage): extract energy types component

# Bad
fixed bug
update readme
new feature
```

### Scope

The scope should be the component or module affected:
- `navbar`
- `footer`
- `homepage`
- `contact-form`
- `backend`
- `frontend`
- `ci-cd`

### Subject

- Use imperative mood ("add" not "added")
- Keep it short (50 characters or less)
- Capitalize first letter
- No period at the end

### Body

- Explain what and why (not how)
- Reference issues if applicable
- Keep it concise

### Footer

- Reference related issues or PRs
- Include breaking changes if any
- Example: `Closes #123` or `BREAKING CHANGE: ...`

## 👀 Code Review Process

### For Contributors

1. Submit PR with clear description
2. Wait for review from maintainers
3. Address feedback and push changes
4. PR is approved and merged

### For Reviewers

1. Check for code quality and standards
2. Verify tests pass and coverage is adequate
3. Ensure documentation is updated
4. Test the changes locally if needed
5. Provide constructive feedback
6. Approve when ready

### Review Criteria

- ✅ Code follows project standards
- ✅ All tests pass
- ✅ New features have tests
- ✅ Documentation is updated
- ✅ No breaking changes (or properly documented)
- ✅ Code is maintainable and readable
- ✅ Performance considerations addressed

## 🚀 Release Process

### Versioning

This project uses semantic versioning (SemVer):
- `MAJOR`: Breaking changes
- `MINOR`: New features (backward compatible)
- `PATCH`: Bug fixes (backward compatible)

### Creating a Release

1. Update version in `package.json` files
2. Update CHANGELOG.md (if exists)
3. Create a Git tag
4. Push tag to remote
5. Create GitHub release

### Example

```bash
# Update version
npm version patch -m "chore: release v1.0.1"

# Push changes
git push origin main

# Push tag
git push origin v1.0.1
```

## 📚 Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Vitest Documentation](https://vitest.dev/)
- [Testing Library Documentation](https://testing-library.com/docs/)
- [Express Documentation](https://expressjs.com/)

## 🙏 Thank You!

Thank you for contributing to the AVE System MPA project! Your contributions help make this project better for everyone.
