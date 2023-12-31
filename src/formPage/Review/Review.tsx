import { useForm } from 'react-hook-form';
import { useAppState } from '../../globalState/AppState';

import { Button, Form, Section, SectionRow } from '../../formWrapper';

import { useNavigate } from 'react-router-dom';
import IFormData from '../../interfaces/formInterface';
import submitForm from '../../services/apiServices';

export default function Review(): JSX.Element {
  const {
    state: { formValues },
  } = useAppState();
  const { handleSubmit } = useForm({ defaultValues: formValues });

  const navigate = useNavigate();
  const submitData = async (pageValues: IFormData) => {
    const { status } = await submitForm(pageValues);

    if (status !== 200) {
      navigate('/error');
    } else {
      navigate('/success');
    }
  };

  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <h1 className='mb-4'>Review</h1>
      <Section title='Personal info' url='/'>
        <SectionRow>
          <div>First name</div>
          <div>{formValues.firstName}</div>
        </SectionRow>
        <SectionRow>
          <div>Last name</div>
          <div>{formValues.lastName}</div>
        </SectionRow>
        <SectionRow>
          <div>Email</div>
          <div>{formValues.email}</div>
        </SectionRow>
      </Section>

      <Section title='Education' url='/education'>
        <SectionRow>
          <div>University</div>
          <div>{formValues.university}</div>
        </SectionRow>
        <SectionRow>
          <div>Degree</div>
          <div>{formValues.degree}</div>
        </SectionRow>
      </Section>

      <Section title='About' url='/about'>
        <SectionRow>
          <div>About me</div>
          <div>{formValues.about}</div>
        </SectionRow>
      </Section>

      <div className='d-flex justify-content-start'>
        <Button position='center'>Submit</Button>
      </div>
    </Form>
  );
}
