import axios from 'axios';
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import style from './Detail.module.css';
const URL_BASE = 'http://localhost:3001';

const Detail = ()=>{
    const {id} = useParams();
    const [country,setCountry] = useState({});
    useEffect (()=>{
        axios(`${URL_BASE}/countries/${id}`)
        .then(({data})=>{
                if(data.name) setCountry(data);
                else window.alert(`No existe el pais con el id ${id}`);
        });
        return setCountry({});
    },[id])
    return (
        <div>
            <h1>Esta es la vista de Detail</h1>
            <div className={style.flagContainer}>
                <img src={country.flagImage} alt={`Bandera de ${country?.name}`} />
            </div>
            <div>
                <h2>Código: {country.id}</h2>
                <h2>País: {country.name}</h2>
                <h2>Continente: {country.continent}</h2>
                <h2>Capital: {country.capital}</h2>
                <h2>Sub Región: {country.subRegion}</h2>
                <h2>Area: {country.area} km2</h2>
                <h2>Población: {country.population}</h2>
            </div>
        </div>
    );
};

export default Detail;
