import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers";
import App from "./App";

test("renders learn react link", () => {
  const store = createStore(allReducers)
  render(<Provider store={store}>
    <App />
    </Provider>);

});
