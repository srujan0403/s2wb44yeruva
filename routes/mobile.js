var express = require('express');
const mobile_controller = require('../controllers/mobile');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('mobiles', { title: 'Search Results' });
});
*/
/* GET detail costume page */ 
router.get('/detail', mobile_controller.mobile_view_one_Page); 

/* GET create costume page */ 
router.get('/create', mobile_controller.mobile_create_Page); 

/* GET costumes */
router.get('/', mobile_controller.mobile_view_all_Page );

/* GET create update page */ 
router.get('/update', mobile_controller.mobile_update_Page); 

/* GET delete costume page */ 
router.get('/delete', mobile_controller.mobile_delete_Page); 

module.exports = router;
