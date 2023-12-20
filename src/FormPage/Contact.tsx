import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button, Field, Form, Input } from '../FormWrapper';
import { useAppState } from '../GlobalState/AppState';
import EInputName from '../Enums/formEnum';

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

  const { FIRST_NAME, LAST_NAME, EMAIL } = EInputName;

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Contact</legend>
        <Field label={FIRST_NAME} error={errors?.firstName}>
          <Input
            {...register(FIRST_NAME, {
              required: 'First name is required',
            })}
          />
        </Field>

        <Field label={LAST_NAME} error={errors?.lastName}>
          <Input
            {...register(LAST_NAME, {
              required: 'Last name is required',
            })}
          />
        </Field>

        <Field label={EMAIL} error={errors?.email}>
          <Input
            {...register(EMAIL, { required: 'Email is required' })}
            type='email'
          />
        </Field>

        <Button position='right'>Next {'>'}</Button>
      </fieldset>
    </Form>
  );
}
