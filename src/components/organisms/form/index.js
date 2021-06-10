import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, InputBox } from '../../atoms';
import './Form.scss';

const Form = ({ formContent, formElements, onSubmit }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = (event, elementId, regex) => {
    const { value } = event.target;
    const formValues = { ...values };
    const formErrors = { ...errors };

    switch (true) {
      case !value: // empty
        formErrors[elementId] = 'This field cannot be empty';
        break;
      case !regex.value.test(value): // regex failure
        formErrors[elementId] = regex.message;
        break;
      case (elementId === 'confirm-password'
        && value !== formValues.password)
        || (elementId === 'password'
          && formValues['confirm-password']
          && value !== formValues['confirm-password']): // check if passwords are same
        formErrors['confirm-password'] = 'Passwords must be same.';
        break;
      case elementId === 'password' && value === formValues['confirm-password']: // extra check when both passwords match
        formErrors['confirm-password'] = '';
        formErrors.password = '';
        break;
      default:
        formErrors[elementId] = '';
    }
    formValues[elementId] = value;
    setValues(formValues);
    setErrors(formErrors);
  };

  return (
    <form className="form">
      <div className="form__title">
        <h2>{formContent.title}</h2>
        <p>{formContent.description}</p>
      </div>
      <div className="form__fields">
        {formElements.map((element) => (
          <>
            <InputBox
              key={element.id}
              id={element.id}
              label={element.label}
              placeholder={element.placeholder}
              type={element.type}
              value={values[element.id]}
              error={errors[element.id]}
              onChange={(e) => {
                onChange(e, element.id, element.regex);
              }}
              onBlur={(e) => !e.target.value && onChange(e, element.id, element.regex)}
            />
          </>
        ))}
        <Button
          className="form__button"
          disabled={
            !(
              Object.values(errors).every((e) => e === '')
              && Object.values(values).length === formElements.length
            )
          }
          onClick={(e) => {
            e.preventDefault();
            onSubmit(values);
          }}
        >
          {formContent.submitBtn}
        </Button>
      </div>
    </form>
  );
};

Form.propTypes = {
  formElements: PropTypes.array,
  formContent: PropTypes.object,
  onSubmit: PropTypes.func,
};
Form.defaultProps = {
  formElements: [],
  formContent: {},
  onSubmit: () => {},
};

export default Form;
