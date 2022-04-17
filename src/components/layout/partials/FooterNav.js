import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="mailto:imaniblooms@gmail.com">Contact Us</a>
        </li>
        <li>
          <Link to="/about">About Imani</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;