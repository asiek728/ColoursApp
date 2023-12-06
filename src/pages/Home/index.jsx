import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Welcome to the colours app</h1>

      <Link to={`/colours/`}>
        <button>See colours</button>
      </Link>
      <Link to={`/colours/new`}>
        <button>Add new colour</button>
      </Link>
    </>
  )
}

export default Home
