import PokemonProvider from "./context/store";
import Router from "./route/Router";

const App = () => {
  return (
    <PokemonProvider>
      <Router />
    </PokemonProvider>
  );
};

export default App;
