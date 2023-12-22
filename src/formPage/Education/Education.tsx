import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAppState } from '../../globalState/AppState';
import { Button, Form, SelectField } from '../../formWrapper';
import EInputName from '../../enums/formEnum';
import { degreeOptions, universityOption } from './utils/options';
import { degreeRules, universityRules } from './Validations/validation';

interface EducationValues {
  university: string;
  degree: string;
}

export default function Education(): JSX.Element {
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

  const saveData = (pageValues: EducationValues) => {
    dispatch({
      type: 'UPDATE_FORM_VALUES',
      payload: { ...formValues, ...pageValues },
    });
    navigate('/about');
  };

  const { UNIVERSITY, DEGREE } = EInputName;

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <legend>Education</legend>

      <SelectField
        label='University'
        name={UNIVERSITY}
        control={control}
        options={universityOption}
        rules={universityRules}
        errors={errors.university}
      />

      <SelectField
        label='Degree'
        name={DEGREE}
        control={control}
        options={degreeOptions}
        rules={degreeRules}
        errors={errors.degree}
      />

      <div className='button-row'>
        <Link className={`btn btn-secondary`} to='/'>
          {'<'} Previous
        </Link>
        <Button>Next {'>'}</Button>
      </div>
    </Form>
  );
}
