var express = require('express');
var router = express.Router();

const arm = require('../arm.js')
const pins = { 
		'in': 12,
		'out':16
	}
arm.activatePins(pins)
arm.baseTest()
arm.pinReport()
//arm.testPin('out', 5000)
arm.testPin('in', 5000)
console.log('test pin  def firee')
//arm.allPinsOff()
/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('index', { title: 'Express' });
});
router.get('/test', (req, res, next) =>{
  arm.movePin("in")
})
router.post('/cmd', (req, res, next) => {
	console.log('got this ', req.body.cmd)
	next()
	})
module.exports = router;
