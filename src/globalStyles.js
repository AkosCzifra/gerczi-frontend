import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   * {
        margin: 0;
        font-family: 'Josefin Sans', sans-serif;
    }

    main {
        margin-top: 60px;
        min-height:calc(100vh - 140px);
    }
`;
