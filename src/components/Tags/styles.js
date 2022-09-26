import styled from "styled-components"

export const Container = styled.a`
  font-size: 1.2rem;
  line-height: 1.4rem;

  padding: .5rem 1.6rem;
  margin-right: .8rem;
  border-radius: .8rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.TAGS};
`