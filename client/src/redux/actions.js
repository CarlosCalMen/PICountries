import axios from 'axios';
const GET_COUNTRIES ='GET_COUNTRIES';
const FILTER_BY_CONTINENT ='FILTER_BY_CONTINENT';
const FILTER_BY_ACTIVITY ='FILTER_BY_ACTIVITY';
const ORDER_BY_NAME ='ORDER_BY_NAME';
const ORDER_BY_POPULATION='ORDER_BY_POPULATION';


const getCountries = ()=>{
    return async (dispatch)=>{
        const info = await axios('http://localhost:3001/countries');
        const countries = info.data;
        dispatch ({type:GET_COUNTRIES,payload: countries})
    };
};
const filterByContinent = (dispatch)=>{
     dispatch ({type:FILTER_BY_CONTINENT});
};

const filterByActivity = (dispatch)=>{
     dispatch ({type:FILTER_BY_ACTIVITY});
};

const orderByName = (dispatch)=>{
     dispatch ({type:ORDER_BY_NAME});
};

const orderByPopulation = (dispatch)=>{
     dispatch ({type:ORDER_BY_POPULATION});
};

export {
        GET_COUNTRIES,
        FILTER_BY_CONTINENT,
        FILTER_BY_ACTIVITY,
        ORDER_BY_NAME,
        ORDER_BY_POPULATION,
        getCountries,
        filterByContinent,
        filterByActivity,
        orderByName,
        orderByPopulation,
        };