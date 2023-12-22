// Reducer to Handle Actions

import { State } from './Interface';
import { Action } from './InitialStateAndActions';

export const appReducer = (state: State, action: Action): State => {
  const { type } = action;

  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    case 'UPDATE_FORM_VALUES':
      return {
        ...state,
        formValues: action.payload,
      };

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};
