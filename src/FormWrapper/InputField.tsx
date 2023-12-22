import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import IFormData from '../Interfaces/formInterface';

interface InputFieldProps {
  label: string;
  name: keyof IFormData;
  control: Control<IFormData>;
  rules?: Object;
  errors?: FieldValues;
  type?: 'text' | 'number' | 'email' | 'password';
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  control,
  rules,
  errors,
  type = 'text',
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
            <input type={type} className='form-control' {...field} />
            {errors && <small className='error'>{errors.message}</small>}
          </>
        )}
      />
    </label>
  );
};
