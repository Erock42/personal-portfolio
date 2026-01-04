/*
 Testing notes (quick reference):

 - Run tests:
   * Single run (CI-like): CI=true npm test -- --watchAll=false
   * Interactive/watch mode: npm test

 - Preferred queries:
   * Roles: getByRole('heading', { name: /skills/i }) — more specific and robust
   * Text when unique: getByText(/some text/i)
   * Use getAllByText/getAllByRole when multiples exist, or narrow with role+name

 - Mocking network calls:
   * Use MSW (Mock Service Worker) in src/setupTests.js to stub endpoints like /analytics
   * Example handler: rest.post('/analytics', (req, res, ctx) => res(ctx.status(204)))

 - Async UI: use findBy* or waitFor for assertions that resolve after updates

 - When tests fail, inspect the rendered HTML in the error output and pick specific selectors

 Keep tests small and focused (render component, assert visible UI or behavior).
*/

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main sections', () => {
  render(<App />);
  const skillsHeading = screen.getByRole('heading', { name: /skills/i });
  expect(skillsHeading).toBeInTheDocument();
});
