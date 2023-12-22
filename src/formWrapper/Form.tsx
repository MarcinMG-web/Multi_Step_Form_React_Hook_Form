import { ReactNode } from 'react';

type FormProps = {
  children: ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export function Form({ children, ...rest }: FormProps) {
  return (
    <form className='row' {...rest} noValidate>
      {children}
    </form>
  );
}
