import { PropTypes } from 'prop-types';
import React from 'react';
import { RouteLink } from '../../atoms';
import './CategoryDescriptor.scss';

const CategoryDescriptor = ({
  name,
  description,
  buttonContent,
  redirectPath,
}) => (
  <div className="category__description">
    <h4 className="category__description__name">{name}</h4>
    <p className="category__description__content">{description}</p>
    <RouteLink className="category__description__link" path={redirectPath}>
      {`Explore ${buttonContent}`}
    </RouteLink>
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
