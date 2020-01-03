import React, { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'semantic-ui-react'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import './CityPage.scss'
import nashville from '../assets/Nashville_sunset.jpg'
import sanFrancisco from '../assets/sanfrancisco_sunset.jpg'
import austin from '../assets/Austin_sunset.jpg'

const cities = ['', nashville, sanFrancisco, austin]

const CityPage = props => {
  const [cityPackages, setCityPackages] = useState([])
  useEffect(() => {
    const city_id = props.match.params.id

    //Make Axios call with city_id to retrieve the packages per city
    axiosWithAuth()
      .get(`packages/city/${city_id}`)
      .then(res => {
        setCityPackages(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err.res))
  }, [props.match.params.id])

  console.log(cityPackages)

  return (
    <div className="city-wrapper">
      {cityPackages.map(p => (
        <div key={p.package_id} className="city-packages">
          <h1>{p.name}</h1>
          <p>{p.description}</p>
          <p>Package Type: {p.type}</p>
          <p>{p.price}</p>
          <Button size="massive" color="blue">
            <Link className="button-text" to={`/packages/${p.package_id}`}>
              View Package
            </Link>
          </Button>
        </div>
      ))}
    </div>
  )
}

export default CityPage
