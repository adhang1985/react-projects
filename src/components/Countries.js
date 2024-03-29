/* eslint-disable no-unused-vars */
import React from 'react'
import {v4 as uuidv4} from "uuid";
import Country from './Country';
import style from "./countries.module.css";

function Countries(props) {
  return (
   <section className={style.countries}>
     {
        props.countryData &&
        props.countryData.map((country) => {
            const newCountry = {country,id:uuidv4()};
            return (
                <Country key={newCountry.id} country={newCountry} onRemoveCountry={props.onRemoveCountry}/>
            )
        })
     }
   </section>
  )
}

export default Countries
