import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main';
import Empresa from './pages/Empresa';
import Acessorios from './pages/Acessorios';
import Assistencia from './pages/Assistencia';
import Retrofit from './pages/Retrofit';
import Contato from './pages/Contato';
import ForceRb from './pages/linhaForce/ForceRb';
import ForceTr from './pages/linhaForce/ForceTr';
import ForceTc from './pages/linhaForce/ForceTc';
import ClassicCp from './pages/linhaClassic/ClassicCp';
import ClassicFx from './pages/linhaClassic/ClassicFx';
import ClassicRb from './pages/linhaClassic/ClassicRb';
import ClassicRbc from './pages/linhaClassic/ClassicRbc';
import ClassicTr from './pages/linhaClassic/ClassicTr';

export default function Routes() {

  return (
    <BrowserRouter>
      <Route exact path="/" component={Main} />
      <Route path="/empresa" component={Empresa} />
      <Route path="/acessorios" component={Acessorios} />
      <Route path="/assistencia" component={Assistencia} />
      <Route path="/retrofit" component={Retrofit} />
      <Route path="/contato" component={Contato} />
      <Route path="/force-rb" component={ForceRb} />
      <Route path="/force-tc" component={ForceTc} />
      <Route path="/force-tr" component={ForceTr} />
      <Route path="/classic-cp" component={ClassicCp} />
      <Route path="/classic-fx" component={ClassicFx} />
      <Route path="/classic-rb" component={ClassicRb} />
      <Route path="/classic-rbc" component={ClassicRbc} />
      <Route path="/classic-tr" component={ClassicTr} />
    </BrowserRouter>
  );
}