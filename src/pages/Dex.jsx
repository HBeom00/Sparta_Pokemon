import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";

const Dex = () => {
  return (
    <StyledDiv>
      <Dashboard />
      <PokemonList />
    </StyledDiv>
  );
};

export default Dex;

const StyledDiv = styled.div`
  background-color: cadetblue;
`;
