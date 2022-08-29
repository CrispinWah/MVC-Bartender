const express = require('express');
const app = express();


const {homepageView, menuView} = require('../controllers/orderController');
const router = express.Router();
router.get('/', homepageView);
router.get('/menu',menuView);
module.exports = router;