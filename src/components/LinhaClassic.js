import React from 'react';
import { Link } from 'react-router-dom';

import classicCp from '../assets/menu-classic-cp.jpg';
import classicFx from '../assets/menu-classic-fx.jpg';
import classicRb from '../assets/menu-classic-rb.jpg';
import classicRbc from '../assets/menu-classic-rbc.jpg';
import classicTr from '../assets/menu-classic-tr.jpg';

export default function LinhaClassic() {

  return (
    <>
      <li className="dropdown nav-item">
        Linha Classic
      <div className="dropdown-content">
          <ul>
            <li className="dropdown-image">
              <Link to="classic-cp">
                <img src={classicCp} alt="Classic Cp" />
              </Link>
            </li>
            <li className="dropdown-image">
              <Link to="classic-fx">
                <img src={classicFx} alt="Classic Fx" />
              </Link>
            </li>
            <li className="dropdown-image">
              <Link to="classic-rb">
                <img src={classicRb} alt="Classic Rb" />
              </Link>
            </li>
            <li className="dropdown-image">
              <Link to="classic-rbc">
                <img src={classicRbc} alt="Classic Rbc" />
              </Link>
            </li>
            <li className="dropdown-image">
              <Link to="classic-tr">
                <img src={classicTr} alt="Force Tr" />
              </Link>
            </li>
          </ul>
        </div>
      </li> |
    </>
  );
}