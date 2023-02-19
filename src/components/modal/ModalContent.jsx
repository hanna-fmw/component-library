import React from 'react'

function ModalContent({ size, children, txtColor, bgColor }) {
	const style = {
		small: 'w-[300px]',
		base: 'w-[600px]',
		large: 'w-[900px]',
	}
	return <div className={`modal-content text-sm ${style[size]}`}>{children}</div>
}

export default ModalContent
