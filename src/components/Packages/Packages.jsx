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
        <h1>Suggestions</h1>
        <div>
          {suggestions.map(sug => (
            <div>
            <h1>{sug.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default withRouter(Packages)
