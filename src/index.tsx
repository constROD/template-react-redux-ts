import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "shared/redux/store";
import { GlobalStyle, theme, ThemeProvider } from "shared/theme";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <GlobalStyle />
          <App />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
