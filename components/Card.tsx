import styled, { keyframes } from "styled-components";
const holoCard = keyframes`
0%{
  transform: rotate3d(0,0,0, -20deg)
}
50%{
  transform: rotate3d(1,1,0.2, 20deg)
}
 100% {
    transform: rotate3d(0,0,0,-20deg);
  }
`;

const holoSparkle = keyframes`

 0%,
  5% {
    opacity: 0.1;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
  }
`;

const holoGradient = keyframes`
   0%, 100% {
    opacity: 0;
    background-position: 0% 0%;
  }
  8% {
    opacity: 0;
  }
  10% {
    background-position: 0% 0%;
  }
  19% {
    background-position: 100% 100%;
    opacity: 0.5;
  }
  35% {
    background-position: 100% 100%;
  }
  55% {
    background-position: 0% 0%;
    opacity: 0.3;
  }
  75% {
    opacity: 0;
  }
`;
const backgroundMovement = keyframes`
   0% {
    
    background-position: 0% 0%;
  }
 
  50% {
    background-position: 10% 10%;
    
  }
  100% {
    background-position: 0% 0%;
  }
`;

export default function Card() {
  return (
    <CardContainer>
      <InnerCardContainer>
        <InnerCard__Title>
          <Title__NuzlockeName> Stanzlocke Run</Title__NuzlockeName>
          <Title__NuzlockeRunCount>Run 9</Title__NuzlockeRunCount>
        </InnerCard__Title>
        <PokemonArt />
        <InnerCard__Bottom>
          <InnerCard__Description>
            lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            ullam similique ab dignissimos esse reiciendis possimus illo unde
            alias dolorem,
          </InnerCard__Description>
          <InnerCard__TagContainer>
            <InnerCard__Tags>
              <span>Randomizer</span> Each pokemon encounter is randomized
            </InnerCard__Tags>
            <InnerCard__Tags>
              <span>Randomizer</span> Each pokemon encounter is randomized
            </InnerCard__Tags>
          </InnerCard__TagContainer>
        </InnerCard__Bottom>
      </InnerCardContainer>
    </CardContainer>
  );
}

const InnerCard__TagContainer = styled.div`
  height: 80px;

  border-bottom: 1px black solid;
`;
const InnerCard__Bottom = styled.div``;
const InnerCard__Tags = styled.div`
  font-size: 0.8rem;
  margin-top: 8px;
  width: 260px;
  font-family: Gill Sans Std Regular;

  span {
    font-family: Gill Sans Std Bold Condensed;
  }
`;
const InnerCard__Description = styled.div`
  width: 240px;
  font-family: Gill Sans Std Regular;
  font-size: 0.7rem;

  margin: 8px auto auto auto;
  height: 56px;
  border-bottom: 1px black solid;
`;
const InnerCard__Title = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr;
  align-items: end;
  font-family: Gill Sans Std Bold Condensed;
`;

const Title__NuzlockeRunCount = styled.p`
  color: red;
`;

const Title__NuzlockeName = styled.p`
  font-size: 1.5rem;
`;

const CardContainer = styled.div`
  width: 300px;
  height: 420px;
  border-radius: 8px;
  background: #ffe50a;
  padding: 14px;
  filter: drop-shadow(2px 8px 10px rgba(0, 0, 0, 0.25));
  animation: ${holoCard} 10s ease infinite;
`;

const PokemonArt = styled.div`
  box-sizing: border-box;
  width: 260px;
  height: 180px;
  background: #d9eb3d;
  background-image: url("./backgrounds/pikachu.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: 50%;
  border-bottom: 8px #d3be37 solid;
  border-left: 8px #ecd333 solid;
  border-right: 8px #ffdd00 solid;
  border-top: 8px #ffeb6b solid;
  filter: drop-shadow(2px 8px 10px rgba(0, 0, 0, 0.25));
`;

const InnerCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: url("./backgrounds/grass.png");
  display: grid;
  justify-content: center;

  grid-template-rows: 0.2fr 0.8fr 1fr;
  animation: ${backgroundMovement} 15s ease infinite;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-image: linear-gradient(
      115deg,
      transparent 0%,
      rgb(0, 231, 255) 30%,
      rgb(255, 0, 231) 70%,
      transparent 100%
    );
    background-position: 0% 0%;
    background-repeat: no-repeat;
    background-size: 300% 300%;
    mix-blend-mode: color-dodge;
    opacity: 0.2;
    z-index: 1;
    animation: ${holoGradient} 15s ease infinite;
  }

  &:after {
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/13471/sparkles.gif");
    background-position: center;
    background-size: 180%;
    mix-blend-mode: color-dodge;
    opacity: 1;
    z-index: 2;
    animation: ${holoSparkle} 15s ease infinite;
  }

  &.active:before {
    opacity: 1;
    animation: none;
    transition: none;
    background-image: linear-gradient(
      115deg,
      transparent 0%,
      transparent 25%,
      rgba(0, 231, 255, 0.7) 45%,
      rgba(255, 0, 231, 0.7) 55%,
      transparent 70%,
      transparent 100%
    );
  }
`;
