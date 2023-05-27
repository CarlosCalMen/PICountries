const {getCountriesByName,getAllCountries,countryById} = require('../controllers/countriesControllers.js');


const getCountries =  async (req,res)=>{
    try {
        const {name}=req.query;
        if (name)  return res.status(200).json(await getCountriesByName(name));
        return res.status(200).json(await getAllCountries());
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
};

const getCountryById = async (req,res)=>{
    try {
        const {id}=req.params;
        res.status(200).json(await countryById(id));
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = {
    getCountries,
    getCountryById,
};


