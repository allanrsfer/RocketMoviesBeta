import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.NOTE};
  border: none;
  padding: 3.2rem;
  border-radius: 1.6rem;
  margin-bottom: 2.4rem;

  > h1 {
    flex: 1;
    text-align: left;
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 700;
  }
      
  > a {
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
  }

  > p {
    width: 100%;
    margin: 1.5rem 0;
        
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.COLORS.GREY};
        
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden !important;
  }

  > svg {
    margin: .8rem .6rem 0 0;
    color: ${({ theme }) => theme.COLORS.PINK};
    fill: ${({ theme }) => theme.COLORS.PINK};
    }

  > svg:nth-child(6) {
    fill: none;
  }
`

export const NewContainer = styled.div`
  width: 100%;
  height: 58.1rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.UNIVERSAL};
  border: none;
  padding: 2.4rem 12.3rem;
  border-radius: 1.6rem;
  margin-bottom: 2.4rem;

  > div:nth-child(1) {
    font-size: 1.6rem;
    margin-bottom: 2.4rem;

    > a {
      color: ${({ theme }) => theme.COLORS.PINK};
      align-items: center;
      margin-bottom: 2.4rem;
    }
  }

  > div:nth-child(2) {
    > div:nth-child(1){
      display: flex;
      flex-direction: row;
      align-items: center;

      
      > h1 {
        margin-right: 2rem;
        font-size: 4.7rem;
      }

      > svg {
        margin-right: 1rem;
        color: ${({ theme }) => theme.COLORS.PINK};
        fill: ${({ theme }) => theme.COLORS.PINK};
      }

      > svg:nth-child(6) {
        fill: none;
      }
    }

    > p {
      width: 100%;
      margin: 1.5rem 0;
          
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      text-align: justify;
    }

    > div:nth-child(2) {
      margin: 2.4rem 0 4rem;
      display: flex;
      flex-direction: row;
      gap: .8rem;
      align-items: baseline;
      line-height: 1.9rem;
      text-align: center;

      > img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      }

      > h2 {
        font-size: 1.6rem;
        font-weight: 400;
      }

      > p {
        > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        }
      }    
    }
  }

  > a {
    margin-bottom: 4rem;
  }
`