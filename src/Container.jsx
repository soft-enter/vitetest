import { useState } from "react";

export const Container = () => {
  const [is, setIs] = useState(false);

  const textObject = {
    hidden: "Please show me!",
    shown: "The best thing you did!",
  };
  return (
    <div style={{ padding:"10px" , display:"column", alignContent:"center", justifyContent:'center' }}>
      <button
        onClick={(e) => {
          setIs(!is);
        }}
      >
        {is ? "Hide" : "Show"}
      </button>
      <p>{is ? textObject["shown"] : textObject["hidden"]}</p>
    </div>
  );
};
