import React from "react";
import { ArrowRight, Leaf, Play, Trees } from "lucide-react";
import { motion } from "motion/react";

import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { eventInfo } from "../data/eventData";

const tags = [
  "Trail Run 12km",
  "Caminhada 3km",
  "Corrida infantil",
  "Via MultSports",
  "Impacto real",
];

const About = () => {
  return (
    <section id="sobre" className="section-padding relative overflow-hidden">
      {/* Background accents */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-96 w-96"
        style={{
          background:
            "radial-gradient(circle, rgba(46,204,113,0.12) 0%, transparent 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[28rem] w-[28rem] opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.09) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,1fr)] lg:gap-24">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionTitle
              label="Sobre o Evento"
              title={
                <>
                  Uma corrida que
                  <br />
                  <em className="not-italic gradient-text">transforma</em>
                </>
              }
              subtitle="O Iracambi Trail Run é uma experiência esportiva em meio à Mata Atlântica, com corrida de trilha, caminhada ecológica, corrida infantil e impacto ambiental real."
            />

            <div className="mb-10 space-y-6">
              <p className="font-body leading-relaxed text-cream-muted md:text-lg">
                Criado pela ONG Iracambi, o evento leva participantes para uma
                vivência dentro da reserva da Mata Atlântica em Rosário da
                Limeira, MG. A 2ª edição contará com{" "}
                <span className="font-semibold text-trail-gold">
                  Trail Run 12km
                </span>
                ,{" "}
                <span className="font-semibold text-trail-gold">
                  caminhada ecológica 3km
                </span>{" "}
                e{" "}
                <span className="font-semibold text-trail-gold">
                  corrida infantil
                </span>
                .
              </p>

              <p className="font-body leading-relaxed text-cream-muted md:text-lg">
                A prova acontece em 05 de julho de 2026, com inscrições de{" "}
                <span className="font-semibold text-cream">
                  {eventInfo.inscriptionPeriod}
                </span>
                , pela {eventInfo.registrationPlatform}. Cada inscrição também
                contribui para o plantio de uma muda de árvore nativa, mantendo
                o compromisso da Iracambi com o reflorestamento da Mata
                Atlântica.
              </p>
            </div>

            <div className="mb-10 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-cream-muted backdrop-blur-sm"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button variant="primary" href={eventInfo.registrationUrl}>
                Inscrever-se agora
                <ArrowRight size={16} aria-hidden="true" />
              </Button>

              <div className="flex items-center gap-3 text-sm text-cream-muted">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-trail-gold/20 bg-trail-gold/10 text-trail-gold">
                  <Trees size={18} strokeWidth={2.4} aria-hidden="true" />
                </span>

                <span className="max-w-xs leading-relaxed">
                  Esporte, floresta, comunidade e reflorestamento em uma única
                  experiência.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — video + ONG info */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 38, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-soft">
              <div className="relative aspect-[4/5] overflow-hidden bg-forest-950">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/images/mata-atlantica.jpg"
                  aria-label="Vídeo da floresta e da experiência Iracambi"
                >
                  <source src="/videos/iracambi-forest.mp4" type="video/mp4" />
                </video>

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(5,13,7,0.08) 0%, rgba(5,13,7,0.22) 42%, rgba(5,13,7,0.88) 100%)",
                  }}
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 10%, rgba(46,204,113,0.16), transparent 34rem)",
                  }}
                />

                <div className="noise-overlay absolute inset-0 opacity-40" />

                {/* Video indicator */}
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-2 backdrop-blur-md">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-trail-gold text-forest-950">
                    <Play size={13} fill="currentColor" aria-hidden="true" />
                  </span>

                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-cream">
                    Floresta viva
                  </span>
                </div>

                {/* ONG badge */}
                <div className="glass-card absolute bottom-5 left-5 right-5 rounded-2xl p-5">
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/10">
                      <img
                        src="/images/logo-iracambi.png"
                        alt="Logo da Iracambi"
                        className="h-11 w-11 object-contain"
                        loading="lazy"
                      />
                    </div>

                    <div>
                      <p className="font-display text-lg font-semibold leading-none text-cream">
                        ONG Iracambi
                      </p>

                      <p className="mt-2 font-body text-xs leading-relaxed text-cream-muted">
                        Mais de 20 anos restaurando a Mata Atlântica em Minas
                        Gerais.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat */}
            <motion.div
              className="mt-5 rounded-2xl border border-trail-gold/20 bg-forest-950/90 p-4 shadow-gold backdrop-blur-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, delay: 0.18, ease: "easeOut" }}
            >
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-forest-400/15 text-forest-300">
                  <Leaf size={18} strokeWidth={2.4} aria-hidden="true" />
                </span>

                <div>
                  <p className="font-display text-xl font-bold leading-none text-cream">
                    1 inscrição = 1 árvore
                  </p>

                  <p className="mt-2 text-xs leading-relaxed text-cream-muted">
                    Cada inscrição contribui para o plantio de uma muda nativa
                    da Mata Atlântica.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating accent */}
            <div
              className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 opacity-35"
              style={{
                background:
                  "radial-gradient(circle, rgba(46,204,113,0.72) 0%, transparent 70%)",
                filter: "blur(24px)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
