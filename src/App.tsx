import { useState, useEffect } from "react";

import Rotas from "./Routes/Rotas";
import { TokenContext } from "./Context/Usercontext/UserContext";

const App = () => {
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    const storage = localStorage.getItem("AUTH_TOKEN");
    setToken(storage);
  }, []);

  return (
    <TokenContext.Provider value={{ token }}>
      <Rotas />
    </TokenContext.Provider>
  );
};

export default App;
