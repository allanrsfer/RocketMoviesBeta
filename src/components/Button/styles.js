import styled from "styled-components"

export const Container = styled.button`
  width: 20.7rem;
  height: 4.8rem;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BLACK};
  
  font-weight: 400; 
  padding: 1.3rem 3.2rem;
  border: none;
  border-radius: .8rem;

  &:disabled {
    opacity: .5;
  }

  > svg {
    margin-right: .8rem;
  }
`