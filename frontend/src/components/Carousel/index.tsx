import { CarouselAntd, CarouselContainer, CarouselTitle } from "./styles";
import React, { useState } from "react";

interface CarouselProps {
  title: string;
  slidesCategory?: boolean;
  children: React.ReactNode;
}

type ResponsiveSetting = {
  breakpoint: number;
  settings: {
    slidesToShow: number;
  };
};

const isResponsiveSetting = (item: unknown): item is ResponsiveSetting => {
  if (typeof item === "object" && item !== null) {
    const obj = item as Record<string, unknown>;

    return typeof obj.breakpoint === "number" && typeof obj.settings === "object" && obj.settings !== null && typeof (obj.settings as Record<string, unknown>).slidesToShow === "number";
  }
  return false;
};

const Carousel = ({ title, slidesCategory, children }: CarouselProps) => {
  const [slides] = useState<React.ReactNode[]>(React.Children.toArray(children));

  const responsive: (ResponsiveSetting | false | undefined)[] = [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: slidesCategory ? 8 : 6,
      },
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: slidesCategory ? 7 : 5,
      },
    },
    slidesCategory && {
      breakpoint: 920,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: slidesCategory ? 5 : 4,
      },
    },
    {
      breakpoint: 710,
      settings: {
        slidesToShow: slidesCategory ? 4 : 3,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: slidesCategory ? 3 : 2,
      },
    },
    {
      breakpoint: slidesCategory ? 440 : 375,
      settings: {
        slidesToShow: slidesCategory ? 2 : 1,
      },
    },
  ];

  const [settings] = useState({
    arrows: true,
    infinite: false,
    slidesToShow: slidesCategory ? 9 : 7,
    slidesToScroll: 1,
    responsive: responsive.filter(isResponsiveSetting),
  });

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
