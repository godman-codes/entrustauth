import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --maxWidth: 420px;
    --black: #000000;
    --green: #229C0D;
    --white: #FDFDFD;
    --maxHeight: 844px;
}

*{
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

body {
    
    width: var(--maxWidth);
    height: var(--maxHeight);
    margin: 0;
    padding: 0;
    border: 0;
    background-color: var(--white);
    margin: 0 auto;
    @media screen and (min-width: 600px) {
        background-color: var(--green);
    }
    
    @media screen and (max-width: 600px) {
        height: 100vh;
        width: 100vw;
        padding: 5px;
    }
}
#root {
    height: var(--maxHeight);
    background: var(--white);
}
`;
