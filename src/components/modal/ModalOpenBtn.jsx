import React from 'react'

function ModalOpenBtn({ show, btnTxt }) {
	return (
		<button className='btn-modal' onClick={show}>
			{btnTxt}
		</button>
	)
}

export default ModalOpenBtn
