const {Country} = require ('../db.js');

const getCountriesByName = (name)=>{
    name=name[0].toUpperCase()+name.slice(1).toLowerCase();
    return `Traemos la info del país ${name}`
};

const getAllCountries = ()=>{
    return 'Aqui obtenemos la información de todos los paises de la BBDD';
};

const countryById = (id)=>{
    return `traemos la info del pais con ID ${id} y sus actividades turisticas`;
};

module.exports = {
                getCountriesByName,
                getAllCountries,
                countryById,
                };

