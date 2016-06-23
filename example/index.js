/** @jsx dom */
import dom from 'magic-virtual-element';
import {render, tree} from 'deku';
import Range from '../';

const onChange = res => console.log(res);

const app = tree(<Range step={5} range={{min: 0, max: 100}} onChange={onChange} start={[10, 90]} connect/>);

render(app, document.body);
