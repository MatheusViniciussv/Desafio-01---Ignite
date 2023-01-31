import { useState } from "react";
import "./app.styles.css";
import "./global.css";
import Rocket from "./assets/rocket.svg";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div>
          <img src={Rocket} />
          <h1>to</h1>
          <h1>do</h1>
        </div>
      </div>

      <div className="Content">
        <div className="CreateTask">
          <input placeholder="Adicione uma nova tarefa" />
          <button>Criar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
