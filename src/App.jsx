import { useState } from "react";

import "./App.css";
import { AutoHome } from "/src/Functional/AutoHome";

export const apiKey = "f8cef82f-8a9a-4ee4-91dd-cd7b73896a16";

export const baseUrl =
  "https://api.mercedes-benz.com/vehicle_images/v2/vehicles/W1N4N4HB2SJ643813";

const myHeaders = {
  "Content-Type": "application/json",
};

function App() {
  const [mercedes, setMercedes] = useState([]);

  const raw = "";

  const requestOptions = {
    method: "GET",
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://api.mercedes-benz.com/vehicle_images/v2/vehicles/W1N4N4HB2SJ643813?",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      return result;
    })
    .then((data) => {
      console.log(data);
      setMercedes(data);
    })
    .catch((error) => console.log("error", error));

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <AutoHome />
    </>
  );
}
export default App;
