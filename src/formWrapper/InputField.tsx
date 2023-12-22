import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import IFormData from '../interfaces/formInterface';

interface InputFieldProps {
  label: string;
  name: keyof IFormData;
  control: Control<IFormData>;
  rules?: Object;
  errors?: FieldError;
  type?: 'text' | 'number' | 'email' | 'password';
}

export function InputField({
  label,
  name,
  control,
  rules,
  errors,
  type = 'text',
}: InputFieldProps) {
  return (
    <label className='form-label'>
      {label}:
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <>
            <input type={type} className='form-control' {...field} />
            {errors && <small className='error'>{errors.message}</small>}
          </>
        )}
      />
    </label>
  );
}
