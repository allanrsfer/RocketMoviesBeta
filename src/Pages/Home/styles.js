import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-areas: 
  "header"
  "menu"
  "content"
  ;
`
export const Menu = styled.div`
  grid-area: menu;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4.8rem 12.3rem 3.8rem;
`

export const Content = styled.div`
  height: 60rem;
  grid-area: content;
  margin: 0 12.3rem 2.4rem;
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

export const Notes = styled.div`
  
`