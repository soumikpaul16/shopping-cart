import PropTypes from 'prop-types';
import React from 'react';
import './DropDown.scss';
import classNames from 'classnames';

const DropDown = ({
  selectedValue, handleChange, options, onlyMobile,
}) => (
  <div
    className={classNames(
      { 'select__container--hide': onlyMobile },
      'select__container',
    )}
  >
    <select
      className="select__option"
      value={selectedValue}
      onChange={handleChange}
    >
      {options.map((option) => (
        <option
          role="link"
          aria-label={`${option.name} link`}
          key={option.id}
          value={option.id}
        >
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

DropDown.propTypes = {
  options: PropTypes.array,
  selectedValue: PropTypes.string,
  handleChange: PropTypes.func,
  onlyMobile: PropTypes.bool,
};

DropDown.defaultProps = {
  selectedValue: '',
  options: [],
  handleChange: () => {},
  onlyMobile: true,
};

export default DropDown;
