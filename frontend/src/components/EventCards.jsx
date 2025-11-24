// src/components/EventCards.jsx
import React from "react";

function Card({title, date, place, price}) {
  return (
    <div className="bg-white/6 rounded-2xl p-5 shadow-soft-lg w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-in-up">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-xl bg-gradient-to-tr from-[#ffd6c0] to-[#ff8a66] flex items-center justify-center text-black font-bold animate-bounce hover:animate-pulse transition-all duration-300">🎵</div>
        <div>
          <h5 className="text-black font-semibold">{title}</h5>
          <p className="text-black/70 text-sm">{date} • {place}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-black/80">Tickets from</div>
        <div className="text-black font-bold">{price}</div>
      </div>
    </div>
  );
}

export default function EventCards() {
  return (
    <section id="events" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Sunset Beats — Live" date="Dec 12" place="Nairobi, KE" price="$12" />
      <Card title="Electronica Night" date="Jan 22" place="Lagos, NG" price="$20" />
      <Card title="Acoustic Sunday" date="Feb 04" place="Nairobi, KE" price="$8" />
    </section>
  );
}
