'use client';

interface LogoProps {
  size?: 'small' | 'medium' | 'large' | 'xl';
  className?: string;
}

// Horizontal lockup: orange mark + "NubieCloud" wordmark (Creato Display).
// The mark stays brand orange; the wordmark uses text-primary so it adapts
// to dark/light. Sized by `size` so it stays legible at navbar scale.
const conf: Record<string, { mark: string; text: string }> = {
  small: { mark: 'h-7', text: 'text-lg' },
  medium: { mark: 'h-9', text: 'text-2xl' },
  large: { mark: 'h-11', text: 'text-3xl' },
  xl: { mark: 'h-14', text: 'text-4xl' },
};

const Logo: React.FC<LogoProps> = ({ size = 'medium', className = '' }) => {
  const { mark, text } = conf[size] ?? conf.medium;
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/nubiecloud-mark.png"
        alt=""
        className={`${mark} w-auto object-contain`}
      />
      <span className={`${text} font-bold tracking-tight text-text-primary leading-none`}>
        NubieCloud
      </span>
    </div>
  );
};

export default Logo;
