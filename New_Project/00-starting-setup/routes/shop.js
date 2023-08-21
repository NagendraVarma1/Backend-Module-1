const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const productsController = require('../Controllers/products') 

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;
