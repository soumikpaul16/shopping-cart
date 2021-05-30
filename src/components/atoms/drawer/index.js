import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import './Drawer.scss';

const modalNode = document.getElementById('modal');

const Drawer = ({
  children, isOpen, overlay, className,
}) => (isOpen === true
  ? ReactDOM.createPortal(
    <div className="drawer">
      {overlay ? <div className="drawer__overlay" /> : null}
      <div className={classNames(className, 'drawer__content')}>
        {children}
      </div>
    </div>,
    modalNode,
  )
  : null);

Drawer.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  overlay: PropTypes.bool,
};
Drawer.defaultProps = {
  children: <></>,
  className: '',
  isOpen: false,
  overlay: true,
};

export default Drawer;
