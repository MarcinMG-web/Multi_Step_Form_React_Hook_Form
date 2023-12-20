import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAppState } from '../GlobalState/AppState';
import { Button, Field, Form, Input } from '../FormWrapper';

interface EducationValues {
  university: string;
  degree: string;
}

export default function Education(): JSX.Element {
  const {
    state: { formValues },
    dispatch,
  } = useAppState();

  const { handleSubmit, register } = useForm({ defaultValues: formValues });
  const navigate = useNavigate();

  const saveData = (pageValues: EducationValues) => {
    dispatch({
      type: 'UPDATE_FORM_VALUES',
      payload: { ...formValues, ...pageValues },
    });
    navigate('/about');
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Education</legend>
        <Field label='University'>
          <Input {...register('university')} />
        </Field>

        <Field label='Degree'>
          <Input {...register('degree')} />
        </Field>

        <div className='button-row'>
          <Link className={`btn btn-secondary`} to='/'>
            {'<'} Previous
          </Link>
          <Button>Next {'>'}</Button>
        </div>
      </fieldset>
    </Form>
  );
}