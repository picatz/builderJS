<div align="center">

# builderJS

> 👷  Simple, composable HTML builder.

</div>

## Installation

```shell
git clone https://github.com/picatz/builderJS
```

## Usage

Create a builder object called `b` using the `Builder` module.

```javascript
var b = new Builder();
```

### Fun with `function()`'s
The API is both fun and functional in nature. All the functions in builderJS come from the `Builder` module; and most functions within the module rely on the `element()` function.

##### Intput
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

##### Intput
Create a slightly more complex [`div`](https://www.w3schools.com/tags/tag_div.asp) element.
```javascript
// create a basic static component set with a regular component
var dynamicHeader = b.component({ 
  build: function(options = {}) {
    var heading = b.heading({ text: (options.text || "Example")})
    var header  = b.header({ html: heading })
    var div     = b.div({ html: header })
    return div
  }
})
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
    
      // lets built a static header in a div
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
