import React, { useState } from "react";
import {css} from "@emotion/react";
import MoonLoader from "react-spinners/BarLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#2577BF");

  return (
    
      
      <div className="loading">
        <MoonLoader color={color} loading={loading} css={override} />
      </div>
  );
}

export default Loader;