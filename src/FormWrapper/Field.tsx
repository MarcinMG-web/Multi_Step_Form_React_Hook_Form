import React, { ReactNode } from 'react';
import { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form';

type FieldProps = {
  children: ReactNode;
  label: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
};

export function Field({ children, label, error }: FieldProps): JSX.Element {
  return (
    <div className='col-sm-12 mb-3'>
      <label className='form-label'>{label}</label>
      {children}
      {error && <small className='error'>{error?.message as string}</small>}
    </div>
  );
}
