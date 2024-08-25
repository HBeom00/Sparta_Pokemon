import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../../mock";

const pokemonSlice = createSlice({
  name: "selectPokemon",
  initialState: {
    select: [],
  },
  reducers: {
    addPokemon: (state, action) => {
      if (state.select.length >= 6)
        return alert("최대 6개까지 추가 할 수 있습니다.");
      if (state.select.find((el) => el.id === action.payload))
        return alert("동일한 포켓몬이 존재합니다.");
      const findPokemon = MOCK_DATA.find((el) => el.id === action.payload);
      state.select = [...state.select, findPokemon];
    },
    deletePokemon: (state, action) => {
      const deletePokemon = state.select.filter(
        (el) => el.id !== action.payload
      );
      state.select = deletePokemon;
    },
  },
});
export const { addPokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
