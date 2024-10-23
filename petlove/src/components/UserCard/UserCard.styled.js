import styled from "styled-components";
import color from "../../global/globalColors";
export const UserCardSection = styled.section`
  border-radius: 30px;
  background-color: ${color.white};
  padding: 18px 20px;
`;

export const UserCardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const UserIconText = styled.p`
  color: ${color.white};
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
`;
export const UserIconWrap = styled.div`
  background-color: ${color.yellowPrimary};
  width: 80px;
  height: 38px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
  color: ${color.white};
`;
export const IconUser = styled.svg`
  width: 18px;
  height: 18px;
`;
export const EditUserBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
`;
export const IconEdit = styled.svg`
  width: 38px;
  height: 38px;
`;
