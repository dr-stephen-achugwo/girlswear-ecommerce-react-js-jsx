import styled from "styled-components";

export const StyledContact = styled.div`
  width: 1200px;
  max-width: 95vw;
  padding: 40px 10px 70px;
  margin: 50px auto;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.body};

  h1 {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 400;
    margin: 0 0 40px;
  }

  .textField {
    margin: 10px;
    max-width: 90%;
    text-align: start;
  }

  #btn {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
  #btn:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  #alert {
    color: #fff;
    background-color: green;
  }

  @media (max-width: 400px) {
    padding: 40px 0;

    h1 {
      font-size: 30px;
    }
  }
`;
