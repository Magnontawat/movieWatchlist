import { useEffect,useState } from "react"
import { fetchTMDB } from "../service/TMDB"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const URL_TRENDING = 'https://api.themoviedb.org/3/movie/upcoming?api_key='

export const useUpComing =()=> {

    const [upComing,setUpComing] = useState([])

    useEffect(()=>{
        const fetchUseUpComing = async()=>{
            try{
                const resp = await fetchTMDB(`${URL_TRENDING}${API_KEY}`)
                setUpComing(resp.results)
            }catch(error){
                console.error('Fetch ผิดพลาด',error.message)
            }
        }
        fetchUseUpComing()
    },[])
    
    return {upComing}
}