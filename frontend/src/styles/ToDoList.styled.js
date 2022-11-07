import styled from "styled-components";

export const ItemsLeft = styled.span`
  font-size: 14px;
  color: ${(props) => (props.theme === "light" ? "#9495A5" : "#5B5E7E")};
`;
export const BoxActivityItems = styled.div`
  width: 166px;
  color: ${(props) => (props.theme === "light" ? "#9495A5" : "#5B5E7E")};
`;
export const ActivityItems = styled.span`
  font-size: 18px;
  color: ${(props) => (props.theme === "light" ? "#9495A5" : "#5B5E7E")};
  margin: 5px;
  font-weight: bold;
  &:hover {
    color: #3a7cfd;
  }
`;
export const ButtonCompleted = styled.button`
  background-color: ${(props) =>
    props.theme === "light" ? "#FFFFFF" : "#25273D"};
  border: none;
  color: ${(props) => (props.theme === "light" ? "#9495A5" : "#5B5E7E")};
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
  background-color: ${(props) =>
    props.theme === "light" ? "#FFFFFF" : "#25273D"};
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
