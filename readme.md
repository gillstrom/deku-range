# deku-range

> Input range component for Deku


## Install

```
$ npm install --save deku-range
```


## Usage

```js
import Range from 'deku-range';

const render = () => <Range step={5} range={{min: 0, max: 100}} onChange={onChange} start={[10, 90]} connect/>;

export default {render};
```

## Attributes

###	class

Type: `string`  
Default: `'Range'`

Class to be set on element.

###	connect

Type: `string` or `boolean`  
Default: `'lower'`

The connect setting can be used to control the bar between the handles, or the edges of the slider. Use `'lower'` to connect to the lower side, or `'upper'` to connect to the upper side. Setting `true` sets the bar between the handles.

###	maxDistance

Type: `number`

Set the maximum distance between two handles.

###	minDistance

Type: `number`

Set the minimum distance between two handles.

###	onChange
###	onEnd
###	onSet
###	onSlide
###	onStart
###	onUpdate

Type: `function`

Returns current value(s) in an array.

###	range

Type: `object`  
Default: `range: {max: 100,	min: 0}`

Set the minimum and maximum value. See [nouislider/slider-values](http://refreshless.com/nouislider/slider-values/) for more possibilities.

###	rtl

Type: `boolean`  
Default: `false`

Set the direction of the range to right-to-left.

###	start

Type: `array`  
Default: [0]

Sets the starting position of the handles.

###	step

Type: `number`

Set the interval of the range.

###	vertical

Type: `boolean`  
Default: `false`

Set the orientation to vertical


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
