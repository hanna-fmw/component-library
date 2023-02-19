import React from 'react'
import Card from '../components/Card'
import pinkCocktail from '../assets/cocktails/pinkCocktail.jpg'
import blueCocktail from '../assets/cocktails/blueCocktail.jpg'
import yellowCocktail from '../assets/cocktails/yellowCocktail.jpg'
import greenCocktail from '../assets/cocktails/greenCocktail.jpg'

function Cards() {
	return (
		<div className='container'>
			<h1 className='text-slate-700 font-semibold text-xl mt-20 mb-10 text-center'>Customizable Cards</h1>
			<div className='wrapper flex justify-center gap-12'>
				<Card
					title='Pink Cocktail'
					imgAlt='Pink Cocktail Photo'
					imgSrc={pinkCocktail}
					href='https://www.liquor.com/recipes/cosmopolitan/'
					bgColor='#DD3B6A'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum porro ducimus, dolores quos inventore, reiciendis sint sit qui
					repellat enim quaerat.
				</Card>
				<Card
					title='Blue Cocktail'
					imgAlt='Blue Cocktail Photo'
					imgSrc={blueCocktail}
					href='https://www.thespruceeats.com/blue-margarita-recipe-760849/'
					bgColor='#00B4D3'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum porro ducimus, dolores quos inventore, reiciendis sint sit qui
					repellat enim quaerat.
				</Card>
				<Card
					title='Yellow Cocktail'
					imgAlt='Yellow Cocktail Photo'
					imgSrc={yellowCocktail}
					href='https://mybartender.com/drinks/yellow-cocktails/'
					bgColor='#FC9A03'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum porro ducimus, dolores quos inventore, reiciendis sint sit qui
					repellat enim quaerat.
				</Card>
				<Card
					title='Green Cocktail'
					imgAlt='Green Cocktail Photo'
					imgSrc={greenCocktail}
					href='https://www.acouplecooks.com/green-cocktails/'
					bgColor='#4CB414'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum porro ducimus, dolores quos inventore, reiciendis sint sit qui
					repellat enim quaerat.
				</Card>
			</div>
		</div>
	)
}

export default Cards
