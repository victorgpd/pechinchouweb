import { Input } from "antd";
import { Banner, LimitedContainer, ProductsSection, SloganBanner, TitleBanner } from "./styles";

import ProductCard from "../../components/ProductCard";
import Carousel from "../../components/Carousel";
import useTitle from "../../hooks/useTitle";

const { Search } = Input;

const Home = () => {
  useTitle("Home");

  return (
    <>
      <Banner>
        <LimitedContainer>
          <TitleBanner>Aproveite as ofertas especiais!</TitleBanner>
          <SloganBanner>Descontos incriveis e uma variedades de produtos.</SloganBanner>
          <Search size="large" placeholder="Buscar produtos" />
        </LimitedContainer>
      </Banner>

      <ProductsSection>
        <Carousel title="Ofertas do dia">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => (
            <ProductCard
              key={i}
              image="https://http2.mlstatic.com/D_NQ_NP_980048-MLB81662797050_012025-O-torneira-gourmet-cozinha-mesa-bancada-pia-flexivel-preta-abs.webp"
              title="Torneira Gourmet"
              price={3999.99}
              priceOld={1099}
              percent={100}
            />
          ))}
        </Carousel>

        <Carousel title="Categorias">Eletrônicos</Carousel>

        <Carousel title="Produtos para o seu bebê">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => (
            <ProductCard
              key={i}
              image="https://http2.mlstatic.com/D_NQ_NP_625221-MLA80510942192_112024-O.webp"
              title="Smartphone Samsung Galaxy A05s 4G 128GB 6GB RAM Câmera Traseira Tripla 50MP + 2MP + 2MP + Selfie 13MP Tela 6.7 Preto"
              price={99.99}
              priceOld={199.99}
              percent={100}
            />
          ))}
        </Carousel>
      </ProductsSection>
    </>
  );
};

export default Home;
