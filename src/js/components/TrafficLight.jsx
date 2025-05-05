import React, { useState } from "react";

// Creamos el componente
const TrafficLight = () => {
    const [color, setColor] = useState("red"); // Esto define el color activo
    
    const toggleColor = () => {
        if (color === "red") setColor("yellow");
        else if (color === "yellow") setColor("green");
        else setColor("red");
      };
      

    return (
        <div className="traffic-light">
           <div
            className={`light red ${color === "red" ? "selected" : ""}`}
            onClick={() => setColor("red")}
        ></div>
        <div
            className={`light yellow ${color === "yellow" ? "selected" : ""}`}
            onClick={() => setColor("yellow")}
        ></div>
        <div
            className={`light green ${color === "green" ? "selected" : ""}`}
            onClick={() => setColor("green")}
        ></div>

        <button onClick={toggleColor} style={{ marginTop: "20px" }}>
            Cambiar color
        </button>
        </div>
                

    );
    

};

export default TrafficLight;
