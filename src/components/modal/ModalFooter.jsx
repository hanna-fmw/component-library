import React from 'react'

function ModalFooter({ onClose, href, btn1Txt, btn2Txt, btn1Color, btn2Color }) {
	return (
		<div className='gap-4 flex justify-end text-white text-center mt-5'>
			<button onClick={onClose}>
				<span className={`${btn1Color} rounded-lg text-sm px-2 py-1.5`}>{btn1Txt}</span>
			</button>
			<button>
				<a href={href} className={`${btn2Color} rounded-lg text-sm px-2 py-1.5`}>
					{btn2Txt}
				</a>
			</button>
		</div>
	)
}

export default ModalFooter
