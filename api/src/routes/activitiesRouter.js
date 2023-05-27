const {Router} = require ('express');
const {postActivity,getActivities} = require('../handlers/activitiesHandler.js');

const activitiesRouter = Router();

activitiesRouter.post('/',postActivity);

activitiesRouter.get('/',getActivities);

module.exports =  activitiesRouter;