import { useContext, useEffect } from "react";
import ApiContext from "../context/ApiContext";
import SearchContext from "../context/Search";
import Veri from "./Veri";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import { Container } from "react-bootstrap";
const Home = () => {
  const { api, setApi } = useContext(ApiContext);
  const { search, setSearch } = useContext(SearchContext);
  const { fonksion, setFonksion } = useContext(ApiContext);

  const handleClick = (e) => {
    e.preventDefault();

    localData();
  };
  const inputValue = search;
  const API_KEY = "651e83ad65aec8b501e9352fe88cddf2";
  const units = "metric";
  const lang = "tr";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&units=${units}&lang=${lang}`;

  const localData = async () => {
    const data = await axios(url);
    console.log("bak:", data.data);
    setApi([data.data]);
    setFonksion([data.data.weather[0]]);
  };

  // useEffect(() => {
  //   localData();
  // }, []);
  return (
    <Container className=" mt-4">
      <Veri />
      <InputGroup className="mb-3 mt-4" style={{ width: "19rem" }}>
        <Form.Control
          aria-describedby="basic-addon2"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={handleClick}
        >
          ARA
        </Button>
      </InputGroup>
    </Container>
  );
};

export default Home;
