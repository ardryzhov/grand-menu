import React from 'react';

import './_shipping.scss';

const Shipping = ({total, openModal}) => {
	const shipping = (total > 0 && total < 900) ? 350 : 1;

	return (
		<div className="shipment-total">
			<div className="shipment-total-price">
				<span><span className="total-p">Общая цена заказа: </span>{total} ₽</span>

				<span><span className="shipping">Стоимость доставки: </span>{shipping} ₽</span>

				<span className="delivery-desc"> {total < 900 ? `Закажите ещё на ${900 - total} ₽, и тогда доставка будет стоить всего 1 ₽` : null}</span>
			</div>
			<div className="btn-order"><button onClick={openModal}>Перейти к оформлению заказа</button></div>
		</div>
	)
};

export default Shipping;