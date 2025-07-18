import { Container, ContainerNav, ContainerSearch, InputSearch, Item, List, Logo, SearchButton } from "./styles";

const Header = () => {
  return (
    <Container>
      <Logo>
        Descon<span>tou</span>
      </Logo>

      <ContainerNav>
        <List>
          <Item>Início</Item>
          <Item>Categorias</Item>
          <Item>Sobre</Item>
        </List>
      </ContainerNav>

      <ContainerSearch>
        <InputSearch placeholder="Pesquisar" />
        <SearchButton />
      </ContainerSearch>
    </Container>
  );
};

export default Header;
