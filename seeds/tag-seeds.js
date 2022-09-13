const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'electronics',
  },
  {
    tag_name: 'shades',
  },
  {
    tag_name: 'accessories',
  },
  {
    tag_name: 'clothing',
  },
  {
    tag_name: 'shoes',
  },
  {
    tag_name: 'home',
  },
  {
    tag_name: 'computer',
  },
  {
    tag_name: 'phone',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
