# Fitle
  A way to utilise the HTML <title> in a better way. This small package provides a boiler-plate to add or use pre-existing text effects on web titles; with added callbacks!
  
## How-to? 
  Fitle has following standart options:
  
```js
{
  title: document.title,  // predefined title in the document header
  interval: 300,          // in milliseconds
  fx: shiftTitle          // default effects that slide text to left
}
```

 To start using Fitle with standart options, just import the package into your HTML document and initialize Fitle by:

```js
Fitle.initialize();
```

 To set the callback every time the title is updates, set the onAction function of Fitle by:
```js
Fitle.onAction = function () {
  //do something here
}
```

 To change the text effects of Fitle, create a new _effects method_ and set it as the current effect of Fitle by:
```js
// This is our new effects method, it requires two parameters:
// a as the default title and b as the current title.
function myNewEffect(a, b) {
  . . .
  return newTitle;
}

Fitle.loadEffect(myNewEffect);
```

## Dependancy
None.
