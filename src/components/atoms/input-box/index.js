import PropTypes from 'prop-types';
import React from 'react';
import './InputBox.scss';

const InputBox = ({
  label, type, id, onChange, value, error, ...props
}) => (
  <div className="input__wrap">
    <span className="input__error">{error}</span>
    <input
      className="input__box"
      type={type}
      name={id}
      id={id}
      onChange={onChange}
      value={value}
      autoComplete="off"
      {...props}
    />
    <label className="input__label" htmlFor={id}>
      {label}
    </label>
  </div>
);

InputBox.propTypes = {
  label: PropTypes.element,
  type: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};
InputBox.defaultProps = {
  label: '',
  type: '',
  value: '',
  id: '',
  error: '',
  onChange: () => {},
};

export default InputBox;
