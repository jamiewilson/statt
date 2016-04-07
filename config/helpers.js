var Handlebars = require("handlebars");

// slugify — ex: "This is a title" to "this-is-a-title"
Handlebars.registerHelper("slugify", function(component, options) {
  var slug = component.replace(/[^\w\s]+/gi, "").replace(/ +/gi, "-");
  return slug.toLowerCase();
});

// add — increment a given value, ex. {{add length 1}}
Handlebars.registerHelper("add", function (value, addition) {
  return value + addition;
});

// subtract — deccrement a given value, ex. {{subtract length 3}}
Handlebars.registerHelper("subtract", function (value, subtraction) {
  return value - subtraction;
});
