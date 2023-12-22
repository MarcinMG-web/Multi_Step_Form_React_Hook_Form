import IFormData from '../interfaces/formInterface';
import HttpMethod from '../types/types';

/**
 * Config
 */

const url = process.env.REACT_APP_API_URL;

const configFetch = <T>(method: HttpMethod, data?: T) => ({
  method,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});

/**
 * Request
 */

const submitForm = async (formValues: IFormData) => {
  try {
    return await fetch(
      `${url}/api/register`,
      configFetch('POST', formValues)
    ).then((data) => data);
  } catch (error) {
    throw new Error(error as string);
  }
};

export default submitForm;
