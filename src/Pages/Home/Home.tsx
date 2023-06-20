import { useState, ChangeEvent, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Home.Style";
import { InfoHome } from "../../Types/Home/InfoHome";
import { TitleHome } from "../../components/TitleHome/TitleHome";
import { CardBox } from "../../components/CardBox/CardTodo/CardBox";
import * as B from "../../components/ButtonHome/buttonHome";
import { LoginUsers } from "../../Services/User";

const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
      setErrors({ ...errors, email: "" });
    } else if (name === "password") {
      setPassword(value);
      setErrors({ ...errors, password: "" });
    }
  };

  const handleLogin = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!email) {
      setErrors({ ...errors, email: "*Preencha o campo de email*" });
    }

    if (!password) {
      setErrors({ ...errors, password: "*Preencha o campo de senha*" });
    }

    if (email && password) {
      try {
        const userToken = await LoginUsers({ email, password });
        localStorage.setItem("AUTH_TOKEN", userToken.token);
        navigate("/MemberSystem");
      } catch (error) {
        console.log(error);
        setError("*Usuário não encontrado*");
      }
    }
  };

  const infohome: InfoHome = {
    email: "E-mail",
    senha: "Senha",
    entra: "ENTRAR",
    cadastro: "Cadastrar-se",
  };

  return (
    <>
      <CardBox>
        <TitleHome />

        <S.FormCard action="">
          <S.CardInput>
            <S.CardLabel htmlFor="email">{infohome.email}</S.CardLabel>
            <S.Input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleInput}
            />
            {errors.email && <S.ErroEmail>{errors.email}</S.ErroEmail>}
          </S.CardInput>

          <S.CardInput>
            <S.CardLabel htmlFor="password">{infohome.senha}</S.CardLabel>
            <S.Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleInput}
            />
            {errors.password && (
              <S.ErroPassword>{errors.password}</S.ErroPassword>
            )}
          </S.CardInput>

          {error && <S.ErroUsuario>{error}</S.ErroUsuario>}

          <S.CardButton>
            <B.ButtonHome onClick={handleLogin} />
          </S.CardButton>
        </S.FormCard>

        <S.LinkCad to="Cadastro">{infohome.cadastro}</S.LinkCad>
      </CardBox>
    </>
  );
};

export default Home;
