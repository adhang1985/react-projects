
import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';
import Search from './components/Search';

function App() {

  const [countries,setCountries] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
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
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(true);
    }
  }

  useEffect(() => {
    getAllCountries(URL);
  },[])

  const handleRemoveCountry = (name) => {
      const filteredData = countries.filter((country) => {
        return country.name.common !== name;
      });
      setFilteredCountries(filteredData);
  }

  const handleSearch = (data) => {
    let value = data.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    })

    setFilteredCountries(newCountries);
  }

  return (
    <>
      <h2>Country App</h2>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      <Search onSearch={handleSearch}/>
      {countries && 
        <Countries countryData={filteredCountries} onRemoveCountry={handleRemoveCountry}/>
      }
    </>
  );
}

export default App;
