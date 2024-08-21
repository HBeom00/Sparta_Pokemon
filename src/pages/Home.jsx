import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import pokemonBackground from "../assets/pokemon-logo.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <StyledImg src={pokemonBackground} alt="backgroung-img" />
      <StyledButton
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </StyledButton>
    </StyledDiv>
  );
};

export default Home;

const StyledDiv = styled.div`
  background-color: cadetblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledImg = styled.img`
  max-width: 40%;
`;

const StyledButton = styled.button`
  color: white;
  background-color: #d52727;
  border: 1px solid #d52727;
  border-radius: 12px;
  padding: 11px;
  font-weight: 900;
  font-size: 18px;
  margin-top: 12px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`;
