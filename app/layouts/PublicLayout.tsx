import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { Outlet } from 'react-router';

/**
 * Public-facing layout.
 *
 * This layout wraps all marketing pages, booking flow,
 * and customer-facing UI.
 *
 * Includes:
 * - Main navigation
 * - Footer
 * - Shared page structure
 *
 * Excludes:
 * - Authentication logic
 * - Admin tooling
 * - Internal dashboards
 */
export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
