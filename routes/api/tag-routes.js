const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll( {
    include: [{model: Product}],
  }).then (data =>{
    res.status(200).json(data);

  }).catch (err => {
    res.status(500).json(err);
  })


  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
    include: [{ model: Product}],
  }).then(data => {
    res.status(200).json(data);
  }).catch (err => {
    res.status(500).json(err);
  })


  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then(data => {
    res.status(200).json(data);
  }).catch (err => {
    res.status(500).json(err);
  })


  // create a new tag
});

router.put('/:id', (req, res) => {
  Tag.update(req.body,
    {
    where: {
      id: req.params.id,
    },
  },
  )
  .then(function(data){
    res.status(200).json(data);
  }).catch(function(err){
    res.status(500).json(err);

  })


  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  Tag.destroy(
    {
      where: {
        id: req.params.id,
      },
    },
  ).then(data => {
    res.status(200).json(data);
    }).catch (err => {
      res.status(500).json(err);
    })

  // delete on tag by its `id` value
});

module.exports = router;
