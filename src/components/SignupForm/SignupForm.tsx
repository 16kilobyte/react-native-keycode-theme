import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, withStyles, Button } from 'react-native-ui-kitten';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik, FormikProps } from 'formik';

import { validationSchema, initialValues } from '../../utils';
import i18n from '../../i18n';

import FormInput from '../FormInput';
import { SignupFormProps, SignupFormValues } from './interfaces';
import styles from './styles';

class SignupForm extends Component<SignupFormProps> {
  public render() {
    const { onSubmit, themedStyle } = this.props;

    return (
      <View style={themedStyle.container}>
        <Text category="h1" style={themedStyle.title}>
          {i18n.t('signUp.title')}
        </Text>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={values => onSubmit(values)}
          render={(props: FormikProps<SignupFormValues>) => (
            <KeyboardAwareScrollView enableOnAndroid={true}>
              <View style={themedStyle.nameInputContainer}>
                <View style={themedStyle.firstNameInputContainer}>
                  <FormInput
                    label={i18n.t('signUp.name')}
                    value={props.values.firstName}
                    placeholder={i18n.t('signUp.first')}
                    hasError={this.handleFieldHasError('firstName', props)}
                    errorText={props.errors.firstName}
                    onChangeText={text =>
                      props.setFieldValue('firstName', text)
                    }
                  />
                </View>

                <View style={themedStyle.lastNameInputContainer}>
                  <FormInput
                    value={props.values.lastName}
                    placeholder={i18n.t('signUp.last')}
                    hasError={this.handleFieldHasError('lastName', props)}
                    errorText={props.errors.lastName}
                    onChangeText={text => props.setFieldValue('lastName', text)}
                  />
                </View>
              </View>

              <FormInput
                label={i18n.t('signUp.email')}
                value={props.values.email}
                hasError={this.handleFieldHasError('email', props)}
                errorText={props.errors.email}
                keyboardType="email-address"
                onChangeText={text => props.setFieldValue('email', text)}
              />

              <FormInput
                isSecure={true}
                label={i18n.t('signUp.password')}
                value={props.values.password}
                hasError={this.handleFieldHasError('password', props)}
                errorText={props.errors.password}
                onChangeText={text => props.setFieldValue('password', text)}
              />

              <FormInput
                isSecure={true}
                label={i18n.t('signUp.confirmPassword')}
                value={props.values.confirmPassword}
                hasError={this.handleFieldHasError('confirmPassword', props)}
                errorText={props.errors.confirmPassword}
                onChangeText={text =>
                  props.setFieldValue('confirmPassword', text)
                }
              />

              <Button
                style={themedStyle.buttonContainer}
                textStyle={themedStyle.buttonText}
                onPress={() => props.handleSubmit()}
              >
                {i18n.t('signUp.next')}
              </Button>
            </KeyboardAwareScrollView>
          )}
        />
      </View>
    );
  }

  private handleFieldHasError(fieldName: string, props: FormikProps<SignupFormValues>): boolean {
    return Boolean(props.errors[fieldName] && props.touched[fieldName]);
  }
}

export default withStyles(SignupForm, styles);
