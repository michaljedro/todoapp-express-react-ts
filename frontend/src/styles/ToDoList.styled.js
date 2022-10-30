import styled from "styled-components";

export const ItemsLeft = styled.span`
  font-size: 14px;
  color: #9495a5;
`;
export const BoxActivityItems = styled.div`
  border: 1px solid green;
  width: 166px;
`;
export const ActivityItems = styled.span`
  font-size: 18px;
  color: #9495a5;
  margin: 5px;
  font-weight: bold;
  &:hover {
    color: #3a7cfd;
  }
`;
export const ButtonCompleted = styled.button`
  background-color: #ffffff;
  border: none;
  color: #9495a5;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;
export const InfoLabelFooter = styled.div`
  z-index: 0;
  width: 540px;
  padding: 15px;
  display: flex;
  background-color: #ffffff;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
