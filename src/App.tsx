import React, { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { Login } from "./components/Login";
import { User } from "./components/User";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
