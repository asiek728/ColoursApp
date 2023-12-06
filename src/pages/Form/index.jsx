import React, { useState, useEffect } from 'react'
import coloursData from '../../data/colours.js'

const Colour = () => {
  const [inputText, setInputText] = useState('');
  const [colours, setColours] = useState([]);

  useEffect(() => {
    const fetchColours = async () => {
      setColours(coloursData)
    }

    fetchColours()
  }, [colours])


  const updateInput = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
        setColours([...colours, { id: 10, name: inputText}])
        setInputText('')  }

  return (
    <div>
      <h1> Add new colour:</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter colour name:</label>
        <input type="text" id="name"
          value={inputText}
          onChange={updateInput}
        />
        <input type="submit" value="Add" />
      </form>

    </div>
  );
}

export default Colour
