import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;

  width: max(100%, 50rem);
  height: 11.6rem;

  display: flex;
  flex-direction: row;

  align-items: center;

  padding: 2.4rem 12.3rem;
  gap: 6.4rem;
  border-bottom: 1px solid #3E3B47;
  
  h1 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  Input {
    min-width: 20rem;
  }
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  

  font-size: 1.4rem;
  line-height: 1.8rem;

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    
    font-weight: 700;
    margin-right: .9rem;
    line-height: 1.8rem;

    > strong {
      max-width: 12.5rem;
      white-space: nowrap;
    }

    > a {
    background: none;
    border: none;
    
    text-align: right;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GREY}
    }
  }

  
`