import React from 'react';
import { Link } from 'react-router-dom';
import seloDesde from '../assets/selo-desde-g.png';
import '../css/Footer.css';

export default function Footer() {

  return (
    <>
      <footer >
        <div className="div-footer-1" >
          <nav>
            <ul>
              <li className="nav-item"> <Link to="/empresa"> A MaqFlex </Link> </li> |
              <li className="nav-item"> <Link to="acessorios"> Acessórios </Link> </li> |
              <li className="nav-item"> <Link to="assistencia"> Assistência </Link> </li> |
              <li className="nav-item"> <Link to="retrofit"> Retrofit </Link> </li> |
              <li className="nav-item"> <Link to="contato"> Contato </Link> </li>
            </ul>
          <img src={seloDesde} alt="Desde 1984" className="selo-footer" />
          </nav>
        </div>

        <div className="div-footer-2" >
          <p>2018 MaqFlex ©. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}