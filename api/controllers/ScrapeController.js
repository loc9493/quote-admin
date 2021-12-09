/**
import fiId from '../../../metronic_v7.1.6/theme/react/demo2/src/_metronic/_assets/plugins/formvalidation/src/js/validators/id/fiId';
 * EmployeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const scrapeIt = require("scrape-it");


module.exports = {
  save_posts: async function (req, res) {

    return res.ok()
  },
  clean_category: async function (req, res) {
    let quotes = await Quote.find({ category: null }).limit(10000).intercept(err => err)
    quotes.forEach(async item => {
      sails.log("Tac  Gia:", item.theloai)
      let cats = await Category.find()
      sails.log("Cat: ", cats)
      let author = await Category.findOne({ url: item.theloai }).intercept(err => err)
      if (!author) {
        sails.log("Null")
        // try {
        //   let newAuthor = await Category.create({ url: item.theloai }).intercept(err => err).fetch()
        //   await Quote.updateOne({ id: item.id }).set({ author: newAuthor.id })

        // } catch (error) {
        //   return error
        // }
      } else {
        sails.log(author)
        await Quote.updateOne({ id: item.id }).set({ category: author.id })
      }
    })
    return res.ok(quotes)
  },
  clean_author: async function (req, res) {
    let quotes = await Quote.find({ author: null }).limit(1000).intercept(err => err)
    quotes.forEach(async item => {
      sails.log("Tac  Gia:", item.tacgia)
      let author = await Author.findOne({ name: item.tacgia }).intercept(err => err)
      if (!author) {
        sails.log("Null")
        try {
          let newAuthor = await Author.create({ name: item.tacgia }).intercept(err => err).fetch()
          await Quote.updateOne({ id: item.id }).set({ author: newAuthor.id })

        } catch (error) {
          return error
        }
      } else {
        sails.log(author)
        await Quote.updateOne({ id: item.id }).set({ author: author.id })
      }
    })
    return res.ok(quotes)
  },
  single_category: async function (req, res) {
    let sources = req.body.sources
    let page = req.body.page
    for (let i = 1; i <= page; i++) {
      let url = sources + i.toString()
      sails.log(url)
      scrapeIt(url, {
        quote: {
          listItem: ".quotebox",
          data: {
            content: "p",
            author: ".qtopic a:first-child"
          }
        }
      }).then(async ({
        data,
        response
      }) => {
        data.quote.forEach(async item => {
          const { content, author } = item
          if (content == "") return
          try {
            var oldQuote = await Quote.findOne({ content: content, tacgia: author }).intercept(err => err)
            if (oldQuote == undefined) {
              oldQuote = await Quote.create({
                content,
                tacgia: author,
                theloai: sources
              }).intercept(err => err)
            }
          } catch (err) {
            return err
          }

        });

      },
      )
    }
    return res.ok()
  }

};
