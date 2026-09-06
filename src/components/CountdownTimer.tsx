import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { TimeLeft } from '../types';

interface CountdownTimerProps {
  targetDate: string; // ISO string with timezone or parsed
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(targetDate).getTime();
    const now = Date.now();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isFinished: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const padZero = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  const timeUnits = [
    { label: 'Hari', value: padZero(timeLeft.days) },
    { label: 'Jam', value: padZero(timeLeft.hours) },
    { label: 'Menit', value: padZero(timeLeft.minutes) },
    { label: 'Detik', value: padZero(timeLeft.seconds) },
  ];

  return (
    <section
      id="countdown-section"
      className="w-full bg-[#fdfcfa]/90 rounded-2xl p-5 sm:p-6 border border-[#cedccd] shadow-xs text-center"
      aria-label="Hitung Mundur Acara Pernikahan"
    >
      <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#415d40] uppercase mb-4">
        <Clock className="w-4 h-4 text-[#537552]" />
        <span>Menuju Hari Bahagia</span>
      </div>

      {timeLeft.isFinished ? (
        <div className="py-4 text-[#415d40] font-medium text-base">
          Acara bahagia sedang atau telah berlangsung. Terima kasih atas doa dan kehadiran Anda!
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="flex flex-col items-center justify-center p-2.5 sm:p-3 bg-[#f7f5ef] border border-[#e7ede6] rounded-xl transition-transform"
            >
              <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#233222] tracking-tight tabular-nums">
                {unit.value}
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-[#537552] mt-1 uppercase tracking-wide">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
