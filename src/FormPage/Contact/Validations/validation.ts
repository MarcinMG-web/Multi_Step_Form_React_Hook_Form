export const firstNameRules = {
  required: 'First name is required',
  minLength: {
    value: 3,
    message: 'First name must be at least 3 characters long',
  },
};

export const lastNameRules = {
  required: 'Last name is required',
  minLength: {
    value: 3,
    message: 'Last name must be at least 3 characters long',
  },
};

export const emailRules = {
  required: 'Email is required',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Invalid email address',
  },
};
