const {Activity} = require('../db.js');

const createActivity = async (name,difficulty,duration,season,countries)=>{

    const [newActivity,created] = await (Activity.findOrCreate({where:{
                                                                name,
                                                                difficulty,
                                                                duration,
                                                                season,
                                                            }}));
    newActivity.addCountry(countries);
    
    return newActivity;
};

const getAllActivities =  async()=>{
    const allActivities = await Activity.findAll();
    return allActivities;
};

module.exports = {
                createActivity,
                getAllActivities,
                }
