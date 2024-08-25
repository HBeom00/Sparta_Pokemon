import { configureStore } from "@reduxjs/toolkit";
import PokemonSlice from "../slices/PokemonSlice";

const store = configureStore({
  reducer: {
    selectPokemon: PokemonSlice,
  },
});
export default store;
