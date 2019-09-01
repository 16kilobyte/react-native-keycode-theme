import React from 'react';

import SafeArea from '../../components/SafeArea';
import SignupForm from '../../components/SignupForm';

import { SignupProps } from './type';

class Signup extends React.Component<SignupProps> {
  constructor(props: SignupProps) {
    super(props);
  }

  public static navigationOptions = {
    header: null,
  };

  public render() {
    return (
      <SafeArea>
        <SignupForm onSubmit={this.submitForm} />
      </SafeArea>
    );
  }

  private submitForm = (values: any) => {
    const { navigation } = this.props;
    navigation.navigate('Rooms');
  }
}

export default Signup;
