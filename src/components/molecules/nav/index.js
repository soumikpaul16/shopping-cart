import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteLink } from '../../atoms';

const Nav = ({ className, navElements }) => (
  <nav className={className}>
    {navElements.map((element) => (
      <RouteLink
        path={element.path}
        key={element.id}
        className={classNames(element.className)}
      >
        <FormattedMessage id={element.id} />
      </RouteLink>
    ))}
  </nav>
);

Nav.propTypes = {
  className: PropTypes.string,
  navElements: PropTypes.array,
};
Nav.defaultProps = {
  className: '',
  navElements: [],
};

export default Nav;
