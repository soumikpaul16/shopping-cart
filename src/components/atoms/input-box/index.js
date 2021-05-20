import PropTypes from 'prop-types';
import React from 'react';
import './InputBox.scss';

const InputBox = ({
  label, type, id, onChange, value, ...props
}) => (
  <div className="input__wrap">
    {/* error field will be added later */}
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
  onChange: PropTypes.func,
};
InputBox.defaultProps = {
  label: '',
  type: '',
  value: '',
  id: '',
  onChange: () => {},
};

export default InputBox;
