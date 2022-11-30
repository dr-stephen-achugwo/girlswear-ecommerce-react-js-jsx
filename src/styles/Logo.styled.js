import styled from "styled-components";

export const StyledLogo = styled.div`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  gap: 0.3rem;
  align-items: end;
  justify-content: start;

  img {
    height: 150px;
    width: 150px;
  }

  h3 {
    margin-bottom: 15px;
    /* height: 40px; */
    color: #818181;
    font-weight: 400;
    font-size: 15px;
  }

  @media (max-width: 450px) {
    margin-bottom: 20px;
  }

  img {
    height: 70px;
    width: 70px;
  }
`;
