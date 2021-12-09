/**
import fiId from '../../../metronic_v7.1.6/theme/react/demo2/src/_metronic/_assets/plugins/formvalidation/src/js/validators/id/fiId';
 * EmployeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const scrapeIt = require("scrape-it");


module.exports = {
  author: async function (req, res) {
    let quotes = await Author.find()
    return res.ok(quotes)
  },
};
