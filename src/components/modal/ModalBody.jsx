import React from 'react'

function ModalBody({ children, imgSrc, imgAlt }) {
	return (
		<>
			<img src={imgSrc} alt={imgAlt} />

			<p>{children}</p>
		</>
	)
}

export default ModalBody
