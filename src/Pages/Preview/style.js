import styled from "styled-components"

export const Container = styled.div`

`
export const Menu = styled.div`
  overflow-y: auto;

  ::-webkit-scrollbar {
    
    background-color: ${({ theme }) => theme.COLORS.UNIVERSAL};
    color: ${({ theme }) => theme.COLORS.PINK};
    width: .8rem;
  }

  ::-webkit-scrollbar-track {
    margin-left: .8rem;
  }

  ::-webkit-scrollbar-thumb  {
    height: 4.6rem;
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.PINK};
}
`
