import React from 'react'
import Badge from '../components/Badge'
import whatsappIcon from '../assets/badges/whatsAppLogo.png'
import InstagramIcon from '../assets/badges/instagramLogo.png'
import SkypeIcon from '../assets/badges/skypeLogo.svg.png'

function Badges() {
	return (
		<>
			<h1 className='text-slate-700 font-semibold text-xl mt-20 mb-10 text-center'>Customizable Badges</h1>
			<div className='container'>
				<div className='relative flex justify-center gap-20'>
					<Badge icon={whatsappIcon} size='small' bgColor='bg-orange-500' altText='Whats App Logo'>
						#missed
					</Badge>
					<Badge icon={InstagramIcon} size='big' bgColor='bg-violet-700' altText='Instagram Logo'>
						images
					</Badge>
					<Badge icon={SkypeIcon} size='small' bgColor='bg-black' altText='Skype Logo'>
						calls
					</Badge>
				</div>
			</div>
		</>
	)
}

export default Badges
