import { createContext, useState } from "react";
import MOCK_DATA from "../mock";

// 1. 저장 공간 생성
export const PokemonContext = createContext();

// 2. 저장된 데이터를 원하는 컴포넌트(자식 컴포넌트)에게 보내줄 수 있는 Provider 반환
const PokemonProvider = ({ children }) => {
  const [select, setSelect] = useState([]);

  // 포켓몬 추가 버튼
  const onClickAddBtn = ({ e, id }) => {
    e.stopPropagation();
    if (select.length >= 6) return alert("최대 6개까지 추가 할 수 있습니다.");
    if (select.find((el) => el.id === id))
      return alert("동일한 포켓몬이 존재합니다.");
    const selectedPokemon = MOCK_DATA.find((el) => el.id === id);
    setSelect([...select, selectedPokemon]);
  };

  // 포켓몬 삭제 버튼
  const onClickDeleteBtn = ({ e, id }) => {
    e.stopPropagation();
    const deletePokemon = select.filter((el) => el.id !== id);
    setSelect(deletePokemon);
  };

  return (
    <PokemonContext.Provider
      value={{
        select,
        onClickAddBtn,
        onClickDeleteBtn,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
export default PokemonProvider;
