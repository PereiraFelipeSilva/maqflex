import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import maqFlexLogo from '../assets/maqflexlogo.jpg';
import homeIcon from '../assets/home-link.jpg';
import seloDesde from '../assets/selo-desde.jpg';
import wppLogo from '../assets/wpp-logo.png';

import LinhaForce from './LinhaForce';
import LinhaClassic from './LinhaClassic';

export default function Header() {

  return (
    <>
      <header>
        <div>
          <Link to="/">
            <img src={maqFlexLogo} alt="Logo MaqFlex" className="logo-maqflex" />
          </Link>
        </div>
        <div className="div-nav">
          <nav>
            <ul>
              <li className="nav-item"> <img src={homeIcon} alt="home-icon" /> </li> |
              <li className="nav-item"> <Link to="/empresa"> Empresa </Link> </li> |
              <LinhaForce />
              <LinhaClassic />
              <li className="nav-item"> <Link to="acessorios"> Acessórios </Link> </li> |
              <li className="nav-item"> <Link to="assistencia"> Assistência </Link> </li> |
              <li className="nav-item"> <Link to="retrofit"> Retrofit </Link> </li> |
              <li className="nav-item"> <Link to="contato"> Contato </Link> </li> |
            </ul>
            <span>
              2605 5057 | 2605 8777 |
              <a className="wpp-send" href="https://api.whatsapp.com/send?phone=5511957196691" target="_blank" rel="noopener noreferrer">
                (11) 95719-6691
              </a>
              <img className="wpp-image" src={wppLogo} alt="whatsapp" />
            </span>
          </nav>
        </div>
        <div>
          <img src={seloDesde} alt="Desde 1984" />
        </div>
      </header>
    </>
  );
}