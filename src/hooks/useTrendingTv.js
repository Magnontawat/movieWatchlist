import { useEffect,useState } from "react"
import { fetchTMDB } from "../service/TMDB"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const URL_TRENDINGTV = 'https://api.themoviedb.org/3/trending/tv/week?api_key='

export const useTrendingTv =()=> {

    const [tvTrending,setTvTrending] = useState([])

    useEffect(()=>{
        const fetchTrendingTv = async()=>{
            try{
                const resp = await fetchTMDB(`${URL_TRENDINGTV}${API_KEY}`)
                setTvTrending(resp.results)
            }catch(error){
                console.error('Fetch ผิดพลาด',error.message)
            }
        }
        fetchTrendingTv()
    },[])

    return {tvTrending}
}