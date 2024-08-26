import { configureStore } from "@reduxjs/toolkit";
import PokemonSlice from "../slices/pokemonSlice";

const store = configureStore({
  reducer: {
    selectPokemon: PokemonSlice,
  },
});
export default store;
