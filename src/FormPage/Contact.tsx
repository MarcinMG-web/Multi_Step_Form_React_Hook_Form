import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button, Field, Form, Input } from '../FormWrapper';
import { useAppState } from '../GlobalState/AppState';

interface ContactValues {
  firstName: string;
  lastName: string;
  email: string;
}

export default function Contact(): JSX.Element {
  const {
    state: { formValues },
    dispatch,
  } = useAppState();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: formValues, mode: 'onSubmit' });

  const navigate = useNavigate();

  const saveData = (pageValues: ContactValues) => {
    dispatch({
      type: 'UPDATE_FORM_VALUES',
      payload: { ...formValues, ...pageValues },
    });
    navigate('/education');
  };
  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Contact</legend>
        <Field label='First name' error={errors?.firstName}>
          <Input
            {...register('firstName', { required: 'First name is required' })}
          />
        </Field>

        <Field label='Last name' error={errors?.lastName}>
          <Input
            {...register('lastName', { required: 'Last name is required' })}
          />
        </Field>

        <Field label='Email' error={errors?.email}>
          <Input
            {...register('email', { required: 'Email is required' })}
            type='email'
          />
        </Field>

        <Button position='right'>Next {'>'}</Button>
      </fieldset>
    </Form>
  );
}
