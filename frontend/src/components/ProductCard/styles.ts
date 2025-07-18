import { Button } from "antd";
import styled from "styled-components";

export const CardContainer = styled.div`
  /* width: 160px; */
  height: 290px;

  background-color: white;

  gap: 12px;
  display: flex;
  flex-flow: column;

  position: relative;

  border-radius: 4px;
  overflow: hidden;
`;

export const ImageContainerCard = styled.div`
  width: 100%;
  height: 175px;
  border-radius: 4px;

  overflow: hidden;
  background-color: #f6f6f6;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageCard = styled.img`
  width: 100%;
  height: 150px;

  border-radius: 4px;
  object-fit: contain;

  mix-blend-mode: multiply;
  background-color: transparent;

  user-select: none;
`;

export const PercentCard = styled.span`
  width: 39px;
  height: 27px;

  font-size: 14px;
  font-weight: 400;
  border-radius: 8px;

  color: white;
  background-color: #ea6028;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 7px;
  left: 5px;

  user-select: none;

  z-index: 1;
`;

export const TitleCard = styled.h3`
  font-size: 14px;
  font-weight: 400;

  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limita a 2 linhas */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PriceContainer = styled.div`
  width: 100%;

  display: flex;
  flex-flow: column;
  /* align-items: center; */
`;

export const PriceCard = styled.span`
  color: #d5410b;
  font-weight: 600;
  font-size: 18px;
`;

export const PriceOldCard = styled.span`
  color: #97989a;
  text-decoration: line-through;

  font-weight: 400;
  font-size: 14px;
`;

export const ButtonCard = styled(Button)`
  color: white;
  background-color: #ed6b16;

  border-radius: 10px;
`;
