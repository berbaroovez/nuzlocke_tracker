import styled from "styled-components";
import Card from "../components/Card";

export default function Home() {
  return (
    <HomeContainer>
      <Card />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center;
`;
