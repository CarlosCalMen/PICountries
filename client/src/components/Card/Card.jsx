import style from './Card.module.css';
import {Link} from 'react-router-dom';

const Card = ({id,name,continent,flag})=> {
    return (
        <div className={style.card}>
            <div className={style.flag}>
                <img src={flag} alt={`bandera de ${name}`}/>
            </div>
            <div>
                <Link to={`/detail/${id}`}><p>{name}</p></Link>
                <p>{continent}</p>
            </div>
        </div>
    );
};

export default Card;