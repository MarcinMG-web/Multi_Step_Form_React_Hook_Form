import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAppState } from '../GlobalState/AppState';
import { Button, Field, Form } from '../FormWrapper';
import EInputName from '../Enums/formEnum';

interface AboutValues {
  about: string;
}

export default function About(): JSX.Element {
  const {
    state: { formValues },
    dispatch,
  } = useAppState();

  const { handleSubmit, register } = useForm({ defaultValues: formValues });
  const navigate = useNavigate();

  const saveData = (pageValues: AboutValues) => {
    dispatch({
      type: 'UPDATE_FORM_VALUES',
      payload: { ...formValues, ...pageValues },
    });
    navigate('/confirm');
  };

  const { ABOUT } = EInputName;

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>About</legend>
        <Field label={ABOUT}>
          <textarea {...register(ABOUT)} className='form-control' />
        </Field>

        <div className='button-row'>
          <Link className={`btn btn-secondary`} to='/education'>
            {'<'} Previous
          </Link>
          <Button>Next {'>'}</Button>
        </div>
      </fieldset>
    </Form>
  );
}
