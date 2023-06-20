import { CardNewProps } from "../../../Types/Card/CardTypes";

import * as S from "../CardDone/CardDone.Style";
import Editar from "../../../assets/Editar.svg";
import BtnExcluir from "../../../assets/lixeira.svg";


import BtnEsquerda from "../../../assets/seta-esquerda.svg";

export const CardDone = ({ dados, handleDelete, handleMove }: CardNewProps) => {
  // Filtra os itens com base na coluna desejada

  return (
    <>
      {dados.map((item) => (
        <S.CardBoxToDo key={item._id}>
          <S.BoxTitleEdite>
            <S.Title>{item.title}</S.Title>
            <S.ButtonEdit>
              <S.ImgEdite src={Editar} alt="" />
            </S.ButtonEdit>
          </S.BoxTitleEdite>
          <S.TextInfo>{item.content}</S.TextInfo>

          <S.DivExcluiEsquerda>
            <S.BtnEsquerda onClick={() => handleMove(item._id, "DOING")}>
              <S.ImgEsquerda src={BtnEsquerda} alt="" />
            </S.BtnEsquerda>
            <S.BtnExcluir onClick={() => handleDelete(item._id)}>
              <S.ImgExcluir src={BtnExcluir} alt="" />
            </S.BtnExcluir>
          </S.DivExcluiEsquerda>
        </S.CardBoxToDo>
      ))}
    </>
  );
};
