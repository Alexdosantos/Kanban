import * as S from './Nav.styled';

type NavProps = {
  children: React.ReactNode;
};

const Nav = ({ children }: NavProps) => {
  const username = localStorage.getItem("USER_NAME");

  return (
    <>
      <S.CardNav>
        <S.Titleh2>Arnia trello</S.Titleh2>

        <S.CadBoxLog>
        {children}
          <S.WelcomeH4>Olá, {username}</S.WelcomeH4>
          <S.Sair to={"/"}>Sair</S.Sair>
        </S.CadBoxLog>

        
      </S.CardNav>
    </>
  );
};

export default Nav;
