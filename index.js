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
	maxDistance: {
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
	range: {
		type: 'object'
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
	maxDistance: null,
	minDistance: null,
	range: {
		max: 100,
		min: 0
	},
	rtl: false,
	start: [0],
	step: null,
	vertical: false
};

const parse = arr => arr.map(x => parseFloat(x));

const afterMount = ({props}, el) => {
	const {connect, maxDistance, minDistance, onChange, onEnd, onSet, onSlide, onStart, onUpdate, range, rtl, start, step, vertical} = props;
	const arr = arrify(start);

	if (!arr.length) {
		arr.push(range.min);
	}

	if (connect === true && arr.length !== 2) {
		arr.push(range.max);
	}

	nouislider.create(el, condenseKeys({
		connect,
		direction: rtl ? 'rtl' : 'ltr',
		limit: maxDistance,
		margin: minDistance,
		orientation: vertical ? 'vertical' : 'horizontal',
		range,
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
