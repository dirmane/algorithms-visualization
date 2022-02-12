import react from "react";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfingingVisualizer";
import SortingVisualization from "./SortingVisualization/SortingVIsualization";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <PathfindingVisualizer></PathfindingVisualizer> */}
      <h1>Algorithms Visualization</h1>
      <SortingVisualization></SortingVisualization>
    </div>
  );
}

export default App;
