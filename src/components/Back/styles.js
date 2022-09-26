import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: .8rem;

  padding: 4rem 0 2.4rem 12.3rem;
  height: 2.1rem;

  font-size: 1.6rem;
  line-height: 2.1rem;
  font-weight: 400;

  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.PINK};
    
  align-items: center;
`