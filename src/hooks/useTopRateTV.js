import { useEffect,useState } from "react"
import { fetchTMDB } from "../service/TMDB"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const URL_TRENDING = 'https://api.themoviedb.org/3/tv/top_rated?api_key='

export const useTopRateTV =()=> {

    const [topRateTV,setTopRateTV] = useState([])

    useEffect(()=>{
        const fetchTopRateTV = async()=>{
            try{
                const resp = await fetchTMDB(`${URL_TRENDING}${API_KEY}`)
                setTopRateTV(resp.results)
            }catch(error){
                console.error('Fetch ผิดพลาด',error.message)
            }
        }
        fetchTopRateTV()
    },[])
    
    return {topRateTV}
}