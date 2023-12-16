import React, { useState, useEffect } from 'react';
import Hero from "./Hero.jsx"
import styles from "./Products.module.css";

interface product {
		id: string;
		name: string;
		img: string;
		
}
type ProductsProp = {
		heroes : heroes[];
}

export default function Products(props: ProductsProp) {
	console.log(props.heroes)
	const heroes = props.heroes;
	    return (
		        <div >
		                {
			                heroes
						.filter(hero => hero.id === 4)
						.map((hero) => (
			                    		<Hero key={hero.id} hero={hero}/>
				                	))
				            	}
	            	</div>
		        )
}
