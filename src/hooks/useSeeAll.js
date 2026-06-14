import { useEffect,useState } from "react"
import { fetchTMDB } from "../service/TMDB"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const URL_SEEALL = {
    now_playing : 'https://api.themoviedb.org/3/movie/now_playing',
    upcoming :'https://api.themoviedb.org/3/movie/upcoming' ,
    trending_movies : 'https://api.themoviedb.org/3/trending/movie/week',
    trending_tv : 'https://api.themoviedb.org/3/trending/tv/week',
    top_rated_movies_ever : 'https://api.themoviedb.org/3/movie/top_rated',
    top_rated_tv_ever: 'https://api.themoviedb.org/3/tv/top_rated'
}

export const useSeeAll =(category, page = 1)=> {

    const [isLoading,setIsLoading] = useState(true)
    const [seeAllMovies,setSeeAllMovies] = useState([])

    useEffect(()=>{
        const fetchNowShowing = async()=>{
            try{
                const resp = await fetchTMDB(`${URL_SEEALL[category]}?api_key=${API_KEY}&language=en-US&page=${page}`)
                setSeeAllMovies(resp.results)
            }catch(error){
                console.error('Fetch ผิดพลาด',error.message)
            }finally{
                setIsLoading(false)
            }
        }
        fetchNowShowing()
    },[category,page])

    return {seeAllMovies, isLoading}
}