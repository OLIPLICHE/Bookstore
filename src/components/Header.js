import React from 'react';
import { Link } from 'react-router-dom';

import { RiUser3Fill } from 'react-icons/ri';

const links = [
  {
    id: 1,
    path: '/',
    text: 'BOOKS',
    class: 'header__nav-a',
  },
  {
    id: 2,
    path: '/categories',
    text: 'CATEGORIES',
    class: 'header__nav-a header__nav-a--light',
  },
];

const Header = () => (
  <header className="header container-header">
    <div className="header__left">
      <Link to="/" className="header__logo">
        Bookstore CMS
      </Link>
      <nav className="header__nav">
        <ul className="header__nav-ul">
          {links.map((link) => (
            <li className="header__nav-li" key={link.id}>
              <Link className={link.class} to={link.path}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    <button type="button" className="header__btn">
      <RiUser3Fill size="1.063rem" />
    </button>
  </header>
);

export default Header;
