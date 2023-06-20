import * as S from "./buttonHome.styled";

 interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const ButtonHome: React.FC<ButtonProps> = ({ onClick }) => {
  return <S.BtnHome onClick={onClick}>ENTRAR</S.BtnHome>;
};

export const ButtonCadastra: React.FC<ButtonProps> = ({ type, onClick }) => {
  return <S.BtnHome type={type} onClick={onClick}>Cadastrar</S.BtnHome>;
};