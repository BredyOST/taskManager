import { createGlobalStyle } from 'styled-components';
import { BACKGROUND_COLOR_MAIN } from './variable/globalConstant.ts';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto,wght@0,400;0,500;0,700&family=Tinos,wght@0,400;0,700;1,400;1,700&display=swap');
    
    html {
        box-sizing: border-box;
    }

    * {
        padding: 0;
        margin: 0;
        border: 0;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit; /* Это заставит все элементы наследовать свойство box-sizing от html */
        padding: 0;
        margin: 0;
        border: 0
    }

    :focus,
    :active {
        outline: none;
    }

    a:focus,
    a:active {
        outline: none;
    }

    html,
    body {
        height: 100%;
        min-width: $minWidth + px;
    }

    body {
        //colorlor:  globalIndex.$Theme_main_text_color;
        background-color: ${BACKGROUND_COLOR_MAIN};
        line-height: 1;
        //font-family:  font-familyglobalIndex.$main_font_family;
        //font-size:  rem(globalIndex.$main_font_size);
        //font-weight: globalIndex.$main_font_weight;

        // text-rendering: optimizeLegibility;
        text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        //background-color: globalIndex.$Theme_main_background;
    }

    input,
    button,
    textarea {
        //font-family: globalIndex.$Inputs_fontFamily;
        font-size: inherit;
    }

    button {
        cursor: pointer;
        color: inherit;
        background-color: inherit;
    }

    ul li {
        list-style: none;
    }

    img {
        vertical-align: top;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: inherit;
        font-size: inherit;
    }
`;

export default GlobalStyles;
