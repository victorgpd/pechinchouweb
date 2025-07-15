import { SearchOutlined } from "@ant-design/icons";
import { Input as AntDInput } from "antd";
import styled from "styled-components";

export const Container = styled.header`
  gap: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 80px;

  padding: 0 24px;

  background-color: #f9f8f9;
`;

export const Logo = styled.h1`
  font-size: 34px;

  & span {
    color: #ed6b16;
  }
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
