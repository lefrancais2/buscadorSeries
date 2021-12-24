import styled from 'styled-components';
import { device } from "./media-querys";

export const Input = styled.input`
    height: 1.5rem;
    border: thin solid rgba(64,64,64,0.4);
    width: ${props => props.widthInput || "80%"};
    height: ${props => props.heightInput || "1.5rem"};
    padding-top: ${props => props.paddingTopInput || "1rem"};
    padding-bottom: ${props => props.paddingBottomInput || "1rem"};
    
    ::placeholder{
        color: rgba(0,0,0,0.3);
    }

    input[type="checkbox"]:checked{
        box-shadow: 0 0 0 3px hotpink;
    }

    @media screen and ${device.laptop}{
        //width: 80%;
    }
    
`;