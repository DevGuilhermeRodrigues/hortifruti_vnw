
import React, { useState } from 'react';
import * as S from "./style.jsx";
import Alface from "../assets/alface.png";
import Laranja from "../assets/laranja.png";
import Cereja from "../assets/cereja.png";
import Cenoura from "../assets/cenoura.png";
import Manga from '../assets/manga.png';
import Limao from '../assets/limao.png';
import Beterraba from '../assets/beterraba.png';
import Tomate from '../assets/tomate.png';
import CarrinhoIcon from '../assets/ShoppingCart.png';

export default function Main() {

  return (
      <S.containerMain>
        <S.title>Hortifruti</S.title>

        <S.Container>
            {/* Produtos */}
            <S.containerFrutas>  {/*Div*/}
              <S.containerTitleProduct>
                <S.tituloProduto>Nossos produtos</S.tituloProduto> {/*h2*/}   
              </S.containerTitleProduct>

              <div>
                <S.imgFrutas src={Alface} alt='' />    {/*IMG*/}
                <S.imgFrutas src={Laranja} alt='' />   {/*IMG*/}
                <S.imgFrutas src={Cereja} alt='' />    {/*IMG*/}
                <S.imgFrutas src={Cenoura} alt='' />   {/*IMG*/}
                <S.imgFrutas src={Manga} alt='' />     {/*IMG*/}
                <S.imgFrutas src={Limao} alt='' />     {/*IMG*/}
                <S.imgFrutas src={Beterraba} alt='' /> {/*IMG*/}
                <S.imgFrutas src={Tomate} alt='' />    {/*IMG*/}
              </div>
            </S.containerFrutas>

            {/* Carrinhos */}
            <S.containerCompra> 
                <S.carrinhoCompra>
                    <S.carrinhoIcon src={CarrinhoIcon} alt='Icon carrinho de compra' />
                    <S.textoCarrinho>Click no produto para colocar no carrinho</S.textoCarrinho>
                </S.carrinhoCompra>

                <S.containerButton>
                    <S.button>+</S.button>
                    <S.button>-</S.button>
                </S.containerButton>
            </S.containerCompra>
        </S.Container>

      </S.containerMain>
  )
}
