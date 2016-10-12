const Handlebars = require('handlebars')

// slugify: "This is a title" to "this-is-a-title"
Handlebars.registerHelper('slugify', (component, options) => {
  let slug = component.replace(/[^\w\s]+/gi, '').replace(/ +/gi, '-')
  slug.toLowerCase()
})

// add: increment a given value, ex. {{add length 1}}
Handlebars.registerHelper('add', (value, addition) => {
  value + addition
})

// subtract: deccrement a given value, ex. {{subtract length 3}}
Handlebars.registerHelper('subtract', (value, subtraction) => {
  value - subtraction
})
