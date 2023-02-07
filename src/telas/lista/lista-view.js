import {ListaCorpoStyle, ListaStyle, ListaTituloStyle} from '../../estilos/lista/lista-style';
import { TarefaView } from '../tarefa/tarefa-view';



export function ListaView(props){
   const mostrar = false;

    return (
        <ListaStyle>
           <ListaTituloStyle>{props.nomeTitulo}</ListaTituloStyle>
           <ListaCorpoStyle><TarefaView/></ListaCorpoStyle>
        </ListaStyle>
   )
}

