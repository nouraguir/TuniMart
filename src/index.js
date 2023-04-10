import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ProductDetails from "./pages/ProductDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
  <ToastContainer
    theme="dark"
    position="top-right"
    autoClose={3000}
    // hideProgressBar={false}
    // newestOnTop={false}
    closeOnClick
    // rtl={false}
    // pauseOnFocusLoss
    // draggable
    pauseOnHover={false}
    />
  <App />
  </Provider>
  </BrowserRouter>
  
   
  </React.StrictMode>
);
