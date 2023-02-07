import styled from "styled-components";

export const ModalStyle = styled.div`
  font-size: 18px;
  background-color: #f5f5bf;
  width: 500px;
  hight: 500px;
`;

export const ModalHeaderStyle = styled.h1`
    width: 98%;
    background-color:yellow;
    border-bottom: 1px solid gray;
    font-size: 18 px;
    text-align: center;
    padding: 5px;
`;

export const ModalContentStyle = styled.div`
    width: 95%;
    padding: 10px;
    display: flex;
    align-items: left;
    flex-direction: column;
    justify-content: center;
`;

export const ModalActionsStyle = styled.div`
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
`;

export const ModalCloseStyle = styled.p`
    position: absolute;
    right: 2px;
    top: 0px;
    font-size: 24px;
  
`;
