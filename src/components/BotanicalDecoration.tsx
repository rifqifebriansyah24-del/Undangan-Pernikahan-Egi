import React from 'react';

interface BotanicalDividerProps {
  className?: string;
}

export const BotanicalDivider: React.FC<BotanicalDividerProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`} aria-hidden="true">
      <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#8fae8e]/60" />
      <svg
        width="28"
        height="28"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#6d936c] opacity-80 shrink-0"
      >
        {/* Central small blossom & leafy branch */}
        <circle cx="20" cy="20" r="2.5" fill="#caaF8f" />
        <path
          d="M20 17.5C20 17.5 18 13 13 15C13 15 15.5 18.5 20 17.5Z"
          fill="currentColor"
        />
        <path
          d="M20 17.5C20 17.5 22 13 27 15C27 15 24.5 18.5 20 17.5Z"
          fill="currentColor"
        />
        <path
          d="M20 22.5C20 22.5 18 27 13 25C13 25 15.5 21.5 20 22.5Z"
          fill="currentColor"
        />
        <path
          d="M20 22.5C20 22.5 22 27 27 25C27 25 24.5 21.5 20 22.5Z"
          fill="currentColor"
        />
        <circle cx="10" cy="20" r="1.5" fill="#caaF8f" opacity="0.8" />
        <circle cx="30" cy="20" r="1.5" fill="#caaF8f" opacity="0.8" />
      </svg>
      <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#8fae8e]/60" />
    </div>
  );
};

export const BotanicalCorner: React.FC<{ position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({
  position = 'top-left',
}) => {
  const rotation =
    position === 'top-right'
      ? 'rotate-90'
      : position === 'bottom-right'
      ? 'rotate-180'
      : position === 'bottom-left'
      ? '-rotate-90'
      : '';

  return (
    <div className={`pointer-events-none absolute z-0 select-none ${rotation}`} aria-hidden="true">
      <svg
        width="90"
        height="90"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#6d936c]/25"
      >
        <path
          d="M6 6C15 28 35 48 58 55C75 60 92 60 92 60C92 60 76 68 56 62C32 55 12 36 6 6Z"
          fill="currentColor"
        />
        <path
          d="M12 18C22 15 32 20 34 26C30 30 20 28 12 18Z"
          fill="#8fae8e"
          fillOpacity="0.4"
        />
        <path
          d="M28 32C38 30 46 36 47 43C42 46 33 42 28 32Z"
          fill="#8fae8e"
          fillOpacity="0.4"
        />
        <path
          d="M48 48C56 46 64 51 65 57C60 60 52 57 48 48Z"
          fill="#8fae8e"
          fillOpacity="0.3"
        />
      </svg>
    </div>
  );
};
