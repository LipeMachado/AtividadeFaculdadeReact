import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        transition: all 0.3s ease-in-out;
        user-select: none;
    }

    body {
        background-color: ${props => props.theme.colors.body_BackgroundColor};
        color: ${props => props.theme.colors.body_TextsColor};
        font-family: 'Poppins', sans-serif;
    }
`;