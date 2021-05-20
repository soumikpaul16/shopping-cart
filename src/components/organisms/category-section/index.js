import React from 'react';
import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import './CategorySection.scss';
import { Image } from '../../atoms';
import { CategoryDescriptor } from '../../molecules';

const CategorySection = ({
  reverseContent,
  imageUrl,
  name,
  description,
  buttonContent,
  redirectPath,
}) => (
  <div
    className={classNames(
      reverseContent ? 'category--reverse' : '',
      'category',
    )}
  >
    <div className="category__image__wrapper">
      <Image src={imageUrl} alt={`this is an image of ${name}`} />
    </div>
    <CategoryDescriptor
      name={name}
      buttonContent={buttonContent}
      description={description}
      redirectPath={redirectPath}
    />
  </div>
);

CategorySection.propTypes = {
  reverseContent: PropTypes.bool,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  buttonContent: PropTypes.string,
  redirectPath: PropTypes.string,
};
CategorySection.defaultProps = {
  reverseContent: false,
  imageUrl: '',
  name: '',
  description: '',
  buttonContent: '',
  redirectPath: '',
};

export default CategorySection;
