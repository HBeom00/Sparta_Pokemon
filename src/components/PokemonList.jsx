import MOCK_DATA from "../mock";
import PokemonCard from "./PokemonCard";
import { styled } from "styled-components";

const PokemonList = ({ onClickAddBtn }) => {
  return (
    <Wrapper>
      <Container>
        {MOCK_DATA.map((el) => {
          return (
            <PokemonCard
              key={el.id}
              id={el.id}
              img={el.img_url}
              name={el.korean_name}
              type={el.types}
              onClickAddBtn={onClickAddBtn}
            />
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default PokemonList;

const Wrapper = styled.div`
  margin: 40px 0;
`;
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: cadetblue;
  border-radius: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
`;
