# ChaufHER Web

A browser-based operational portal empowering guardians, operators, administrators, and drivers to ensure safe, reliable, and transparent ride management.

## Overview

ChaufHER Web complements the ChaufHER mobile experience by offering robust tools for real-time ride oversight, incident escalation, organizational controls, and compliance reporting. The platform uniquely addresses the needs of stressed shift workers seeking safe commutes, guardians arranging transport for dependents, and administrators managing drivers and routes—all through an interface optimized for clarity and urgent operational response.

### Key Features

- **Real-time Ride Tracking:** Live route monitoring, ETA updates, and safety signal handling
- **Admin Dashboard:** Unified view of all rides, statuses, and live incidents with organizational-level reporting
- **Scheduling & Dispatch:** Bulk trip creation, recurring schedules, and drag-and-drop reassignments
- **Driver Management:** Streamlined onboarding, role assignment, and permission controls
- **Safety & Escalation:** Panic signal handling, rapid incident response, and escalation pathways
- **Compliance & Reporting:** Comprehensive audit logs, exportable reports (CSV/PDF), and regulatory tracking

## Tech Stack

- **Frontend Framework:** React + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit (intended)
- **Server State:** React Query / SWR (intended)
- **Testing:** Jest, React Testing Library, Playwright/Cypress
- **Accessibility:** WCAG 2.1 AA compliance via Axe-core

## Project Structure

```
src/
├── components/           # Shared UI components
│   ├── BookingCard.tsx
│   ├── BottomNav.tsx
│   ├── DriverSpotlight.tsx
│   ├── Hero.tsx
│   └── TrustBadges.tsx
├── variants/             # Design variants (themed implementations)
│   ├── BoldProfessional/    # Authority & confidence-driven
│   ├── MinimalClarity/      # Streamlined, focused (DEFAULT)
│   ├── VibrantEnergy/       # Modern, engaging
│   └── WarmCommunity/       # Approachable, human-centered
├── App.tsx              # Main application component
├── index.tsx            # Entry point
└── index.css            # Global styles
```

## Design Variants

ChaufHER Web supports multiple design variants for different organizational contexts. Each variant shares core component logic but applies distinct visual theming.

### Switching Variants

Edit [src/index.tsx](src/index.tsx) to change the active variant:

```tsx
// Import desired variant
import Variant from './variants/MinimalClarity';  // or BoldProfessional, VibrantEnergy, WarmCommunity

// Render variant
ReactDOM.render(<Variant />, document.getElementById('root'));
```

### Variant Descriptions

| Variant | Use Case | Key Characteristics |
|---------|----------|---------------------|
| **MinimalClarity** | Default; corporate/school operations | Clean typography, focus on data, low visual noise |
| **BoldProfessional** | Enterprise/premium positioning | Strong contrast, authority-focused, structured layout |
| **VibrantEnergy** | Youth-focused or modern brands | Bright colors, rounded elements, dynamic layout |
| **WarmCommunity** | Community-focused services | Warm palette, human imagery, approachable tone |

### Component Sharing

- **Base Components** (`src/components/`): Pure logic, minimal styling (Tailwind classes only)
- **Variant Components** (`src/variants/*/`): Override with variant-specific styling, colors, and layouts
- **Shared Patterns**: All variants implement identical data flows and interaction patterns for consistency

### Adding a New Variant

1. Create `src/variants/YourVariant/` directory
2. Copy component files from `src/variants/MinimalClarity/`
3. Customize Tailwind classes for your design system
4. Test all flows match base component logic
5. Update variant list above when ready for production

## Design Guardrails

The following guardrails are non-negotiable across all UI and feature decisions:

1. **Non-Negotiable Safety Prominence:** Safety-critical information (alerts, ride status, escalation options) must always be visually prioritized
2. **Status At-a-Glance:** Every ride status and user action must be clear, unambiguous, and available within two clicks
3. **Timeliness:** All data (rides, alerts, locations) must update in real time or user must be clearly notified of stale/failed states
4. **Escalation Pathways:** "What do I do next?" must be obvious for any unexpected, delayed, or 'at risk' scenario
5. **Role-Appropriate Views:** Only information relevant to the user's current responsibility is shown—minimal distractions
6. **Auditability:** All ride, user, and incident activity must generate reliable, exportable logs
7. **Consistent Everywhere:** Core visuals and flows remain consistent across browser, tablet, and app
8. **Accessibility:** All UIs must meet or exceed WCAG 2.1 AA

## Getting Started

### Prerequisites

- Node.js 16+ and npm/pnpm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/phoenixvc/chaufher-web.git
cd chaufher-web

# Install dependencies
npm install
# or
pnpm install
```

### Environment Configuration

Create a `.env.local` file in the root directory:

```bash
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api  # Dev: local, Staging/Prod: Azure endpoint
VITE_API_TIMEOUT=30000

# Azure Configuration
VITE_AZURE_TENANT_ID=your-tenant-id
VITE_AZURE_CLIENT_ID=your-client-id
VITE_AZURE_REDIRECT_URI=http://localhost:5173/auth/callback

# Feature Flags
VITE_FEATURE_LIVE_TRACKING=true
VITE_FEATURE_PANIC_BUTTON=true
VITE_FEATURE_REPORTING=false  # Staged rollout

# Application Insights (Monitoring)
VITE_APP_INSIGHTS_KEY=your-instrumentation-key

# Environment
VITE_ENV=development  # development, staging, production
```

**Environment-Specific Configs:**

- **Development** (`.env.local`): Local API, feature flags enabled, verbose logging
- **Staging** (`.env.staging`): Azure staging endpoints, test credentials, canary feature flags
- **Production** (`.env.production`): Azure production endpoints, hardened secrets, limited logging

Load environment files via:
```bash
npm run dev -- --mode staging  # Uses .env.staging
```

### Development

```bash
# Start development server
npm run dev

# The app will be available at http://localhost:5173
```

### Build for Production

```bash
npm run build

# Preview production build locally
npm run preview
```

## Testing

### Unit & Component Tests

```bash
# Run tests with Jest and React Testing Library
npm run test

# Watch mode for development
npm run test:watch

# Coverage report
npm run test:coverage
```

### End-to-End Tests

```bash
# Run E2E tests with Playwright/Cypress
npm run test:e2e
```

### Accessibility Checks

```bash
# Run Axe-core accessibility audits
npm run test:a11y
```

## Current Status

**This is a UI/UX design exploration and demo.** The current codebase focuses on visual design variants and foundational component patterns. Backend integration and full feature implementation are planned.

### Implementation Roadmap

| Component/Flow | Status | Notes |
|---|---|---|
| **Design Variants** | ✅ Complete | All 4 variants fully designed and interactive |
| **Hero/Landing** | ✅ Complete | Responsive hero section across variants |
| **Booking Card** | ✅ Complete | Interactive booking UI pattern |
| **Driver Spotlight** | ✅ Complete | Driver profile display |
| **Trust Badges** | ✅ Complete | Safety/trust visual indicators |
| **Bottom Navigation** | ✅ Complete | Mobile-optimized navigation |
| **Live Ride Tracker** | 🏗️ Planned | Real-time route, ETA, safety signals |
| **Admin Dashboard** | 🏗️ Planned | Unified rides/incidents/reporting view |
| **Scheduling UI** | 🏗️ Planned | Bulk trip creation, drag-drop reassignment |
| **User Management** | 🏗️ Planned | RBAC, driver onboarding, permission matrix |
| **Reporting/Export** | 🏗️ Planned | CSV/PDF export, compliance logs |
| **API Integration** | ⏳ Blocked | Awaiting chaufher.api schema finalization |
| **Authentication** | ⏳ Blocked | Awaiting Azure AD/OAuth2 configuration |

### What's Working

- Interactive UI components and layout patterns
- Design variant switching (visual exploration)
- Responsive design (mobile, tablet, desktop)
- Tailwind CSS theming across all variants
- Component-level accessibility patterns (ARIA labels, semantic HTML)

### What's Mocked/Placeholder

- API calls (hardcoded data)
- User authentication and RBAC
- Real-time location updates
- Incident/panic escalation flows
- Reporting and export functions

## Related Repositories

ChaufHER Web is part of a multi-repository workspace:

- **[chaufher.workspace](https://github.com/phoenixvc/chaufher.workspace)** – Monorepo entry point, shared documentation, and coordination hub
- **[chaufher.app](https://github.com/phoenixvc/chaufher.app)** – Flutter mobile application for drivers, riders, and guardians
- **[chaufher.api](https://github.com/phoenixvc/chaufher.api)** – Backend REST/gRPC APIs, business logic, and event handling
- **[chaufher.infra](https://github.com/phoenixvc/chaufher.infra)** – Azure IaC (Terraform/ARM), CI/CD pipelines, and deployment automation

Refer to [chaufher.workspace](https://github.com/phoenixvc/chaufher.workspace) for overall project documentation and setup.

## Architecture (Planned)

```
┌─────────────────────────────┐
│      User Browser           │
│   (ChaufHER Web - React)    │
└──────────┬──────────────────┘
           │
    ┌──────▼──────┐
    │ UI Layer    │
    │ State MGMT  │
    │ RBAC Logic  │
    └──────┬──────┘
           │
     [REST/gRPC API]
           │
    ┌──────▼──────────────────┐
    │  ChaufHER Backend API   │
    │ Business Rules & Events │
    └──────┬──────────────────┘
           │
  ┌────────┴─────────────┐
  │ Ext. Services        │
  │ Maps, Notifications  │
  │ Location, Support    │
  └──────────────────────┘
```

**Client Responsibilities:**
- UI rendering and state management
- User interaction validation
- RBAC gating and role-based views
- Optimistic UI updates

**Server Responsibilities:**
- Source of truth for business logic
- Strong data validation
- Incident and escalation logic
- Audit event emission

## API Integration

### Backend Setup

ChaufHER Web connects to [chaufher.api](https://github.com/phoenixvc/chaufher.api). See that repository for:

- Full API schema and endpoints
- Authentication setup (OAuth2/OpenID Connect)
- Docker/local development environment

### API Configuration

1. **Set API Base URL** in `.env.local`:
   ```bash
   VITE_API_BASE_URL=http://localhost:3000/api  # Dev
   # or
   VITE_API_BASE_URL=https://api-staging.chaufher.azure.com/api  # Staging
   ```

2. **Authentication Header** (configured automatically):
   ```
   Authorization: Bearer {access_token}
   X-Tenant-ID: {tenant_id}
   ```

### Example API Calls

```typescript
// Fetch active rides (admin dashboard)
const response = await fetch(`${VITE_API_BASE_URL}/rides?status=active`, {
  headers: { 'Authorization': `Bearer ${token}` }
});

// Escalate incident
await fetch(`${VITE_API_BASE_URL}/incidents/{id}/escalate`, {
  method: 'POST',
  headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ severity: 'critical', reason: 'panic_button' })
});
```

### API Documentation

OpenAPI/Swagger specs available at:
- **Dev:** `http://localhost:3000/api/docs`
- **Staging:** `https://api-staging.chaufher.azure.com/api/docs`
- **Production:** `https://api.chaufher.azure.com/api/docs`

## Deployment

### Hosting

ChaufHER Web is deployed on **Microsoft Azure** for optimized React/Vite performance and enterprise-grade infrastructure.

#### Azure Resources

- **App Service (Web):** Hosts the React/Vite SPA
- **Azure Storage (Static Site):** CDN-backed static hosting for optimal global performance
- **Application Insights:** Real-time monitoring, error tracking, and performance metrics
- **Log Analytics Workspace:** Centralized logging for compliance and debugging
- **Azure Key Vault:** Secure storage of secrets (API keys, connection strings, OAuth credentials)
- **Deployment Slots:** Staging and production slots for blue-green deployments

#### Setup & Configuration

See [chaufher.infra](https://github.com/phoenixvc/chaufher.infra) for:
- Terraform/ARM templates for Azure resource provisioning
- Connection strings and managed identities
- Deployment slot configuration
- Automated certificate management

#### Connecting to Azure Resources

```bash
# Login to Azure
az login

# Retrieve secrets from Key Vault
az keyvault secret show --name "api-url" --vault-name "chaufher-kv"

# Deploy to App Service
az webapp deployment source config-zip --resource-group chaufher-rg --name chaufher-web --src build.zip
```

#### Monitoring

- **Application Insights:** Configured via `VITE_APP_INSIGHTS_KEY` in `.env.production`
- **Log Analytics:** Stream frontend errors, page views, custom events
- **Alerts:** Auto-triggered for error spikes (>5% failure rate) or performance degradation (>3s load time)

### CI/CD Pipeline

- **VCS:** GitHub
- **CI/CD:** GitHub Actions + Azure DevOps (configured in [chaufher.infra](https://github.com/phoenixvc/chaufher.infra))

#### Pull Request Workflow

```
PR Created
  ↓
  ├─ ESLint & Prettier checks
  ├─ TypeScript strict mode compilation
  ├─ Jest unit tests
  ├─ Axe accessibility audit
  └─ Build artifact verification
     ↓
     ✅ All checks pass → Preview deployment to Azure staging
     ❌ Any check fails → Block merge until resolved
```

#### Main Branch Workflow

```
Merge to main
  ↓
  ├─ Run full test suite
  ├─ Build production artifact
  ├─ Deploy to Azure staging slot
  ├─ Smoke tests & health checks
  └─ Manual approval gate (ops/product)
     ↓
     ✅ Approved → Swap to production slot
     ❌ Issues found → Rollback to previous version
```

#### Deployment Environments

| Environment | URL | Slot | Secrets | Data |
|---|---|---|---|---|
| **Staging** | https://chaufher-web-staging.azurewebsites.net | staging | Test credentials | Masked/synthetic |
| **Production** | https://chaufher.azurewebsites.net | production | Prod secrets (Key Vault) | Real data |

#### Triggering Deployments

```bash
# Automatic on main branch merge
# Manual rollback (ops only):
az webapp deployment slot swap --resource-group chaufher-rg --name chaufher-web --slot staging
```

### Versioning & Rollback

- Semantic versioning for releases
- Feature flags for staged rollouts
- One-click rollback to previous versions
- Approval workflow for production deployments

## Key Success Metrics (KPIs)

- Reduction in incident response times
- Increase in on-time pickups and drop-offs
- Lower ride disruptions or missed assignments
- High user/operator satisfaction (NPS)
- Full compliance and audit reporting coverage
- Increase in recurring business from schools/corporates

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit with clear, descriptive messages (see Development Guidelines)
3. Open a pull request with a detailed description
4. Ensure all tests pass and accessibility checks are green
5. Await code review approval before merge
6. Delete branch after merge

## Development Guidelines

### Component Structure

**Naming Conventions:**
- Component files: PascalCase (`BookingCard.tsx`, `DriverSpotlight.tsx`)
- Utility files: camelCase (`useAuth.ts`, `apiClient.ts`)
- Constants: UPPER_SNAKE_CASE (`MAX_RETRY_ATTEMPTS`, `API_TIMEOUT`)
- Component props interfaces: `{ComponentName}Props` (e.g., `BookingCardProps`)

**File Organization:**
```
ComponentName/
├── index.tsx           # Default export
├── ComponentName.tsx   # Component implementation
├── ComponentName.test.tsx  # Unit tests
├── types.ts            # TypeScript interfaces/types
└── constants.ts        # Local constants
```

### State Management

- **Local Component State:** React `useState` for UI-only state (form inputs, modals)
- **Shared State:** Redux Toolkit (planned; see [chaufher.api](https://github.com/phoenixvc/chaufher.api) for store setup)
- **Server State:** React Query / SWR for API data caching and synchronization
- **Auth State:** Managed via Azure AD + context provider

**Example Redux Slice (planned):**
```typescript
import { createSlice } from '@reduxjs/toolkit';

const ridesSlice = createSlice({
  name: 'rides',
  initialState: { active: [], loading: false },
  reducers: {
    setRides: (state, action) => { state.active = action.payload; },
  },
});
```

### Styling Guidelines

- **Framework:** Tailwind CSS (configured in [tailwind.config.js](tailwind.config.js))
- **Design Tokens:** Defined in Tailwind config; extend via theme
- **Variant-Specific Overrides:** Place in `src/variants/{Variant}/index.css`
- **Avoid:** Inline styles or CSS-in-JS; use Tailwind utilities or scoped SCSS

**Example Tailwind Usage:**
```tsx
<div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg shadow-md">
  <h2 className="text-lg font-bold text-gray-900">Ride Status</h2>
  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
    Escalate
  </button>
</div>
```

### Git Workflow

**Branching Strategy:** Git Flow
- `main` – Production-ready code
- `develop` – Integration branch (optional for large teams)
- `feature/your-feature` – Feature branches from `main`
- `fix/issue-description` – Hotfix branches from `main`

**Commit Conventions:**
```
<type>(<scope>): <subject>

<body>

<footer>
```

Types: `feat`, `fix`, `refactor`, `test`, `docs`, `style`, `chore`

Examples:
```
feat(booking-card): add panic button with escalation flow
fix(auth): resolve Azure AD token refresh issue
docs(readme): update environment setup instructions
```

## Troubleshooting

### Common Setup Issues

**Port 5173 already in use**
```bash
# Find process using port
lsof -i :5173

# Kill process or use different port
npm run dev -- --port 5174
```

**npm install fails with permission errors**
```bash
# Clear npm cache
npm cache clean --force

# Reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript compilation errors**
```bash
# Ensure strict mode is enabled
# Check tsconfig.json: "strict": true

# Run type check
npx tsc --noEmit
```

**ESLint/Prettier conflicts**
```bash
# Format code
npm run format

# Lint and fix
npm run lint -- --fix
```

**Build fails in CI but works locally**
```bash
# Clean and rebuild
rm -rf dist node_modules package-lock.json
npm install
npm run build

# Check environment variables are set
echo $VITE_API_BASE_URL
echo $VITE_AZURE_TENANT_ID
```

**API calls fail with 401 Unauthorized**
- Ensure `.env.local` has correct `VITE_AZURE_TENANT_ID` and `VITE_AZURE_CLIENT_ID`
- Check backend is running and accessible
- Verify access token is valid (not expired)
- Review browser Network tab for request details

**Variant doesn't display correctly**
- Clear browser cache: Cmd+Shift+R (Chrome) or Cmd+Option+R (Safari)
- Check `src/index.tsx` imports correct variant
- Verify Tailwind CSS build includes variant styles

### Getting Help

- Check [chaufher.workspace](https://github.com/phoenixvc/chaufher.workspace) for project-wide docs
- Review [chaufher.api](https://github.com/phoenixvc/chaufher.api) for backend troubleshooting
- Open an issue with:
  - Node version (`node -v`)
  - npm version (`npm -v`)
  - Error logs and stack trace
  - Steps to reproduce

## Testing Requirements

### Prerequisites

- **Jest:** Installed via npm (configured in [package.json](package.json))
- **React Testing Library:** For component behavior testing
- **Mock Data:** Test fixtures for API responses (see `src/__tests__/mocks/`)
- **API Mocks:** Mock Service Worker (MSW) for intercepting HTTP requests

### Setup

1. **Install testing dependencies:**
   ```bash
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom msw
   ```

2. **Configure Jest** (`jest.config.js`):
   ```js
   module.exports = {
     preset: 'ts-jest',
     testEnvironment: 'jsdom',
     setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
   };
   ```

3. **Mock API calls** in tests using MSW:
   ```typescript
   import { rest } from 'msw';
   import { server } from './mocks/server';

   beforeAll(() => server.listen());
   afterEach(() => server.resetHandlers());
   afterAll(() => server.close());
   ```

### Running Tests

```bash
# Run all tests
npm run test

# Watch mode (re-run on file changes)
npm run test:watch

# Coverage report
npm run test:coverage

# Specific test file
npm run test -- BookingCard.test.tsx
```

### Test Structure

```typescript
// src/components/BookingCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { BookingCard } from './BookingCard';

describe('BookingCard', () => {
  it('renders booking details', () => {
    render(<BookingCard ride={{ id: '123', status: 'active' }} />);
    expect(screen.getByText(/Active Ride/)).toBeInTheDocument();
  });

  it('handles escalation click', () => {
    const onEscalate = jest.fn();
    render(<BookingCard ride={{}} onEscalate={onEscalate} />);
    fireEvent.click(screen.getByRole('button', { name: /Escalate/ }));
    expect(onEscalate).toHaveBeenCalled();
  });
});
```

## Performance & Optimization

### Build Optimization

```bash
# Analyze bundle size
npm run build -- --analyze

# Generate bundle report
npx vite-plugin-visualizer
```

### Lighthouse Targets

- **Performance:** ≥85 (Core Web Vitals optimized)
- **Accessibility:** 95+ (WCAG 2.1 AA compliant)
- **Best Practices:** ≥90
- **SEO:** ≥90

**Run Lighthouse:**
```bash
# Local (Chrome DevTools)
# Open DevTools → Lighthouse → Generate report

# CLI (automated in CI)
npm install -g @lhci/cli@latest
lighthouse-ci autorun
```

### Key Optimization Tips

1. **Code Splitting:** Lazy-load variants and heavy components
   ```typescript
   const MinimalClarity = React.lazy(() => import('./variants/MinimalClarity'));
   ```

2. **Image Optimization:** Use WebP with fallbacks
   ```tsx
   <picture>
     <source srcSet="image.webp" type="image/webp" />
     <img src="image.png" alt="" />
   </picture>
   ```

3. **Tree-Shaking:** Ensure Tailwind purges unused styles
   ```js
   // tailwind.config.js
   content: ['./src/**/*.{js,jsx,ts,tsx}']
   ```

4. **React Optimization:**
   - Use `React.memo()` for expensive components
   - Implement `useMemo()` and `useCallback()` for derived state
   - Avoid inline function definitions in render

5. **Network Performance:**
   - Enable gzip compression (Azure App Service default)
   - Implement request debouncing/throttling
   - Cache API responses with React Query

### Performance Monitoring

Application Insights tracks:
- Page load time (Core Web Vitals: LCP, FID, CLS)
- Error rates and error details
- User session duration and bounce rate
- Custom events (e.g., "Escalation Triggered", "Report Exported")

**View Metrics:**
```bash
# Azure Portal → Application Insights → Performance
# Dashboard → Custom metrics
```

## Code Quality Standards

- **Linting:** ESLint + Prettier
- **Type Safety:** Strict TypeScript configuration
- **Testing:** Minimum 80% coverage for critical paths
- **Accessibility:** Axe-core audits on every PR
- **Performance:** Lighthouse scores maintained above 85

## Support & Documentation

- **In-App Help:** Accessible via chat or help panel (Intercom/Zendesk integration planned)
- **Escalation:** Always-visible escalation controls for safety-critical scenarios
- **API Docs:** OpenAPI/Swagger specification for backend integration
- **Design Tokens:** Shared Tailwind configuration for consistent theming across variants

## License

[Add License Here]

## Contact

For questions or issues, please reach out to the ChaufHER team.

---

**ChaufHER Web** delivers a robust, safety-first operational toolset, fulfilling stringent stakeholder requirements with modern engineering rigor and always referencing immutable design guardrails.
