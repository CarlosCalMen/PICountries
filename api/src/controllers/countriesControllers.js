const axios = require('axios');
const {Country,Activity} = require ('../db.js');
const {Op} = require('sequelize');
const URL= 'https://rest-countries.up.railway.app/v3.1/all';

const getApiData = async ()=>{
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

const saveApiData = async()=>{
    const countries= await getApiData();
    const saveCountries = await Country.bulkCreate(countries);
};

const getCountriesByName = async(name)=>{
    let countries=await Country.findAll({where:{name:{[Op.iLike]:`%${name}%`}}});
    return countries;
};

const getAllCountries = async()=>{
    let allCountries = await Country.findAll();
    if (allCountries.length<1){
        await saveApiData();
        allCountries = await Country.findAll()
    };
    return allCountries;
};

const countryById = async (id)=>{
    id=id.toUpperCase();
    const country = await Country.findByPk(id,
        {
            include:{
                model:Activity,
                attributes:["name","difficulty","duration","season"],
                though:{
                    attributes:[],
                }
            }
        });
    if (!country) throw new Error('No existe país con ese ID');
    return country;
};

module.exports = {
                getCountriesByName,
                getAllCountries,
                countryById,
                };

