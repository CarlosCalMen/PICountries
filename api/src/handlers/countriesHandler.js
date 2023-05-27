const {getCountriesByName,getAllCountries,countryById} = require('../controllers/countriesControllers.js');


const getCountries =  (req,res)=>{
    try {
        const {name}=req.query;
        if (name)  return res.status(200).json(getCountriesByName(name));
        return res.status(200).json(getAllCountries());
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
};

const getCountryById = (req,res)=>{
    try {
        const {id}=req.params;
        res.status(200).json(countryById(id));
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = {
    getCountries,
    getCountryById,
};


