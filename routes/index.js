const router = require('express').Router();
const apiRoutes = require('./api');
const categoryRoutes = require('./api/category-routes')
const tagRoutes = require('./api/tag-routes')
const productRoutes = require('./api/product-routes')


router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// routes for the models 
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;