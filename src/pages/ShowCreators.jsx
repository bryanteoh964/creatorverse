import React, { useState, useEffect } from 'react'
import { supabase } from '../client.js'

import Card from '../components/Card.jsx'
import Nav from '../components/Nav.jsx'

async function fetchUsers() {
	const { data, error } = await supabase.from('creators').select("*");

	if (error) {
		console.log("Error fetching users:", error);
		return [];
	}

	return data || [];
}

const ShowCreators = () => {
	const [creators, setCreators] = useState([]);
	const prop1 = {
		name: "Mr.Beast",
		url: "https://www.youtube.com/user/MrBeast6000",
		description: "Jimmy Donaldson (born May 7, 1998), more commonly known by his online alias MrBeast, is an American YouTuber notable for his expensive stunts and philanthropy. He has been credited with pioneering a genre of YouTube videos that center on expensive stunts. He is also the co-creator of Team Trees, a fundraiser for the Arbor Day Foundation, which has raised over $22 million.",
		imageURL: "https://e1.pxfuel.com/desktop-wallpaper/23/31/desktop-wallpaper-mrbeast-logo-with-text-png-mr-beast-logo.jpg"
	}

	useEffect(() => {
		async function getCreators() {
			const data = await fetchUsers();
			setCreators(data);
		}
		getCreators();
	}, []);

	return (
		<div>
			<Nav />
			{/* <div class="grid">
				<Card {... prop1}/>
				<Card />
			</div> */}
			<div>
				<h2>Creators List:</h2>
				<ul class="grid">
					{creators.map(creator => (
						<div>
							<Card 
								name={creator.name}
								url={creator.url}
								description={creator.description}
								imageURL={creator.imageURL}
							/>
						</div>
					))}
				</ul>
			</div>
		</div>
	)
}

export default ShowCreators