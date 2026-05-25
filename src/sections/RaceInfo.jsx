import React from "react";
import {
  ArrowUpRight,
  Bus,
  Clock,
  Droplets,
  Footprints,
  MapPin,
  Mountain,
  Route,
  Ticket,
  Trees,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

import SectionTitle from "../components/SectionTitle";
import { eventInfo, raceInfo } from "../data/eventData";

const BUS_IMAGE_SRC = "/images/onibus-amarelo.png";

const iconMap = {
  "map-pin": MapPin,
  trees: Trees,
  footprints: Footprints,
  route: Route,
  mountain: Mountain,
  users: Users,
  bus: Bus,
  clock: Clock,
  droplets: Droplets,
  ticket: Ticket,
};

const logisticsCards = [
  {
    icon: Clock,
    label: "Largada",
    value: "Corrida às 8h · Caminhada às 8h15",
  },
  {
    icon: Bus,
    label: "Transporte",
    value: "Ônibus gratuitos às 6h",
  },
  {
    icon: Droplets,
    label: "Hidratação",
    value: "Pontos no 4,5km e 9km",
  },
  {
    icon: Ticket,
    label: "Kit atleta",
    value: eventInfo.kitStatus,
  },
];

const InfoCard = ({ info, index }) => {
  const Icon = iconMap[info.icon] || Route;

  return (
    <motion.article
      className="glass-card group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:border-trail-gold/30 sm:p-6"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.55,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      whileHover={{ y: -5 }}
    >
      <div className="relative z-10 flex items-start gap-4">
        <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl border border-trail-gold/20 bg-trail-gold/10 text-trail-gold transition-colors duration-300 group-hover:bg-trail-gold group-hover:text-forest-950">
          <Icon size={19} strokeWidth={2.35} aria-hidden="true" />
        </div>

        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-cream-subtle">
            {info.label}
          </p>

          <p className="font-body text-base font-semibold leading-snug text-cream">
            {info.value}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

const LogisticsCard = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.article
      className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:border-trail-gold/25 hover:bg-white/[0.055]"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: "easeOut",
      }}
    >
      <div className="mb-3 grid h-10 w-10 place-items-center rounded-full border border-trail-gold/20 bg-trail-gold/10 text-trail-gold">
        <Icon size={17} strokeWidth={2.35} aria-hidden="true" />
      </div>

      <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.22em] text-cream-subtle">
        {item.label}
      </p>

      <p className="font-body text-sm font-semibold leading-snug text-cream">
        {item.value}
      </p>
    </motion.article>
  );
};

const VideoCard = () => {
  return (
    <motion.div
      className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-soft"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="relative h-[340px] overflow-hidden bg-forest-950 sm:h-[420px] lg:h-[520px]">
        <video
          className="h-full w-full object-cover object-[center_38%] transition-transform duration-700 hover:scale-[1.02]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/mata-atlantica.jpg"
          aria-label="Vídeo da edição de 2025 do Iracambi Trail Run"
        >
          <source src="/videos/iracambi-run-2025.mp4" type="video/mp4" />
        </video>

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,13,7,0.02) 0%, rgba(5,13,7,0.06) 55%, rgba(5,13,7,0.22) 100%)",
          }}
        />

        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-20" />
      </div>

      <div className="border-t border-white/10 bg-forest-950/75 p-5 backdrop-blur-xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-trail-gold">
          Edição 2025
        </p>

        <p className="mt-2 font-display text-lg font-semibold leading-tight text-cream sm:text-xl">
          A energia da primeira edição nas trilhas da Mata Atlântica.
        </p>
      </div>
    </motion.div>
  );
};

const BusCard = () => {
  return (
    <motion.div
      className="overflow-hidden rounded-[2rem] border border-trail-gold/20 bg-white/[0.035] shadow-soft"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="relative h-[210px] overflow-hidden bg-cream sm:h-[250px]">
        <img
          src={BUS_IMAGE_SRC}
          alt="Ônibus amarelo escolar usado como apoio de transporte do evento"
          className="h-full w-full object-contain p-4 transition-transform duration-700 hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      <div className="border-t border-white/10 bg-forest-950/75 p-5 backdrop-blur-xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-trail-gold/25 bg-trail-gold/10 px-3 py-2">
          <Bus size={15} className="text-trail-gold" aria-hidden="true" />

          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-trail-gold">
            Transporte
          </span>
        </div>

        <p className="font-display text-xl font-semibold leading-tight text-cream">
          Ônibus gratuitos no dia do evento
        </p>

        <p className="mt-2 font-body text-xs leading-relaxed text-cream-muted">
          Saída prevista às 6h de Muriaé, com retorno por volta de 12h30.
        </p>
      </div>
    </motion.div>
  );
};

const RaceInfo = () => {
  return (
    <section
      id="informacoes"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(5,13,7,0.98) 0%, rgba(10,42,10,1) 45%, rgba(5,13,7,0.98) 100%)",
      }}
      aria-labelledby="race-info-title"
    >
      <div
        className="pointer-events-none absolute right-0 top-0 h-[34rem] w-[34rem] opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(46,204,113,0.12) 0%, transparent 68%)",
        }}
      />

      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[28rem] w-[28rem] opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:gap-16">
          {/* Left */}
          <div>
            <SectionTitle
              label="Informações da Prova"
              title={
                <>
                  Tudo que você
                  <br />
                  precisa <em className="not-italic gradient-text">saber</em>
                </>
              }
              subtitle={`A 2ª edição reúne Trail Run 12km, caminhada ecológica 3km e corrida infantil, com inscrições pela ${eventInfo.registrationPlatform} e vagas limitadas.`}
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {raceInfo.map((info, index) => (
                <InfoCard
                  key={`${info.label}-${info.value}`}
                  info={info}
                  index={index}
                />
              ))}
            </div>

            <div className="mt-6 rounded-[2rem] border border-trail-gold/15 bg-trail-gold/[0.055] p-5 sm:p-6">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.26em] text-trail-gold">
                Detalhes oficiais
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {logisticsCards.map((item, index) => (
                  <LogisticsCard
                    key={`${item.label}-${item.value}`}
                    item={item}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right — video + transport + map */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <VideoCard />

            <BusCard />

            {/* Map card */}
            <motion.div
              className="glass-card rounded-[2rem] p-6 text-center sm:p-8"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full border border-trail-gold/20 bg-trail-gold/10 text-trail-gold">
                <MapPin size={28} strokeWidth={2.35} aria-hidden="true" />
              </div>

              <p className="mb-2 font-display text-2xl font-semibold text-cream">
                Rosário da Limeira, MG
              </p>

              <p className="mx-auto mb-6 max-w-sm font-body text-sm leading-relaxed text-cream-muted">
                Sede da ONG Iracambi · Largada e chegada na reserva da Mata
                Atlântica
              </p>

              <a
                href="https://maps.google.com/?q=ONG+Iracambi+Rosario+da+Limeira+MG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-trail-gold/30 bg-trail-gold/10 px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-trail-gold transition-all duration-300 hover:-translate-y-0.5 hover:border-trail-gold hover:bg-trail-gold hover:text-forest-950"
                aria-label="Abrir localização da ONG Iracambi no Google Maps"
              >
                Ver no mapa
                <ArrowUpRight size={14} strokeWidth={2.4} aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RaceInfo;
