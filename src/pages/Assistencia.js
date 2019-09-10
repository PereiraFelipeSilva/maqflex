import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Assistencia.css';
import selo from '../assets/selo.jpg';
import pecasAssist from '../assets/pecas-assistencia.jpg';
import icoMail from '../assets/ico-mail.jpg';
import icoTel from '../assets/ico-tel.jpg';

export default function Assistencia() {

  return (
    <>
      <Header />
      <main>
        <section className="first-section" >
          <p>
            A MAQ FLEX oferece um serviço de <span>Assistência Técnica</span> especializada em que você pode confiar.
          </p>
          <img src={selo} alt="Selo de assistência integral" />
        </section>

        <section className="second-section" >
          <p>
            Reparos, ajustes, peças de reposição e mão de obra especializada podem ser necessários ao longo do tempo e você pode contar com os serviços da MAQ FLEX.
          </p>

          <button style={{ cursor: "default" }} >Reparos mais comuns</button>

          <div>
            <ul>
              <li>Mecânica</li>
              <li>- Cilindro porta-clichê</li>
              <li>- Engrenagens</li>
              <li>- Correias</li>
              <li>- Rolamentos</li>
              <li>- Feltro para Freio</li>
              <li>- Mandril Expansivo</li>
              <li>- Entre outros</li>
            </ul>
            <ul>
              <li>Eletro-Eletrônica</li>
              <li>- Contador de metragem</li>
              <li>- Sensor indutivo</li>
              <li>- Inversor de frequência</li>
              <li>- Alinhador eletrônico</li>
              <li>- Controle de tensão</li>
              <li>- Entre outros</li>
            </ul>
            <img src={pecasAssist} alt="Peças de assistência" />
          </div>
          <p>
            Fale conosco, estamos aqui para ajudar.
          </p>
          <p>
            <img src={icoTel} alt="telefones" /> 2605 5057 | 2605 8777
            <img src={icoMail} alt="e-mail" /> maqflex@maqflex.com.br
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}