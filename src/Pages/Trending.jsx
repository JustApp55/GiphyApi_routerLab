import '../App.css';
import {getTrending} from '../services/getRequests'
import { useState, useEffect } from 'react'

export default function Trending() {
    // save api response into state variable
const [trendingGif, setTrendingGif] = useState([])


useEffect(() => {
    getTrending()
    .then(res => setTrendingGif(res.data.data))
}, [])

console.log(trendingGif)

  return (
            <div className="gif">
                <h1>Trending GIFs</h1>
                <ul className="map">
                    {trendingGif.map((trend) => {

                return (
                        <li>
                        <img src={trend.images.downsized_large.url} />
                    </li>)
                         
                    })}
                   
                </ul>
            </div>
        )
}