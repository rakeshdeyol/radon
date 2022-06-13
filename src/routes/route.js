const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const orderController = require('../controllers/orderController');
const commonMW = require('../middlewares/commonMiddlewares');

router.post('/createProduct', productController.createProduct);

router.post('/createUser', commonMW.midd, userController.createUser);

router.post(
  '/checkuserandproduct',
  commonMW.midd3,
  commonMW.midd1,
  commonMW.midd2,
  orderController.details
);

module.exports = router;


