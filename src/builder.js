/*
	  ____  _   _  _  _   ____  ____  ____
	 | _  /| | | || || | |    \|  __||  _ /   
	 | __ \| |_| || || |_|_ -  \  __||  _ \
	 |_____\ ____/|_||_____|___/____||_| \_\

	 Built with ♥ by Kent 'picat' Gruber

*/
function Builder() {
	// Append element to a given element or to document body.
	this.append = function(obj, options = {}) {
		if (typeof obj === "function") {
			obj = obj.call(options)
		} 
		if (options.to) {
			options.to.appendChild(obj)
				return options.to
		} else {
			document.body.append(obj)
				return document.body
		}
	}
	
	// Turns a raw string into a text node.
	this.sanitize = function(string) {
		if (typeof string === "string") {
			string = document.createTextNode(string)
		} 
		return string
	}

	// Creates bold text element. 
	this.bold = function(string, options = {}) {
		var el = this.element("b", options)
			string = this.sanitize(string)
			this.append(string, { to: el })
			return el
	}

	// Creates paragraph text element. 
	this.paragraph = function(string, options = {}) {
		var el = this.element("p", options)
			string = this.sanitize(string)
			this.append(string, { to: el })
			return el
	}

	// Creates div element. 
	this.div = function(options = {}) {
		var el = this.element("div", options)
			return el
	}

	// Creates HTML comment.
	this.comment = function(string) {
		var comment = "<!-- ";
		comment += string;
		comment += " -->";
		return comment;
	}

	// The heart of this module. Creates basically all HTML elements.
	this.element = function(string, options = {}) {
		// create basic element of a given type
		var el = document.createElement(string);
		// special options argument handling
		if (options.class) { 
			if (typeof options.class === 'string') {
				el.className = options.class;
			} else if (typeof options.class[Symbol.iterator] === 'function') {
				var classes = []
					for (c in options.class) {
						classes.push(options.class[c])
					}
				el.className = classes.join(" ")
			}
			delete options.class;
		}
		if (options.events) {
      if (options.events instanceof Object) {
        for (e in options.events) {
          var isFunc = options.events[e] instanceof Function
          if (!isFunc) {
            options.events[e] = function() { options.events[e] }
          }
          el.addEventListener(e, options.events[e]) 
        }
      }
		  delete options.events;
		}
		if (options.text) { 
			el.innerText = options.text;
			delete options.text;
		}
		if (options.html) {
      if (options.html instanceof Array) {
				for (option in options.html) {
          el.appendChild(options.html[option]);
				}
      } else {
				el.appendChild(options.html);
      }
			delete options.html;
		}
		// every other option argument argument handling
		Object.keys(options).forEach(function (option) {
			el.setAttribute(option, options[option])
				//el[option] = options[option];
		})
		// return element
		return el;
	}

	// Creates an HTML heading element of your choice.
	this.heading = function(options = {}) {
		// options argument handling
		if (options.type) {
			var type = options.type 
				delete options.type
		} else {
			var type = 1
		}
		var el = this.element("h" + type, options);
		return el;
	}

	this.header = function(options = {}) {
		return this.element("header", options);
	}

	this.code = function(options = {}) {
		return this.element("code", options);
	}

	this.image = function(options = {}) {
		return this.element("img", options);
	}

	this.lineBreak = function() {
		return this.element("br");
	}

	this.wordBreak = function() {
		return this.element("wbr");
	}

	this.thematicChange = function() {
		return this.element("hr")
	}

	this.hyperlink = function(options = {}) {
		return this.element("a", options);
	}

	this.article = function(options = {}) {
		return this.element("article", options);
	}

	this.aside = function(options = {}) {
		return this.element("aside", options);
	}

	this.audio = function(options = {}) {
		return this.element("audio", options);
	}

	this.base = function(options = {}) {
		return this.element("base", options);
	}

	this.bdi = function(options = {}) {
		return this.element("bdi", options);
	}

	this.bdo = function(options = {}) {
		return this.element("bdo", options);
	}

	this.body = function(options = {}) {
		return this.element("body", options);
	}

	this.button = function(options = {}) {
		return this.element("button", options);
	}

	this.canvas = function(options = {}) {
		return this.element("canvas", options);
	}

	this.caption = function(options = {}) {
		return this.element("caption", options);
	}

	this.cite = function(options = {}) {
		return this.element("cite", options);
	}

	this.cite = function(options = {}) {
		return this.element("cite", options);
	}

	this.col = function(options = {}) {
		return this.element("col", options);
	}

	this.colgroup = function(options = {}) {
		return this.element("colgroup", options);
	}

	this.emphasized = function(options = {}) {
		return this.element("em", options);
	}

	this.embed = function(options = {}) {
		return this.element("embed", options);
	}

	this.fieldset = function(options = {}) {
		return this.element("fieldset", options);
	}

	this.figcaption = function(options = {}) {
		return this.element("figcaption", options);
	}

	this.figure = function(options = {}) {
		return this.element("figure", options);
	}

	this.footer = function(options = {}) {
		return this.element("footer", options);
	}

	this.form = function(options = {}) {
		return this.element("form", options);
	}

	this.head = function(options = {}) {
		return this.element("head", options);
	}

	this.italic = function(options = {}) {
		return this.element("i", options);
	}

	this.iframe = function(options = {}) {
		return this.element("iframe", options);
	}

	this.input = function(options = {}) {
		return this.element("input", options);
	}

	this.kbd = function() {
		return this.element("kbd");
	}

	this.label = function(options = {}) {
		return this.element("label", options);
	}

	this.legend = function(options = {}) {
		return this.element("legend", options);
	}

	this.listItem = function(options = {}) {
		return this.element("li", options);
	}

	this.orderedList= function(options = {}) {
		return this.element("ol", options);
	}

	this.unOrderedList= function(options = {}) {
		return this.element("ul", options);
	}

	this.link = function(options = {}) {
		return this.element("link", options);
	}

	this.main = function(options = {}) {
		return this.element("main", options);
	}

	this.map = function(options = {}) {
		return this.element("map", options);
	}

	this.mark = function(options = {}) {
		return this.element("mark", options);
	}

	this.menu = function(options = {}) {
		return this.element("menu", options);
	}

	this.menuItem = function(options = {}) {
		return this.element("menuitem", options);
	}

	this.menuItem = function(options = {}) {
		return this.element("menuitem", options);
	}

	this.meta = function(options = {}) {
		return this.element("meta", options);
	}

	this.meter = function(options = {}) {
		return this.element("meter", options);
	}

	this.nav = function(options = {}) {
		return this.element("nav", options);
	}

	this.script = function(options = {}) {
		return this.element("script", options);
	}

	this.noScript = function(options = {}) {
		return this.element("noScript", options);
	}

	this.object = function(options = {}) {
		return this.element("object", options);
	}

	this.optionGroup = function(options = {}) {
		return this.element("optgroup", options);
	}

	this.option = function(options = {}) {
		return this.element("option", options);
	}

	this.output = function(options = {}) {
		return this.element("output", options);
	}

	this.parameter = function(options = {}) {
		return this.element("parameter", options);
	}

	this.picture = function(options = {}) {
		return this.element("picture", options);
	}

	this.preformatted = function(options = {}) {
		return this.element("pre", options);
	}

	this.progress = function(options = {}) {
		return this.element("progress", options);
	}

	this.shortQuote = function(options = {}) {
		return this.element("q", options);
	}

	this.ruby = function(options = {}) {
		return this.element("ruby", options);
	}

	this.pronunciation = function(options = {}) {
		return this.element("pronunciation", options);
	}

	this.strike = function(options = {}) {
		return this.element("s", options);
	}

	this.sampleOutput = function(options = {}) {
		return this.element("samp", options);
	}

	this.section = function(options = {}) {
		return this.element("section", options);
	}

	this.select = function(options = {}) {
		return this.element("select", options);
	}

	this.small = function(options = {}) {
		return this.element("small", options);
	}

	this.source = function(options = {}) {
		return this.element("source", options);
	}

	this.span = function(options = {}) {
		return this.element("span", options);
	}

	this.strong = function(options = {}) {
		return this.element("strong", options);
	}

	this.style = function(options = {}) {
		return this.element("style", options);
	}

	this.subScript = function(options = {}) {
		return this.element("sub", options);
	}

	this.superScript = function(options = {}) {
		return this.element("sup", options);
	}

	this.summary = function(options = {}) {
		return this.element("summary", options);
	}

	this.table = function(options = {}) {
		return this.element("table", options);
	}

	this.tableBody = function(options = {}) {
		return this.element("tbody", options);
	}

	this.tableCell = function(options = {}) {
		return this.element("td", options);
	}

	this.tableRow = function(options = {}) {
		return this.element("tr", options);
	}

	this.tableHeader = function(options = {}) {
		return this.element("thead", options);
	}

	this.tableHeaderCell = function(options = {}) {
		return this.element("th", options);
	}

	this.tableFooter = function(options = {}) {
		return this.element("tfoot", options);
	}

	this.time = function(options = {}) {
		return this.element("time", options);
	}

	this.title = function(options = {}) {
		return this.element("title", options);
	}

	this.track = function(options = {}) {
		return this.element("track", options);
	}

	this.underline = function(options = {}) {
		return this.element("u", options);
	}

	this.textArea = function(options = {}) {
		return this.element("textarea", options);
	}

	this.variable = function(options = {}) {
		return this.element("var", options);
	}

	this.video = function(options = {}) {
		return this.element("video", options);
	}

	this.abbreviation = function(options = {}) {
		return this.element("abbr", options);
	}

	this.component = function(process) {
		return process
	}

}
