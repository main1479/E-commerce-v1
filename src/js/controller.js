import 'core-js/stable';
import 'regenerator-runtime/runtime';
import vendors from './vendors/vendors.js';
import * as model from './model.js';
import { async } from 'regenerator-runtime/runtime';
import JSON from 'url:../products/products.json';

const controlLoadProduct = async function () {
	try {
		await model.getProducts();
	} catch (err) {
		console.error(err);
	}
};


const init = function(){
	controlLoadProduct();
}
init();