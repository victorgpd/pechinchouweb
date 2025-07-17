import { ButtonCard, CardContainer, ImageCard, ImageContainerCard, PercentCard, PriceCard, PriceContainer, PriceOldCard, TitleCard } from "./styles";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  percent?: number;
  priceOld?: number;
}

const ProductCard = ({ image, title, price, percent, priceOld }: ProductCardProps) => {
  return (
    <CardContainer>
      {percent && <PercentCard>{percent}%</PercentCard>}

      <ImageContainerCard>
        <ImageCard src={image} alt={title} />
      </ImageContainerCard>

      <TitleCard>{title}</TitleCard>

      <PriceContainer>
        {priceOld && <PriceOldCard>{priceOld.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</PriceOldCard>}
        <PriceCard>{price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</PriceCard>
      </PriceContainer>

      <ButtonCard variant="solid">Ver oferta</ButtonCard>
    </CardContainer>
  );
};

export default ProductCard;
