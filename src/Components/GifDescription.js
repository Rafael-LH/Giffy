import React, { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import { getOneGif } from '../Services/getGifs'
import Loader from './Loader'

const GifDescription = (props) => {
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const getFetch = async () => {
      const { key } = props.params
      const result = await getOneGif(key);
      setData(result)
      setLoader(false)
    }
    if (props.params) getFetch()
  }, [props.params])

  return (
    loader ? (
      <Loader />
    ) : (
        <div className="container-gif-description">
          <div className="container-btn-back">
            <button type='button' onClick={() => setLocation('/')}>Regresar</button>
          </div>
          <div className="container-gif-description__image">
            <img src={data.images.downsized_large.url} alt={data.title} />
          </div>
          <div className="container-gif-description__desc">
            <h1>{data.title}</h1>
          </div>
        </div>
      )
  )
}
export default GifDescription