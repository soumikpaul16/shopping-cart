import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Form } from '../../organisms';
import metadata from './metadata.json';

const regex = {
  email: {
    value:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: 'Invalid email!',
  },
  password: {
    value: /^[a-zA-Z0-9@]+$/,
    message: 'Use @ or alphanumeric characters.',
  },
};

const SignIn = () => {
  const handleSubmit = (values) => {
    console.log('values', values);
  };
  //   const formElements = metadata.signIn;
  const signIn = metadata?.signIn;

  const formContent = {
    title: <FormattedMessage id={signIn?.title?.id} />,
    description: <FormattedMessage id={signIn?.description?.id} />,
    submitBtn: <FormattedMessage id={signIn?.submitBtn?.id} />,
  };

  const formElements = signIn?.elements?.map(
    ({
      id, label, placeholder, type,
    }) => ({
      id,
      placeholder,
      type,
      regex: regex[id],
      label: <FormattedMessage id={label} />,
    }),
  );

  return (
    <>
      <Form
        formElements={formElements}
        formContent={formContent}
        onSubmit={handleSubmit}
      />
    </>
  );
};

SignIn.propTypes = {};
SignIn.defaultProps = {};

export default SignIn;
