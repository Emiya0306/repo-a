import React from "react";

export function ComponentB() {
  return <div>ComponentB</div>;
}

export default React.memo(ComponentB);
