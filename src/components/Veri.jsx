import { useContext, useEffect, useState } from "react";
import ApiContext from "../context/ApiContext";
import SearchContext from "../context/Search";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";
const Veri = () => {
  const { api, setApi } = useContext(ApiContext);
  const { search, setSearch } = useContext(SearchContext);
  const { fonksion, setFonksion } = useContext(ApiContext);

  console.log("fonk:", fonksion);
  const desription = fonksion?.map((item, index) => item.main);
  const icon = fonksion?.map((item, index) => item.icon);
  const img = ` http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <Row>
      {api?.map((item, index) => (
        <Card bg={"info"} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              lon:{item.coord.lon} lat:{item.coord.lat}
            </Card.Text>
            <Card.Text>{item.main.temp}°C</Card.Text>
            <Card.Text>{desription}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
};

export default Veri;
