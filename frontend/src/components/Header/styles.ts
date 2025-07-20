import { SearchOutlined } from "@ant-design/icons";
import { Input as AntDInput } from "antd";
import styled from "styled-components";

export const Container = styled.header`
  gap: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-height: 80px;
  max-height: 80px;

  padding: 16px 24px;

  background-color: #f9f8f9;
`;

export const ContainerLogo = styled.div`
  height: 100%;

  gap: 6px;
  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const Logo = styled.h1`
  font-size: 30px;
  font-weight: 600;

  & span {
    font-size: 26px;
    color: #ed6b16;
  }
`;

export const Simbolo = styled.img`
  height: 100%;
`;

export const ContainerNav = styled.nav`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const List = styled.ul`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  list-style: none;
`;

export const Item = styled.li`
  font-size: 15px;
  font-weight: 400;

  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0px;
    height: 2px;
    background-color: #ed6b16;

    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 110%;
  }
`;

export const ContainerSearch = styled.div`
  width: 100%;
  min-width: 180px;
  max-width: 270px;

  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const InputSearch = styled(AntDInput)`
  width: 100%;
  min-width: 180px;
  max-width: 270px;

  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const SearchButton = styled(SearchOutlined)`
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid #d9d9d9;

  padding: 5px 7px;

  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;
