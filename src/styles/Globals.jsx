import styled, { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
    html{
        font-size: 62.5%;
        font-family: ${(props) => props.theme.typography.families.main};
        max-width: 1440px;
        min-width: 375px;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *::after, ::before{
        box-sizing: inherit;
    }

`

export default Global
