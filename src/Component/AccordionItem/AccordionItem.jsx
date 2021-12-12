import React, { useRef } from 'react';

import './_accordionItem.scss';

import products from '../../assets/data/data';

const AccordionItem = ({obj, addToOrder}) => {
	const itemRef = useRef();

	const mouseEnter = (e) => {
		const details = itemRef.current.firstChild.lastChild;
		const translateX = parseInt(window.getComputedStyle(details).width);

		const event = e.target.closest('.accordion-item').firstChild.lastChild;
		if (event) {
			event.style.transition = '.5s ease';
			event.style.transform = `translateX(-${translateX + (translateX / 11)}px)`
		}
	}
	const mouseLeave = (e) => {
		const event = e.target.closest('.accordion-item').firstChild.lastChild;
		if (event) {
			event.style.transition = '.5s ease';
			event.style.transform = `translateX(0px)`
		}
	}


	const accordItem = obj.map(item => {
		console.log(item)
	})


	const accordionItem = obj.map(item => {
		
		const items = Object.keys(products).map(value => {
			
			if (products[value].ticker === item.ticker) {
				return (
					<div className="accordion-item" ref={itemRef} onMouseEnter={(e) => mouseEnter(e)} onMouseLeave={(e) => mouseLeave(e)} key={value} >
							<div className="accordion-img">
								<img src={Object.values(products[value].img)[0]} alt={products[value].title} className='image'/>
									<div className="item-details">
										{products[value].details}
									</div>
							</div>
							<div className="item-info">
								<div className="item-name">
									<h3>{products[value].title}</h3>
								</div>
								<div className="item-bottom">
								<div className="item-price">{products[value].price} ₽</div>
									<button className="accordion-btn" onClick={() => addToOrder(value)}>
										<i className="fas fa-cart-plus"></i>
										<span>В корзину</span></button>
								</div>
							</div>
					</div>
				)
			}
		})
		return items
	})

	return (
		<div className="accordion-item-wrapper">
			{accordionItem}
		</div>
	)
};

export default AccordionItem;