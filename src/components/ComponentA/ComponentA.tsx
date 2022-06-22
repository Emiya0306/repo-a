import React from "react";

export function ComponentA() {
  return <div>ComponentA</div>;
}

export default React.memo(ComponentA);
