import { useEffect, useState } from "react"
import { fetchTMDB } from "../service/TMDB"
import { fetchOMDB } from "./../service/OMDB"


const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const API_KEY_OMDB = import.meta.env.VITE_OMDB_API_KEY

export const useDetailMovies = (id) =>{

    const [data,setData] = useState({})
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        const fetchDetailMovies = async()=>{
            try{
                const respTMDB = await fetchTMDB(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
                let respOMDB = null
                if(respTMDB.imdb_id){
                    const respOMDBrate = await fetchOMDB(`https://www.omdbapi.com/?i=${respTMDB.imdb_id}&apikey=${API_KEY_OMDB}`)
                    respOMDB = respOMDBrate.imdbRating 
                }
                const videos = await fetchTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
               
                const urlVideo = videos.results.find((item)=>item.type === 'Trailer' && item.site === "YouTube")
               
                const keyForVideo = urlVideo.key ?? null
                
                setData({respTMDB,respOMDB,keyForVideo})
            }catch(error){
                console.log("Fetch Error...",error.message)
            }
            finally{
                setIsLoading(false)
            }
        }
        fetchDetailMovies()
    },[id])
    return [data,isLoading]
}