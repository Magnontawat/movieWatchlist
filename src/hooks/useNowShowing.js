import { useEffect,useState } from "react"
import { fetchTMDB } from "../service/TMDB"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const URL_TRENDING = 'https://api.themoviedb.org/3/movie/now_playing?api_key='

export const useNowShowing =()=> {

    const [nowShowing,setNowShowing] = useState([])

    useEffect(()=>{
        const fetchNowShowing = async()=>{
            try{
                const resp = await fetchTMDB(`${URL_TRENDING}${API_KEY}`)
                setNowShowing(resp.results)
            }catch(error){
                console.error('Fetch ผิดพลาด',error.message)
            }
        }
        fetchNowShowing()
    },[])

    return {nowShowing}
}