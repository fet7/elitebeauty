import { NavLink } from 'react-router';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '../ui/theme-toggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl transition-all">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        {/* Brand - Subtle & Elegant */}
        <NavLink
          to="/"
          className="font-serif text-xl tracking-tighter hover:opacity-80 transition-opacity"
        >
          Elite<span className="italic font-normal">Beauty</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-xs uppercase tracking-widest transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-foreground/70'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="h-4 w-px bg-border mx-2" />
          <ThemeToggle />
          <Button
            asChild
            className="rounded-none px-8 font-light tracking-wide shadow-none"
          >
            <NavLink to="/booking">Book Experience</NavLink>
          </Button>
        </nav>

        {/* Mobile menu */}

        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-transparent"
              >
                <Menu className="w-5 h-5 stroke-[1.5]" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-80 flex flex-col pt-20"
            >
              <nav className="flex flex-col gap-8 items-center text-center">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-lg font-serif tracking-wide transition-colors ${
                        isActive ? 'text-primary' : 'text-foreground'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <Button
                  asChild
                  className="w-full rounded-none mt-4"
                  onClick={() => setOpen(false)}
                >
                  <NavLink to="/booking">Book Now</NavLink>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
