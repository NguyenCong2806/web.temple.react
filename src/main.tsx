import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "swiper/css";
import "animate.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./routers/index.tsx";
import { Provider } from "react-redux";
import store from "./stores/index.ts";
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
