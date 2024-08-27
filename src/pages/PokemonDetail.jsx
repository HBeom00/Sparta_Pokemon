import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../mock";
import { addPokemon } from "../rtk/slices/pokemonSlice";
import { useDispatch } from "react-redux";
import Dashboard from "../components/Dashboard";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const [param] = useSearchParams();
  const dispatch = useDispatch();
  const paramId = parseInt(param.get("id"));
  const selectPokemon = MOCK_DATA.find((el) => el.id === paramId);
  if (!selectPokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  const onClickAddBtn = (paramId) => {
    dispatch(addPokemon(paramId));
  };

  return (
    <Wrapper>
      <Dashboard />
      <Container>
        <div style={{ borderRight: "3px solid black", marginRight: "40px" }}>
          <Img src={selectPokemon.img_url} alt={selectPokemon.korean_name} />
        </div>
        <div>
          <Content>{selectPokemon.korean_name}</Content>
          <Content>{selectPokemon.types.join(", ")}</Content>
          <Content>{selectPokemon.description}</Content>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            position: "absolute",
            left: "3%",
            bottom: "14%",
          }}
        >
          <Button onClick={() => navigate("/dex")}>돌아가기</Button>
          <Button onClick={() => onClickAddBtn(paramId)}>추가</Button>
        </div>
      </Container>
    </Wrapper>
  );
};

export default PokemonDetail;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: cadetblue;
`;

const Container = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightcyan;
  padding: 40px;
  border-radius: 16px;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 200px;
  margin-right: 20px;
  margin-bottom: 30px;
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
