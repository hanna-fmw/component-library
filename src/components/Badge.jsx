import React from 'react'

function Badge(props) {
	const { icon, bgColor, children, size, altText } = props

	const styles = {
		size: {
			small: 'w-[50px] h-[50px]',
			big: 'w-[70px] h-[70px]',
		},
	}

	return (
		<div className='relative'>
			<div className={`${bgColor} text-white font-semibold text-xs p-0.5 rounded-md absolute top-[5%] left-[60%]`}>{children}</div>
			<img src={icon} className={`${styles.size[size]}`} alt={altText} />
		</div>
	)
}

export default Badge
