import styled from "styled-components";
import color from "../../global/globalColors";
import { NavLink } from "react-router-dom";

export const AddPetHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const AddPetTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: 0em;
  color: ${color.black};
`;
export const AddPetButton = styled(NavLink)`
  border: none;
  padding: 10px 24px;
  border-radius: 30px;
  background-color: ${color.yellowPrimary};
  color: ${color.white};
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const AddPetIcon = styled.svg`
  width: 18px;
  height: 18px;
`;
