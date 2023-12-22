import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import IFormData from '../interfaces/formInterface';

interface SelectFieldProps {
  label: string;
  name: keyof IFormData;
  options: string[];
  control: Control<IFormData>;
  rules?: Object;
  errors?: FieldValues;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  options,
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
            <select className='form-control' {...field}>
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
};
