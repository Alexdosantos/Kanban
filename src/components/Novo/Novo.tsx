import { useState, FormEvent } from "react";
import axios from "axios";
import ImgAdicionar from "../../assets/adicionar.svg";
import * as S from "./Novo.Styled";
import { ApiKey } from "../../ApiKey/ApiKey";

interface CardNovoProps {
  getData: () => void;
}

const CardNovo = ({ getData }: CardNovoProps) => {
  const [title, setTitle] = useState("");
  const [area, setArea] = useState("");

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const headers = {
        "x-api-key": ApiKey.token,
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("AUTH_TOKEN"),
      };

      const response = await axios.post(
        "https://arnia-kanban.vercel.app/api/card",
        {
          title: title,
          content: area,
        },
        { headers }
      );
      setTitle("");
      setArea("");
      getData();

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao adicionar card:", error);
    }
  };

  return (
    <>
      <S.CardNovo>
        <S.Title>Novo</S.Title>
        <S.CardBoxNovo>
          <form onSubmit={handleFormSubmit}>
            <S.NovoInput
              type="text"
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <S.TextArea
              cols={30}
              rows={10}
              placeholder="Conteúdo"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            ></S.TextArea>
            <div>
              <S.ButtonNovo type="submit">
                <S.ImgMais src={ImgAdicionar} alt="" />
              </S.ButtonNovo>
            </div>
          </form>
        </S.CardBoxNovo>
      </S.CardNovo>
    </>
  );
};

export default CardNovo;
