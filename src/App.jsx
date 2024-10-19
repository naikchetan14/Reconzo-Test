import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAlert } from "react-alert";
import countryLogo from "./assets/logo.png"

const App=()=> {
  const [countryData, setCountryData] = useState("");
  const [name, setName] = useState("");
  const alert = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      alert.error("Please write the country name!");
      return;
    }
    const url = `https://restcountries.com/v3.1/name/${name}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      console.log("response", response);

      const json = await response.json();
      if(json.length ===0){
        alert.error("No Data found sorryyy!");
        return;
      }
      setCountryData(json);
      setName("");
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="main-section">
        {/* <div className="logo">
 <img src={countryLogo} alt="country logo"></img>
        </div> */}
        <div className="formDiv">
          <form onSubmit={handleSubmit} className="form">
            <div>
              <input
                type="text"
                value={name}
                placeholder="Search the country"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>

            <div>
              <button type="submit" className="btn">
                Search
              </button>
            </div>
          </form>

          <div className="heading">
    <h1>Country Information</h1>
  </div>
<div className="countries">
  
       {
        countryData && countryData.length > 0 && (
          countryData.map((country, index)=>(
            <>
             <div className="countryData">
              <div key={index}>
                <p>
                  <strong>Common Name:</strong> {country.name.common}
                </p>
                <p>
                  <strong>Official Name:</strong> {country.name.official}
                </p>
                <p>
                  <strong>Population:</strong> {country.population}
                </p>
                <p>
                  <strong>Capital(s):</strong>{" "}
                  {country.capital ? country.capital.join(", ") : "N/A"}
                </p>
              </div>
              </div>

            </>
          ))
        )
       }
      </div>
      </div>
      </div>

    </>
  );
}

export default App;
