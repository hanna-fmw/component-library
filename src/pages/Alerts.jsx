import '../App.css'
import Alert from '../components/Alert'
import check from '../assets/alerts/check.png'
import alert from '../assets/alerts/alert.png'
import warning from '../assets/alerts/warning.png'
import info from '../assets/alerts/info.png'
import { useState } from 'react'

function Alerts() {
	const [isOpen, setIsOpen] = useState(true)
	function onDismiss() {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<h1 className='text-slate-700 font-semibold text-xl mt-20 mb-10mt-20 text-center'>Customizable Alerts</h1>
			<div className='Alerts container'>
				<div className='Alerts wrapper'>
					{isOpen ? (
						<>
							{/* icon, children, onClick, borderColor, bgColor */}
							<Alert icon={info} onClick={onDismiss} borderColor='border-blue-300' bgColor='bg-blue-100' altText='info symbol'>
								Info
							</Alert>
							<Alert icon={check} onClick={onDismiss} borderColor='border-green-300' bgColor='bg-green-100' altText='check symbol'>
								Success
							</Alert>
							<Alert icon={alert} onClick={onDismiss} borderColor='border-yellow-300' bgColor='bg-yellow-100' altText='alert symbol'>
								Alert
							</Alert>
							<Alert icon={warning} onClick={onDismiss} borderColor='border-red-400' bgColor='bg-red-100' altText='warning symbol'>
								Warning
							</Alert>
						</>
					) : (
						<button onClick={onDismiss} className='Alerts open-btn'>
							Show Alerts
						</button>
					)}
					<footer className='Alerts footer'>
						Credits:
						<a href='https://www.flaticon.com/free-icons/tick' title='tick icons'>
							Tick icons created by Alfredo Hernandez - Flaticon
						</a>
					</footer>
				</div>
			</div>
		</>
	)
}

export default Alerts
