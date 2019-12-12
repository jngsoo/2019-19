const { client } = require('./elastic_connection.js');

async function get_filtering(column, order, size) {
  return await client
    .search({
      index: process.env.index,
      type: '_doc',
      sort: [`${column} : ${order}`],
      body: {
        size: size,
        query: {
          match_all: {},
        },
      },
    })
    .then(
      function(resp) {
        return resp.hits.hits;
      },
      function(err) {
        return err;
      },
    );
}

/**
 *
 * @param {*} category_list
 * @param {*} order
 * @param {*} size
 * @param {*} option ex)  [{ reg_date: { order: 'desc' } }]
 */
async function get_category(category_list, order, size, sort) {
  return await client
    .search({
      index: process.env.index,
      type: '_doc',
      body: {
        sort: sort,
        size: size,
        query: {
          match: {
            category: {
              query: category_list.join(' '),
              operator: 'or',
            },
          },
        },
      },
    })
    .then(
      function(resp) {
        return resp.hits.hits;
      },
      function(err) {
        return err;
      },
    );
  return data;
}

async function get_search(column, target, order, size) {
  return await client
    .search({
      index: process.env.index,
      type: '_doc',
      sort: [`${column} : ${order}`],
      body: {
        size: size,
        query: {
          match: {
            [column]: target,
          },
        },
      },
    })
    .then(
      function(resp) {
        return resp.hits.hits;
      },
      function(err) {
        return err;
      },
    );
}

module.exports.get_filtering = get_filtering;
module.exports.get_category = get_category;
module.exports.get_search = get_search;
