import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteLink } from '../../atoms';

export const propTypes = {
  className: PropTypes.string,
  navElements: PropTypes.array,
};

const defaultProps = {
  className: '',
  navElements: [],
};

const Nav = ({ className, navElements }) => (
  <nav className={className}>
    {/* todo replace span with link as an atom to pass the page path */}
    {navElements.map((element) => (
      <RouteLink path={element.path} key={element.id} className={classNames(element.className)}>
        <FormattedMessage id={element.id} />
      </RouteLink>
    ))}
  </nav>
);

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
