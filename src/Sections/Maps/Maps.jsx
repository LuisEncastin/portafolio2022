import React from 'react'

// maps
import GoogleMaps from 'simple-react-google-maps';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Maps = () => {
  return (
    <>
      <div className='container'>
        <GoogleMaps
        style={{heigth:'500px', width: '100%'}}
        zoom={10}
        // center={{
        //   lat:,
        //   lng:,
        // }}
        />
      </div>
    </>
  )
}

export default Maps