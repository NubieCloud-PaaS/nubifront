'use client';

import Image from 'next/image';

interface LogoProps {
  size?: 'small' | 'medium' | 'large' | 'xl';
  className?: string;
}

const sizeClasses: Record<string, string> = {
  small: 'h-12',
  medium: 'h-20',
  large: 'h-24',
  xl: 'h-32',
};

const Logo: React.FC<LogoProps> = ({ size = 'medium', className = '' }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo_v2.png"
        alt="Nubiecloud - Simplifying Cloud Amplifying Business"
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </div>
  );
};

export default Logo;
