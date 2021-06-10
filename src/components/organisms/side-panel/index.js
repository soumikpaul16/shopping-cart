import PropTypes from 'prop-types';
import React from 'react';
import { RouteLink } from '../../atoms';
import './SidePanel.scss';

const SidePanel = ({ links }) => (
  <aside className="side-panel__links">
    <ul className="side-panel__links__list side-panel__links--fixed">
      {links.map((link) => (
        <li key={link.id}>
          <RouteLink className="side-panel__links__item" path={link.path}>
            {link.name}
          </RouteLink>
        </li>
      ))}
    </ul>
  </aside>
);

SidePanel.propTypes = {
  links: PropTypes.array,
};

SidePanel.defaultProps = {
  links: [],
};

export default SidePanel;
