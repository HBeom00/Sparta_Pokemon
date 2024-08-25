import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../mock";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const [param] = useSearchParams();
  const paramId = parseInt(param.get("id"));
  const selectPokemon = MOCK_DATA.find((el) => el.id === paramId);
  if (!selectPokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  return (
    <Wrapper>
      <Container>
        <Img src={selectPokemon.img_url} alt={selectPokemon.korean_name} />
        <Content>{selectPokemon.korean_name}</Content>
        <Content>{selectPokemon.types.join(", ")}</Content>
        <Content>{selectPokemon.description}</Content>
        <Button onClick={() => navigate("/dex")}>돌아가기</Button>
      </Container>
    </Wrapper>
  );
};

export default PokemonDetail;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cadetblue;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightcyan;
  padding: 40px 40px 80px 40px;
  border-radius: 16px;
`;

const Img = styled.img`
  width: 200px;
`;

const Content = styled.div`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: red;
  border: 1px solid red;
  color: white;
  border-radius: 4px;
  width: 100px;
  height: 32px;
  &:hover {
    cursor: pointer;
    color: yellow;
  }
`;
