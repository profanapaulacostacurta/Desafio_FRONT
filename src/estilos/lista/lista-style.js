import styled from 'styled-components';

export const ListaStyle = styled.div`
    width: 300px;
    height: 60px;
    background: #808080;
    margin: 15px auto;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;

export const ListaTituloStyle = styled.h1`
  font-size: 25px;
  color: black;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

export const ListaCorpoStyle = styled.div`
    width: 300px;
    height: 300px;
    background: #d3d3d3;
    border-end-end-radius : 50px;
    border-end-start-radius : 50px;
    margin:1px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;