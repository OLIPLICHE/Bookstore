import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Books',
  },
  {
    id: 2,
    path: '/categories',
    text: 'Categories',
  },
];

const Header = () => (
  <header>
    <h4>BookShop Paka</h4>
    <nav>
      <ul className="nav-ul">
        {links.map((link) => (
          <li key={link.id}>
            <Link className="nav-a" to={link.path}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
