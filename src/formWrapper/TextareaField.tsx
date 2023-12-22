import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import IFormData from '../interfaces/formInterface';

interface TextareaFieldProps {
  label: string;
  name: keyof IFormData;
  control: Control<IFormData>;
  rules?: Object;
  errors?: FieldValues;
}

export const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  name,
  control,
  rules,
  errors,
}) => {
  return (
    <label className='form-label'>
      {label}:
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <>
            <textarea className='form-control' {...field} />
            {errors && <small className='error'>{errors.message}</small>}
          </>
        )}
      />
    </label>
  );
};
