import styled from "styled-components";
import { Link } from 'react-router-dom'

export const CardNav = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 76px;
    left: 0px;
    top: 0px;

    background: #3A72F8; 


`

export const Titleh2 = styled.h2`
    
    margin-top: 15px;
    padding: 0px 0px 0px 29px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    
    color: #FFFFFF;

`

export const CadBoxLog = styled.div`
    display: flex;
    gap: 25px;
    padding-right: 25px;
`

export const WelcomeH4 = styled.h4`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    display: flex;
    align-items: center;

    color: #FFFFFF;

`
export const Sair = styled(Link)`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 100;
    font-size: 18px;
    line-height: 36px;
    display: flex;
    align-items: center;

    color: #FFFFFF;

`