import Card from '../Card/Card.jsx';
import style from './CardsContainer.module.css';
import { useSelector } from 'react-redux';

// const countries = [
//     {id:'ARG',name:'Argentina',continent:'South America',flag:'white and blue'},
//     {id:'PER',name:'Peru',continent:'South America',flag:'white and red'},
//     {id:'USA',name:'Estados Unidos',continent:'North America',flag:'white, blue and red'}
// ];


const CardsContainer = ()=> {
    const countries = useSelector(state=>state.countries);
    return (
        <div className={style.container}>
           {countries.map(country=>{
                return <Card
                        // key={country.cca3}
                        // name={country.name.common}
                        id={country.id}
                        key={country.id}
                        name={country.name}
                        flag={country.flagImage}
                        continent={country.continent}
                        />;
           })}     
        </div>
    );
};

export default CardsContainer;