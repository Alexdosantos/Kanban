import styled from "styled-components";


//aqui começa o Card to Do
export const CardTodo = styled.div`
    position: absolute;
    width: 355px;
    height: 877px;
    left: 500px;
    top: 146px;

    background: #EAEAEA;
    border-radius: 7px;


`

export const CardBoxToDo = styled.div`
    margin: 21px ;
    gap: 55px;
    width: 320px;
    height: 250px;
    display: flex;
    flex-direction: column;
    

    background: #F8F8F8;
    box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.28);
    border-radius: 25px;

    

`
export const BoxTitleEdite =styled.div`
    
    display: flex;
    justify-content: space-between;
    padding: 0px 21px 0px 21px;

`
export const Title = styled.h4`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 00;
    font-size: 20px;
    line-height: 30px;

    color: #575757;

`
export const ButtonEdit = styled.button`
    background: transparent;
    border: none;

`
export const ImgEdite = styled.img`
    cursor: pointer;


`

export const TextInfo = styled.p`
    margin: -75px 0px -35px 30px;
    padding: 10px 15px 0px 12px;
    
    box-sizing: border-box;
    width: 260px;
    height: 321px;
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #575757;



    border: none;
    border-radius: 25px;

`
export const DivExcluiEsquerda =styled.div`
    display: flex;
    justify-content: end;
    gap: 89px;

    padding: 0px 130px 10px 0px;
`
export const BtnExcluir = styled.button`
    background: transparent;
    border: none;


`
export const ImgExcluir  = styled.img`
    cursor: pointer;
`
export const BtnEsquerda = styled.button`
    background: transparent;
    border: none;

`
export const ImgEsquerda  = styled.img`
    cursor: pointer;
`


