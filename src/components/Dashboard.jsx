import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import pokeBall from "../assets/pokeball.png";

const Dashboard = ({ select, onClickDeleteBtn }) => {
  const tempArr = [];
  let count = 6 - select.length;

  for (let i = 0; i < count; i++) {
    tempArr.push(pokeBall);
  }

  return (
    <Wrapper>
      <StyledP>최애 포켓몬 PICK!</StyledP>
      <Container>
        {select.map((el) => {
          return (
            <PokemonCard
              key={el.id}
              id={el.id}
              img={el.img_url}
              name={el.korean_name}
              type={el.types}
              onClickBtn={onClickDeleteBtn}
              isSelected={false}
            />
          );
        })}
        {tempArr.map((el, index) => {
          return (
            <PokeBallDiv key={index}>
              <PokeBallImg src={el} alt="pokeball" />
            </PokeBallDiv>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const StyledP = styled.p`
  text-align: center;
  font-size: 28px;
  font-weight: 900;
  padding: 32px 0;
`;

const Container = styled.div`
  width: 80%;
  height: 220px;
  padding: 20px;
  margin: 0 auto;
  background-color: lightcyan;
  border-radius: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
`;

const PokeBallDiv = styled.div`
  width: 158px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed black;
  border-radius: 12px;
`;

const PokeBallImg = styled.img`
  width: 70px;
  height: 70px;
`;
