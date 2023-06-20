import styled from "styled-components";
import { Link } from 'react-router-dom'

export const CardBoxHome = styled.div`
    margin: 0 auto;
    width: 567px;
    height: 861px;
    

    background: #3A72F8;
    border-radius: 20px;


`

export const FormCard = styled.form`
    display: flex;
    flex-direction: column;
    gap: 55px;
    align-items: center;
    margin-top: 55px;


`


export const Input =styled.input`
    width: 438px;
    height: 59px;
    left: 501px;
    top: 252px;
    padding-left: 15px;
   
    background: #FFFFFF;
    border-radius: 25px; 
    border: none;
    outline: none;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;


`

export const CardInput = styled.div`
    display: flex;
    flex-direction: column;
    
    align-items: center;

`
export const CardLabel = styled.label`
    position: relative;
    right: 180px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    


    color: #FFFFFF;

`

export const CardButton = styled.div`
    
    background-color: transparent;
    border:none;
    gap: 55px;

`
export const BtnEnviar = styled.button`
    width: 209px;
    height: 59px;
    left: 616px;
    top: 560px;

    background: #0A2668;
    border-radius: 25px;
    border: none;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
   
    color: #FFFFFF;
    cursor: pointer;
    
    &:hover{
        background: #13388c; 
        transition: .3s;
    }



`
export const LinkCad = styled(Link)`
    display: flex;
    justify-content: center;
    margin-top: 35px;
  
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;

    color: white;

    &:hover{
        font-size: 26px;
        transition: .8s;
    }

`

export const ErroEmail = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    
    color: #ffffff; 
    background: red;

`

export const ErroPassword = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    
    color: #ffffff; 
    background: red;


`
export const ErroUsuario = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    
    color: #ffffff; 
    background: red;


`