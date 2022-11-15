import "./App.css";
import Home from "./components/Home";
import { ApiProvider } from "./context/ApiContext";
import { SearchProvider } from "./context/Search";

function App() {
  return (
    <SearchProvider>
      <ApiProvider>
        <Home />
      </ApiProvider>
    </SearchProvider>
  );
}

export default App;
