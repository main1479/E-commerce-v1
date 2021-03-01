import { APIReq } from './helper.js';
import {API_URL} from './config.js'
import { async } from 'regenerator-runtime';
export const state = {
	products: [],
	carts: [],
};


export const getProducts = async function(){
	try {
		const data = await APIReq(API_URL);
		console.log(data)
		state.products = data;
	} catch (err) {
		throw err
	}

}