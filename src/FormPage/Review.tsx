import { useForm } from 'react-hook-form';
import { useAppState } from '../GlobalState/AppState';

import { Button, Form, Section, SectionRow } from '../FormWrapper';

import { useNavigate } from 'react-router-dom';
import IFormData from '../Interfaces/formInterface';

export default function Review(): JSX.Element {
  const {
    state: { formValues },
  } = useAppState();
  const { handleSubmit } = useForm({ defaultValues: formValues });

  const navigate = useNavigate();
  const submitData = (pageValues: IFormData) => {
    // Submit data to the server
    console.info(pageValues);

    // navigate('/success');
    navigate('/error');
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
