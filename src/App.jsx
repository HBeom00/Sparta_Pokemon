import Router from "./route/Router";
import { Provider } from "react-redux";
import store from "./rtk/store/store";
import { Toaster } from "sonner";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <Toaster
        richColors
        toastOptions={{
          style: { padding: "20px" },
        }}
      />
    </Provider>
  );
};

export default App;
