import React, { useState } from 'react';
import './App.scss';
import Header from './Component/Header';
import Accordion from './Component/Accordion';
import OrderTable from './Component/OrderTable';

function App() {
	const [accordionTickers] = useState([
		{ticker: 'Акция'},
		{ticker: 'Еда'},
		{ticker: 'Напитки'},
		{ticker: 'Закуски'},
	]);
	const [order, setOrder] = useState({});

	const addToOrder = (item) => {
		const ordered = {...order};
		ordered[item] = ordered[item] + 1 || 1;
		setOrder(ordered);
	}

	const removeToOrder = (item) => {
		const ordered = {...order};
		ordered[item] = ordered[item] - 1 || 1;
		setOrder(ordered);
	}

	const deleteProduct = (item) => {
		const ordered = {...order};
		delete ordered[item];
		setOrder(ordered);
	}


	return (
		<>
			<Header/>
			<main id="main">
				<div className="accord">
					<Accordion 
					accordionTickers={accordionTickers}
					order={order}
					setOrder={setOrder}
					addToOrder={addToOrder}/>
				</div>

				<div className="order-table">
					<OrderTable />
				</div>

			</main>
		</>
	)
}

export default App;
