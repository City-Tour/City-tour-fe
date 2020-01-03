import React, { useEffect, useContext, useState} from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

const CityPage = props => {
    const [cityPackages, setCityPackages] = useState([])
useEffect(()=>{
    const city_id = props.match.params.id
    //Make Axios call with city_id to retrieve the packages per city
    axiosWithAuth()
    .get(`packages/city/${city_id}`)
    .then (res => {
        setCityPackages(res.data)
        console.log(res.data)
    })
    .catch(err => console.log(err.res))

},[props.match.params.id])
    
    return ( 
        <div className='city-wrapper'>            
        </div>
     );
}
 
export default CityPage;
