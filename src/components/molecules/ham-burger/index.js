import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from '../../atoms';
import './HamBurger.scss';

const HamBurger = ({ items, handleMenuBar, isMenuOpen }) => (
  <>
    <div
      className={classNames('header__mobile-menubar', {
        'header__mobile-menubar--open': isMenuOpen,
      })}
    >
      {items.map((element, index) => (
        <Button
          key={`${element + index}`}
          onClick={() => handleMenuBar(false, `/${element.path}`)}
          className={classNames('header__mobile-menuitem', {
            'header__mobile-menuitem--open': isMenuOpen,
          })}
        >
          <FormattedMessage id={element.id} />
        </Button>
      ))}
    </div>
    <Button
      className="header__mobile-hamburger"
      onClick={() => handleMenuBar(!isMenuOpen)}
    >
      <span
        className={classNames('header__mobile-hamburger__icon', {
          'header__mobile-hamburger__icon--open': isMenuOpen,
        })}
      />
      <span
        className={classNames('header__mobile-hamburger__icon', {
          'header__mobile-hamburger__icon--open': isMenuOpen,
        })}
      />
      <span
        className={classNames('header__mobile-hamburger__icon', {
          'header__mobile-hamburger__icon--open': isMenuOpen,
        })}
      />
    </Button>
  </>
);

HamBurger.propTypes = {
  items: PropTypes.array,
  handleMenuBar: PropTypes.func,
  isMenuOpen: PropTypes.bool,
};
HamBurger.defaultProps = {
  items: [],
  handleMenuBar: () => {},
  isMenuOpen: false,
};

export default HamBurger;
