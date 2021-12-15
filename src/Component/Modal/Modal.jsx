import React from 'react';

import './_modal.scss';

const Modal = ({modal, setModal, setOrderCreate, children}) => {
	return (
		<div className={modal ? 'modal-wrapper active-modal' : 'modal-wrapper'} onClick={() => { setModal(false);
			setTimeout(() => {
				setOrderCreate(false)
			}, 500)
			}}>
				<div className={modal ? 'modal__content active-modal-content' : 'modal__content'} onClick={(e) => e.stopPropagation()}>
					{children}
				</div>
			</div>
	)
};

export default Modal;