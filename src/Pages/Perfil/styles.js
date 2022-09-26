import styled from "styled-components"

export const Container = styled.div`
width: 100%;

> header {
  width: 100%;
  height: 14.4rem;

  background: ${({ theme }) => theme.COLORS.HEADER};

  display: flex;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
  }
} 
`

export const Form = styled.div`
  max-width: 34rem;
  margin: 0 auto;

  > button {
    margin-top: 2.4rem;
    width: 100%;
    height: 4.8rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.COLORS.PINK}; 
  }
`
export const Avatar = styled.div`
position: relative;
  margin: -9rem auto 6.4rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: .7rem;
    right: .7rem;

    cursor: pointer;
    
    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BLACK};
    }
  }
`