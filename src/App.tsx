import Rotas from "./Routes/Rotas";
import { TokenContext } from "./Context/Usercontext/UserContext";
import { useState, useEffect } from "react";


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
