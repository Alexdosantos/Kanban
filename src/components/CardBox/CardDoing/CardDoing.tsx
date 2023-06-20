import { CardNewProps } from "../../../Types/Card/CardTypes";

import * as S from "./CardDoing.styled";
import BtnEdit from "../../../assets/Editar.svg";
import BtnExcluir from "../../../assets/lixeira.svg";
import BtnDireita from "../../../assets/seta-direita.svg";

import BtnEsquerda from "../../../assets/seta-esquerda.svg";

export const CardDoing = ({
  dados,
  handleDelete,
  handleMove,
}: CardNewProps) => {
  return (
    <>
      {dados.map((item) => (
        <S.CardBoxToDo key={item._id}>
          <S.BoxTitleEdite>
            <S.Title>{item.title}</S.Title>
            <S.ButtonEdit>
              <S.ImgEdite src={BtnEdit} alt="" />
            </S.ButtonEdit>
          </S.BoxTitleEdite>
          <S.TextInfo>{item.content}</S.TextInfo>
          <S.DivExcluiDireira>
            <S.BtnEsquerda onClick={() => handleMove(item._id, "TODO")}>
              <S.ImgEsquerda src={BtnEsquerda} alt="" />
            </S.BtnEsquerda>
            <S.BtnExcluir onClick={() => handleDelete(item._id)}>
              <S.ImgExcluir src={BtnExcluir} alt="" />
            </S.BtnExcluir>
            {/* <S.BtnDireita onClick={() => handleMoveRight(item._id)}> */}
            <S.BtnDireita onClick={() => handleMove(item._id, "DONE")}>
              <S.Imgdireita src={BtnDireita} alt="" />
            </S.BtnDireita>
          </S.DivExcluiDireira>
        </S.CardBoxToDo>
      ))}
    </>
  );
};
