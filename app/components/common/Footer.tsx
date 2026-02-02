import { Link } from 'react-router';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Button } from '../ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground py-20 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-20">
          {/* 1. Brand Essence */}
          <div className="md:col-span-5 space-y-6">
            <h2 className="text-xl font-serif tracking-tight">
              EliteBeauty <span className="italic font-normal">Studio</span>
            </h2>
            <p className="text-sm leading-relaxed max-w-sm font-light">
              Dedicated to the art of refined beauty and holistic wellness. Our
              sanctuary provides a bespoke experience tailored to the
              individual, ensuring every visit is a journey toward rejuvenation.
            </p>
            <div className="flex items-center gap-5 pt-2">
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold">
              Discovery
            </h3>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Treatment Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="hover:text-primary transition-colors"
                >
                  Reservations
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  The Sanctuary
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Newsletter / Contact */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold">
              Join the Circle
            </h3>
            <p className="text-sm font-light leading-relaxed">
              Subscribe to receive exclusive invitations and beauty insights.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-input py-3 text-sm focus:outline-none focus:border-primary transition-colors pr-10"
              />
              <Button
                variant="ghost"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-primary hover:text-primary/90 hover:bg-transparent group-hover:scale-125 transition-transform "
              >
                <Mail size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em]">
          <p>© {currentYear} EliteBeauty Studio. All Rights Reserved.</p>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
