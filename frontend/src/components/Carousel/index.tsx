import { CarouselAntd, CarouselContainer, CarouselTitle } from "./styles";
import React from "react";

interface CarouselProps {
  title: string;
  children: React.ReactNode;
}

const Carousel = ({ title, children }: CarouselProps) => {
  const slides = React.Children.toArray(children);

  const settings = {
    arrows: true,
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <CarouselTitle>{title}</CarouselTitle>

      <CarouselAntd {...settings}>
        {slides.map((child, index) => (
          <div key={index}>{child}</div>
        ))}
      </CarouselAntd>
    </CarouselContainer>
  );
};

export default Carousel;
