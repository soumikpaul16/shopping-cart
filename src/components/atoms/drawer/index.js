import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useFocusTrap } from '../../../utils';
import './Drawer.scss';

const modalNode = document.getElementById('modal');

const Drawer = ({
  children, isOpen, overlay, className,
}) => {
  const ref = useRef(null);
  const setElRef = useFocusTrap(null);

  useEffect(() => {
    if (isOpen) {
      setElRef(ref);
      document.body.style.overflow = 'hidden';
    } else {
      setElRef(null);
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return isOpen === true
    ? createPortal(
      <div className="drawer" ref={ref}>
        {overlay ? <div className="drawer__overlay" /> : null}
        <div className={classNames(className, 'drawer__content')}>
          {children}
        </div>
      </div>,
      modalNode,
    )
    : null;
};

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
