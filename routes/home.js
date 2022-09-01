const express = require('express');
const app = express();
app.post("queue", (req, res) => {
    const order = req.grab;
    res.send({
        order
    });
});

const {homepageView, menuView, queueView} = require('../controllers/orderController');
const router = express.Router();



router.get('/', homepageView);
router.get('/menu',menuView);
router.get('/queue',queueView);
module.exports = router;