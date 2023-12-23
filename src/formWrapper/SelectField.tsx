import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import IFormData from '../interfaces/formInterface';

interface SelectFieldProps {
  label: string;
  name: keyof IFormData;
  options: string[];
  control: Control<IFormData>;
  rules?: Object;
  errors?: FieldError;
}

export function SelectField({
  label,
  name,
  options,
  control,
  rules,
  errors,
}: SelectFieldProps) {
  return (
    <label className='form-label'>
      {label}:
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <>
            <select
              className={
                errors
                  ? 'form-select border border-2 border-danger'
                  : 'form-select'
              }
              {...field}
            >
              <option value=''>--Please choose an option--</option>
              {options.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </select>
            {errors && <small className='error'>{errors.message}</small>}
          </>
        )}
      />
    </label>
  );
}
