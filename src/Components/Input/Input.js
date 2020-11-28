import React, { useState } from "react";
import ClassProps from "../Class/ClassProps";
import FunctionProps from "../Function/FunctionProps";

function Input() {
  const [state, setState] = useState("");
  const [render, setRender] = useState("");
  return (
    <React.Fragment>
      <input
        type="text"
        value={state}
        onChange={e => {
          setState(e.target.value);
        }}
      />
      <button style={{margin:'0px 5px'}} onClick={() => setRender(state)}>Sent props</button>
      <button style={{margin:'0px 5px'}} onClick={() => {setRender("");setState("")}}>Reset</button>
      {render !== ""? (
        <div>
          <ClassProps value={render} />
          <hr />
          <FunctionProps value={render} />
        </div>
      ):null}
    </React.Fragment>
  );
}

export default Input;
