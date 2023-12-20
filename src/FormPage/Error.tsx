import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Error(): JSX.Element {
  return (
    <div className='container d-flex align-items-center justify-content-center vh-100'>
      <div className='text-center'>
        <p>Unfortunately something went wrong!</p>
        <FaTimes size={50} color='red' />

        <p>Try again later</p>

        <Link className={`btn btn-primary`} to='/'>
          Try again !
        </Link>
      </div>
    </div>
  );
}
