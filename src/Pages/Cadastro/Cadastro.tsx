import React, { useState } from "react";
import { CardBox } from "../../components/CardBox/CardTodo/CardBox";
import { TitleHome } from "../../components/TitleHome/TitleHome";
import { useNavigate } from "react-router-dom";
import * as B from "../../components/ButtonHome/buttonHome";
import { ApiKey } from "../../ApiKey/ApiKey";
import axios from "axios";
import * as S from "./Cadatro.Styled";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const [erro, setErro] = useState("");

  const navigation = useNavigate();

  const handleCadastro = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confpassword) {
      setErro("*As senhas não são iguais*");
      return;
    }

    if (!nome || !email || !password || !confpassword) {
      setErro("*Por favor, preencha todos os campos*");
      return;
    }

    try {
      const headers = {
        "x-api-key": ApiKey.token,
        "Content-Type": "application/json",
      };

      const response = await axios.post(
        "https://arnia-kanban.vercel.app/api/user",
        {
          email,
          password,
          name: nome,
        },
        { headers }
      );
      navigation("/");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <CardBox>
        <TitleHome />
        <S.FormCard onSubmit={handleCadastro}>
          <S.CardInput>
            <S.CardLabel htmlFor="nome">Nome Completo</S.CardLabel>
            <S.Input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </S.CardInput>
          <S.CardInput>
            <S.CardLabel htmlFor="email">E-mail</S.CardLabel>
            <S.Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </S.CardInput>
          <S.CardInput>
            <S.CardLabel htmlFor="password">Senha</S.CardLabel>
            <S.Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </S.CardInput>
          <S.CardInput>
            <S.CardLabel htmlFor="confirmPassword">Repita a senha</S.CardLabel>
            <S.Input
              type="password"
              value={confpassword}
              onChange={(e) => setConfpassword(e.target.value)}
            />
          </S.CardInput>
          {erro && <S.ErroCadastro>{erro}</S.ErroCadastro>}
          <B.ButtonCadastra type="submit" />
        </S.FormCard>
      </CardBox>
    </>
  );
};

export default Cadastro;
