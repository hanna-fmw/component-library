import React from 'react'
import { MdClose } from 'react-icons/md'

import '../App.css'

function Alert({ icon, children, onClick, borderColor, bgColor, altText }) {
	return (
		<div className={`Alerts alert border-2 border-solid ${borderColor} ${bgColor} shadow-xl`}>
			<div className='Alerts content'>
				<img src={icon} style={{ width: '25px', heigth: '25px' }} alt={altText} />
				<span>{children}</span>
			</div>
			<button onClick={onClick} className='Alerts close-btn'>
				<MdClose size={20} />
			</button>
		</div>
	)
}

export default Alert
