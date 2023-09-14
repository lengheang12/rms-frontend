// import React from "react";
// import ReactDOM from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";
// import LoginPage from "./page/LoginPage";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <LoginPage />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
// src/index.js

import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import "../src/style/index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
