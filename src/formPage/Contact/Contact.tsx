import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button, InputField, Form } from '../../formWrapper';
import { useAppState } from '../../globalState/AppState';
import EInputName from '../../enums/formEnum';
import {
  emailRules,
  firstNameRules,
  lastNameRules,
} from './Validations/validation';

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

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formValues, mode: 'onSubmit' });

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
      <legend>Contact</legend>

      <InputField
        label='First Name'
        name={FIRST_NAME}
        control={control}
        rules={firstNameRules}
        errors={errors.firstName}
      />

      <InputField
        label='Last Name'
        name={LAST_NAME}
        control={control}
        rules={lastNameRules}
        errors={errors.lastName}
      />

      <InputField
        label='Email'
        name={EMAIL}
        type='email'
        control={control}
        rules={emailRules}
        errors={errors.email}
      />

      <Button position='right'>Next {'>'}</Button>
    </Form>
  );
}
