import React from "react";

import Routes from "./Routes";
import AuthContextProvider from "./contexts/Auth";

import "./App.css";

function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}

export default App;
