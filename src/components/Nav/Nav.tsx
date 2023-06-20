import * as S from './Nav.styled';

const Nav = () => {
  const username = localStorage.getItem("USER_NAME")

  return (
    <>
      <S.CardNav>
        <S.Titleh2>Arnia trello</S.Titleh2>

        <S.CadBoxLog>
          <S.WelcomeH4>Olá,{username}</S.WelcomeH4>
          <S.Sair to={"/"}>Sair</S.Sair>
        </S.CadBoxLog>
      </S.CardNav>
    </>
  );
};

export default Nav;
