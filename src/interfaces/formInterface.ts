import EInputName from '../enums/formEnum';

interface IFormData {
  [EInputName.FIRST_NAME]: string;
  [EInputName.LAST_NAME]: string;
  [EInputName.EMAIL]: string;
  [EInputName.UNIVERSITY]: string;
  [EInputName.DEGREE]: string;
  [EInputName.ABOUT]: string;
}

export default IFormData;
