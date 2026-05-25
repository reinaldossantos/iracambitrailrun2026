import React, { useRef } from "react";
import { ArrowDown, CalendarDays, Clock, MapPin, Route } from "lucide-react";
import { motion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from "../components/Button";
import { eventInfo, stats } from "../data/eventData";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const heroInfo = [
  {
    icon: CalendarDays,
    label: "Data oficial",
    value: "05 de julho de 2026",
  },
  {
    icon: MapPin,
    label: "Local",
    value: "Rosário da Limeira, MG",
  },
  {
    icon: Route,
    label: "Modalidades",
    value: "Trail Run 12km · Caminhada 3km · Infantil",
  },
  {
    icon: Clock,
    label: "Inscrições",
    value: `22/05 a 22/06 · Via ${eventInfo.registrationPlatform}`,
  },
];

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(".hero-animate, .hero-panel-animate", {
          opacity: 1,
          y: 0,
          scale: 1,
          clearProps: "transform",
        });

        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".hero-animate", {
          opacity: 0,
          y: 42,
          duration: 0.95,
          stagger: 0.12,
        })
        .from(
          ".hero-panel-animate",
          {
            opacity: 0,
            y: 34,
            scale: 0.96,
            duration: 0.85,
            stagger: 0.1,
          },
          "-=0.45",
        );

      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

      if (isDesktop) {
        gsap.to(".hero-bg-media", {
          scale: 1.08,
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".hero-content", {
          yPercent: 7,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-forest-950"
      aria-label="Início"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/floresta-amanhecer.jpg"
          alt=""
          aria-hidden="true"
          className="hero-bg-media h-full w-full object-cover"
          style={{
            opacity: 0.62,
            filter: "saturate(1.08) contrast(1.08)",
            transform: "scale(1.03)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,13,7,0.52) 0%, rgba(5,13,7,0.28) 34%, rgba(5,13,7,0.78) 76%, rgba(5,13,7,1) 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,13,7,0.96) 0%, rgba(5,13,7,0.58) 44%, rgba(5,13,7,0.22) 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 78% 42%, rgba(46,204,113,0.18) 0%, transparent 34rem), radial-gradient(circle at 18% 18%, rgba(201,168,76,0.14) 0%, transparent 28rem)",
          }}
        />

        <div className="noise-overlay absolute inset-0 opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 pb-16 pt-28 md:px-8 lg:px-16">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
          <div className="hero-content flex max-w-5xl flex-col items-start">
            {/* Badge */}
            <div
              className="hero-animate mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2"
              style={{
                background: "rgba(201,168,76,0.1)",
                borderColor: "rgba(201,168,76,0.32)",
              }}
            >
              <Clock size={13} className="text-trail-gold" aria-hidden="true" />

              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-trail-gold sm:text-[11px]">
                Inscrições abertas
              </span>

              <span
                className="h-2 w-2 rounded-full bg-trail-gold animate-pulse-gold"
                aria-hidden="true"
              />
            </div>

            {/* Edition tag */}
            <p className="hero-animate section-label mb-5">
              2ª Edição · 05 de julho de 2026
            </p>

            {/* Main title */}
            <h1 className="hero-animate mb-6 max-w-5xl font-display text-[clamp(3.4rem,14vw,9.5rem)] font-bold leading-[0.82] tracking-[-0.095em] text-cream">
              IRACAMBI
              <br />
              <span
                className="block w-fit max-w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(248,247,242,0.9), rgba(201,168,76,0.86), rgba(46,204,113,0.78)), url('/images/floresta-amanhecer.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center 42%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter:
                    "drop-shadow(0 0 18px rgba(46,204,113,0.16)) drop-shadow(0 28px 60px rgba(0,0,0,0.42))",
                }}
              >
                Trail Run
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-animate mb-10 max-w-2xl text-pretty font-body text-lg leading-relaxed text-cream-muted md:text-xl">
              Trail Run 12km, caminhada ecológica 3km e corrida infantil em uma
              experiência conectada à Mata Atlântica, ao esporte e ao
              reflorestamento.{" "}
              <span className="text-forest-300">Rosário da Limeira, MG.</span>
            </p>

            {/* CTA buttons */}
            <div className="hero-animate flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Button variant="primary" href={eventInfo.registrationUrl}>
                Inscrever-se agora
              </Button>

              <Button variant="outline" href="#informacoes">
                Ver Informações
              </Button>
            </div>

            {/* Stats row */}
            <div
              className="hero-animate mt-14 grid w-full grid-cols-2 gap-6 border-t pt-8 sm:grid-cols-4 lg:max-w-3xl"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
              aria-label="Resumo do evento"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold leading-none md:text-3xl">
                    <span className="gradient-text">{stat.value}</span>
                  </p>

                  <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-cream-subtle md:text-[11px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Premium event panel */}
          <motion.aside
            className="hero-panel-animate hidden rounded-[2rem] border border-white/10 bg-white/[0.065] p-5 shadow-soft backdrop-blur-xl lg:block"
            aria-label="Informações principais do evento"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="mb-6 rounded-full border border-trail-gold/25 bg-trail-gold/10 px-4 py-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-trail-gold">
                Próxima experiência
              </span>
            </div>

            <div className="space-y-4">
              {heroInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="hero-panel-animate rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-forest-400/15 text-forest-300">
                        <Icon size={18} strokeWidth={2.4} aria-hidden="true" />
                      </span>

                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream-subtle">
                        {item.label}
                      </span>
                    </div>

                    <p className="font-display text-lg font-semibold leading-tight text-cream">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl bg-forest-400/10 p-4">
              <p className="text-sm leading-relaxed text-cream-muted">
                Inscrições via {eventInfo.registrationPlatform}, com vagas
                limitadas e kit atleta disponível.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-6 right-6 z-20 hidden flex-col items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-3 text-cream-subtle backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-trail-gold/30 hover:text-trail-gold lg:flex"
        aria-label="Rolar para a seção Sobre"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.22em]">
          Role
        </span>

        <ArrowDown size={16} className="text-trail-gold animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
