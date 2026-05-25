import React from "react";
import {
  ArrowUpRight,
  CalendarDays,
  ExternalLink,
  Footprints,
  Leaf,
  Route,
  ShieldCheck,
  Ticket,
  Trees,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

import { eventInfo } from "../data/eventData";

const REGISTRATION_URL = eventInfo.registrationUrl;

const getSafeLinkProps = (url) => {
  const isExternal = /^https?:\/\//i.test(url);

  if (!isExternal) {
    return {
      href: url,
    };
  }

  return {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
  };
};

const featureCards = [
  {
    icon: Route,
    title: "Trail Run 12km",
    description: "Prova principal em trilhas da Mata Atlântica.",
  },
  {
    icon: Footprints,
    title: "Caminhada 3km",
    description: "Caminhada ecológica para viver a experiência da floresta.",
  },
  {
    icon: Users,
    title: "Corrida infantil",
    description: "Modalidade infantil com categorias específicas.",
  },
  {
    icon: Ticket,
    title: "Kit atleta disponível",
    description: "Informações completas no ambiente oficial de inscrição.",
  },
];

const Registration = () => {
  const registrationProps = getSafeLinkProps(REGISTRATION_URL);

  return (
    <section
      id="inscricao"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #050d07 0%, #0a2a0a 42%, #091f09 100%)",
      }}
      aria-labelledby="registration-title"
    >
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://silvanalves.com.br/site/wp-content/uploads/2025/10/B7-Foto-11-640x1024.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-top"
          style={{
            opacity: 0.12,
            filter: "saturate(1.05) contrast(1.05)",
          }}
          loading="lazy"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,13,7,0.98) 0%, rgba(10,42,10,0.86) 46%, rgba(5,13,7,0.66) 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 12% 12%, rgba(46,204,113,0.14), transparent 30rem), radial-gradient(circle at 78% 38%, rgba(201,168,76,0.12), transparent 34rem)",
          }}
        />

        <div className="noise-overlay absolute inset-0 opacity-45" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)] lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-trail-gold/30 bg-trail-gold/10 px-5 py-2">
              <span
                className="h-2 w-2 rounded-full bg-trail-gold animate-pulse-gold"
                aria-hidden="true"
              />

              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-trail-gold sm:text-[11px]">
                Inscrições 22/05 a 22/06
              </span>
            </div>

            <h2
              id="registration-title"
              className="mb-6 max-w-3xl font-display text-[clamp(2.6rem,8vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.07em] text-cream"
            >
              Garanta sua
              <br />
              <em className="not-italic gradient-text">vaga em 2026</em>
            </h2>

            <p className="mb-8 max-w-2xl font-body text-lg leading-relaxed text-cream-muted md:text-xl">
              As inscrições acontecem de{" "}
              <span className="font-semibold text-trail-gold">
                {eventInfo.inscriptionPeriod}
              </span>
              , pela {eventInfo.registrationPlatform}, com vagas limitadas para
              a 2ª edição do Iracambi Trail Run.
            </p>

            <div className="mb-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
              {featureCards.map(({ icon: Icon, title, description }) => (
                <div key={title} className="glass-card rounded-2xl p-5">
                  <div className="relative z-10 flex items-center gap-4">
                    <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-trail-gold/10 text-trail-gold">
                      <Icon size={18} strokeWidth={2.4} aria-hidden="true" />
                    </span>

                    <div>
                      <p className="font-display text-base font-semibold leading-tight text-cream">
                        {title}
                      </p>

                      <p className="mt-1 font-body text-xs leading-relaxed text-cream-muted">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <motion.a
              className="btn-primary w-full justify-center sm:w-fit"
              {...registrationProps}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Abrir inscrição oficial do Iracambi Trail Run"
            >
              Inscrever-se agora
              <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
            </motion.a>

            <p className="mt-4 max-w-md font-body text-xs leading-relaxed text-cream-subtle">
              Você será redirecionado para o ambiente oficial de inscrição da{" "}
              {eventInfo.registrationPlatform}.
            </p>
          </motion.div>

          {/* Right — secure CTA card */}
          <motion.div
            className="glass-card rounded-[2rem] p-6 shadow-soft md:p-8"
            initial={{ opacity: 0, y: 38, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="relative z-10">
              <div className="mb-7 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-trail-gold/20 bg-trail-gold/10 text-trail-gold">
                  <CalendarDays
                    size={21}
                    strokeWidth={2.4}
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cream-subtle">
                    Período oficial
                  </p>

                  <h3 className="mt-1 font-display text-2xl font-semibold leading-tight text-cream">
                    22 de maio a 22 de junho
                  </h3>
                </div>
              </div>

              <p className="mb-7 font-body text-sm leading-relaxed text-cream-muted md:text-base">
                A página principal destaca as informações essenciais do evento.
                Valores, termos, categorias e detalhes completos ficam no
                ambiente oficial de inscrição.
              </p>

              <div className="space-y-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      size={19}
                      className="mt-0.5 flex-shrink-0 text-forest-300"
                      strokeWidth={2.4}
                      aria-hidden="true"
                    />

                    <div>
                      <p className="font-display text-base font-semibold text-cream">
                        Inscrição em ambiente oficial
                      </p>

                      <p className="mt-1 font-body text-xs leading-relaxed text-cream-muted">
                        O cadastro será realizado pela plataforma{" "}
                        {eventInfo.registrationPlatform}.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <div className="flex items-start gap-3">
                    <ExternalLink
                      size={19}
                      className="mt-0.5 flex-shrink-0 text-trail-gold"
                      strokeWidth={2.4}
                      aria-hidden="true"
                    />

                    <div>
                      <p className="font-display text-base font-semibold text-cream">
                        Vagas limitadas
                      </p>

                      <p className="mt-1 font-body text-xs leading-relaxed text-cream-muted">
                        Limite total de {eventInfo.vacancies}. As inscrições
                        podem encerrar antes caso o limite seja atingido.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-forest-400/10 p-4">
                <div className="flex items-center gap-3">
                  <Leaf
                    size={19}
                    className="flex-shrink-0 text-forest-300"
                    strokeWidth={2.4}
                    aria-hidden="true"
                  />

                  <p className="font-body text-sm leading-relaxed text-cream-muted">
                    Cada inscrição contribui para o plantio de uma muda de
                    árvore nativa da Mata Atlântica.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
