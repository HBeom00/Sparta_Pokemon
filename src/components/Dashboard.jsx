import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const Dashboard = ({ select, onClickDeleteBtn }) => {
  return (
    <Wrapper>
      <StyledP>최애 포켓몬 PICK!</StyledP>
      <Container>
        {select.length === 0 ? (
          <StyledTitle>포켓몬을 추가해 주세요</StyledTitle>
        ) : (
          select.map((el) => {
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
              // <div key={el.id}>
              //   <img src={el.img_url} alt="pokemon_img" />
              //   <p>{el.korean_name}</p>
              //   <p>{el.types.join(", ")}</p>
              //   <button onClick={() => onClickDeleteBtn(el.id)}>삭제</button>
              // </div>
            );
          })
        )}
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
  text-align: center;
  font-size: 28px;
  font-weight: 900;
  padding: 32px 0;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: lightcyan;
  border-radius: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: powderblue;
  width: 100%;
  height: 220px;
  border-radius: 16px;
  color: red;
  font-weight: 900;
  font-size: 24px;
`;
