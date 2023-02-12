# Overview #

## The 'a' Macro ##

Links and buttons that take any HTML attributes, has built-in keybindings support and multiple ouput options.

[The 'a' macro](a-macro)

***

## The 'drag' and 'drop' macro set ##

The `drag` and `drop` macros let you create and manage draggable elements in Sugarcube.

[The 'Drag' and 'drop' macro set](drag-drop-macro)

***

## The 'listen' macro ##

A configurable event listener in macro form. Mainly used to run code when an input element is modified.

[The 'Listen' macro](listen-macro)

***

## JS-free settings API ##

Lets you use the built-in Settings API without JavaScript knowledge.

[The settings macro](sc-settings)

***

## The 'on' and 'trigger' macros ##

This pair of macros make up an event-based refresh system. They are useful as a way to update displays but also for running asynchronous code.

[The 'On' and 'trigger' macro set](on-macro)

***

## The 'checkvars' macro ##

This macro brings up a dialog window which displays State variables, settings objects and setup objects.

```html
<<button 'Check the variables!'>>
	<<checkvars>>
<</button>>
```

This in an expansion on TME's original code (available here: https://www.motoslave.net/sugarcube/2/). All credit goes to him.

***

## The 'times' macro ##

Sometimes you just want to run code x times without using the full loop syntax... this macro does exactly that.

### Syntax ###

```html
<<times number ['iterationVariable']>> ...code to run x times... <</times>>
```

By default, the iteration value is `_i`, this can be changed by supplying a quoted variable as second argument.

```html
<<set $amount = 5>>

<<times $amount>>
	<<set $inventory.push(setup.item)>>
<</times>>
```

***

## Style passages in Twine 2 ##

The Twine 2 version of Sugarcube doesn't natively allow for stylesheet passages, causing the main stylesheet to become extremely crowded, making it hard to navigate and edit.
Copying this code in your story Javascript lets you use the `style` tag to create CSS passages.
```js

$(document).ready(() => {
    const stylePassages = Story.lookup("tags", "style");
    let Styles = '';
    
    stylePassages.forEach(psg => Styles += psg.text);

    const styleElem = $("<style id='style-passages' type='text/css'>").text(Styles).appendTo('head');
})
```

***

## Legacy macros ##

`<<input>>` and `<<inputbox>>` => Should use an `<input>` element inside the `<<listen>>` macro instead : [Input macros](input-macros).

The `<<toggle>>` macro, customizable counterpart to SC's `<<cycle>>`. Most of these functionalities can be acchieved with a `<<cycle>>` inside a `<<listen>>` container : [The 'toggle' macro](toggle-macro).

***

#### Like the macros and have a few bucks to spare? ####

You should consider donating to Sugarcube's dev, Thomas Michael Edwards, or to Chris, Klembot, Klimas who manages the Twine application. Both of them have done more for the community than I ever could.

TME: https://www.motoslave.net/sugarcube/2/ (top right).

Klembot: https://www.patreon.com/klembot .

That said, I do have a ko-fi account, any contribution is highly appreciated <3

https://ko-fi.com/malifaciousgames
