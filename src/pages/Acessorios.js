import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Acessorios.css';
import acessorios from '../assets/acessorios-flexografia.jpg';

export default function Acessorios() {

  return (
    <>
      <Header />
      <main>
        <section className="secao-acessorios" >
          <p>
            A MAQ FLEX oferece uma linha completa de peças e acessórios <br /> para equipamentos do segmento flexográfico. <br /> Consulte-nos para <span>tamanhos especiais</span>.
          </p>
        </section>

        <section className="secao-acessorios" >
          <img src={acessorios} alt="Acessórios" />
        </section>

        <section className="secao-acessorios" >
          <p>
            Cilindros Porta Clichês, Cilindros Anilox, Cilindros Pescadores, Cilindros Contra Pressão, Cilindros Contra Facas, Engrenagens, Sistema de Doctor Blade, Mandris Expansivos Pneumático, Mandris Expansivos Mecânico, Feltros, Correias, Rolamentos, entre outros.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}