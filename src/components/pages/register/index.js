import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Form } from '../../organisms';
import metadata from './metadata.json';

const Register = () => {
  const handleSubmit = (values) => {
    console.log('values', values);
  };
  //   const formElements = metadata.register;
  const register = metadata?.register;

  const formContent = {
    title: <FormattedMessage id={register?.title?.id} />,
    description: <FormattedMessage id={register?.description?.id} />,
    submitBtn: <FormattedMessage id={register?.submitBtn?.id} />,
  };

  const formElements = register?.elements?.map(
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

Register.propTypes = {};
Register.defaultProps = {};

export default Register;
