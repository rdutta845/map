var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/map',function(req,res){
	res.render('map');
});
router.get('/map1',function(req, res){
	res.render('map1');
})
router.get('/map2',function(req, res){
	res.render('map2');
})
module.exports = router;
