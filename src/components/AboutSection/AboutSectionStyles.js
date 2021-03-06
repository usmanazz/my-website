import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 24px 24px 24px;
  height: 600px;

  @media screen and (max-width: 768px) {
    height: 800px;
    justify-content: flex-start;
  }

  @media screen and (max-width: 500px) {
    height: 1000px;
  }

  @media screen and (max-width: 400px) {
    height: 1150px;
  }
`;

export const AboutTitle = styled.h2`
  font-size: 2.5rem;
`;

export const AboutTextContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1100px;
  margin-top: 1rem;
`;

export const AboutText = styled.p``;

export const GreenText = styled.span`
  color: #01bf71;
`;
