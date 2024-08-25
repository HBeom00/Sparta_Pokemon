import { useContext } from "react";
import { PokemonContext } from "../context/store";
import PokemonCard from "./PokemonCard";
import { styled } from "styled-components";
import MOCK_DATA from "../mock";

const PokemonList = () => {
  const { onClickAddBtn } = useContext(PokemonContext);
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
              onClickBtn={onClickAddBtn}
              isSelected={true}
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
  background-color: lightcyan;
  border-radius: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
`;
