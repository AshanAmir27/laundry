import React from "react";

import ProcessSubComponent from "./ProcessSubComponent";

function Process({ heading, ProcessSubcomponent = true, ProcessBackImage = true }) {
  return (
    <>
      

      {/* Conditional Rendering for ProcessSubComponent */}
      {ProcessSubcomponent && <ProcessSubComponent />}
    </>
  );
}

export default Process;
