import styled from "styled-components";
export const FooterComponents = styled.div`
  background-color: #fafafa;
  background-color: ${(props) =>
    props.theme === "light" ? "#FFFFFF" : "#171823"};
  display: flex;
  justify-content: center;
  margin-bottom: 52px;
  color: ${(props) => (props.theme === "light" ? "#9495A5" : "#5B5E7E")};
`;
export const FooterParagraph = styled.p`
  font-size: 14px;
`;
