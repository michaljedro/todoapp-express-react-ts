import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
