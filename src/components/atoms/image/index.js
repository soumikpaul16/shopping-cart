import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const propTypes = {
  /**
   * @default 'img'
   */
  /**
   * Sets classnames of the image .
   */
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ className, ...props }) => <img {...props} className={classNames(className)} />;

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
