import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import Header from './Component/Header';
import Accordion from './Component/Accordion';
import OrderTable from './Component/OrderTable';
import Modal from './Component/Modal';

function App() {
	const	formRef = useRef();
	const [accordionTickers] = useState([
		{ticker: 'Акция'},
		{ticker: 'Еда'},
		{ticker: 'Напитки'},
		{ticker: 'Закуски'},
	]);
	const [order, setOrder] = useState({});
	const [modal, setModal] = useState(false);
	const [buyerInfo, setBuyerInfo] = useState({
		firstName: '',
		secondName: '',
		phone: '',
		address: '',
	});
	const [orderComment, setOrderComment] = useState({
		comment: ''
	})
	const [orderCreate, setOrderCreate] = useState(false)

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

	const openModal = () => {
		if (!modal) {
			setModal(true);
			let formArr = Array.from(formRef.current.children);
			formArr.forEach(el => {
				const element = el.lastElementChild;
				element.value = '';
				element.classList.remove('invalid-input');
				element.classList.remove('valid-input');
			});
			resetBuyerForm();
		}
	}

	const closeModal = () => {
		if (modal) {
			setModal(false);
			setTimeout(() => setOrderCreate(false), 500)
		};
	}

	const isEmptyObject = (obj) => {
		let x = [];
		for (let j of Object.values(obj)) {
			if (j) x.push(j)
		}
		if (x.length === Object.keys(obj).length) {
			setOrderCreate(true);
			setOrder({})
			console.log(`Информация о заказчике:
			Имя: ${buyerInfo.firstName},
			Фамилия: ${buyerInfo.secondName},
			Телефон: ${buyerInfo.phone},
			Адрес: ${buyerInfo.address}
			`);
			console.log(`Комментарий к заказу: ${orderComment.comment}`);
		} 
	}

	const resetBuyerForm = () => {
		setBuyerInfo({
			firstName: '',
			secondName: '',
			phone: '',
			address: '',
		})
	}

	const validatePhone = (phone) => {
		const regex = /^(\+7|7|8)?[\s]?\(?[489][0-9]{2}\)?[\s]?[0-9]{3}[\s]?[0-9]{2}[\s]?[0-9]{2}$/;
		return regex.test(phone);
	}
	
	const validateWord = (word) => {
		const regex = /^([а-яё]+)$/i;
		return regex.test(word);
	}

	const allFormValidation = (val) => {
		if (val.type === 'text' && validateWord(val.value)) {
			return true
		} else if (val.type === 'tel' && validatePhone(val.value)) {
			return true;
		} else {
			return false
		}
	}

	const changeBuyerInfo = (e) => {
		const event = e.target;
		const eventName = event.name;
		if (allFormValidation(event)) {
			event.classList.remove('invalid-input')
			event.classList.add('valid-input')
			setBuyerInfo({...buyerInfo, [`${eventName}`]: event.value})
		} else {
			event.classList.remove('valid-input')
			event.classList.add('invalid-input')
		}
	}

	useEffect(() => {
		const localStorageRef = JSON.parse(localStorage.getItem('order1', order));
		if (localStorageRef) {
			setOrder({...localStorageRef})
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('order1', JSON.stringify(order));
	}, [order])

	useEffect(() => {
		window.addEventListener('keydown', (e) => {
			if (e.code === 'Escape' && modal === false) {
				setModal(false)
			}
		})
	})


	return (
		<div className='app-wrapper'>
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
					<OrderTable
					order={order}
					setOrder={setOrder}
					addToOrder={addToOrder}
					removeToOrder={removeToOrder}
					deleteProduct={deleteProduct}
					openModal={openModal}
					closeModal={closeModal}/>
				</div>

			</main>

			<Modal 
			modal={modal}
			setModal={setModal}
			setOrderCreate={setOrderCreate}>

			{orderCreate ? (
					<>
						<div className="modal__content-title">
							<h2>Заказа оформлен</h2>
							<span className='title-modal-close' onClick={closeModal}><i className="far fa-window-close"></i></span>
						</div>
						<div className="modal__order-info">
							<span>Благодарим за заказ <span className="modal__order-span">{buyerInfo.firstName} {buyerInfo.secondName}</span> . Наш сотрудник свяжется с вами по телефону <span className="modal__order-span">{buyerInfo.phone}</span> в течении 10 минут для уточнения заказа.</span>
						</div>
					</>
				)
				: 
				(
			<>
				<div className="modal__content-title">
					<h2>Оформление заказа</h2>
					<span className='title-modal-close' onClick={closeModal}><i className="far fa-window-close"></i></span>
				</div>

				<div className="modal__content-info">
					<form className="info__inputs" ref={formRef}>
						<div className="input-modal"><label htmlFor="firstName">Имя: </label><input type="text" id='firstName' name='firstName' onChange={(e) => changeBuyerInfo(e)} required/></div>
						<div className="input-modal"><label htmlFor="secondName">Фамилия: </label><input type="text" id='secondName' name='secondName' onChange={(e) => changeBuyerInfo(e)} required/></div>
						<div className="input-modal"><label htmlFor="phone">Телефон: </label><input type="tel" id='phone' name='phone' onChange={(e) => changeBuyerInfo(e)} required/></div>
						<div className="input-modal"><label htmlFor="address">Адрес: </label><input type="text" id='address' name='address' onChange={(e) => changeBuyerInfo(e)} required/></div>
						<div className="comment-modal"><div className="com"><label htmlFor="comment">Комментарий к заказу: </label></div><textarea name="comment" id="comment" onChange={(e) => setOrderComment({comment: e.target.value})}></textarea></div>
					</form>
				</div>

				<div className="modal__btn">
					<button className='btn-modal' type='submit' onClick={() => isEmptyObject(buyerInfo)}>Заказать!</button>
				</div>
			</>
			)}
			</Modal>
		</div>
	)
}

export default App;
