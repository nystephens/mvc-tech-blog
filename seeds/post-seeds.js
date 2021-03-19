const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_text: 'Nam faucibus, magna vel elementum maximus, magna tellus tincidunt arcu, eu semper justo augue eget est.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'Donec purus arcu, ultricies dapibus ante et, ullamcorper porta eros.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text: 'Quisque nisi ante, auctor sed ex quis, consectetur tempor lacus.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_text: 'Nulla mollis placerat tellus.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_text: 'Nulla mollis placerat tellus.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_text: 'Nunc ut ornare metus.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: ' Sed tempus massa quis augue bibendum, vitae consectetur tellus imperdiet.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'Praesent volutpat a neque et vestibulum.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_text: 'Cras tincidunt, mauris quis commodo lobortis, mauris augue tempor nisl, eget sagittis magna ex sed elit.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_text: 'Ut quam erat, auctor sit amet bibendum ut, posuere ut neque.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'Vestibulum bibendum libero at mi euismod, et tincidunt arcu maximus.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_text: 'Donec purus arcu, ultricies dapibus ante et, ullamcorper porta eros.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_text: 'Aliquam nibh nibh, sagittis quis est sed, pellentesque finibus nisl.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_text: 'Cras tincidunt, mauris quis commodo lobortis, mauris augue tempor nisl, eget sagittis magna ex sed elit.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_text: 'Cras tincidunt, mauris quis commodo lobortis, mauris augue tempor nisl, eget sagittis magna ex sed elit.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_text: 'Etiam accumsan tincidunt consectetur.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'Donec purus arcu, ultricies dapibus ante et, ullamcorper porta eros.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_text: 'In ac suscipit turpis.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_text: 'Nulla facilisi.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_text: 'Cras tincidunt, mauris quis commodo lobortis, mauris augue tempor nisl, eget sagittis magna ex sed elit.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
