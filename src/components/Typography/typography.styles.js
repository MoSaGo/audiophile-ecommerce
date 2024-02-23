import styled, { css } from "styled-components"

const variants = {
  h1: css`
    font-size: 5.6rem;
    font-weight: ${(props) => props.theme.typography.weight.bold};
    letter-spacing: 0.2rem;
    line-height: 5.8rem;
  `,
  body: css`
    font-size: 1.5rem;
    font-weight: ${(props) => props.theme.typography.weight.medium};
    letter-spacing: 0rem;
    line-height: 2.5rem;
  `,
  subtitle: css`
    font-size: 1.3rem;
    font-weight: ${(props) => props.theme.typography.weight.bold};
    letter-spacing: 0.1rem;
    line-height: 2.5rem;
  `,
}

export const TypoghraphyStyled = styled.p`
  font-family: ${(props) => props.theme.typography.families.main};
  ${(props) => variants[props.variant]}
`
