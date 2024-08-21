// import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

const Dex = () => {
  // const [select, setSelect] = useState([]);

  const onClickAddBtn = (id) => {
    const filterData = MOCK_DATA.filter((el) => el.id === id);
    console.log("선택된 포켓몬 확인", filterData);
    // setSelect([...select, filterData]);
  };

  return (
    <div>
      <Dashboard />
      <PokemonList onClickAddBtn={onClickAddBtn} />
    </div>
  );
};

export default Dex;
