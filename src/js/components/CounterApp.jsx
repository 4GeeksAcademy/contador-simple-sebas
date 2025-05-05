import React, { useState, useEffect, useRef } from "react";
import { FaClock } from "react-icons/fa";

const CounterApp = () => {
  const [seconds, setSeconds] = useState(0); // estado principal
  const [isPaused, setIsPaused] = useState(false); // para pausar
  const intervalRef = useRef(null); // referencia al setInterval

  // Inicia o detiene el contador según isPaused
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setSeconds((prev) => prev + 1);
      }
    }, 1000);

    return () => clearInterval(intervalRef.current); // limpieza
  }, [isPaused]);

  // convertir segundos a string con 6 dígitos
  const digits = String(seconds).padStart(6, "0").split("");

  // funciones para botones
  const pauseCounter = () => setIsPaused(true);
  const resumeCounter = () => setIsPaused(false);
  const resetCounter = () => setSeconds(0);

  return (
    <div style={{ textAlign: "center" }}>
      {/* Contador visual */}
      <div className="counter-container">
        <div className="digit-box icon">
          <FaClock />
        </div>
        {digits.map((digit, index) => (
          <div key={index} className="digit-box">
            {digit}
          </div>
        ))}
      </div>

      {/* Botones */}
      <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={pauseCounter}>Pausar</button>
        <button onClick={resumeCounter}>Reanudar</button>
        <button onClick={resetCounter}>Reiniciar</button>
      </div>
    </div>
  );
};

export default CounterApp;
