import React, { useState } from "react";
import Battery from "./Battery";
import Transformer from "./Transformer";
import "../styles/BatteryComponent.css";

const BatteryComponent = () => {
  const [batteryA, setBatteryA] = useState<number>(0);
  const [batteryB, setBatteryB] = useState<number>(0);
  const [batteryC, setBatteryC] = useState<number>(0);
  const [batteryD, setBatteryD] = useState<number>(0);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    batteryType: string
  ) => {
    const value = Number(event.target.value);

    if (!isNaN(value) && value >= 0) {
      switch (batteryType) {
        case "A":
          setBatteryA(value);
          break;
        case "B":
          setBatteryB(value);
          break;
        case "C":
          setBatteryC(value);
          break;
        case "D":
          setBatteryD(value);
          break;
        default:
          break;
      }
    }
  };

  const totalBatteries = batteryA + batteryB + batteryC + batteryD;
  const totalTransformer = Math.floor(totalBatteries / 4);

  return (
    <div className="p-4 border rounded shadow-md">
      <h1 className="text-4xl text-center font-bold mb-6 center">
        Battery Configuration
      </h1>
      <div className="container">
        <div className="inputs">
          <label>
            Megapack 2XL:
            <input
              type="number"
              value={batteryA}
              onChange={(e) => handleInputChange(e, "A")}
            />
          </label>
          <label>
            Megapack 2:
            <input
              type="number"
              value={batteryB}
              onChange={(e) => handleInputChange(e, "B")}
            />
          </label>
          <label>
            Megapack:
            <input
              type="number"
              value={batteryC}
              onChange={(e) => handleInputChange(e, "C")}
            />
          </label>
          <label>
            Powerpack:
            <input
              type="number"
              value={batteryD}
              onChange={(e) => handleInputChange(e, "D")}
            />
          </label>
        </div>
        <div className="layout-displays">
          {totalBatteries > 0 ? (
            <div>
              <h2 className="text-4xl text-center font-bold mb-6 center">
                Layout
              </h2>
              <div className="layouts">
                {[...Array(batteryA)].map((_, index) => (
                  <Battery
                    key={index}
                    name="Megapack 2XL"
                    color="blue"
                    width="120px"
                    height="40px"
                  />
                ))}
                {[...Array(batteryB)].map((_, index) => (
                  <Battery
                    key={index}
                    name="Megapack 2"
                    color="yellow"
                    width="100px"
                    height="30px"
                  />
                ))}
                {[...Array(batteryC)].map((_, index) => (
                  <Battery
                    key={index}
                    name="Megapack"
                    color="green"
                    width="90px"
                    height="25px"
                  />
                ))}
                {[...Array(batteryD)].map((_, index) => (
                  <Battery
                    key={index}
                    name="Powerpack"
                    color="blue"
                    width="80px"
                    height="20px"
                  />
                ))}
                {[...Array(totalTransformer)].map((_, index) => (
                  <Transformer key={index} color="00ffec" shape="square" />
                ))}
              </div>
            </div>
          ) : (
            <div>No Batteries Selected</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BatteryComponent;
