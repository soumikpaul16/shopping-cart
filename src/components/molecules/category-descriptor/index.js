import { PropTypes } from 'prop-types';
import React from 'react';
import { Button } from '../../atoms';
import './CategoryDescriptor.scss';

const CategoryDescriptor = ({
  name,
  description,
  buttonContent,
  redirectPath,
}) => (
  <div className="description">
    <h4 className="description__name">{name}</h4>
    <p className="description__content">{description}</p>
    <Button className="description__button">{`Explore ${buttonContent}`}</Button>
  </div>
);

CategoryDescriptor.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  buttonContent: PropTypes.string,
  redirectPath: PropTypes.string,
};
CategoryDescriptor.defaultProps = {
  name: '',
  description: '',
  buttonContent: '',
  redirectPath: '',
};

export default CategoryDescriptor;
