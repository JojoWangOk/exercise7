var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
	var newString = md.replace(/@@([\w\<\>\/]{0,})@@/g, '<blink>$1</blink>');
	return newString
}