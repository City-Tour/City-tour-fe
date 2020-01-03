import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { axiosWithAuth } from '../../utils/axiosWithAuth'

import './Packages.scss'
import { withRouter } from 'react-router-dom'

const Packages = props => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const package_id = props.match.params.id

    axiosWithAuth()
      .get(`/suggestions/${package_id}`)
      .then(res => {
        setSuggestions(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err.res))
  }, [props.match.params.id])

  return (
    <>
      <div>
        <div className="suggestion-container">
          {suggestions.map(sug => (
            <div className="type-container">
              <h1>{sug.type}</h1>
              <h2>{sug.name}</h2>
              <p className="description">{sug.description}</p>
              <a href={sug.website}>{sug.website}</a>
              <p className="address">{sug.address}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default withRouter(Packages)
