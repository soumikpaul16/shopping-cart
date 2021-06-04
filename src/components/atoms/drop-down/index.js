import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../button';
import './DropDown.scss';

const DropDown = ({
  selectedValue, handleChange, items, onlyMobile,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={classNames(
        { 'select__container--hide': onlyMobile },
        'select__container',
      )}
    >
      <Button
        aria-expanded={isExpanded}
        className="select__button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>{items.find((item) => item.id === selectedValue).name}</span>
        <i className="select__button--arrow-down" />
      </Button>
      {isExpanded && (
        <ul className="select__menu" role="menu">
          {items.map((item) => (
            <li key={item.id} role="menuitem">
              <Button
                className="select__button select__menu-item"
                value={item.id}
                onClick={(e) => {
                  setIsExpanded(false);
                  handleChange(e);
                }}
              >
                {item.name}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

DropDown.propTypes = {
  items: PropTypes.array,
  selectedValue: PropTypes.string,
  handleChange: PropTypes.func,
  onlyMobile: PropTypes.bool,
};

DropDown.defaultProps = {
  selectedValue: '',
  items: [],
  handleChange: () => {},
  onlyMobile: true,
};

export default DropDown;
