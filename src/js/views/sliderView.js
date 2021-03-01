import icons from 'url:../../img/icons.svg';
class SliderView {
	_parentEl = document.querySelector('.product__slider');
	_data;

   constructor(){

   }
	render(data) {
		if (!data && Array.isArray(data) && data.length === 0) return;
		this._data = data;
      const markup = this._generateMarkup();
      this._clear()
      this._parentEl.insertAdjacentHTML('afterbegin', markup)
	}

   _clear(){
      this._parentEl.innerHTML = '';
   }

	_generateMarkup() {
		return this._data.map((item) => {
			return `
            <div class="item swiper-slide" data-id="${item.id}">
               <div class="product__image">
                  <img src="${item.image}" alt="${item.title}" />
               </div>
               <h3 class="product__title">${item.title}</h3>
               <h3 class="product__price">$${item.price}</h3>
               <div class="text-right">
                  <button class="btn__add-cart">
                     <span class="btn__add-cart--text">Add to cart</span>
                     <span class="btn__add-cart--icon">
                        <svg>
                           <use xlink:href="${icons}#icon-plus"></use>
                        </svg>
                     </span>
                  </button>
               </div>
            </div>
         `;
		}).join('');
	}

   // _slideItems(){

   // }

}

export default new SliderView();
