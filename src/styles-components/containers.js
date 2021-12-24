import styled from "styled-components";
import { device } from "./media-querys";

export const Header = styled.header`
    background-color: #318BA1;
    height: 80px;
    color: #F4EDE3;
    text-align: center;
    padding-top: 1rem;

    @media screen and ${device.mobileXS}{
        padding-top: 0.5rem;
    }

    & h1{
        color: ${props => props.colorTitle || "#F4EDE3"};
    }
`;

export const Main = styled.main`
    flex-grow: 1;
    & h2{
        text-align: center;
    }
`;

export const Footer = styled.footer`
    background-color: #222;
    color: white;
    min-height: 100px;
    margin-top: 100px;
    text-align: center;
    padding-top: 40px;
`;

export const FormularioSection = styled.section`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    align-content: center;
    min-height: 8vh;
    padding-top: 0.5rem;

    @media screen and ${device.laptop}{
        min-height: 14vh;
        justify-content: space-between;
    }
`;