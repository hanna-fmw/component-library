function Card({ href, children, title, imgAlt, imgSrc, bgColor }) {
	return (
		<div className='flex flex-col rounded-lg shadow-xl w-[250px]'>
			<div>
				<img src={imgSrc} className='rounded-lg' style={{ width: '250px', height: '300px' }} alt={imgAlt} />
			</div>
			<div className='p-3'>
				<h2>{title}</h2>
				<p className='mb-4'>{children}</p>

				<button className='min-w-fit text-white text-sm font-semibold rounded-md px-2 py-1' style={{ backgroundColor: `${bgColor}` }}>
					<a href={href}>Recipe</a>
				</button>
			</div>
		</div>
	)
}

export default Card
