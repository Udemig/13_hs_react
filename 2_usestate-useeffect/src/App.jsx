import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import { useState } from "react";

function App() {
  const [showClassComponent, setShowClassComponent] = useState(false);
  const [showFunctionComponent, setShowFunctionComponent] = useState(false);

  return (
    <div className="app">
      <div className="container my-5">
        <div className="d-flex gap-3">
          <button
            className="btn btn-info"
            onClick={() => setShowClassComponent(!showClassComponent)}
          >
            {showClassComponent
              ? "Class Componenti Gizle"
              : "Class Componenti Göster"}
          </button>
          <button
            className="btn btn-warning"
            onClick={() => setShowFunctionComponent(!showFunctionComponent)}
          >
            {showFunctionComponent
              ? "Function Componenti Gizle"
              : "Function Componenti Göster"}
          </button>
        </div>
        {showFunctionComponent && <FunctionComponent />}

        {showClassComponent && <ClassComponent />}
      </div>
    </div>
  );
}

export default App;
