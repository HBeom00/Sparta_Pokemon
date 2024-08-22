import { styled } from "styled-components";

const PokemonCard = ({ id, img, name, type, onClickBtn, isSelected }) => {
  return (
    <CardDiv>
      <img src={img} alt="pokemon_img" />
      <CardP>{name}</CardP>
      <CardP>{type.join(", ")}</CardP>
      <CardButton onClick={() => onClickBtn(id)}>
        {isSelected ? "추가" : "삭제"}
      </CardButton>
    </CardDiv>
  );
};

export default PokemonCard;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: powderblue;
  width: calc(16.77% - 18px);
  height: 220px;
  border-radius: 16px;
`;

const CardP = styled.p`
  margin-bottom: 10px;
  font-weight: 900;
`;

const CardButton = styled.button`
  background-color: red;
  border: 1px solid red;
  color: white;
  border-radius: 4px;
  width: 80px;
  height: 24px;
  &:hover {
    cursor: pointer;
    color: yellow;
  }
`;
