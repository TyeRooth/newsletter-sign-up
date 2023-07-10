import { useState } from "react";
import SignUp from "./Components/SignUp";
import Thanks from "./Components/Thanks";

function App() {
  // eslint-disable-next-line
  const [email, setEmail] = useState(null);

  if (email) {
    return <Thanks />;
  } else {
    return (
      <div className="content-container">
        <SignUp />
        <img alt="illustration" />
      </div>
    );
  }
}

export default App;
