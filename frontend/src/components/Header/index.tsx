import { Dropdown, type MenuProps } from "antd";
import { Container, ContainerLogo, ContainerNav, ContainerSearch, InputSearch, Item, List, Logo, SearchButton, Simbolo } from "./styles";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "../../enums/enums";

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
  const navigate = useNavigate();

  return (
    <Container>
      <ContainerLogo onClick={() => navigate(RoutesEnum.Home)}>
        <Simbolo src="./icone.png" alt="Logo da aplicação" />
        <Logo>
          Pechincha<span>Web</span>
        </Logo>
      </ContainerLogo>

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
