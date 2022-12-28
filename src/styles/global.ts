import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
text-decoration: none;
}

html, body, #root {
max-height: 100vh;
max-width: 100vw;
width: 100%;
height: 100%;
}

*, bottom, input{
border: 0;
background: none;
font-family: Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif;
}

html { 
    background: var(--primary);
}

:root {
    --primary: #15161b;
    --secondary: #E5E4E2;
    --search: #202327;
    --white: #000;
    --gray: #7a7a7a;
    --outline: #2f3336;
    --retweet: #389743;
    --like: #e8265e;
    --twitter: #389743;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #389743
}
`;