import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import IFormData from '../interfaces/formInterface';

interface TextareaFieldProps {
  label: string;
  name: keyof IFormData;
  control: Control<IFormData>;
  rules?: Object;
  errors?: FieldError;
}

export function TextareaField({
  label,
  name,
  control,
  rules,
  errors,
}: TextareaFieldProps) {
  return (
    <label className='form-label'>
      {label}:
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <>
            <textarea
              className={
                errors
                  ? 'form-control border border-2 border-danger'
                  : 'form-control'
              }
              {...field}
            />
            {errors && <small className='error'>{errors.message}</small>}
          </>
        )}
      />
    </label>
  );
}
