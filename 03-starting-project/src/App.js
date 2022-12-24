import React from "react";

import NewUser from "./components/Users/NewUser";

function App() {
  const yy = (e) => {
    console.log(e);
  };

  return (
    <div>
      <NewUser onAddUserData={yy} />
    </div>
  );
}

export default App;
