import React from "react";
import BatteriesList from "./components/BatteryList";
import "./styles/main.css";
import BatteryComponent from "./components/BatteryComponent";
// import BatteryConfiguration from "./components/BatteryConfiguration";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <BatteriesList />
        </div>
        {/* <div>
          <BatteryConfiguration />
        </div> */}
      </div>
      <div>
        <BatteryComponent />
      </div>
    </div>
  );
};

export default App;
