// State
export interface State {
  loading: boolean;
  formValues: {
    firstName: string;
    lastName: string;
    email: string;
    university: string;
    degree: string;
    about: string;
  };
}
