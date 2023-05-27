const {Country} = require('../db.js');
//const {}

//include de sequelize

const getCountryById = async(req, res)=>{
try {
    const {id} = req.params;
    if (!id) res.status(401).send('No existe el Id de país');
    const country=Country.findByPk(id);
    let infoCountry=[];
    infoCountry.push(country);

    // es necesario un modelo para la tabla itermedia?
    // obtener registros asociados a ese id de tabla intermedia para asosciar la infode actividades en su detail
} 
catch (error) {
    res.status(500).json({ error: error.message });
}    

};

module.exports = {
    getCountryById,
};