import Nav from "../../components/Nav/Nav";
import * as S from "./Member.Styled";
import CardNovo from "../../components/Novo/Novo";
import { GetDados } from "../../Services/GetDados";
import { GetDelete } from "../../Services/Delete";
import { useState, useEffect } from "react";
import { Update } from "../../Services/Update";
import { lightThemer, darkThemer } from "../../Theme/Theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../GlobalStyle";
import { BsFillMoonFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

import { CardNew } from "../../components/CardBox/CardTodo/CardNew";
import { CardDoing } from "../../components/CardBox/CardDoing/CardDoing";
import { CardNewProps } from "../../Types/Card/CardTypes";
import { CardDone } from "../../components/CardBox/CardDone/CardDone";

const MemberSystem = () => {
  const [dados, setDados] = useState<CardNewProps["dados"]>([]);
  const [theme, setTheme] = useState<string>("dark");

  const fetchData = async () => {
    const response = await GetDados();
    setDados(response);
  };
  useEffect(() => {
    fetchData();
  }, []);

  

  const handleMove = async (id: string, newColumn: string) => {
    try {
      const card = dados.find((item) => item._id === id);
      if (card) {
        await Update(id, card.title, card.content, newColumn);
        setDados((prevDados) =>
          prevDados.map((item) =>
            item._id === id ? { ...item, column: newColumn } : item
          )
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    await GetDelete(id);

    // Atualize o estado dados, removendo o item excluído do array
    setDados((prevDados) => prevDados.filter((item) => item._id !== id));
  };

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightThemer : darkThemer}>
        <GlobalStyle />
        <Nav>
          <S.BtnThemer onClick={themeToggler}>
            {theme === "light" ? (
              <BsFillMoonFill
                style={{ color: "black", height: "50px", width: "20px" }}
              />
            ) : (
              <BsSun
                style={{ color: "white", height: "50px", width: "30px" }}
              />
            )}
          </S.BtnThemer>
        </Nav>

        <CardNovo getData={fetchData} />
        <S.CardTodo >
          <S.TitleTodo>To Do</S.TitleTodo>
          <CardNew
            getTodo={fetchData}
            dados={dados.filter((item) => item.column === "TODO")}
            handleDelete={handleDelete}
            handleMove={handleMove}
            
          />
        </S.CardTodo>

        <S.CardDoing >
          <S.TitleTodo>Doing</S.TitleTodo>
          <CardDoing
            getDoing={fetchData}
            dados={dados.filter((item) => item.column === "DOING")}
            handleDelete={handleDelete}
            handleMove={handleMove}
            
          />
        </S.CardDoing>

        <S.CardDone>
          <S.TitleTodo>Done</S.TitleTodo>
          <CardDone
            getDone={fetchData}
            dados={dados.filter((item) => item.column === "DONE")}
            handleDelete={handleDelete}
            handleMove={handleMove}
            
          />
        </S.CardDone>
      </ThemeProvider>
    </>
  );
};

export default MemberSystem;
