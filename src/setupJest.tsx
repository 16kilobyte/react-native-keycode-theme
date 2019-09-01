import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';

// tslint:disable-next-line: no-implicit-dependencies
import 'jest';

jest.mock('react-native-localize', () => ({ default: { language: 'en' } }));

export const ApplicationProviderMock: React.FC = ({ children }) => {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      {children}
    </ApplicationProvider>
  );
};
