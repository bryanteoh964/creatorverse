import React, { useState } from 'react'
import { supabase } from '../client.js'
import { useNavigate } from 'react-router-dom'

import Nav from '../components/Nav'

import '@picocss/pico/css/pico.min.css'

const AddCreator = () => {
	const [creatorName, setCreatorName] = useState('')
	const [imgUrl, setImgUrl] = useState('')
	const [description, setDescription] = useState('')
	const [mediaLink, setMediaLink] = useState('')
	
	let navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { data, error } = await supabase
			.from('creators')
			.insert([{ name: creatorName, url: mediaLink, description: description, imageURL: imgUrl }]);
		
		if (error) {
			console.log("Error inserting creator:", error);
		} else {
			console.log("Successfully inserted creator:", data);
            setCreatorName('');
            setImgUrl('');
            setDescription('');
            setMediaLink('');
			let path = `/`;
			navigate(path)
		}
	}

	return (
		<div>
			<Nav />
			<h2>Enter a New Creator!!</h2>
			<form onSubmit={ handleSubmit }>
				<fieldset>
					<label>
						Creator Name:
						<input 
							name="creator_name"
							placeholder="Enter Creator Name"
                            value={creatorName}
                            onChange={(e) => setCreatorName(e.target.value)}
						/>
					</label>
					<label>
						Image URL:
						<input 
							name="img_url"
							placeholder="Provide link to an image representative of your creator"
                            value={imgUrl}
                            onChange={(e) => setImgUrl(e.target.value)}
						/>
					</label>
					<label>
						Description:
						<textarea
							name="description"
							placeholder="Enter a description for your creator"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
						>
						</textarea>
					</label>
					<label>
						Social Media Link:
						<input 
							name="media_link"
							placeholder="Provide link for your creator"
                            value={mediaLink}
                            onChange={(e) => setMediaLink(e.target.value)}
						/>
					</label>
				</fieldset>
				<input type="submit" value="Submit"/>
			</form>
		</div>
	)
}

export default AddCreator