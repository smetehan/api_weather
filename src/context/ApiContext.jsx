import { createContext, useState } from "react";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [api, setApi] = useState([]);
  const [fonksion, setFonksion] = useState([]);
  const values = { api, setApi, fonksion, setFonksion };
  return <ApiContext.Provider value={values}>{children}</ApiContext.Provider>;
};
export default ApiContext;
