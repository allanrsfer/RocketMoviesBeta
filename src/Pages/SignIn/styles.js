import styled from "styled-components"
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  background-color: ${({ theme }) => theme.COLORS.BLACK};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 23.5rem 16rem 0 13.4rem;

  > h1 {
    font-size: 4.8rem;
    font-weight: 800;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GREY};
    margin-bottom: 4.8rem;
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 4.8rem;
  }

  > button {
    height: 5.6rem;
    margin-top: 2.4rem;
    border: none;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.COLORS.PINK}; 
  }

  > button:last-child {
    background-color: ${({ theme }) => theme.COLORS.BLACK}; 
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Background = styled.div`
flex: 1;
background: url(${backgroundImg}) no-repeat;
background-size: cover
`