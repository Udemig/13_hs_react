import React from "react";
import UseMemoExample from "./components/useMemo";
import ReactMemoExample from "./components/ReactMemoExample";

const App = () => {
  return (
    <div className="container py-5">
      {/* Use Memo */}
      {/* <UseMemoExample /> */}
      {/* React Memo Example */}
      <ReactMemoExample />
    </div>
  );
};

export default App;
