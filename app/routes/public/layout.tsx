import { Outlet } from 'react-router';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import ChatWidget from '@/components/chatbot/ChatWidget';

/**
 * Public layout route.
 *
 * This layout wraps all customer-facing pages:
 * - Home
 * - Services
 * - Booking
 * - Team
 * - Gallery
 * - Contact
 *
 * Responsibilities:
 * - Render global public navigation
 * - Provide consistent page structure
 * - Render footer
 */
export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
