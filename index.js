/** @jsx dom */
import arrify from 'arrify';
import condenseKeys from 'condense-keys';
import dom from 'magic-virtual-element';
import nouislider from 'nouislider';

const propTypes = {
	class: {
		type: 'string'
	},
	connect: {
		type: 'string'
	},
	max: {
		type: 'number'
	},
	maxDistance: {
		type: 'number'
	},
	min: {
		type: 'number'
	},
	minDistance: {
		type: 'number'
	},
	onChange: {
		type: 'function'
	},
	onEnd: {
		type: 'function'
	},
	onSet: {
		type: 'function'
	},
	onSlide: {
		type: 'function'
	},
	onStart: {
		type: 'function'
	},
	onUpdate: {
		type: 'function'
	},
	rtl: {
		type: 'boolean'
	},
	start: {
		type: 'array'
	},
	step: {
		type: 'number'
	},
	vertical: {
		type: 'boolean'
	}
};

const defaultProps = {
	connect: 'lower',
	max: 100,
	maxDistance: null,
	min: 0,
	minDistance: null,
	rtl: false,
	start: [0],
	step: null,
	vertical: false
};

const parse = arr => arr.map(x => parseFloat(x));

const afterMount = ({props}, el) => {
	const {connect, max, maxDistance, min, minDistance, onChange, onEnd, onSet, onSlide, onStart, onUpdate, rtl, start, step, vertical} = props;
	const arr = arrify(start);

	if (!arr.length) {
		arr.push(min);
	}

	if (connect === true && arr.length !== 2) {
		arr.push(max);
	}

	nouislider.create(el, condenseKeys({
		connect,
		direction: rtl ? 'rtl' : 'ltr',
		limit: maxDistance,
		margin: minDistance,
		orientation: vertical ? 'vertical' : 'horizontal',
		range: {max, min},
		start: arr,
		step
	}));

	if (onChange) {
		el.noUiSlider.on('change', e => onChange(parse(e)));
	}

	if (onEnd) {
		el.noUiSlider.on('end', e => onEnd(parse(e)));
	}

	if (onSet) {
		el.noUiSlider.on('set', e => onSet(parse(e)));
	}

	if (onSlide) {
		el.noUiSlider.on('slide', e => onSlide(parse(e)));
	}

	if (onStart) {
		el.noUiSlider.on('start', e => onStart(parse(e)));
	}

	if (onUpdate) {
		el.noUiSlider.on('update', e => onUpdate(parse(e)));
	}
};

const render = ({props}) => <div class={['Range', props.class]}/>;

export default {afterMount, defaultProps, propTypes, render};
