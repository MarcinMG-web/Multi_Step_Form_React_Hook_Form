import { MdCheckCircle } from 'react-icons/md';

export default function FinalStep(): JSX.Element {
  return (
    <div className='container d-flex align-items-center justify-content-center vh-100'>
      <div className='text-center'>
        <p>Congratulations your application has been sent successfully!</p>
        <p>We'll be back soon with more steps.</p>

        <MdCheckCircle size={50} color='green' />
      </div>
    </div>
  );
}
