import { useEffect,useState } from "react"
import { fetchTMDB } from "../service/TMDB"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const URL_TRENDING = 'https://api.themoviedb.org/3/trending/movie/week?api_key='

export const useTrendingMovies =()=> {

    const [moviesTrend,setMoviesTrend] = useState([])

    useEffect(()=>{
        const fetchTrendingMovies = async()=>{
            try{
                const resp = await fetchTMDB(`${URL_TRENDING}${API_KEY}`)
                setMoviesTrend(resp.results)
            }catch(error){
                console.error('Fetch ผิดพลาด',error.message)
            }
        }
        fetchTrendingMovies()
    },[])

    return {moviesTrend}
}