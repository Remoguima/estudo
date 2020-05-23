import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//componente funcional
function App() {
  //ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState("ENTRADA");

  //PALPITE DA MAQUINA
  const [palpite, setPalpite] = useState(150);
  const [numPalpite, setNumPalpite] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpite(1);
    setPalpite(150);
  };
  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a Jogar!</button>;
  }

  const menor = () => {
    setNumPalpite(numPalpite + 1);
    setMax(palpite);
    const proxpalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxpalpite);
  };
  const maior = () => {
    setNumPalpite(numPalpite + 1);
    setMin(palpite);
    const proxpalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxpalpite);
  };
  const acertou = () => {
    setEstado("FIM");
  };
  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o número {palpite} com {numPalpite} chutes!
        </p>
        <button onClick={iniciarJogo}>Jogar Novamente?</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p> O seu numero é {palpite}?</p>

      <button onClick={menor}> Menor!</button>
      <button onClick={acertou}> Acertou!</button>
      <button onClick={maior}> Maior!</button>
      <p>Palpites dados:{numPalpite}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
