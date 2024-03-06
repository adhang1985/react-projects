
import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';

function App() {

  const [countries,setCountries] = useState([]);
  const [filteredCountries,setFilteredCountries] = useState(countries);
  const [error,setError] = useState(null);

  const URL = "https://restcountries.com/v3.1/all";

  const getAllCountries = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setError(null);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    getAllCountries(URL);
  },[])

  return (
    <>
      <h2>Country App</h2>
      {countries && 
        <Countries countryData={filteredCountries}/>
      }
    </>
  );
}

export default App;
