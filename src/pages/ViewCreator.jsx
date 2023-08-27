import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { supabase } from '../client.js'
import { useParams } from 'react-router-dom'
import youtubeLogo from '../assets/YouTube.png'

import '../App.css'
import '@picocss/pico/css/pico.min.css'

const ViewCreator = (props) => {
  const [creatorData, setCreatorData] = useState(null);

  const creatorId = useParams()

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
        setCreatorData(data);
      }
    }
    fetchCreatorData();
  }, [])

  return (
    <div>
      <Nav />
      <div class="container">
        {creatorData && (
          <div class="shadow grid">
            <div class="card-body">
              <img src={creatorData.imageURL} />
            </div>
            <div class="card-body">
              <h3 class="card-title">{creatorData.name} </h3>
              <div className="flex-center">
                <div>
                  <img className="yt-icon" src={youtubeLogo} />
                  <a href={creatorData.url}>{creatorData.url}</a>
                </div>
              </div>
              <p class="card-text">{creatorData.description}</p>
              <div class="grid">
                <a href="#" role="button" class="secondary">Edit</a>
                <a href="#" role="button" className="delete-button">Delete</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ViewCreator