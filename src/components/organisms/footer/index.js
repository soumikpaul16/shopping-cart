import React from 'react';
import { FormattedMessage } from 'react-intl';
import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <FormattedMessage id="footer.copyright" />
      {' © '}
      <FormattedMessage id="footer.message" />
    </div>
  </footer>
);

export default Footer;
