import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../../mock";
// import { toast } from "react-toastify";
import { toast } from "sonner";

const pokemonSlice = createSlice({
  name: "selectPokemon",
  initialState: {
    select: [],
  },
  reducers: {
    addPokemon: (state, action) => {
      if (state.select.length >= 6) {
        toast.error("최대 6개까지 추가 할 수 있습니다.");
        return;
      }
      if (state.select.find((el) => el.id === action.payload)) {
        toast.error("동일한 포켓몬이 존재합니다.");
        return;
      }
      toast.success("포켓몬이 등록되었습니다.");
      const findPokemon = MOCK_DATA.find((el) => el.id === action.payload);
      state.select = [...state.select, findPokemon];
    },
    deletePokemon: (state, action) => {
      toast.success("포켓몬이 삭제되었습니다.");
      const deletePokemon = state.select.filter(
        (el) => el.id !== action.payload
      );
      state.select = deletePokemon;
    },
  },
});
export const { addPokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
