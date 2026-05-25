import React, { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { motion } from "motion/react";

import { eventInfo } from "../data/eventData";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const formatNumber = (value) => String(value).padStart(2, "0");

const getRemainingTime = (eventDate) => {
  const target =
    eventDate instanceof Date
      ? eventDate.getTime()
      : new Date(eventDate).getTime();

  if (Number.isNaN(target)) {
    return {
      isValid: false,
      isFinished: false,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const diff = target - Date.now();

  if (diff <= 0) {
    return {
      isValid: true,
      isFinished: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    isValid: true,
    isFinished: false,
    days: Math.floor(diff / DAY),
    hours: Math.floor((diff % DAY) / HOUR),
    minutes: Math.floor((diff % HOUR) / MINUTE),
    seconds: Math.floor((diff % MINUTE) / SECOND),
  };
};

const CountdownUnit = ({ value, label, index }) => (
  <motion.div
    className="mx-auto flex w-[4.7rem] flex-col items-center justify-start sm:w-24 md:w-28 lg:w-32"
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.45 }}
    transition={{
      duration: 0.55,
      delay: index * 0.06,
      ease: "easeOut",
    }}
  >
    <div className="glass-card grid aspect-square w-full place-items-center rounded-2xl">
      <span className="font-display text-[clamp(2rem,8vw,4.25rem)] font-bold leading-none tracking-[-0.08em] gradient-text">
        {label === "Dias" ? value : formatNumber(value)}
      </span>
    </div>

    <span
      className="section-label mt-4 block w-full text-center text-[9px] sm:text-[10px]"
      style={{ letterSpacing: "0.3em", paddingLeft: "0.3em" }}
    >
      {label}
    </span>
  </motion.div>
);

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(() =>
    getRemainingTime(eventInfo.eventDate),
  );

  useEffect(() => {
    setTimeLeft(getRemainingTime(eventInfo.eventDate));

    const intervalId = window.setInterval(() => {
      setTimeLeft(getRemainingTime(eventInfo.eventDate));
    }, SECOND);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const items = useMemo(
    () => [
      { value: timeLeft.days, label: "Dias" },
      { value: timeLeft.hours, label: "Horas" },
      { value: timeLeft.minutes, label: "Minutos" },
      { value: timeLeft.seconds, label: "Segundos" },
    ],
    [timeLeft],
  );

  const statusText = !timeLeft.isValid
    ? "Data do evento em validação"
    : timeLeft.isFinished
      ? "A largada começou"
      : "A 2ª edição está chegando";

  return (
    <section
      className="relative overflow-hidden px-4 py-16 md:px-8 md:py-24 lg:px-16"
      aria-labelledby="countdown-title"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(201,168,76,0.1), transparent 32rem), linear-gradient(180deg, rgba(255,255,255,0.018), rgba(255,255,255,0.035), rgba(255,255,255,0.018))",
        }}
      />

      <div className="divider-gold mb-12 md:mb-16" />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl text-center"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-trail-gold/25 bg-trail-gold/10 px-4 py-2">
          <Clock3 size={14} className="text-trail-gold" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-trail-gold">
            Contagem regressiva
          </span>
        </div>

        <h2
          id="countdown-title"
          className="mx-auto mb-4 max-w-3xl font-display text-[clamp(2rem,6vw,4.8rem)] font-bold leading-[0.95] tracking-[-0.07em] text-cream"
        >
          {statusText}
        </h2>

        <p className="mx-auto mb-10 max-w-2xl font-body text-base leading-relaxed text-cream-muted md:text-lg">
          Prepare-se para o Trail Run 12km, caminhada ecológica 3km e corrida
          infantil em uma experiência entre trilhas, floresta e propósito na
          Mata Atlântica.
        </p>

        <div
          className="mx-auto grid max-w-4xl grid-cols-4 gap-2 sm:gap-4 md:gap-6"
          aria-label="Tempo restante para o evento"
          aria-live="polite"
        >
          {items.map((item, index) => (
            <CountdownUnit
              key={item.label}
              value={item.value}
              label={item.label}
              index={index}
            />
          ))}
        </div>

        <div className="mx-auto mt-10 flex w-fit max-w-full flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.045] px-5 py-4 text-cream-muted sm:flex-row sm:rounded-full">
          <div className="flex items-center gap-2">
            <CalendarDays
              size={15}
              className="text-trail-gold"
              aria-hidden="true"
            />

            <p className="font-body text-center text-xs leading-relaxed sm:text-sm">
              Data oficial: 05 de julho de 2026 · Inscrições de{" "}
              <span className="font-semibold text-trail-gold">
                {eventInfo.inscriptionPeriod}
              </span>{" "}
              pela {eventInfo.registrationPlatform}.
            </p>
          </div>

          <a
            href={eventInfo.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-trail-gold/25 bg-trail-gold/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-trail-gold transition-all duration-300 hover:-translate-y-0.5 hover:border-trail-gold hover:bg-trail-gold hover:text-forest-950"
            aria-label="Abrir inscrição oficial do Iracambi Trail Run"
          >
            Inscrever-se
            <ArrowUpRight size={13} strokeWidth={2.4} aria-hidden="true" />
          </a>
        </div>
      </motion.div>

      <div className="divider-gold mt-12 md:mt-16" />
    </section>
  );
};

export default Countdown;
