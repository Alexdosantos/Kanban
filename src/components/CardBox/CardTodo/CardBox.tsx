import React from "react";
import * as S from "./CardBox.styled";

type CardBoxProps = {
  children?: React.ReactNode;
};

export const CardBox: React.FC<CardBoxProps> = ({ children }) => {
  return (
    <>
      <S.CardBoxHome>{children}</S.CardBoxHome>
    </>
  );
};
