import React from "react";

interface BatteryResultProps {
  result: any;
}

const BatteryResult: React.FC<BatteryResultProps> = ({ result }) => {
  return (
    <div className="box">
      {result && (
        <div className="result-container">
          <h3 className="text-lg font-semibold">Result</h3>
          <div className="battery-transformer-container">
            <div className="calculation-result">
              <p>Total site: {result.areaDimensions}</p>
              <p>Total Transformers: {result.totalTransformer}</p>
              <p>Batteries Cost: ${result.batteriesCost}</p>
              <p>Total Cost: ${result.totalCost}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BatteryResult;
