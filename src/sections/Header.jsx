import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { navLinks, eventInfo } from "../data/eventData";
import Button from "../components/Button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-40 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(5, 13, 7, 0.84)"
          : "linear-gradient(180deg, rgba(5,13,7,0.62), transparent)",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(248,247,242,0.09)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 18px 60px rgba(0,0,0,0.22)" : "none",
      }}
    >
      <div className="section-container flex h-16 items-center justify-between px-4 md:h-20 md:px-8 lg:px-16">
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-4 rounded-full pr-3 transition-transform duration-300 hover:-translate-y-0.5"
          aria-label="Voltar ao início"
        >
          <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-trail-gold/25 bg-cream/90 shadow-gold backdrop-blur-md transition-all duration-300 group-hover:border-trail-gold/50 group-hover:bg-cream md:h-14 md:w-14">
            <span
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                background:
                  "radial-gradient(circle at 35% 20%, rgba(46,204,113,0.22), transparent 58%)",
              }}
            />

            <img
              src="/images/logo-iracambi.png"
              alt="Logo da Iracambi"
              className="relative z-10 h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105 md:h-12 md:w-12"
            />
          </span>

          <span>
            <span className="block font-display text-xl font-bold leading-none tracking-[-0.04em] text-cream md:text-2xl">
              Iracambi
            </span>

            <span className="mt-1 block font-mono text-[9px] uppercase leading-none tracking-[0.32em] text-trail-gold md:text-[10px]">
              Trail Run
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-body text-sm tracking-wide text-cream-muted transition-colors duration-200 hover:text-cream"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-trail-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button
            variant="outline"
            href={eventInfo.registrationUrl}
            className="px-6 py-3 text-xs"
            aria-label={`Inscrição oficial pela ${eventInfo.registrationPlatform}`}
          >
            Inscrever-se
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.055] text-cream backdrop-blur-md transition-all duration-300 hover:border-trail-gold/30 hover:text-trail-gold lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? (
            <X size={22} strokeWidth={2.4} aria-hidden="true" />
          ) : (
            <Menu size={22} strokeWidth={2.4} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="lg:hidden"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{
              background: "rgba(5,13,7,0.96)",
              backdropFilter: "blur(18px)",
              borderTop: "1px solid rgba(248,247,242,0.07)",
              borderBottom: "1px solid rgba(248,247,242,0.09)",
            }}
          >
            <nav
              className="mx-auto flex max-w-7xl flex-col gap-1 px-4 pb-6 pt-3 md:px-8"
              aria-label="Navegação mobile"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-transparent px-4 py-4 font-body text-base text-cream-muted transition-all duration-200 hover:border-white/10 hover:bg-white/[0.045] hover:text-cream"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-3 rounded-2xl border border-trail-gold/20 bg-trail-gold/10 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-trail-gold">
                  Inscrições
                </p>

                <p className="mt-2 font-body text-sm leading-relaxed text-cream-muted">
                  {eventInfo.inscriptionPeriod} · Via{" "}
                  {eventInfo.registrationPlatform}
                </p>

                <Button
                  variant="outline"
                  href={eventInfo.registrationUrl}
                  className="mt-4 justify-center text-center text-xs"
                  onClick={() => setMenuOpen(false)}
                >
                  Inscrever-se
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
