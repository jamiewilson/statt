var Handlebars = require("handlebars")

/**
 * Slugify
 * {{slugify title}}
 * ex: "This is the title" to "this-is-the-title"
 *
 * @param {string} str
 */

Handlebars.registerHelper('slugify', function (str) {
  var slug = str.replace(/[^\w\s]+/gi, "").replace(/ +/gi, "-")
  return slug.toLowerCase()
})

/**
 * Add
 * {{add length 1}}
 *
 * @param {number} value
 * @param {number} addition
 */

Handlebars.registerHelper('add', function (value, addition) {
  return value + addition
})

/**
 * Subtract
 * {{subtract length 3}}
 *
 * @param {number} value
 * @param {number} subtraction
 */

Handlebars.registerHelper('subtract', function (value, subtraction) {
  return value - subtraction
})

/**
 * Iterate in reverse
 * {{#each-reverse posts}}
 *
 * @param {array} context
 */

Handlebars.registerHelper('each-reverse', function (context) {
  var options = arguments[arguments.length - 1]
  var ret = ''

  if (context && context.length > 0) {
    for (var i = context.length - 1; i >= 0; i--) {
      ret += options.fn(context[i])
    }
  } else {
    ret = options.inverse(this)
  }
  return ret;
})

/**
 * Capitalize
 * {{capitalize name}}
 * ex: "bob" to "Bob"
 *
 * @param {string} word
 */

Handlebars.registerHelper('capitalize', function (word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
})

/**
 * Title Case
 * {{titleCase title}}
 * ex: "This is the title" to "This Is The Title"
 *
 * @param {string} str
 */

Handlebars.registerHelper('titleCase', function (str) {
  if (typeof str === 'undefined') return '';
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
})
