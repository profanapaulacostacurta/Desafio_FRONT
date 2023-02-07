import { ListaStyle } from '../../estilos/lista/lista-style';
import { QuadroColunaStyle, QuadroStyle } from '../../estilos/quadro/quadro-style';
import { ListaView } from '../lista/lista-view';
import { TarefaView } from '../tarefa/tarefa-view';


export function QuadroView(){
    return (
    <QuadroStyle> 
        <ListaView nomeTitulo="To do" botaovisivel={true}/>
        <ListaView nomeTitulo="Doing" botaovisivel={false}/>
        <ListaView nomeTitulo="Done" botaovisivel={false}/>
    </QuadroStyle>
    )
  };
  