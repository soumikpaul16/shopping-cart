import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Image = ({
  className, alt, src, ...props
}) => (
  <img alt={alt} src={src} className={classNames(className)} {...props} />
);

Image.propTypes = {
  /**
   * @default 'img'
   */
  /**
   * Sets classnames of the image .
   */
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};
Image.defaultProps = {
  className: '',
  src: '',
  alt: '',
};

export default Image;
