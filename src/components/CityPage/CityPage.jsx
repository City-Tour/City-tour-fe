import React, { useEffect, useContext} from 'react'

const CityPage = props => {

useEffect(()=>{
    const city_id = props.match.params.id
    //Make Axios call with city_id to retrieve the packages per city
},[props.match.params.id])
    
    return ( 
        <div className='city-wrapper'>            
        </div>
     );
}
 
export default CityPage;
