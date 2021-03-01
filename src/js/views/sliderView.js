class SliderView {
	_parentEl = document.querySelector('.product__slider');
	_data;
	render(data) {
		if (!data && Array.isArray(data) && data.length === 0) return;
		this._data = data;
	}

	_generateMarkup() {
		return this._data.map((item) => {
			return `
            <div class="item">
               <div class="product__image">
                  <img src="src/img/product-1.png" alt="product title" />
               </div>
               <h3 class="product__title">MISTERHULT Pendant lamp</h3>
               <h3 class="product__price">$45.95</h3>
               <div class="text-right">
                  <button class="btn__add-cart">
                     <span class="btn__add-cart--text">Add to cart</span>
                     <span class="btn__add-cart--icon">
                        <svg>
                           <use xlink:href="src/img/icons.svg#icon-plus"></use>
                        </svg>
                     </span>
                  </button>
               </div>
            </div>
         `;
		});
	}
}
