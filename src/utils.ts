import * as yup from 'yup';

import { Room } from "./types/common";
import { images } from "./theme";

/*
 * Calculate number of rows that will be displayed
 * Then add blank data (if necessary) to compensate for empty views
 */
export function formatListData(data: Room[], numColumns: number) {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({
      key: `blank-${numberOfElementsLastRow}`,
      empty: true,
      title: '',
      icon: images.bathtub,
    });
    numberOfElementsLastRow++;
  }

  return data;
}

export const validationSchema = yup.object().shape({
  firstName: yup.string().required('first name is required'),
  lastName: yup.string().required('last name is required'),
  email: yup
    .string()
    .required('email is required')
    .email('email must be valid'),
  password: yup.string().required('password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'passwords must match'),
});

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
