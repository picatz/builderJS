<div align="center">

# BuilderJS

> 👷  Simple, composable user interface builder.

</div>

## Installation

```shell
git clone https://github.com/picatz/builderJS
```
## Quick Example

How about a clock?

```javascript
var b = new Builder();

function getTime() {
  return new Date().toLocaleString().split(", ")[1]
}

var currentTime = b.heading({
  text: getTime(),
  events: {
    tick: function() { currentTime.innerText = getTime() }
  }
})

b.append(currentTime)
```

## Usage

Create a builder object called `b` using the `Builder` module.

```javascript
var b = new Builder();
```

### Fun with `function()`'s
The API is both fun and functional in nature. All the functions in builderJS come from the `Builder` module; and most functions within the module rely on the `element()` function.

##### Input
Create a simple [`div`](https://www.w3schools.com/tags/tag_div.asp) element.
```javascript
var divElement = b.element("div")
```
##### Output
Created HTML from previous function ( not yet in DOM ).
```html
<div></div>
```
##### Further Details
If you want to append the HTML to the document body:
```javascript
b.append(divElement)
```
You could also skip making it a seperate variable and just add the output of the function right away.
```javascript
b.append(b.element("div"))
```
Now the output of the `element()` function has been appended to the document body.

### Building Components
We could build a simple component function that utilizes the various builderJS functions.

##### Input
Create a slightly more complex [`div`](https://www.w3schools.com/tags/tag_div.asp) element using the [component](https://github.com/picatz/builderJS/wiki/Component-Style) style.
```javascript
// create a basic dynamic component
var dynamicHeader = b.component({ 
  render: function(options = {}) {
    return b.div({
      html: b.heading({ 
        text: (options.text || "Example")
      })
    })
  }
})

// build the header and append it to the document body
b.append(dynamicHeader.render({ text: "Custom Text!" }))
```

## Full HTML Example

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
  </head>
  <body>
    <script src="builder.js"></script>
    <script>
      // Builder module
      var b = new Builder();
    
      // build a static header in a div
      var staticHeader = b.div({ 
        id: "view", 
        class: "text-center", 
        html: b.header({ 
          html: [ 
            b.heading({ text: "Example Application" }),
            b.paragraph(b.bold(b.sanitize("Built with ♥")))
          ]
        })
      })

      // add the div to the document body
      b.append(staticHeader)
    </script>
  </body>
</html>
```

## License

The project is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
