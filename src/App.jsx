import { useState } from "react";
import { Container } from "./Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "gray solid 2px",
          borderRadius: "2px",
          minWidth: "400px",
        }}
      >
        <Container />
      </div>
    </div>
  );
}

export default App;
