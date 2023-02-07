import React from 'react';
import { AppHeaderStyle, AppStyle } from './estilos/AppStyle';
import {QuadroView} from './telas/quadro/quadro-view';
import { PopupView } from './telas/componentes/Popup/popup-view';

function App(){
  return (
    <div>
      <AppStyle>
        <AppHeaderStyle>Quadro de Tarefas</AppHeaderStyle>
        <PopupView/>
      </AppStyle>
      <QuadroView />    
    </div>
  )
}

export default App;
