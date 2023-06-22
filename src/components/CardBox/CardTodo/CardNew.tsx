import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import { CardNewProps } from "../../../Types/Card/CardTypes";
import * as S from "../CardTodo/CardNew.styled";
import * as C from "../../Novo/Novo.Styled";

import Editar from "../../../assets/Editar.svg";
import BtnExcluir from "../../../assets/lixeira.svg";
import BtnDireita from "../../../assets/seta-direita.svg";
import { Update } from "../../../Services/Update";

export const CardNew = ({ dados, handleDelete, handleMove, getData }: CardNewProps) => {
  const [flippedState, setFlippedState] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});
  const [inputTitle, setInputTitle] = useState<{ [key: string]: string }>({});

  const handleCardClick = (id: string) => {
    setFlippedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    console.log(handleCardClick)
    // Se o cartão for virado, preencher os campos de entrada com os dados correspondentes
    if (!flippedState[id]) {
      const cardData = dados.find((item) => item._id === id);
      if (cardData) {
        setInputValues((prevValues) => ({
          ...prevValues,
          [id]: cardData.title,
        }));
        setInputTitle((prevValues) => ({
          ...prevValues,
          [id]: cardData.content,
        }));
      }
    }
  };

  const handleInputChange = (id: string, value: string) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleInputChange1 = (id: string, value: string) => {
    setInputTitle((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleSaveClick = async (id: string, column: string) => {
    const updatedTitle = inputValues[id] || "";
    const updatedContent = inputTitle[id] || "";

    try {
      await Update(id, updatedTitle, updatedContent, column);
      setFlippedState((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
      }));
      await getData()
    } catch (error) {
      console.error(error);
    }
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
              <S.ButtonEdit>
                <S.ImgEdite
                  onClick={() => handleCardClick(item._id)}
                  src={Editar}
                  alt=""
                />
              </S.ButtonEdit>
            </S.BoxTitleEdite>
            <S.TextInfo>{item.content}</S.TextInfo>

            <S.DivExcluiDireira>
              <S.BtnExcluir onClick={() => handleDelete(item._id)}>
                <S.ImgExcluir src={BtnExcluir} alt="" />
              </S.BtnExcluir>

              <S.BtnDireita onClick={() => handleMove(item._id, "DOING")}>
                <S.Imgdireita src={BtnDireita} alt="" />
              </S.BtnDireita>
            </S.DivExcluiDireira>
          </S.CardBoxToDo>

          {/* Conteúdo do cartão virado */}
          <C.CardBoxNovo>
            <C.BtnFechar onClick={() => handleCardClick(item._id)} />
            <C.NovoInput
              name="text"
              value={inputValues[item._id] || ""}
              onChange={(e) => handleInputChange(item._id, e.target.value)}
            />
            <C.TextArea
              name="text"
              value={inputTitle[item._id] || ""}
              onChange={(e) => handleInputChange1(item._id, e.target.value)}
            />
            <div>
              <C.BTnSave
                onClick={() => handleSaveClick(item._id, item.column)}
                type="submit"
              >
                Salvar
              </C.BTnSave>
            </div>
          </C.CardBoxNovo>
        </ReactCardFlip>
      ))}
    </>
  );
};
