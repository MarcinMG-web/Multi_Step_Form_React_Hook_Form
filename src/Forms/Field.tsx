import React, { ReactNode, ReactElement } from 'react';
import { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form';

type FieldProps = {
  children: ReactNode;
  label: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
};

export function Field({ children, label, error }: FieldProps): JSX.Element {
  const id = getChildId(children);

  return (
    <div className='col-sm-12 mb-3'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      {children}
      {error && <small className='error'>{error?.message as string}</small>}
    </div>
  );
}

type ChildProps = {
  id?: string;
};

// Get id prop from a child element
export const getChildId = <T extends ChildProps>(
  children: ReactNode
): string | undefined => {
  const child = React.Children.only(children) as ReactElement<T>;

  if (child && 'id' in child.props) {
    return child.props.id;
  }
};
