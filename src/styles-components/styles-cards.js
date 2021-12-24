import styled from "styled-components";
import { device } from "./media-querys";

export const SectionCard = styled.section`
    width: 100%;
    height: auto;

    @media screen and ${device.laptop}{
        min-width: 1200px;
    }
`;

export const ArticleCard = styled.article`
    text-align: center;
    margin-top: 2rem;

    @media screen and ${device.mobileS}{
        width: 180px;
        heigth: auto;
        margin-left: 2rem;
        margin-right: 2rem;
        flex: 1 0 auto;
    }

    @media screen and ${device.laptop}{
        width: 200px;
        heigth: auto;
        margin-left: 2rem;
        margin-right: 2rem;
    }
`;

export const DivCard = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;

    @media screen and ${device.mobileS}{
        flex-flow: row wrap;
        align-items: flex-start;
    }
    
    @media screen and ${device.laptop}{
        flex-flow: row wrap;
        align-items: center;
        align-content: center;
    }
`;

export const ACard = styled.a`
    text-decoration: none;
`;