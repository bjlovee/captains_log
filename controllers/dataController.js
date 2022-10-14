
const { update } = require('../models/logs')
const Logs = require('../models/logs')

const dataController = {
    //Index,
    index(req, res, next){
        Logs.find({}, (err, foundLogs) => {
            if(err){
               res.status(400).send({
                msg: err.message
               }) 
            } else {
                res.locals.data.logs = foundLogs
                next()
            }
        })
    },
    //Destroy
    destroy(req, res, next){
        Logs.findByIdAndDelete(req.params.id, (err, deletedLogs) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.logs = deletedLogs
                next()
            }
        })
    },
    //Update
    update(req, res, next){
        req.body.shipIsBroken = req.body.shipIsBroken=== 'on'? true : false;
        Logs.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLogs)=> {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.logs = updatedLogs
                next()
            }
        })
    },
    //Create
    create(req, res, next){
        req.body.shipIsBroken= req.body.shipIsBroken=== 'on'? true : false;
        Logs.create(req.body, (err, createdLogs)=> {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.logs = createdLogs
                next()
            }
        })
    },
    //Edit
    //Show
    show(req, res, next){
        Logs.findById(req.params.id,(err, foundLogs) => {
            if(err){
                res.status(404).send({
                    msg: err.message,
                    output: 'Could not find a Logs with that ID'
                })
            } else {
                res.locals.data.logs = foundLogs
                next()
            }
        })
    }
}

module.exports = dataController