import { ThemedComponentProps } from 'react-native-ui-kitten';

export interface SignupFormProps extends ThemedComponentProps {
  onSubmit: (values: any) => void;
}

export interface SignupFormValues {
  [key: string]: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
