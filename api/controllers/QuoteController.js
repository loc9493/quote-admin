/**
import fiId from '../../../metronic_v7.1.6/theme/react/demo2/src/_metronic/_assets/plugins/formvalidation/src/js/validators/id/fiId';
 * EmployeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const scrapeIt = require("scrape-it");

module.exports = {
  quotes: async function (req, res) {
    const { page, per_page } = req.query
    let quotes = await Quote.find().skip(page * per_page).limit(per_page).populate('author').populate('category')
    return res.ok(quotes)
  },
  top_view_quotes: async function (req, res) {
    let quotes = await Quote.find({ sort: [{ views: 'DESC' }] }).limit(100).populate('author').populate('category')
    return res.ok(quotes)
  },
  author: async function (req, res) {
    let quotes = await Author.find()
    return res.ok(quotes)
  },
  category: async function (req, res) {
    let quotes = await Category.find()
    return res.ok(quotes)
  },
  mark_view: async function (req, res) {
    const { id } = req.query
    let quote = await Quote.findOne({ id })
    if (!quote) {
      return res.notFound()
    } else {
      quote = await Quote.updateOne({ id }).set({ views: quote.views + 1 }).fetch()
    }
    return res.ok(quote)
  },
  like: async function (req, res) {
    const { id } = req.query
    let quote = await Quote.findOne({ id })
    if (!quote) {
      return res.notFound()
    } else {
      quote = await Quote.updateOne({ id }).set({ views: quote.views + 1 }).fetch()
    }
    return res.ok(quote)
  },
};
