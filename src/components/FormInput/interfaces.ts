import { KeyboardTypeOptions } from 'react-native';
import { ThemedComponentProps } from 'react-native-ui-kitten';

export interface FormInputProps extends ThemedComponentProps {
  label?: string;
  value: string;
  isSecure?: boolean;
  hasError?: boolean;
  errorText?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText: (text: string) => void;
}
