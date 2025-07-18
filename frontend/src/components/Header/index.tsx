import { Dropdown, type MenuProps } from "antd";
import { Container, ContainerNav, ContainerSearch, InputSearch, Item, List, Logo, SearchButton } from "./styles";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

const Header = () => {
  return (
    <Container>
      <Logo>
        Descon<span>tou</span>
      </Logo>

      <ContainerNav>
        <List>
          <Item>Início</Item>
          <Item>
            <Dropdown menu={{ items }}>Categorias</Dropdown>
          </Item>
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
