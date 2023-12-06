import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Colour = () => {
  const [colours, setColours] = useState([]);
  const coloursData = [ {id: 1, name: "green"}, {id: 2, name: "blue"}, {id: 3, name: "red"}, {id: 4, name: "yellow"}, {id: 5, name: "pink"}, {id: 6, name: "purple"}, {id: 7, name: "black"}, ]


  useEffect(() => {
    const fetchColours = async () => {
      setColours(coloursData)
    }

    fetchColours()
  }, [])

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
