import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ id, img, name, type, onClickBtn, isSelected }) => {
  const navigate = useNavigate();

  return (
    <CardDiv onClick={() => navigate(`/detail?id=${id}`)}>
      <img src={img} alt={name} />
      <CardP>{name}</CardP>
      <CardP>{type.join(", ")}</CardP>
      <CardButton onClick={(e) => onClickBtn({ e, id })}>
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
  &:hover {
    cursor: pointer;
  }
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
  width: 90px;
  height: 30px;
  &:hover {
    cursor: pointer;
    color: yellow;
  }
`;
