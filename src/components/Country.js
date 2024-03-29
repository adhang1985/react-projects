import React from 'react'
import style from "./country.module.css";

function Country(props) {
    
    const { name, flags, capital, population, area } = props.country.country;  
    
    const removeCountry = () => {
        props.onRemoveCountry(name.common);
    }

  return (
    <article className={style.country}>
        <div>
            <img src={flags.png} alt={name.common} className={style.flag} />
            <h3>Name: {name.common}</h3>
            <h3>Population: {population}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Area: {area}</h3>
            <button className={style.btn} onClick={removeCountry}>Remove country</button>
        </div>
    </article>
  )
}

export default Country
