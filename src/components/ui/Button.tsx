import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'default', 
  size = 'default',
  className = '',
  onClick
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00ffff]";
  
  const variantStyles = {
    default: "bg-gradient-to-r from-[#00ff00] to-[#00ffff] text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]",
    outline: "border border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10"
  };
  
  const sizeStyles = {
    sm: "text-xs px-3 py-1.5",
    default: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3"
  };
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center">
        {children}
      </span>
      
      {variant === 'default' && (
        <span className="absolute inset-0 overflow-hidden rounded-md">
          <span className="absolute inset-0 bg-black/20 transform translate-y-full transition-transform hover:translate-y-0 duration-300"></span>
        </span>
      )}
    </button>
  );
};

export default Button;