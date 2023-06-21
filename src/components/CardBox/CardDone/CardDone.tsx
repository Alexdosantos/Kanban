import { CardNewProps } from "../../../Types/Card/CardTypes";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

import * as S from "../CardDone/CardDone.Style";
import * as C from "../../Novo/Novo.Styled";
import Editar from "../../../assets/Editar.svg";
import BtnExcluir from "../../../assets/lixeira.svg";

import BtnEsquerda from "../../../assets/seta-esquerda.svg";

export const CardDone = ({ dados, handleDelete, handleMove }: CardNewProps) => {
  const [flippedState, setFlippedState] = useState<{ [key: string]: boolean }>({});
 

  const handleCardClick = (id: string) => {
    setFlippedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <>
      {dados.map((item) => (
        <ReactCardFlip
          key={item._id}
          isFlipped={flippedState[item._id]}
          flipDirection="horizontal"
          flipSpeedFrontToBack={0.6}
          flipSpeedBackToFront={0.6}
        >
          <S.CardBoxToDo key={item._id}>
            <S.BoxTitleEdite>
              <S.Title>{item.title}</S.Title>
              <S.ButtonEdit >
                <S.ImgEdite onClick={() => handleCardClick(item._id)} src={Editar} alt="" />
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

          <C.CardBoxNovo>
            <C.BtnFechar onClick={handleCardClick} />
            <C.NovoInput
              name="title"
              value={item.title}
              
              
            />
            <C.TextArea
              name="content"
              value={item.content}
              
            />
            <div>
              <C.BTnSave type="submit">Salvar</C.BTnSave>
            </div>
          </C.CardBoxNovo>
        </ReactCardFlip>
      ))}
    </>
  );
};
