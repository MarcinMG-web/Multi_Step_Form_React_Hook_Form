import { useForm } from 'react-hook-form';
import { useAppState } from '../globalState/AppState';

import { Button, Form, Section, SectionRow } from '../Forms';
import { State } from '../globalState/Interface';

export default function Confirm() {
  const {
    state: { formValues },
  } = useAppState();
  const { handleSubmit } = useForm({ defaultValues: formValues });

  const submitData = (pageValues: State['formValues']) => {
    console.info(pageValues);
    // Submit data to the server
  };

  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <h1 className='mb-4'>Confirm</h1>
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
        <Button>Submit</Button>
      </div>
    </Form>
  );
}