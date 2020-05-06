import React from "react";

function App() {
  return (
    <div>
      <div>App</div>
      <div>{process.env.REACT_APP_API_URL}</div>
    </div>
  );
}

export default App;
