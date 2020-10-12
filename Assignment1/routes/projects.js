var express = require('express');
var router = express.Router();

//Get projects page
router.get('/',function(req, res, next){
    res.render('projects', {
      title: 'projects'
      
    });
});


module.exports = router;