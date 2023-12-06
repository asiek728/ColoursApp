import React from 'react'
import { useParams } from 'react-router-dom'
import './style.css'

const ColourItem = () => {
  const { colour } = useParams()

  return (
    <div>
      <h1>{colour}</h1>
      <div className="colourBox" 
            style={{
              backgroundColor: colour
            }}
            >
      </div>
    </div>
  );
}

export default ColourItem
