import { ReactNode, forwardRef } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary';
};

export const Button = forwardRef(
  ({ children, variant = 'primary', ...rest }: ButtonProps) => {
    return (
      <button className={`btn btn-${variant}`} {...rest}>
        {children}
      </button>
    );
  }
);
