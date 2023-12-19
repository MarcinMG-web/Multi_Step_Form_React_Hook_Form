import { State } from './Interface';

// Initial State
export const initialState: State = {
  loading: false,
  formValues: {
    firstName: '',
    lastName: '',
    email: '',
    university: '',
    degree: '',
    about: '',
  },
};

// Actions
export type Action =
  | { type: 'SET_LOADING'; payload: boolean }
  | {
      type: 'UPDATE_FORM_VALUES';
      payload: {
        firstName: string;
        lastName: string;
        email: string;
        university: string;
        degree: string;
        about: string;
      };
    };

export type Dispatch = (action: Action) => void;
