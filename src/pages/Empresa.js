import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Empresa.css';

export default function Empresa() {

  return (
    <>
      <Header />
      <h1>FABRICAÇÃO DE IMPRESSORAS FLEXOGRÁFICAS</h1>

      <main>
        <section>
          <p>
            Fundada em 1984 com o objetivo de atender as necessidades do mercado de conversão e impressão de rótulos e etiquetas adesivas a Maq Flex é hoje uma referência no conceito de impressoras flexográficas.
          </p>
          <p>
            Produtos inovadores de alta tecnologia, fabricados com o mais alto grau de qualidade, são desenvolvidos para atender as necessidades de conversão de rótulos e embalagens para diversos segmentos.
          </p>
          <p>
            Impressoras flexográficas, Rebobinadeiras, Revisoras, Cortadeiras, Troqueladoras fabricadas pela Maq Flex estão presentes em mais de 90% dos estados brasileiro e também na América do Sul e América Latina.
          </p>
          <p>
            Tecnologia, inovação, pesquisa e desenvolvimento, são as diretrizes que fazem parte do dia-a-dia dos profissionais da Maq Flex, sendo o motivo de confiança e tranquilidade de nossos clientes.
          </p>
        </section>

        <section className="missao-visao-valores" >
          <button style={{cursor: "default"}} >Missão</button>
          <p>
            Gerar riqueza social através da implementação de tecnologias de produção industrial no setor de impressão.
          </p>
          <button style={{cursor: "default"}} >Visão</button>
          <p>
            Ser referência na fabricação de impressoras flexográficas para produção de rótulos e adesivos.
          </p>
          <button style={{cursor: "default"}} >Valores</button>
          <p>
            Excelência no atendimento ao cliente; <br />
            Ética como valor inegociável; <br />
            Respeito ao próximo como a si mesmo; <br />
            Trabalho em equipe. <br />
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}