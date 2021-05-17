import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, InputBox } from '../../atoms';
import './Form.scss';

const Form = ({ formContent, formElements, onSubmit }) => {
  const [values, setValues] = useState({});
  const onChange = (event, elementId) => {
    const { value } = event.target;
    const formValues = { ...values };
    formValues[elementId] = value;
    setValues(formValues);
  };
  return (
    <form className="form">
      <div className="form__title">
        <h2>{formContent.title}</h2>
        <p>{formContent.description}</p>
      </div>
      <div className="form__fields">
        {formElements.map((element) => (
          <InputBox
            key={element.id}
            id={element.id}
            label={element.label}
            placeholder={element.placeholder}
            type={element.type}
            value={values[element.id]}
            onChange={(e) => onChange(e, element.id)}
          />
        ))}
        <Button
          className="form__button"
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
