import * as helper from './helper';
import Renderer from 'lib/render/grid';

export const renderGrid = (resolution = 10) => {
	const renderer = new Renderer(helper.getContext(), resolution);
	renderer.dotGrid();
}