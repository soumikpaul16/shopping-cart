import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Form } from '../../organisms';
import metadata from './metadata.json';

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
