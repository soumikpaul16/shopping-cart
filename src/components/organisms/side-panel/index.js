import PropTypes from 'prop-types';
import React from 'react';
import { RouteLink } from '../../atoms';
import './SidePanel.scss';

const SidePanel = ({ links }) => (
  <aside className="side-panel__links">
    <div className="side-panel__links--fixed">
      {links.map((link) => (
        <RouteLink
          key={link.id}
          className="side-panel__links__item"
          path={link.path}
        >
          {link.name}
        </RouteLink>
      ))}
    </div>
  </aside>
);

SidePanel.propTypes = {
  links: PropTypes.array,
};

SidePanel.defaultProps = {
  links: [],
};

export default SidePanel;
