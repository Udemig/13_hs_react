// UseRef ve UseEffect Örnekleri
import React from "react";
import UseRef from "./components/UseRef";
import UseRefExample from "./components/UseRefExample";
import UseEffect from "./components/UseEffect";
import User from "./components/User";

const App = () => {
  return (
    <div className="container my-4">
      {/* UseRef */}
      <UseRef />
      {/* Form Example */}

      <UseRefExample />

      {/* Use Effect Example */}
      <UseEffect />

      {/* Use Effect Example-2 */}
      <User />
    </div>
  );
};

export default App;
