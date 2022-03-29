import {getRandom} from '../services/getRequests.js'
import { useState, useEffect } from 'react'

export default function Home() {
        // save api response into state variable
    const [randomGif, setRandomGif] = useState([])
    

    useEffect(() => {
        getRandom()
        .then(res => setRandomGif(res.data.data.images.downsized_large.url))
    }, [])
   
    console.log(randomGif)

    const changeGif = () => {
            getRandom ()
            .then(res => setRandomGif(res.data.data.images.downsized_large.url))
        }

    return (
        <div>
            <img src={randomGif} id="image"/> <br/>
            <input type="button" onClick={changeGif} value="changeGif" id="clik"></input>
        </div>
    )
}

