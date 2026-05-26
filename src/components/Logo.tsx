'use client';

interface LogoProps {
  size?: 'small' | 'medium' | 'large' | 'xl';
  className?: string;
}

const sizeClasses: Record<string, string> = {
  small: 'h-8',
  medium: 'h-20',
  large: 'h-24',
  xl: 'h-32',
};

const Logo: React.FC<LogoProps> = ({ size = 'medium', className = '' }) => {
  const h = sizeClasses[size];
  // Dark-first theme switch via the `.light` class on <html> (see globals.css).
  // Orange mark stays brand; wordmark is white on dark, dark on light.
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/nubiecloud-logo-dark.png"
        alt="NubieCloud"
        className={`logo-dark-only ${h} w-auto object-contain`}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/nubiecloud-logo-light.png"
        alt="NubieCloud"
        className={`logo-light-only ${h} w-auto object-contain`}
      />
    </div>
  );
};

export default Logo;
