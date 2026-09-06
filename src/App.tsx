/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { BotanicalCorner, BotanicalDivider } from './components/BotanicalDecoration';
import { CountdownTimer } from './components/CountdownTimer';
import { EventDetails } from './components/EventDetails';
import { RsvpButton } from './components/RsvpButton';

export default function App() {
  // Target date: Saturday, 12 December 2026, 10:00:00 WIB (GMT+7)
  const targetDateISO = '2026-12-12T10:00:00+07:00';
  const whatsappNumber = '6281234567890';
  const whatsappDefaultMessage = 'Halo, saya konfirmasi hadir';

  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Gedung+Serbaguna+Melati%2C+Jakarta+Timur';
  const calendarUrl =
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Lucky+Reginal+%26+Hafshah+Humaira&dates=20261212T030000Z/20261212T060000Z&details=Undangan+Pernikahan+Lucky+Reginal+%26+Hafshah+Humaira+di+Gedung+Serbaguna+Melati%2C+Jakarta+Timur&location=Gedung+Serbaguna+Melati%2C+Jakarta+Timur';

  return (
    <main className="min-h-screen bg-[#F6F4EE] flex items-center justify-center p-3 sm:p-6 md:p-10 font-sans text-[#2C362D]">
      {/* Centered Invitation Container */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative w-full max-w-md md:max-w-lg bg-[#FAF7F0] rounded-3xl border border-[#DED0B7]/60 shadow-xl overflow-hidden p-6 sm:p-9"
      >
        {/* Subtle Decorative Corners */}
        <div className="absolute top-0 left-0 p-2">
          <BotanicalCorner position="top-left" />
        </div>
        <div className="absolute top-0 right-0 p-2">
          <BotanicalCorner position="top-right" />
        </div>
        <div className="absolute bottom-0 left-0 p-2">
          <BotanicalCorner position="bottom-left" />
        </div>
        <div className="absolute bottom-0 right-0 p-2">
          <BotanicalCorner position="bottom-right" />
        </div>

        {/* Content Flow */}
        <div className="relative z-10 flex flex-col items-center space-y-7">
          {/* Header Section with Big Title */}
          <header id="invitation-header" className="text-center w-full pt-4 space-y-2">
            <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#537552] uppercase">
              The Wedding Of
            </span>

            <h1
              id="main-wedding-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#233222] tracking-tight py-1 flex flex-col items-center gap-1 sm:gap-2 leading-tight"
            >
              <span>Lucky Reginal</span>
              <span className="text-[#8fae8e] font-normal italic font-serif text-2xl sm:text-3xl">&amp;</span>
              <span>Hafshah Humaira</span>
            </h1>

            <p className="text-sm sm:text-base font-medium text-[#415d40] tracking-wide">
              Sabtu, 12 Desember 2026
            </p>

            <BotanicalDivider />

            <p className="text-xs sm:text-sm text-[#537552] max-w-xs mx-auto leading-relaxed italic">
              &ldquo;Dan di antara tanda-tanda kebesaran-Nya diciptakan-Nya untukmu pasangan hidup agar kamu merasa tenteram bersamanya.&rdquo;
            </p>
          </header>

          {/* Hitung Mundur (Countdown Timer) */}
          <CountdownTimer targetDate={targetDateISO} />

          {/* Waktu dan Lokasi Acara */}
          <EventDetails
            dateText="Sabtu, 12 Desember 2026"
            timeText="10.00 WIB"
            locationName="Gedung Serbaguna Melati"
            locationAddress="Jakarta Timur, DKI Jakarta"
            mapsUrl={mapsUrl}
            calendarUrl={calendarUrl}
          />

          {/* Tombol Konfirmasi Kehadiran */}
          <RsvpButton
            whatsappNumber={whatsappNumber}
            defaultMessage={whatsappDefaultMessage}
          />

          {/* Warm and Simple Closing */}
          <footer className="text-center pt-2 pb-1 space-y-2 text-[#6D936C]">
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#537552]">
              <span>Kami yang berbahagia</span>
              <Heart className="w-3.5 h-3.5 text-[#8fae8e] fill-current" />
            </div>
            <p className="font-serif text-xl sm:text-2xl font-bold text-[#233222]">
              Lucky Reginal &amp; Hafshah Humaira
            </p>
            <p className="text-[11px] text-[#8fae8e]">
              Beserta segenap keluarga besar
            </p>
          </footer>
        </div>
      </motion.div>
    </main>
  );
}
