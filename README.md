<div align="center">
# builderJS

> Simple, composable HTML builder.
</div>

## Installation

```shell
git clone https://github.com/picatz/builderJS
```

## Usage

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
  </head>
  <body>
    <script src="/path/to/builder.js"></script>
    <script>
      // Builder module
      var b = new Builder();
      
      // example builder function to build a simple html component 
      var buildComponent = function() {
        // create div with id "view" using the "text-center" boostrap class
        var div = b.div({ id: "view", class: "text-center" })
        // create a header tag that contains an h1 heading 
        var header = b.header({ 
          html: b.heading({ text: "Example Application"})
         })
        // add some love in a paragraph that's bold
        var paragraph = b.paragraph(b.bold(b.sanitize("Built with ♥")))
        // put them together
        b.append(header, { to: div })
        b.append(paragraph, { to: header })
        // return the freshly built div
        return div
      }
      
      // create div component and add it to the document body
      b.append(buildComponent())
    </script>
  </body>
</html>
```

## License

The project is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
