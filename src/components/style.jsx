import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif;
    }

    `;

export const containerMain = styled.main`
    color: white;
    height: 100vh;
    padding: 3.5em 3em;
    background-color: #f66000;
`;

export const title = styled.h1`
   font-size: 45px;
   margin-left: 2.4em;
`;

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
    width: 90%;
    margin: 0 auto;
    padding: 2em 0;
`;

export const containerFrutas = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-wrap: wrap;
    width: 60em;
    padding: 1em;
`;

export const containerTitleProduct = styled.div`
    display: inline-block;
    width: 305px;
    margin-left: 20px;
    border-bottom: 1px solid black;
`;

export const tituloProduto = styled.h2`
    font-size: 40px;
    font-weight: 200;
`;

export const imgFrutas = styled.img`
   width: 180px;
   margin: 10px 15px;
`;

export const containerCompra = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 60px;
    width: 280px;
    height: 70vh;
    background-color: #f7e0ce;
`;

export const carrinhoCompra = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 20px;
   padding: 1em;
   width: 15em;
   height: 30vh;
   margin: 10px auto;
   border-radius: 25px;
   background-color: #d2c5bb;
`;

export const carrinhoIcon = styled.img`
   width: 75px;
   height: 75px;
`;

export const textoCarrinho = styled.p`
   font-size: 12px;
   text-align: center;
   color: black;
   background-color: #d2c5bb;
`;

export const containerButton = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1.5em 2em;
   border-radius: 80px;
   width: 180px;
   height: 50px;
   background-color: rgba(211, 197, 187, 1);
`;

export const button = styled.button`
   font-size: 18px;
   width: 20px;
   height: 20px;
   border: 2px solid rgba(0, 0, 0, 1);
   border-radius: 10px;
   cursor: pointer;
   outline: none;
   background-color: transparent;
`;

