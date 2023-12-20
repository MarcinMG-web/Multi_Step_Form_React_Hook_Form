import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonWrapperProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  position?: 'left' | 'center' | 'right';
}

export const Button: React.FC<ButtonWrapperProps> = ({
  children,
  position = 'left',
  ...rest
}) => {
  const getPositionClass = () => {
    switch (position) {
      case 'center':
        return 'mx-auto';
      case 'right':
        return 'ms-auto';
      default:
        return undefined; 
    }
  };

  return (
    <div className={`d-flex ${getPositionClass()}`}>
      <button className='btn btn-primary' {...rest}>
        {children}
      </button>
    </div>
  );
};
