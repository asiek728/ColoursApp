import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import coloursData from '../../data/colours.js'

const Colour = () => {
  const [colours, setColours] = useState([]);

  useEffect(() => {
    const fetchColours = async () => {
      setColours(coloursData)
    }

    fetchColours()
  }, [colours])

  const displayColours = coloursData.map(colour => (
    <div key={colour.id}>
      <Link to={`/colours/${colour.name}`}>
        <div className="colour">{colour.name}</div>
      </Link>
    </div>
  ))

  return (
    <div>

      <h1>Available Colours:</h1>
      {displayColours}

    </div>
  );
}

export default Colour
