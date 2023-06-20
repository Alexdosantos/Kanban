import styled from "styled-components";

export const FormCard = styled.form`
    display: flex;
    flex-direction: column;
    gap: 18px;
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

`
export const CardLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  
  color: #FFFFFF; 
`;

export const ErroCadastro = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    
    color: #ffffff; 
    background: red;


`