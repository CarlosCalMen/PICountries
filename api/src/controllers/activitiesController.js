const {Activity} = require('../db.js');

const createActivity = async (name,difficulty,duration,season)=>{

    const [newActivity,created] = await (Activity.findOrCreate({where:{
                                                                name,
                                                                difficulty,
                                                                duration,
                                                                season,
                                                            }}));
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
