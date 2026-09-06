import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Copy, Check, ExternalLink, CalendarPlus } from 'lucide-react';

interface EventDetailsProps {
  dateText: string;
  timeText: string;
  locationName: string;
  locationAddress: string;
  mapsUrl: string;
  calendarUrl: string;
}

export const EventDetails: React.FC<EventDetailsProps> = ({
  dateText,
  timeText,
  locationName,
  locationAddress,
  mapsUrl,
  calendarUrl,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    const fullText = `${locationName}, ${locationAddress}`;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(fullText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="event-details-section"
      className="w-full bg-[#fdfcfa]/90 rounded-2xl p-5 sm:p-7 border border-[#cedccd] shadow-xs space-y-6"
      aria-label="Waktu dan Lokasi Acara"
    >
      <div className="text-center space-y-1">
        <h2 className="font-serif text-2xl sm:text-3xl text-[#233222] font-semibold">
          Waktu &amp; Tempat
        </h2>
        <p className="text-xs sm:text-sm text-[#537552]">
          Dengan penuh rasa syukur, kami mengundang Anda untuk hadir pada acara pernikahan kami:
        </p>
      </div>

      {/* Date & Time Box */}
      <div className="p-4 sm:p-5 bg-[#f7f5ef] border border-[#e7ede6] rounded-xl flex items-start gap-4">
        <div className="w-11 h-11 rounded-full bg-[#e7ede6] text-[#415d40] flex items-center justify-center shrink-0 mt-0.5">
          <Calendar className="w-5 h-5 text-[#415d40]" />
        </div>
        <div className="space-y-1 flex-1">
          <span className="text-xs font-semibold text-[#537552] uppercase tracking-wider block">
            Hari &amp; Tanggal
          </span>
          <p className="font-serif text-xl sm:text-2xl font-bold text-[#233222] leading-tight">
            {dateText}
          </p>
          <div className="flex items-center gap-1.5 text-sm text-[#415d40] font-medium pt-0.5">
            <Clock className="w-4 h-4 text-[#537552] shrink-0" />
            <span>Pukul {timeText}</span>
          </div>

          <div className="pt-2">
            <a
              id="add-calendar-btn"
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#415d40] hover:text-[#233222] bg-[#fdfcfa] border border-[#cedccd] px-3 py-1.5 rounded-lg transition-colors shadow-2xs"
            >
              <CalendarPlus className="w-3.5 h-3.5" />
              <span>Simpan ke Kalender</span>
            </a>
          </div>
        </div>
      </div>

      {/* Location Box */}
      <div className="p-4 sm:p-5 bg-[#f7f5ef] border border-[#e7ede6] rounded-xl flex items-start gap-4">
        <div className="w-11 h-11 rounded-full bg-[#e7ede6] text-[#415d40] flex items-center justify-center shrink-0 mt-0.5">
          <MapPin className="w-5 h-5 text-[#415d40]" />
        </div>
        <div className="space-y-1 flex-1">
          <span className="text-xs font-semibold text-[#537552] uppercase tracking-wider block">
            Lokasi Acara
          </span>
          <p className="font-serif text-lg sm:text-xl font-bold text-[#233222] leading-snug">
            {locationName}
          </p>
          <p className="text-sm text-[#415d40] leading-relaxed">
            {locationAddress}
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2.5">
            <a
              id="open-google-maps-btn"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#537552] hover:bg-[#415d40] px-3.5 py-1.5 rounded-lg transition-colors shadow-2xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Buka Google Maps</span>
            </a>

            <button
              id="copy-address-btn"
              type="button"
              onClick={handleCopyAddress}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#415d40] hover:text-[#233222] bg-[#fdfcfa] border border-[#cedccd] px-3 py-1.5 rounded-lg transition-colors shadow-2xs cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Alamat</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
