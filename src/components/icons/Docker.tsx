import React from 'react';

export interface DockerProps {
  size?: number;
  className?: string;
}

export const Docker: React.FC<DockerProps> = ({ size = 24, className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M16 10h4v4h-4z" />
      <path d="M10 10h4v4h-4z" />
      <path d="M4 10h4v4H4z" />
      <path d="M16 4h4v4h-4z" />
      <path d="M22 19c0-3.87-3.13-7-7-7H9c-3.87 0-7 3.13-7 7z" />
    </svg>
  );
};
