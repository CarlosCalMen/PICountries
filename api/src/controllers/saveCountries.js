const axios = require('axios');
const {Country} = require('../db.js');
const URL= 'https://rest-countries.up.railway.app/v3.1/all';

const getApiData = async ()=>{
    try {
        const {data} = await axios(URL);
        //obtenemos los datos que nos interesen y los colocamos en un array
        let countries = []; 
        countries=data.map((country)=>{
                return ({
                        id:country.cca3,
                        name:country.name.common,
                        flagImage:country.flags.png,
                        continent:country.continents.toString(),
                        capital:country.capital?.toString(),
                        subRegion:country.subregion,
                        area:country.area,
                        population:country.population,
                });
        });
        return countries;
    }
    catch (error) {
        return {error:error.message};   
    }
};

const saveApiData = async()=>{
    try {
        const countries= await getApiData();
        const saveCountries = await Country.bulkCreate(countries);
    } 
    catch (error) {
        return {error:error.message};   
    } 
};

module.exports = {
    saveApiData,
};

// data.forEach((country) => {
//     const {cca3,name,flags,continents,capital,subregion,area,population}=country;
//     const newCountry = {
//                         id:cca3,
//                         name:name.common,
//                         flag:flags.png,
//                         continent:continents.toString(),
//                         capital:capital?.toString(),
//                         subregion,
//                         area,
//                         population,
//                        };
//     countries.push(newCountry);
// });

// await countries.Country.bulkCreate(countries);

// let names=[];
// countries.forEach(country=>{if (!country.flag) names.push(country.name)});
// console.log(names);

// for (let i=0; i<countries.length; i++){
//     const countrie=countries[i];
//    // console.log(countrie);
//     const [pais,created]= await Country.findOrCreate({where:{
//         id:countrie.id,
//         name:countrie.name,
//         flagImage:countrie.flag,
//         continent:countrie.continent,
//         capital:countrie.capital ? countrie.capital :'Sin capital definida',
//         subRegion:countrie.subregion ? countrie.subregion : '',
//         area:countrie.area,
//         population:countrie.population,
//     }});
//     if (!created) console.log(countrie);    
// }; 