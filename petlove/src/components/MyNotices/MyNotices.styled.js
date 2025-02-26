import styled from "styled-components";
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";

export const MyNoticesContainer = styled.div`
  margin-top: 40px;
`;
export const NoticesBtnWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;
export const MyNoticesBtn = styled.button`
  border-radius: 30px;
  border: none;
  background-color: ${color.yellowPrimary};
  color: ${color.white};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.03em;
  padding: 12px;
  line-height: 1.28;
  width: 123px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    padding: 14px;
  }
`;
