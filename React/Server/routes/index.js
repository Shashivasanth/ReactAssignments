var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , message: 'Todays is the first session of express', secondMessage : 'Routers im Express'
});
});

module.exports = router;
