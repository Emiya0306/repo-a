import React from "react";

import ComponentA from "../../components/ComponentA";
import ComponentB from "../../components/ComponentB";
import ComponentC from "../../submodule/src/components/ComponentC";
import ComponentD from "../../submodule/src/components/ComponentD";

export function App() {
  return (
    <div>
      <h1>App</h1>
      <ComponentA />
      <ComponentB />
      <ComponentC />
      <ComponentD />
    </div>
  );
}

export default React.memo(App);
