import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAppState } from '../../GlobalState/AppState';
import { Button, Form, TextareaField } from '../../FormWrapper';
import EInputName from '../../Enums/formEnum';

interface AboutValues {
  about: string;
}

export default function About(): JSX.Element {
  const {
    state: { formValues },
    dispatch,
  } = useAppState();

  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: formValues });

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
      <legend>About</legend>

      <TextareaField
        label='About'
        name={ABOUT}
        control={control}
        rules={{ required: 'About is required' }}
        errors={errors.about}
      />

      <div className='button-row'>
        <Link className={`btn btn-secondary`} to='/education'>
          {'<'} Previous
        </Link>
        <Button>Next {'>'}</Button>
      </div>
    </Form>
  );
}
