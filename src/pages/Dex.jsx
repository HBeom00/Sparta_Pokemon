import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const Dex = () => {
  const [select, setSelect] = useState([]);

  const onClickAddBtn = ({ e, id }) => {
    e.stopPropagation();
    if (select.length >= 6) return alert("최대 6개까지 추가 할 수 있습니다.");
    if (select.find((el) => el.id === id))
      return alert("동일한 포켓몬이 존재합니다.");
    const selectedPokemon = MOCK_DATA.find((el) => el.id === id);
    setSelect([...select, selectedPokemon]);
  };

  const onClickDeleteBtn = ({ e, id }) => {
    e.stopPropagation();
    const deletePokemon = select.filter((el) => el.id !== id);
    setSelect(deletePokemon);
  };

  return (
    <StyledDiv>
      <Dashboard select={select} onClickDeleteBtn={onClickDeleteBtn} />
      <PokemonList onClickAddBtn={onClickAddBtn} MOCK_DATA={MOCK_DATA} />
    </StyledDiv>
  );
};

export default Dex;

const StyledDiv = styled.div`
  background-color: cadetblue;
`;
