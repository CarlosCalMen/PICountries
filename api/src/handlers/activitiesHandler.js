const {createActivity,getAllActivities} = require ('../controllers/activitiesController.js');


const postActivity =async (req,res)=>{
    try {
        const {name,difficulty,duration,season} = req.body;
        if (!name || !difficulty||!season) throw new Error ('Faltan datos');
            return res.status(200).json(await createActivity(name,difficulty,duration,season));
        } 
        catch (error) {
            return res.status(400).json({error:error.message});    
        }
};
    
const getActivities = async (req, res)=>{
    try {
        return res.status(200).json(await getAllActivities());
    } 
    catch (error) {
        return res.status(400).json({error:error.message});    
    }
};


module.exports = {
                postActivity,
                getActivities,
            };