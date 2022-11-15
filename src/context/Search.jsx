import { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("ankara");
  const values = { search, setSearch };
  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
};
export default SearchContext;
