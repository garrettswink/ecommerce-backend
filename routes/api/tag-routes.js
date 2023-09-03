const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Get all tags
router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll({ include: [{ model: Product }] });
    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one tag by ID
router.get('/:id', async (req, res) => {
  try {
  const oneTag = await Tag.findByPk(req.params.id, { include: [{ model: Product }] });
  res.status(200).json(oneTag);
} catch (err) {
  res.status(500).json(err);
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a tag by its `id` value
router.put('/:id', async (req, res) => {
  try {
  const updateTag = await Tag.update(req.body, {
    where: { id: req.params.id },
  });
  res.status(200).json(updateTag);
} catch (err) {
  res.status(500).json(err);
  }
});

// Delete a tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(deleteTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
