import styled from "styled-components";

export const Banner = styled.section`
  width: 100%;
  height: 350px;
  padding: 16px;
  background-color: #ed6a16;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const LimitedContainer = styled.div`
  width: 100%;
  max-width: 660px;
  padding: 10px;

  gap: 15px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const TitleBanner = styled.h2`
  color: #fff;
  font-size: 38px;

  text-align: center;
  text-transform: uppercase;
`;

export const SloganBanner = styled.p`
  color: #fff;
  font-size: 20px;
  text-align: center;
`;

export const ProductsSection = styled.section`
  padding: 16px 30px;
  padding-bottom: 40px;

  gap: 50px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;
