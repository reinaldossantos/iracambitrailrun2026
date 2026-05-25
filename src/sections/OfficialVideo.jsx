import React from "react";
import { ArrowUpRight, CalendarDays, PlayCircle } from "lucide-react";
import { motion } from "motion/react";

import { eventInfo } from "../data/eventData";

const OFFICIAL_VIDEO_SRC = "/videos/video-oficial-2026.mp4";

const OfficialVideo = () => {
  return (
    <section
      className="relative overflow-hidden px-4 py-16 md:px-8 md:py-24 lg:px-16"
      aria-labelledby="official-video-title"
      style={{
        background:
          "linear-gradient(180deg, rgba(5,13,7,1) 0%, rgba(10,42,10,0.98) 48%, rgba(5,13,7,1) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(201,168,76,0.1), transparent 32rem), radial-gradient(circle at 10% 80%, rgba(46,204,113,0.11), transparent 28rem)",
        }}
      />

      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-30" />

      <motion.div
        className="section-container relative z-10 mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-trail-gold/25 bg-trail-gold/10 px-4 py-2">
            <PlayCircle
              size={14}
              className="text-trail-gold"
              strokeWidth={2.4}
              aria-hidden="true"
            />

            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-trail-gold">
              Vídeo oficial
            </span>
          </div>

          <h2
            id="official-video-title"
            className="font-display text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.07em] text-cream"
          >
            2º Iracambi
            <br />
            <em className="not-italic gradient-text">Trail Run</em>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-cream-muted md:text-lg">
            Confira o vídeo oficial da 2ª edição e sinta um pouco da energia que
            espera por você nas trilhas da Mata Atlântica.
          </p>
        </div>

        <motion.div
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-soft"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div className="relative aspect-video overflow-hidden bg-forest-950">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls
              aria-label="Vídeo oficial da segunda edição do Iracambi Trail Run"
            >
              <source src={OFFICIAL_VIDEO_SRC} type="video/mp4" />
            </video>

            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(5,13,7,0.04) 0%, rgba(5,13,7,0.06) 55%, rgba(5,13,7,0.18) 100%)",
              }}
            />

            <div className="noise-overlay pointer-events-none absolute inset-0 opacity-20" />
          </div>

          <div className="border-t border-white/10 bg-forest-950/75 p-5 backdrop-blur-xl md:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-trail-gold">
                  05 de julho de 2026
                </p>

                <p className="mt-2 font-display text-xl font-semibold leading-tight text-cream md:text-2xl">
                  Trail Run 12km · Caminhada ecológica 3km · Corrida infantil
                </p>
              </div>

              <a
                href={eventInfo.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-trail-gold/25 bg-trail-gold/10 px-4 py-2 text-trail-gold transition-all duration-300 hover:-translate-y-0.5 hover:border-trail-gold hover:bg-trail-gold hover:text-forest-950"
                aria-label="Abrir inscrição oficial do Iracambi Trail Run"
              >
                <CalendarDays size={15} strokeWidth={2.4} aria-hidden="true" />

                <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                  Inscrever-se
                </span>

                <ArrowUpRight size={13} strokeWidth={2.4} aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OfficialVideo;