import Router from "./route/Router";
import { Provider } from "react-redux";
import store from "./rtk/store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <ToastContainer position="bottom-right" autoClose={1000} />
    </Provider>
  );
};

export default App;
