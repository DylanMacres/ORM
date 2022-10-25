const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try{
    const data = await Category.findAll({
      include: [{ model: Product }],
    })
    res.json(data);
  }
  catch(err) {
    res.status(420).json(err)
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const data = await Category.findByPk(req.params.id, {
      include: [{ model: Product}],
    }); 
    if(!data) {
      res.status(404).json({message: "Sorry couldn't find that category!"});
      return;
    }
    res.json(data)
  }catch(err){
    res.status(420).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
try{
  const data = await Category.create({
    category_name: req.body.category_name,
  });
  res.json(data);

}catch(err) {
  res.status(420).json(err);
}
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const data = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json(data)
  } catch(err){
    res.status(420).json(err)
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
