/**
 * Created by Michael on 16/04/15.
 */
var express = require('express');
var router = express.Router();

var mockData = require('../../Patterns/DataGeneratorModule');

router.get('/:amount/:args', function(req,res,next){

    mockData.getData(req.params.amount, req.params.args, function(arr){

        console.log(arr);
        res.render('table', {title: req.params.args, array: arr});
    })
});

module.exports = router;