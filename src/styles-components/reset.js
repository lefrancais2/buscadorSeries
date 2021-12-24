import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --first-color: #d90062;
        --text-color: #222;
        --font: "Raleway", sans-serif;
    }

    html{
        box-sizing: border-box;
        font-size: 16px;
        scroll-behavior: smooth;
    }

    *,*::before,*::after{
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    body{
        overflow-x: hidden;
        color: var(--text-color);

    }

    a {
        color: var(--link-color);
        transition: all 0.5s ease-out;
      }
      
      a:hover {
        opacity: 0.75;
      }
      
      h1 {
        margin: 0;
        font-size: 2rem;
      }

      h2 {
        margin: 0;
        font-size: 1.5rem;
      }

      h3 {
        margin: 0;
        font-size: 1.25rem;
      }

      h4 {
        margin: 0;
        font-size: 1rem;
      }

      h5 {
        margin: 0;
        font-size: 0.85rem;
      }

      h6 {
        margin: 0;
        font-size: 0.7rem;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      p {
        line-height: 1.6;
      }
`;

export {GlobalStyle}