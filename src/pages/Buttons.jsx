import Button from '../components/Button'

function Buttons() {
	function handleClick() {
		alert('Hello World!')
	}
	return (
		<>
			<h1 className='text-slate-700 font-semibold text-xl mb-10 text-center'>Customizable Buttons</h1>
			<div className='w-screen flex flex-col items-center justify-center mb-20'>
				<div className='flex justify-center items-center gap-5 mb-5'>
					<h2 className='text-slate-700 font-semibold text-sm'>Primary</h2>
					<div>
						<Button onClick={handleClick} label='disabled' size='small' disabled='true' />
					</div>
					<div>
						<Button onClick={handleClick} label='default' colorPrimary='primaryDefaultColor' size='small' />
					</div>
					<div>
						<Button onClick={handleClick} label='success' colorPrimary='primarySuccessColor' size='base' />
					</div>
					<div>
						<Button onClick={handleClick} label='warning' colorPrimary='primaryWarningColor' size='mediumLarge' />
					</div>
					<div>
						<Button onClick={handleClick} label='danger' colorPrimary='primaryDangerColor' size='large' />
					</div>
				</div>

				<div className='flex justify-center items-center gap-5'>
					<h2 className='text-slate-700 font-semibold text-sm'>Secondary</h2>
					<div>
						<Button label='disabled' size='small' disabled='true' />
					</div>
					<div>
						<Button onClick={handleClick} label='default' colorSecondary='secondaryDefaultColor' size='small' />
					</div>
					<div>
						<Button onClick={handleClick} label='success' colorSecondary='secondarySuccessColor' size='base' />
					</div>
					<div>
						<Button onClick={handleClick} label='warning' colorSecondary='secondaryWarningColor' size='mediumLarge' />
					</div>
					<div>
						<Button onClick={handleClick} label='danger' colorSecondary='secondaryDangerColor' size='large' />
					</div>
				</div>
			</div>
		</>
	)
}

export default Buttons
