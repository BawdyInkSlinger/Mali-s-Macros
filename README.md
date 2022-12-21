# Overview #

## The 'a' Macro ##

Links and buttons that take any HTML attributes, has built-in keybindings support and multiple ouput options: [The 'a' macro](a-macro/a-macro.md)

***

## The 'drag' and 'drop' macro set ##

Tha `drag` and `drop` macros let you create and manage draggable elements in Sugarcube: ['Drag' and 'drop' macro set](drag-drop-macro/drag-drop-macro.md)

***

## The 'input' and 'inputbox' macros ##

Two flavours of macros to generate highly customizable input elements: [Input macros](input-macros/sc-input.md)

***

## JS-free settings API ##

Lets you use the built-in Settings API without JavaScript knowledge: [The settings macros](sc-settings/sc-settings.md)

***

## The 'on' and 'trigger' macros ##

This pair of macros make up an event-based refresh system. They are useful as a way to update displays but also for running asynchronous code: [On macro](on-macro/on-macro.md)

***

## The 'toggle' Macro ##

A more customizable version of Sugarcube's `<<cycle>>` macro. Each option can run its own code payload and/or execute common code. 

Comes in link and button format : [The 'toggle' macro](toggle-macro/toggle-macro.md)

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

#### Like the macros and have a few bucks to spare? ####

You should consider donating to Sugarcube's dev, Thomas Michael Edwards, or to Chris, Klembot, Klimas who manages the Twine application. Both of them have done more for the community that I ever will.

TME: https://www.motoslave.net/sugarcube/2/ (top right).

Klembot: https://www.patreon.com/klembot .

That said, I do have a ko-fi account, any contribution is highly appreciated <3

https://ko-fi.com/malifaciousgames
