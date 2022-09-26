import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Form = styled.div`
  margin: 0 12.3rem 4rem;
  display: grid;
  grid-template-areas: 
  "header" "header"
  "title" "grade"
  "comments" "comments";

  > h1 {
    grid-area: header;
  }

  > div {
    display: flex;
    gap: 4rem;
    margin: 4rem 0;
    justify-content: space-between;
    
    > input {
      width: 100%;
      height: 5.5rem;
      padding: 1.8rem 1.6rem;
      border: none;
      border-radius: 1rem;
      background: ${({ theme }) => theme.COLORS.FORM};
      color: ${({ theme }) => theme.COLORS.GREY};
    }
  }

  > textarea {
    width: 100%;
    height: 27.4rem;
    padding: 1.9rem 1.6rem;
    border: none;
    border-radius: 1rem;
    background: ${({ theme }) => theme.COLORS.FORM};
    color: ${({ theme }) => theme.COLORS.GREY};
    resize: none;
  };
`

export const Bookmarks = styled.div`
  margin: 0 12.3rem;

  > h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.GREY};

  }

  > div {
    display: flex;
    flex-direction: row;
    gap: 2.4rem;
    width: 100%;
    height: 8.8rem;

    margin-top: 2.4rem;
    padding: 1.6rem;
    border-radius: .8rem;
    background: ${({ theme }) => theme.COLORS.BLACK};

    > span {
      display: flex;
      gap: 1.6rem;
      width: 11.3rem;
      height: 5.6rem;
      padding: 1.6rem;
      border-radius: 1rem;

      font-size: 1.6rem;
      line-height: 1.9rem;
      align-items: center;

      background-color: ${({ theme }) => theme.COLORS.FORM};

      > svg {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }

    > span:last-child {
      width: auto;
      background-color: ${({ theme }) => theme.COLORS.BLACK};
      border: 2px dashed #948F99;
      color: ${({ theme }) => theme.COLORS.GREY}
    }
  }
`

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4rem;
  margin: 4rem 12.3rem 0;

  > button {
    width: 100%;
    height: 5.6rem;
    padding: 1.6rem auto;
    align-items: center;
    border-radius: 1rem; 
    border: none;

    font-size: 1.6rem;
    font-weight: 500;

    background-color: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > button:last-child {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BLACK};
  }
`