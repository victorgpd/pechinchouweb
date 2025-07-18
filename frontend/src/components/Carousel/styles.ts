import { Carousel } from "antd";
import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1180px;

  gap: 10px;
  display: flex;
  flex-flow: column;
`;

export const CarouselTitle = styled.h3`
  color: black;
  font-size: 20 px;
  font-weight: 500;

  text-transform: uppercase;
`;

export const CarouselAntd = styled(Carousel)`
  .slick-next::after,
  .slick-prev::after {
    color: #ed6b16 !important;

    width: 16px;
    height: 16px;

    border-block-start-width: 5px;
    border-inline-start-width: 5px;
  }

  .slick-next {
    right: -7px;
  }

  .slick-prev {
    left: -7px;
  }

  .slick-track {
    gap: 10px;
    display: flex !important;
  }

  .slick-dots li::after {
    background-color: #ed6b16;
  }

  .slick-dots li button {
    background-color: black;
  }

  .slick-dots-bottom {
    bottom: -20px;
  }
`;
