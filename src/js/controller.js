import 'core-js/stable';
import 'regenerator-runtime/runtime';
import vendors from './vendors/vendors.js';
import * as model from './model.js';
import { async } from 'regenerator-runtime/runtime';
import slideView from './views/sliderView.js';

const controlLoadProduct = async function () {
	try {
		await model.getProducts();	
		slideView.render(model.state.products)
	} catch (err) {
		console.error(err);
	}
};

const init = function () {
	controlLoadProduct();
};
init();
