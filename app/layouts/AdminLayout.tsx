import { Outlet } from 'react-router';

/**
 * Admin layout (placeholder).
 *
 * This layout will eventually wrap:
 * - Appointment management
 * - Staff dashboards
 * - Internal tools
 * This file exists to enforce architectural boundaries early.
 */
export default function AdminLayout() {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
}
