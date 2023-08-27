import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client.js'
import { useNavigate } from 'react-router-dom'

import Nav from '../components/Nav'

import '@picocss/pico/css/pico.min.css'

const EditCreator = (props) => {
	const [creatorName, setCreatorName] = useState('')
	const [imgUrl, setImgUrl] = useState('')
	const [description, setDescription] = useState('')
	const [mediaLink, setMediaLink] = useState('')

  const creatorId = useParams()
	let navigate = useNavigate();

  useEffect(() => {
    const fetchCreatorData = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', creatorId.id)
        .single();
      if (error) {
        console.log('Error fetching creator data:', error);
      } else {
          setCreatorName(data.name);
          setImgUrl(data.imageURL);
          setDescription(data.description);
          setMediaLink(data.url);
      }
    }
    fetchCreatorData();
  }, [])

  const handleSubmit = async (e) => {
		e.preventDefault();

		const { data, error } = await supabase
      .from('creators')
      .update({ 
          name: creatorName, 
          url: mediaLink, 
          description: description, 
          imageURL: imgUrl 
      })
      .eq('id', creatorId.id);
		
		if (error) {
			console.log("Error editing creator:", error);
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
				<input type="submit" value="Submit" />
			</form>
    </div>
  )
}

export default EditCreator