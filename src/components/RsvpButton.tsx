import React, { useState } from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

interface RsvpButtonProps {
  whatsappNumber: string;
  defaultMessage: string;
}

const formatWhatsappNumber = (number: string): string => {
  const national = number.startsWith('62') ? `0${number.slice(2)}` : number;
  return `+62 ${national.slice(1, 4)}-${national.slice(4, 8)}-${national.slice(8)}`;
};

export const RsvpButton: React.FC<RsvpButtonProps> = ({
  whatsappNumber,
  defaultMessage,
}) => {
  const [guestName, setGuestName] = useState('');
  const [hasClicked, setHasClicked] = useState(false);

  // Formulate WhatsApp URL
  const trimmedName = guestName.trim();
  const dynamicMessage = trimmedName
    ? `Halo, saya ${trimmedName} konfirmasi hadir`
    : defaultMessage;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(dynamicMessage)}`;

  const handleClick = () => {
    setHasClicked(true);
  };

  return (
    <section
      id="rsvp-section"
      className="w-full bg-[#fdfcfa]/90 rounded-2xl p-5 sm:p-7 border border-[#cedccd] shadow-xs text-center space-y-5"
      aria-label="Konfirmasi Kehadiran"
    >
      <div className="space-y-1">
        <h2 className="font-serif text-2xl sm:text-3xl text-[#233222] font-semibold">
          Konfirmasi Kehadiran
        </h2>
        <p className="text-xs sm:text-sm text-[#537552] max-w-sm mx-auto">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu.
        </p>
      </div>

      <div className="max-w-sm mx-auto space-y-3 pt-1">
        <div className="text-left">
          <label htmlFor="guest-name-input" className="block text-xs font-semibold text-[#415d40] mb-1">
            Nama Tamu <span className="font-normal text-[#6d936c]">(Opsional)</span>
          </label>
          <input
            id="guest-name-input"
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="Tulis nama Anda di sini..."
            className="w-full px-3.5 py-2.5 text-sm bg-[#f7f5ef] border border-[#cedccd] rounded-xl text-[#233222] placeholder:text-[#8fae8e] focus:outline-hidden focus:ring-2 focus:ring-[#537552] focus:border-transparent transition-all"
          />
        </div>

        <a
          id="confirm-rsvp-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-[#415d40] hover:bg-[#324731] active:scale-[0.98] rounded-xl shadow-md transition-all duration-150 cursor-pointer"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>Konfirmasi Kehadiran</span>
        </a>

        <div className="text-xs text-[#6d936c] flex items-center justify-center gap-1.5 pt-1">
          <span>Terkirim otomatis ke WhatsApp:</span>
          <span className="font-mono font-medium text-[#415d40]">{formatWhatsappNumber(whatsappNumber)}</span>
        </div>

        {hasClicked && (
          <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 py-2 px-3 rounded-lg animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Terima kasih! WhatsApp sedang terbuka untuk mengirim konfirmasi.</span>
          </div>
        )}
      </div>
    </section>
  );
};
