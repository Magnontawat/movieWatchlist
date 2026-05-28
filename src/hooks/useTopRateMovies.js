import { useEffect,useState } from "react"
import { fetchTMDB } from "../service/TMDB"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const URL_TRENDING = 'https://api.themoviedb.org/3/movie/top_rated?api_key='

export const useTopRateMovies =()=> {

    const [topRateMovies,setTopRateMovies] = useState([])

    useEffect(()=>{
        const fetchNowShowing = async()=>{
            try{
                const resp = await fetchTMDB(`${URL_TRENDING}${API_KEY}`)
                setTopRateMovies(resp.results)
            }catch(error){
                console.error('Fetch ผิดพลาด',error.message)
            }
        }
        fetchNowShowing()
    },[])
    
    return {topRateMovies}
}