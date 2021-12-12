import React from 'react';
import icon from '../../img/icon-header.png'
import './_Header.scss';

const Header = () => {
	return (
		<div className="header-wrap">
			<div className="header">
			<div className="header-logo">
				<div className="header-logo-img">
					<img src={icon} alt="icon" />
				</div>
				<div className="header-logo-title">
					<span>Grand</span><br />
					<span>Menu</span>
				</div>
			</div>

			<div className="header-descr">
				<span>Сделайте заказ сейчас, и мы привезём его в течении 60 минут, иначе бесплатная доставка</span>
			</div>
			</div>
		</div>
	)
};

export default Header;