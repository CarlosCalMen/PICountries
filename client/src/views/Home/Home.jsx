import CardsContainer from '../../components/CardsContainer/CardsContainer.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getCountries} from '../../redux/actions.js'

const Home = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCountries());
    },[]);

    return (
        <div>
            <h1>Esta es la vista de Home</h1>
            <CardsContainer/>
        </div>
    );
};

export default Home;