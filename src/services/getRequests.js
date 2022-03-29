import axios from "axios"
const RANDOM_URL = `https://api.giphy.com/v1/gifs/random?api_key=YShPy78ZwRe7SDsgxUSywlk7dYu1eRlV`
const TRENDING_URL = `https://api.giphy.com/v1/gifs/trending?api_key=YShPy78ZwRe7SDsgxUSywlk7dYu1eRlV`

export function getRandom() {
    const response = axios.get(RANDOM_URL)
    return response
}

export function getTrending() {
   const response = axios.get(TRENDING_URL)
    return response
}