# AnimatedIcon - Animated hamburger button
A plugin for [famous-views](http://famous-views.meteor.com).

This plugin brings [famous-animatedIcon](https://github.com/IjzerenHein/famous-animatedIcon) in Blaze or Jade templating for [Meteor.js](https://www.meteor.com).

As the author of the component, [Hein Rutjes](https://github.com/IjzerenHein) says it:
> An animated icon for [famo.us](http://famo.us).

## Usage
```bash
meteor add pierreeric:famous-animatedicon
```

Template in Jade (Blaze works fine too :wink:):
```jade
template(name='animated')
  +Modifier id='button' align='[.5, .5]' origin='[.5, .5]' size='[32, 32]'
    +Surface class='red-button'
      |
    +AnimatedIcon translate='[-12,0,0]'
      |
```

Call logic in CoffeeScript (Javascript works also pretty fine :wink:):
```coffee
Template.animated.rendered = ->
  button = FView.byId 'button'
  console.log 'Button', button
  buttonState = true
  button.children[0].view.on 'click', ->
    button.children[1].view.setShape Number buttonState
    buttonState = not buttonState
```

And add the CSS:
```css
.red-button {
  background-color: #FF4136;
  border-radius: 5px;
}

.line {
  background-color: #FFDC00;
  border-radius: 5px;
  pointer-events: none;
}
```
