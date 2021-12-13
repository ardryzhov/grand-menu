import React, { useState } from 'react';

import './_accordion.scss';

import products from '../../assets/data/data';
import AccordionItem from '../AccordionItem'

const Accordion = ({accordionTickers, order, setOrder, addToOrder}) => {
	const [selected, setSelected] = useState(null);

	const toggle = i => {
		if (selected === i) {
			return setSelected(null)
		}
		setSelected(i);
	}

	const product = Object.values(products);

	const accordionItem = accordionTickers.map((value, idx) => {
		const obj = [];

		const arr = product.map(item => {
			if (item.ticker === value.ticker) {
				obj.push(item);
			}
	})

	return (
				<div className="accord-item" key={idx}>
					<div className="item-title" onClick={() => toggle(idx)}>
						<h2>{value.ticker}</h2>
						<i 
						className={selected === idx 
						? 'fas fas-accord fa-caret-down dropdown' 
						: 'fas fa-caret-down'}></i>
					</div>
					<div 
					className={selected === idx 
					? 'item-content show' 
					: 'item-content'}>
						<AccordionItem 
						ticker={value.ticker}
						obj={obj}
						order={order}
						setOrder={setOrder}
						addToOrder={addToOrder}/>
					</div>
				</div>
		)
	})	

	return (
		<div className="accrodion-wrapper">	
				{accordionItem}
		</div>
	);
};

export default Accordion;