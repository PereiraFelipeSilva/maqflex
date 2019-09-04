import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import maqFlexLogo from '../assets/maqflexlogo.jpg';
import homeIcon from '../assets/home-link.jpg';
import seloDesde from '../assets/selo-desde.jpg';
import wppLogo from '../assets/wpp-logo.png';

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
              <li> <img src={homeIcon} alt="home-icon" /> </li> |
              <li>Empresa</li> |
              <li>Linha Force</li> |
              <li>Linha Classic</li> |
              <li>Acessórios</li> |
              <li>Assistência</li> |
              <li>Retrofit</li> |
              <li>Contato</li> |
            </ul>
            <span>
              2605 5057 | 2605 8777 |
              <a className="wpp-send" href="https://api.whatsapp.com/send?phone=5511957196691">
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