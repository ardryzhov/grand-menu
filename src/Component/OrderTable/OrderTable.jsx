import React, { useRef } from 'react';

import './_orderTable.scss';

import products from '../../assets/data/data';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Shipping from '../Shipping';

const OrderTable = ({order, setOrder, addToOrder, removeToOrder, deleteProduct, openModal, closeModal}) => {

	const prd = useRef();
	const orderIds = Object.keys(order);

	const total = orderIds.reduce((prevTotal, val) => {
		const prod = products[val];
		const count = order[val];
		return prevTotal + prod.price * count;
	}, 0);

	const renderOrder = (val, i) => {
		const prod = products[val];
		const count = order[val];

		return (
			<CSSTransition
			classNames='order__item'
			timeout={{enter: 500, exit: 500}}
			key={val}>
			<div className="order-table-item-wrapper" key={i} ref={prd}>
				<div className="order-item-left-side">
					<div className="order-table-item-info">
						<div className="order-item-title">
							<span>{prod.title}</span>
						</div>
						<span className="order-item-price">
							<TransitionGroup component='span' className='item-price-transition'> 
								<CSSTransition
								classNames='item-price-change'
								key={count * prod.price}
								timeout={{enter: 500, exit: 500}}>
									<span>{count * prod.price}</span>
								</CSSTransition>
							</TransitionGroup>
							<span> ₽</span>
						</span>
					</div>

					<div className="order-table-item-count">
						<i className="far fa-plus-square btn-change-count" onClick={() => addToOrder(val)}></i>
						<div className="order-count">
							<span className="count-main">
								<TransitionGroup
								component='span'
								className='item-count-transition'>
									<CSSTransition
									classNames='item-count-transition'
									key={count}
									timeout={{enter: 500, exit: 500}}>
										<span className='count-transition'>{count}</span>
									</CSSTransition>
								</TransitionGroup>
								<span className='counter-table-item'> шт.</span>
							</span>
						</div>
						<i className="far fa-minus-square btn-change-count" onClick={() => removeToOrder(val)}></i>
					</div>
				</div>

				<div className="order-table-item-delete">
					<i className="far fa-trash-alt btn-delete-item" onClick={() => deleteProduct(val)}></i>
				</div>
			</div>
			</CSSTransition>
		)
	}

	return (
		<div className="order-wrapper">
			<div className="order-table-title">
				<h2>Ваш заказ</h2>
				<i className="far fa-window-close reset-order-table" onClick={() => setOrder({})}></i>
			</div>

			<div className="order-table-product">
				<TransitionGroup component='div' className='render-order'>
					{orderIds.map((val, i) => renderOrder(val, i))}
				</TransitionGroup>
			</div>

			<div className="order-table-info">
					<div className="order-table-bottom">
						<div className="order-table-total-price">
							{total <= 0 
							?  <div className='order-table-product-preview'>Здесь будет отображёна информация о заказе. </div>
							: (
								<div className="order-table-total-price">
									<Shipping total={total} openModal={openModal}/>
								</div>
							)}
						</div>
					</div>
			</div>
		</div>
	)
};

export default OrderTable;