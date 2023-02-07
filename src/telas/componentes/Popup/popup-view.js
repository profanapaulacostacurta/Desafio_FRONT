import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { IconeButtonIncluir } from '../botao/buttonView';
import { ModalActionsStyle, ModalCloseStyle, ModalContentStyle, ModalHeaderStyle, ModalStyle } from '../../../estilos/componentes/popup/popup-style.js';
import { AddTarefasServices } from '../../../services/tarefa/tarefas-service';

export const PopupView = () => (
  <Popup
    trigger={<button className="button"> <IconeButtonIncluir/> </button>}
    modal
    nested
  >
    {close => (
      <ModalStyle>
        <ModalCloseStyle><button onClick={close}>
          &times;
        </button></ModalCloseStyle>
        <ModalHeaderStyle> Nova Tarefa </ModalHeaderStyle>
        <ModalContentStyle>
          <label>Titulo  da Tarefa</label>
          <input id="tituloTarefa" name="tituloTarefa" cols="40"></input>
          <label>Descrição da Tarefa</label>
          <textarea name="descricaoTarefa" id="descricaoTarefa" rows="10" cols="40">
            Escreva a descrição da Tarefa</textarea>
        
        </ModalContentStyle>
        <ModalActionsStyle>
          <Popup
            trigger={<button className="button"> Salvar </button>}
            position="top center"
            nested
          >
            <AddTarefasServices novatarefa="{'titulo' : ${tituloTarefa}, 
                                             'conteudo': ${descricaoTarefa}, 
                                            'lista':  'To do'
                                            }"/>
          </Popup>
        </ModalActionsStyle>
      </ModalStyle>
    )}
  </Popup>
);