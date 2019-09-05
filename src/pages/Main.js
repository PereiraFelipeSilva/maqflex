import React from 'react';
import '../css/Main.css';
import Header from '../components/Header';
import MainCarousel from '../components/Carousels/MainCarousel';
import sectionImg1 from '../assets/impressora-etiquetas.jpg';
import sectionImg2 from '../assets/impressora-flexografica-industria.jpg';
import sectionImg3 from '../assets/maquina-de-rotulos.jpg';
import sectionImg4 from '../assets/maquina-rotulos-cosmeticos.jpg';

class Main extends React.Component {

  render() {
    return (
      <>
        <Header />

        <MainCarousel />

        <section className="presentational-section" >
          <div className="presentational-section-div">
            <h2>
              Fabricante de Impressoras Flexográficas e Máquinas de Acabamento para o segmento de rótulos, etiquetas auto adesivas e embalagens.
          </h2>
            <p>
              Otimização na produção e foco em resultados é o que oferecemos.
          </p>
          </div>
        </section>

        <section className="section-maquinas" >
          <ul className="section-maquinas-list" >
            <li>
              <img src={sectionImg1} alt="Impressora flexográfica" />
              <h3>Impressoras Flexográficas para indústria gráfica</h3>
              <p>A máquina flexográfica para indústria gráfica MaqFlex atende as mais diferentes demandas do mercado no que tange tamanhos e quantidades de materiais produzidos, permitindo um extenso portifólio de produtos. Além de compacta e funcional, a máquina flexográfica para indústria gráfica é desenvolvida com a mais alta tecnologia.</p>
            </li>
            <li>
              <img src={sectionImg2} alt="Máquina de etiquetas para indústria farmacêutica" />
              <h3>Máquina de Etiquetas para indústria farmacêutica</h3>
              <p>A máquina de etiquetas para indústria farmacêutica é capaz de produzir uma linha completa de opções de etiquetas e rótulos para a indústria farmacêutica, de acordo com todas as normas e procedimentos de segurança e saúde. Ela imprime em flexografia e atende às exigências referentes às etiquetas para esse segmento.</p>
            </li>
            <li>
              <img src={sectionImg3} alt="Máquina de Rótulos para indústria alimentícia" />
              <h3>Máquina de Rótulos</h3>
              <p>A máquina de rótulos para indústria alimentícia MaqFlex opera com escalas de produção que proporcionam aumento de lucratividade para o empreendimento. Suas avançadas características técnicas permitem produção continuada com redução do tempo de ajuste e registro, além de ser um equipamento de fácil operação.</p>
            </li>
            <li>
              <img src={sectionImg4} alt="Máquina de Rótulos para indústria cosmética" />
              <h3>Máquina de Rótulos para Indústria Cosmética</h3>
              <p>A máquina de rótulos para indústria cosmética atende uma demanda intensa dentro das indústrias de cosméticos, que geralmente terceirizam essa extensão da sua produção para empreendedores que se dedicam à fabricação de rótulos com customização, seguindo a necessidade do cliente, o que denota grande oportunidade para investimento em um equipamento.</p>
            </li>
          </ul>
        </section>

        <div className="newsletter">

        </div>

        <footer>

        </footer>
      </>
    );
  }
}

export default Main;