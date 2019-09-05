import React from 'react';
import { Link } from 'react-router-dom';

import forceRb from '../assets/menu-force-rb.jpg';
import forceTc from '../assets/menu-force-tc.jpg';
import forceTr from '../assets/menu-force-tr.jpg';

export default function LinhaForce() {

  return (
    <>
      <li className="dropdown nav-item">
        Linha Force
      <div className="dropdown-content">
          <ul>
            <li className="dropdown-image">
              <Link to="force-rb">
                <img src={forceRb} alt="Force Rb" />
              </Link>
            </li>
            <li className="dropdown-image">
              <Link to="force-tc">
                <img src={forceTc} alt="Force Tc" />
              </Link>
            </li>
            <li className="dropdown-image">
              <Link to="force-tr">
                <img src={forceTr} alt="Force Tr" />
              </Link>
            </li>
          </ul>
        </div>
      </li> |
    </>
  );
}