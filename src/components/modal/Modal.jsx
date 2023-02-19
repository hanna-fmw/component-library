import './Modal.css'
import React, { useState } from 'react'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'
import ModalContent from './ModalContent'
import ModalOpenBtn from './ModalOpenBtn'
import profilePicture from '../../assets/modals/profilePicture.png'

function Modal() {
	const [isOpen, setIsOpen] = useState(false)
	const [isShown, setIsShown] = useState(false)

	if (isOpen) {
		document.body.classList.add('active-modal')
	} else {
		document.body.classList.remove('active-modal')
	}

	if (isShown) {
		document.body.classList.add('active-modal')
	} else {
		document.body.classList.remove('active-modal')
	}

	return (
		<>
			<h1 className='text-slate-700 font-semibold text-xl mt-20 mb-10mt-20 text-center'>Customizable Modals</h1>
			<div className='container flex justify-around'>
				<div>
					<ModalOpenBtn show={() => setIsOpen(true)} btnTxt='Open Modal (small)' />

					{isOpen && (
						<div className='modal'>
							<div onClick={() => setIsOpen(false)} className='overlay'></div>

							<ModalContent size='small'>
								<ModalHeader title='Upload your profile picture' />
								<ModalBody imgSrc={profilePicture} imgAlt='Profile Picture'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam assumenda nemo culpa eaque animi. Perspiciatis quaerat
									quasi ab blanditiis.'
								</ModalBody>
								<ModalFooter
									onClose={() => setIsOpen(false)}
									btn1Txt='Cancel'
									btn2Txt='Continue'
									btn1Color='bg-gradient-to-r from-red-500 via-red-600 to-red-700'
									btn2Color='bg-gradient-to-r from-green-600 via-green-700 to-green-900'
									href='#'
								/>
							</ModalContent>
						</div>
					)}
				</div>

				<div>
					<ModalOpenBtn show={() => setIsShown(true)} btnTxt='Open Modal (large)' />

					{isShown && (
						<div className='modal'>
							<div onClick={() => setIsShown(false)} className='overlay'></div>

							<ModalContent size='large'>
								<ModalHeader title='Sign up!' />
								<ModalBody imgSrc=''>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam assumenda nemo culpa eaque animi. Perspiciatis quaerat
									quasi ab blanditiis.'
								</ModalBody>
								<ModalFooter
									onClose={() => setIsShown(false)}
									btn1Txt='Maybe later'
									btn2Txt='Sign up'
									btn1Color='bg-gradient-to-r from-gray-600 via-gray-700 to-black'
									btn2Color='bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700'
									href='https://www.google.com'
								/>
							</ModalContent>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default Modal
