import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <FormattedMessage id="footer.copyright" />
    {' © '}
    <FormattedMessage id="footer.message" />
  </footer>
);

export default Footer;
