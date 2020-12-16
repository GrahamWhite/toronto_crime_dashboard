'use strict';


var mongoose = require('mongoose'),
    Task = mongoose.model('Crimes');

exports.get_crime_data = function (req, res) {
    let dataController = require('./data_controller');

    let data = dataController.GetRawCrimeData();

    Promise.resolve(data).then(x => {

        //console.log(x);
        x.forEach(promise => {
            console.log(promise);
        });
        res.json(x);
    });
};


exports.get_crime_address_data = function (req, res) {
    let dataController = require('./data_controller');

    let data = dataController.GetRawAddressData();

    Promise.resolve(data).then(x => {
        x.forEach(promise => {
            Promise.resolve(promise).then(y => {
                console.log(y);

                res.json(y);
            }).catch(e => {
                res.json('error: ');
            })
        });
    })
};


exports.list_all_tasks = function (req, res) {
    Task.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};
exports.create_a_task = function (req, res) {
    var new_task = new Task(req.body);
    new_task.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};
exports.read_a_task = function (req, res) {
    Task.findById(req.params.taskId, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};
exports.update_a_task = function (req, res) {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};
exports.delete_a_task = function (req, res) {


    Task.remove({
        _id: req.params.taskId
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({message: 'Task successfully deleted'});
    });
};

