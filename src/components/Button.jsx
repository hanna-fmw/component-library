import React from 'react'

function Button({ colorPrimary, colorSecondary, label, disabled, size, onClick }) {
	const styles = {
		colorPrimary: {
			primaryDefaultColor:
				'text-white bg-gradient-to-br from-violet-400 via-violet-500 to-violet-600 shadow-xl shadow-violet-400 cursor-pointer transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out',
			primarySuccessColor:
				'text-white bg-gradient-to-br from-green-300 via-green-400 to-green-500 shadow-xl shadow-green-400 cursor-pointer transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out',
			primaryWarningColor:
				'text-white bg-gradient-to-br from-orange-300 via-orange-400 to-orange-600 shadow-xl shadow-orange-400 cursor-pointer transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out',
			primaryDangerColor:
				'text-white bg-gradient-to-br from-pink-300 via-pink-400 to-pink-500 shadow-xl shadow-pink-400 cursor-pointer transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out',
		},
		colorSecondary: {
			secondaryDefaultColor:
				'text-violet-600 bg-gradient-to-br from-violet-300 to violet-400 shadow-xl drop-shadow-violet-400 hover:border-2 hover:border-solid hover:border-violet-500',
			secondarySuccessColor:
				'text-green-600 bg-gradient-to-br from-green-300 to green-400 shadow-xl drop-shadow-green-400 hover:border-2 hover:border-solid hover:border-green-500',
			secondaryWarningColor:
				'text-yellow-500 bg-gradient-to-br from-yellow-300 to yellow-400 hover:border-2 shadow-xl drop-shadow-orange-400 hover:border-solid hover:border-yellow-500',
			secondaryDangerColor:
				'text-pink-600 bg-gradient-to-br from-pink-300 to pink-400 hover:border-2 shadow-xl drop-shadow-pink-400 hover:border-solid hover:border-pink-500',
		},
		size: {
			small: 'w-16 h-16 text-xs rounded-full',
			base: 'w-20 h-20 text-sm rounded-full',
			mediumLarge: 'w-24 h-24 text-base rounded-full',
			large: 'w-28 h-28 text-lg rounded-full',
		},
		disabled: {
			true: 'bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 shadow-xl shadow-gray-400 cursor-not-allowed hover:bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500',
			false: '',
		},
	}

	return (
		<button
			onClick={onClick}
			className={`
			${styles.colorPrimary[colorPrimary]} 					 
			${styles.colorSecondary[colorSecondary]} 			
			${styles.disabled[disabled]}
			${styles.size[size]} 
			rounded-full font-semibold uppercase items-center transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out
			`}>
			{label}
		</button>
	)
}

export default Button
