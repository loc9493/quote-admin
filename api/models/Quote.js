/**
import default from '../../../../rails/webapp/app/react/shared/NotificationSetting/en';
 * Employee.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    content: {
      type: 'string',
      columnType: 'text',
      required: true,
    },
    tacgia: {
      type: 'string',
      defaultsTo: "Khuyết Danh"
    },
    theloai: {
      type: 'string',
      defaultsTo: "Sưu Tầm"
    },
    category: {
      model: 'category'
    },
    author: {
      model: 'author'
    },
    views: {
      type: 'number',
      defaultsTo: 0
    },
    tags: {
      collection: 'tag',
      via: 'quotes'
    },
    likes: {
      collection: 'like',
      via: 'quote'
    }
  },

};
