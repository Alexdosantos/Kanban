import * as S from "../CardTodo/CardNew.styled";
import { CardNewProps } from "../../../Types/Card/CardTypes";

import Editar from "../../../assets/Editar.svg";
import BtnExcluir from "../../../assets/lixeira.svg";
import BtnDireita from "../../../assets/seta-direita.svg";





export const CardNew = ({ dados, handleDelete,handleMove }: CardNewProps) => {
  
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

          <S.DivExcluiDireira>
            <S.BtnExcluir onClick={() => handleDelete(item._id)}>
              <S.ImgExcluir src={BtnExcluir} alt="" />
            </S.BtnExcluir>

            <S.BtnDireita onClick={() => handleMove(item._id, 'DOING')}>
              <S.Imgdireita src={BtnDireita} alt="" />
            </S.BtnDireita>

            
          </S.DivExcluiDireira>
        </S.CardBoxToDo>
      ))}
    </>
  );
};
